import { component$ } from '@builder.io/qwik';
import { type DocumentHead, Link, useLocation } from '@builder.io/qwik-city';
import { IMAGES } from '~/pics';

export default component$(() => {
  const loc = useLocation();
  return (
    <>
      <div class="flex w-full justify-center m-10 gap-2 transition-all">
        {IMAGES.map((image, index) => (
          <Link
            href={`/img/${index}/`}
            class={{
              "pic-link": true,
              "pic-prev": !loc.isNavigating && loc.prevUrl?.pathname === `/img/${index}/`
            }}
            key={index}
          >
            <img
              src={image.image}
              class="max-w-[15em] h-[30em] object-cover hover:max-w-[20em] transition-all"
            />
          </Link>
        ))}
      </div>
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Manu\'s Pics',
};
