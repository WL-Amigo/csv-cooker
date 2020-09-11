<template>
  <input-edit v-if="selected.type === 'input'" :input-def="inputDef" @update:input-def="$emit('update:inputDef', $event)" />
  <process-definition-edit v-if="selected.type === 'definition'" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CSVInput } from '../models/CSVInput';
import { CSVProcessDefinition } from '../models/CSVProcessDefinition';
import { SelectedStep } from './MainExports';

import Input from './DefinitionEditor/Input.vue';
import ProcessDefinition from './DefinitionEditor/ProcessDefinition.vue';

export default defineComponent({
  emits: {
    'update:inputDef': null,
    'update:processDefs': null,
  },
  props: {
    selected: {
      type: Object as PropType<SelectedStep>,
      required: true,
    },
    inputDef: {
      type: Object as PropType<CSVInput>,
      required: true,
    },
    processDefs: {
      type: Array as PropType<CSVProcessDefinition[]>,
      required: true,
    }
  },
  setup() {
      
    return {};
  },
  components: {
    'input-edit': Input,
    'process-definition-edit': ProcessDefinition,
  }
});
</script>