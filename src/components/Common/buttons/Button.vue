<template>
  <button class="border rounded py-1 px-4" v-bind="$attrs">
    <slot/>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    primary: {
      type: Boolean,
      default: false,
    }
  }
})
</script>