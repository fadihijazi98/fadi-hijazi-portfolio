<template>
  <div class="grid grid-cols-12">
    <!-- custom left fixed header -->
    <header class="col-start-1 col-span-2">
      <div class="flex h-screen w-full items-center justify-center">
        <div>
          <div class="my-8 flex justify-center">
            <img src="@/assets/images/personal-image-05.png" class="w-24 rounded-lg" />
          </div>
          <nav class="flex flex-col items-center gap-6 text-white text-xl font-bold tracking-widest">
            <router-link
              v-for="(item, i) in menuItems"
              :to="item.path" :key="'menu-'+i"
              :class="[{'active': item.isActive,}, '']">
              {{ item.title }}
            </router-link>
          </nav>
        </div>
      </div>
    </header>
    <!-- content -->
    <main class="col-start-3 col-span-10">
      <div class="h-screen text-white">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menuItems: [
        {
          title: "Home",
          path: "/home",
          isActive: true
        },
        {
          title: "Skills",
          path: "/skills",
          isActive: false
        },
        {
          title: "Experience",
          path: "/experience",
          isActive: false
        },
        {
          title: "Get in Touch",
          path: "/get-in-touch",
          isActive: false
        }
      ]
    };
  }
};
</script>

<style>
body {
  background: #1e3c72; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.active {
  @apply border-l-4 px-4
}
</style>
