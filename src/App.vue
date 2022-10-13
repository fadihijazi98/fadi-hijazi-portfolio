<template>
  <div class="flex">
    <!-- custom left fixed header -->
    <header>
      <div>
        <!-- image -->
      </div>
      <nav>
        <router-link to="/" active>Home</router-link>
        <router-link to="/">Experience</router-link>
        <router-link to="/">Skills</router-link>
        <router-link to="/">Get in <br />Touch</router-link>
      </nav>
    </header>
    <!-- content -->
    <main>
      <router-view />
    </main>
  </div>
</template>
