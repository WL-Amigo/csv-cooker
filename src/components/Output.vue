<template>
  <w-button @click="$emit('output-as-text')">
    テキストとして出力
  </w-button>
  <pre>{{ result }}</pre>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: {
    'output-as-text': null
  },
  props: {
    result: {
      type: String,
      default: '',
    }
  },
  setup() {
    return {};
  }
});
</script>