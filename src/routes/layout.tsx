import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <h1 class="text-[6em] mx-auto text-center my-20">
        Manu's Pics
      </h1>
      <main>
        <Slot />
      </main>
    </>
  );
});
