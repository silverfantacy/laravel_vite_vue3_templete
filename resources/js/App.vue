<template>
    <h1 class="text-3xl font-bold underline">
        How To Install Vue 3 in Laravel 10
    </h1>
    <router-link :to="{ name: 'index' }">
        Home
    </router-link>
    <router-link :to="{ name: 'about' }">
        About
    </router-link>
    <router-view></router-view>
</template>
