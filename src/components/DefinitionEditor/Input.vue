<template>
  <p>入力タイプ: {{ typeDisplayName }}</p>
  <template v-if="inputDef.inputType === 'string'">
    <textarea class="w-full shadow-inner border border-gray-500 mt-2" rows="10" :value="inputDef.data" @input="onDataChanged($event.target.value)" />
  </template>
  <template v-else-if="inputDef.inputType === 'file'">
    <p>マダナイヨー</p>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { CSVInput } from "/@/models/CSVInput";

export default defineComponent({
  emits: {
    'update:inputDef': null,
  },
  props: {
    inputDef: {
      type: Object as PropType<CSVInput>,
      required: true,
    }
  },
  setup(props, ctx) {
    const typeDisplayName = computed(() => {
      const type = props.inputDef.inputType;
      switch (type) {
        case 'string':
          return '文字列'
        case 'file':
          return 'CSVファイル'
      }
    })
    const emitUpdateInputDef = (inputDef: CSVInput) => ctx.emit('update:inputDef', inputDef);
    const onDataChanged = (value: string) => {
      emitUpdateInputDef({
        inputType: "string",
        data: value
      });
    }

    return {
      typeDisplayName,
      onDataChanged,
    }
  }
})
</script>