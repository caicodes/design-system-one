<script setup lang="ts">
const { data } = await useFetch('/api/pageview')

const time = useTimeAgo(() => data.value?.startAt || 0)
</script>

<template>
  <div text-base-content>
    <span font-500 text-base-content>{{ data?.pageview }}</span>
    page views since
    <span text-base-content>{{ time }}</span>
  </div>
</template>
