<script setup>
import { ref, onMounted } from 'vue'
import useDemoStore from '../store/modules/demo'
import { storeToRefs } from 'pinia'

const demoStore = useDemoStore()
const { counter } = storeToRefs(demoStore)


onMounted(() => {
    console.log(`counter 初始值 ${counter.value}。`)
})
</script>
<template>
    <h1>
        首頁
    </h1>
    <h3>counter: {{ counter }}</h3>
    <button @click="demoStore.increment" class="border">Increment</button>
</template>
