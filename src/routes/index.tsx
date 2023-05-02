import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
  Link,
  useLocation,
  routeLoader$,
} from "@builder.io/qwik-city";

export interface Image {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export const useGetImages = routeLoader$(async ({ query }) => {
  const res = await fetch("https://picsum.photos/list", {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
    },
  });
  const random = await query.has("random");
  let json = await res.json();
  if (Array.isArray(json)) {
    if (random) {
      shuffleArray(json);
    } else {
      json = json.slice(900);
    }

    return json.slice(0, 5) as Image[];
  }
  return [];
});

export default component$(() => {
  const loc = useLocation();
  const images = useGetImages();
  return (
    <>
      <div class="flex w-full justify-center my-10 gap-2 transition-all">
        {images.value.map((image) => (
          <Link
            href={`/img/${image.id}/`}
            class={{
              "bg-slate-500 max-w-[15vw] h-[30vw] hover:max-w-[20vw] transition-all":
                true,
              "pic-link": true,
              "pic-prev":
                !loc.isNavigating &&
                loc.prevUrl?.pathname === `/img/${image.id}/`,
            }}
            key={image.id}
          >
            <img
              width="500"
              height="600"
              src={`https://picsum.photos/id/${image.id}/500/600.webp`}
              class="w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>
      <Link
        class="block w-fit m-auto rounded-md border-2 p-3 border-slate-500"
        href="/?random=true"
        reload
      >
        Randomize images
      </Link>
      <div></div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Manu's Pics",
};
