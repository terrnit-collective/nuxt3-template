<template>
  <div class="flex flex-col w-full h-screen bg-zinc-950 items-center justify-center">
    <div class="mx-auto">
      <h1 class="text-3xl text-blue-400 font-bold">
        Nuxt 3 template
      </h1>
      <ul class="text-white grid grid-cols-2 gap-3 mt-4 *:flex *:flex-col *:items-center *:justify-center">
        <li class=" bg-zinc-900 rounded-md py-6 py-x8 text-center hover:border-zinc-600/60 border-zinc-600/20 border transiton-colors ease-linear duration-150">
          <a href="https://nuxt.com/">
            <IconsNuxtIcon />
          </a>
        </li>
        <li class=" bg-zinc-900 rounded-md py-6 py-x8 text-center hover:border-zinc-600/60 border-zinc-600/20 border transiton-colors ease-linear duration-150">
          <a href="https://www.typescriptlang.org/">
            <IconsTypescriptIcon />
          </a>
        </li>
        <li class=" bg-zinc-900 rounded-md py-6 py-x8 text-center hover:border-zinc-600/60 border-zinc-600/20 border transiton-colors ease-linear duration-150">
          <a href="https://eslint.org/">
            <IconsEslintIcon />
          </a>
        </li>
        <li class=" bg-zinc-900 rounded-md py-6 py-x8 text-center hover:border-zinc-600/60 border-zinc-600/20 border transiton-colors ease-linear duration-150">
          <a href="https://tailwindcss.com/">
            <IconsTailwindCssIcon />
          </a>
        </li>
      </ul>
      <ul class="text-white grid grid-cols-2 gap-3 mt-6 *:flex *:flex-col *:items-center *:justify-center">
        <li class=" bg-zinc-900/20 rounded-md py-2 text-center hover:border-zinc-600/60 border-zinc-600/20 border transiton-colors ease-linear duration-150">
          <a href="https://github.com/TerrniTLLC/nuxt3-template">
            <IconsGithubIcon />
          </a>
        </li>
        <li class=" bg-zinc-900/20 rounded-md py-2 text-center hover:border-zinc-600/60 border-zinc-600/20 border transiton-colors ease-linear duration-150">
          <a href="https://dev.to/terrnitllc/setting-up-a-nuxt-3-project-with-eslint-typescript-and-tailwind-css-5c46">
            <IconsDevToIcon />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
