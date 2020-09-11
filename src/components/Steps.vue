<template>
  <step-card primary @click="emitInputStepSelected">
    <div class="text-xl flex flex-row items-center">
      <inbox-in-icon class="w-4 h-4 mr-2" />
      入力
    </div>
  </step-card>
  <template
    v-for="(def, idx) in processDefinitions"
    :key="idx"
  >
    <chevron-double-down-icon class="w-5 h-5 mx-auto my-2" />
    <step-card @click="emitProcessStepSelected(idx)">
      <div class="text-xl flex items-center">
        <edit-icon class="w-4 h-4 mr-2" />
        {{ getDefinitionDisplayName(def) }}
      </div>
    </step-card>
  </template>
  <chevron-double-down-icon class="w-5 h-5 mx-auto my-2" />
  <step-card primary>
    <div class="text-xl flex flex-row items-center">
      <save-icon class="w-4 h-4 mr-2" />
      出力
    </div>
  </step-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CSVProcessDefinition } from "../models/CSVProcessDefinition";
import StepCard from "/@/components/Steps/StepCard.vue";
import InboxInIcon from "/@/components/icons/InboxIn.vue";
import EditIcon from "/@/components/icons/Edit.vue";
import ChevronDoubleDown from "./icons/ChevronDoubleDown.vue";
import { SelectedStep } from "./MainExports";
import Save from "./icons/Save.vue";

export default defineComponent({
  emits: {
    select: null,
  },
  props: {
    processDefinitions: {
      type: Array as PropType<CSVProcessDefinition[]>,
      required: true,
    },
  },
  components: {
    "inbox-in-icon": InboxInIcon,
    'edit-icon': EditIcon,
    "chevron-double-down-icon": ChevronDoubleDown,
    'save-icon': Save,
    "step-card": StepCard,
  },
  setup(props, ctx) {
    const getDefinitionDisplayName = (def: CSVProcessDefinition) => {
      switch (def.type) {
        case "sum-by-key":
          return "同じラベルの行を合計してまとめる";
        case "replace-by-regex":
          return "正規表現にマッチするものを置き換え";
      }
    };
    const emitStepSelected = (selectedStep: SelectedStep) =>
      ctx.emit("select", selectedStep);
    const emitInputStepSelected = () => emitStepSelected({ type: "input" });
    const emitProcessStepSelected = (idx: number) =>
      emitStepSelected({ type: "definition", index: idx });
    const emitOutputStepSelected = () => emitStepSelected({ type: "output" });

    return {
      getDefinitionDisplayName,
      emitInputStepSelected,
      emitProcessStepSelected,
      emitOutputStepSelected,
    };
  },
});
</script>