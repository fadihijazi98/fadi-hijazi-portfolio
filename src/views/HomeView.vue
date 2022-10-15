<template>
  <div class="lg:grid lg:grid-cols-10 h-full">
    <div class="flex items-center lg:col-start-1 lg:col-span-6">
      <div class="px-16">
        <div class="flex justify-center lg:justify-start">
          <h1 class="text-4xl lg:text-6xl leading-tight lg:leading-tight font-anton">
            Hey, <br />
            I'm Fadi Hijazi
          </h1>
        </div>
        <p class="text-lg lg:text-2xl py-8">
          A full stack web developer. <br />
          <span class="block py-3">
              I'm a
              <span class="underline">patient</span>,
              <span class="underline">committed</span>,
              <span class="underline">collaborator</span>,
              and <span class="underline">friendly</span> developer
              who you would like to work with.
          </span>
          Designing & coding the solutions, its my game! <br />
          I'm a good choice to work with, so
          <a href="#" class="uppercase text-sky-500 font-bold tracking-wider">
            get in touch
          </a>
          now.
        </p>
        <div class="inline-flex gap-2.5 bg-white px-4 py-2">
          <!-- account links group -->
          <a href="#github" class="">
            <!-- TODO FILL LINK OF GITHUB -->
            <img src="@/assets/icons/github.svg" alt="github icon" class="w-10" />
          </a>
          <a href="#linkedin">
            <!-- TODO FILL LINK OF LINKED-IN -->
            <img src="@/assets/icons/linkedin.svg" alt="linkedin icon" class="w-10" />
          </a>
          <a href="#youtube" class="flex items-center">
            <!-- TODO FILL LINK OF YOUTUBE -->
            <img src="@/assets/icons/youtube.svg" alt="youtube icon" class="w-12" />
          </a>
        </div>
      </div>
    </div>
    <div class="flex items-end justify-center lg:col-start-7 lg:col-span-3 pt-4 lg:pt-0">
      <img
        src="@/assets/images/personal-image-01.png"
        class="w-3/6 lg:w-full"
        alt="my personal image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView"
};
</script>
