<template>
  <div class="h-screen w-screen flex flex-col">
    <div class="flex-shrink text-center py-2">csv-army-knife</div>
    <div class="flex-grow py-2">
      <main-view />
    </div>
    <div class="flex-shrink py-4 text-center">Brought to you by Amigo (WhiteLuckBringers)</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Main from './components/Main.vue';

export default defineComponent({
  name: 'App',
  components: {
    'main-view': Main
  }
});
</script>
