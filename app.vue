<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
})

import * as mqtt from 'mqtt'

const client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', () => {
  alert(mqtt)
  client.subscribe('presence', (err: any) => {
    if (!err)
      client.publish('presence', 'Hello mqtt')
  })
})


</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
