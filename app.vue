<template>
  <div class="flex flex-col w-full h-screen bg-zinc-950 items-center justify-center">
    <div class="mx-auto max-w-screen-md w-full">
      <h1 class="text-3xl text-blue-400 font-bold">
        Nuxt 3 template
      </h1>
      <div class="grid grid-cols-2 grid-rows-2 gap-3 mt-12">
        <div class="w-full flex flex-col gap-y-3">
          <ul class="text-white grid grid-cols-2 gap-3 *:flex *:flex-col *:items-center *:justify-center">
            <li class="card">
              <a href="https://nuxt.com/">
                <IconsNuxtIcon />
              </a>
            </li>
            <li class="card">
              <a href="https://www.typescriptlang.org/">
                <IconsTypescriptIcon />
              </a>
            </li>
            <li class="card">
              <a href="https://eslint.org/">
                <IconsEslintIcon />
              </a>
            </li>
            <li class="card">
              <a href="https://tailwindcss.com/">
                <IconsTailwindCssIcon />
              </a>
            </li>
          </ul>
          <ul class="text-white grid grid-cols-2 gap-3 *:flex *:flex-col *:items-center *:justify-center">
            <li class="card">
              <a href="https://github.com/TerrniTLLC/nuxt3-template">
                <IconsGithubIcon />
              </a>
            </li>
            <li class="card">
              <a href="https://dev.to/terrnitllc/setting-up-a-nuxt-3-project-with-eslint-typescript-and-tailwind-css-5c46">
                <IconsDevToIcon />
              </a>
            </li>
          </ul>
        </div>
        <div class="w-full card flex flex-wrap px-4 gap-x-3">
          <UiButton
            variant="default"
          >
            Default
          </UiButton>
          <UiButton
            variant="secondary"
          >
            Secondary
          </UiButton>
          <UiButton
            variant="ghost"
          >
            Ghost
          </UiButton>
          <UiButton
            variant="link"
          >
            Link
          </UiButton>
          <UiButton
            variant="outline"
          >
            Outline
          </UiButton>
          <UiButton
            variant="destructive"
          >
            Destructive
          </UiButton>
          <UiButton
            variant="info"
          >
            Info
          </UiButton>
        </div>
        <div class="w-full text-white items-center h-fit card flex flex-wrap px-4 gap-x-3">
          Themes:
          <div
            class="size-8 bg-zinc-800 rounded-full border border-zinc-600 cursor-pointer hover:bg-zinc-800/60 transition-colors duration-100 ease-linear"
            @click="changeTheme('default')"
          />
          <div
            class="size-8 bg-rose-800 rounded-full border border-rose-600 cursor-pointer hover:bg-rose-800/60 transition-colors duration-100 ease-linear"
            @click="changeTheme('rose')"
          />
          <div
            class="size-8 bg-purple-800 rounded-full border border-purple-600 cursor-pointer hover:bg-purple-800/60 transition-colors duration-100 ease-linear"
            @click="changeTheme('neon')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
 htmlAttrs: {
	'data-theme': 'default'
 }
})
</script>

<style>
.card {
	@apply bg-zinc-900/20 rounded-md py-2 text-center hover:border-zinc-600/60 border-zinc-600/20 border ease-linear duration-150;
}
</style>
