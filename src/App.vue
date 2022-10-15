<template>
  <div class="lg:grid lg:grid-cols-12 sm:flex sm:flex-col">
    <!-- custom left fixed header -->
    <header class="lg:col-start-1 lg:col-span-2">
      <div class="text-center my-4 lg:hidden">
        <button @click="toggleHiddenClass">
          <img src="@/assets/icons/menu.svg" class="w-12" />
        </button>
      </div>
      <div id="menu-wrapper"
           :class="[hiddenClass, 'pb-8', 'mb-16', 'lg:pb-0', 'lg:mb-0', 'lg:shadow-none',
                    'lg:flex', 'lg:h-screen', 'w-full', 'items-center', 'justify-center']">
        <div>
          <div class="my-8 flex justify-center">
            <img src="@/assets/images/personal-image-05.png" class="w-24 rounded-lg" />
          </div>
          <nav class="flex flex-col items-center gap-6 text-white text-xl font-bold tracking-widest">
            <router-link
              v-for="(item, i) in menuItems"
              :to="item.path" :key="'menu-'+i">
              {{ item.title }}
            </router-link>
          </nav>
        </div>
      </div>
    </header>
    <!-- content -->
    <main class="lg:col-start-3 lg:col-span-10">
      <div class="lg:h-screen text-white lg:grid lg:grid-cols-12">
        <div class="lg:col-start-1 lg:col-span-1"></div>
        <div class="lg:col-start-2 lg:col-span-10 flex items-center">
          <router-view />
        </div>
        <div class="lg:col-start-12 lg:col-span-1"></div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      hiddenClass: {
        "hidden": true
      },
      menuItems: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "Skills",
          path: "/skills",
        },
        {
          title: "Experience",
          path: "/experience",
        },
        {
          title: "Get in Touch",
          path: "/get-in-touch",
        }
      ]
    };
  },
  methods: {
    toggleHiddenClass() {
      this.hiddenClass['hidden'] = !this.hiddenClass['hidden'];
    }
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

.router-link-active {
  @apply border-b-4 border-white p-1
}
</style>
