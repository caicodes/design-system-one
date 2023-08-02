<script setup lang="ts">
const { data } = await useFetch('/api/pageview')

const time = useTimeAgo(() => data.value?.startAt || 0)
</script>

<template>
  <div text-base-content>
    <span text-base-content font-500>{{ data?.pageview }}</span>
    page views since
    <span text-base-content>{{ time }}</span>
  </div>
</template>
