<template>
  <textarea class="w-full shadow-inner border border-gray-500 mt-2" rows="10" :value="value" @input="$emit('input', $event.target.value)" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: {
    'input': null
  },
  props: {
    value: String
  },
  setup(props, ctx) {
    return {

    };
  }
});
</script>