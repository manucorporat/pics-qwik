import { component$ } from "@builder.io/qwik";
import { type DocumentHead, useLocation } from "@builder.io/qwik-city";
import { IMAGES } from "~/pics";

export default component$(() => {
  const loc = useLocation();
  const index = parseInt(loc.params.index);
  const image = IMAGES[index];
  return (
    <>
      <div class="flex w-[80%] max-w-screen-m justify-center gap-10 transition-all mx-auto my-10">
        <div class="flex-1">
          <img
            src={image.image}
            class="rounded-3xl shadow-xl"
            style={{ "view-transition-name": `picture` }}
          />
        </div>
        <div class="flex-1 self-center">{image.message}</div>
      </div>
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Manu's Pics",
};
