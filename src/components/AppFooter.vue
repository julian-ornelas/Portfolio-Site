<template>
  <footer
    class="divide-y bg-gradient-to-t from-base-800 from-95% to-transparent px-4 text-gray-100"
  >
    <div
      class="content mx-auto flex flex-col justify-between space-y-8 py-5 pt-16 lg:flex-row lg:space-y-0"
    >
      <div class="lg:w-1/3">
        <div class="flex items-center space-x-2">
          <!-- Can include a nice svg graphic here
           <svg
            class="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
          -->
          <h1 class="self-center text-2xl font-semibold">Julian Ornelas</h1>
        </div>
        <!-- Leave one attribution, delete the other -->

        <span class="text-sm">
          Thank you for visiting my portfolio.
          <br />Here are some useful links:
        </span>
        <br />
        <span name="attribution 1" class="text-xs text-gray-400">
          <a href="https://github.com/ralodev/vuefolio" target="_blank">Made with Vuefolio</a>
        </span>
      </div>
      <div class="grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-4 lg:w-2/3">
        <div class="space-y-3">
          <h2 class="uppercase">Navigation</h2>
          <ul class="space-y-1">
            <li>
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/#experience">Experience</RouterLink>
            </li>
            <li>
              <RouterLink to="/#projects">Projects</RouterLink>
            </li>
            <li>
              <RouterLink to="/#about">About</RouterLink>
            </li>
          </ul>
        </div>
        <div class="space-y-3">
          <h2 class="uppercase">Social Links</h2>
          <ul class="space-y-1">
            <li>
              <a href="https://www.linkedin.com/in/julian-ornelas/" target="_blank">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/julian-ornelas/" target="_blank">GitHub</a>
            </li>
          </ul>
        </div>      
      </div>
    </div>
    <div class="py-3 text-center text-sm">© 2024 Julian Ornelas.</div>
  </footer>
</template>

<script setup lang="ts">
</script>
