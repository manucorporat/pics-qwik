import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import type { Image } from "~/routes";

export const useImageInfo = routeLoader$(async ({ params }) => {
  const id = parseInt(params.id, 10);
  const res = await fetch(`https://picsum.photos/id/${id}/info`);
  const json = (await res.json()) as Image;
  return json;
});

export default component$(() => {
  const info = useImageInfo();
  return (
    <>
      <div class="flex w-[80%] max-w-screen-m justify-center gap-10 transition-all mx-auto my-10">
        <div class="flex-1">
          <img
            src={`https://picsum.photos/id/${info.value.id}/500/600.webp`}
            class="rounded-3xl shadow-xl"
            style={{ "view-transition-name": `picture` }}
          />
        </div>
        <div class="flex-1 self-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
          nunc eget ultricies ultricies, nunc nisl ultricies nunc, nec ultricies
          nisl nisl nec nisl. Donec auctor, nunc eget ultricies ultricies, nunc
          nisl ultricies nunc, nec ultricies nisl nisl nec nisl. Donec auctor,
          nunc eget ultricies ultricies, nunc nisl ultricies nunc, nec ultricies
          nisl nisl nec nisl.
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Manu's Pics",
};