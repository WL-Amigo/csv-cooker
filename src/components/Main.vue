<template>
  <div class="max-h-full flex flex-row">
    <div class="w-full px-4">
      <definition-editor
        :selected="selectedStep"
        v-model:input-def="inputData"
        v-model:process-defs="processDefinitions"
      />
    </div>
    <div class="w-full">
      <steps
        @select="selectedStep = $event"
        :process-definitions="processDefinitions"
      />
    </div>
    <div class="w-full px-4">
      <output-pane @output-as-text="onOutputAsText" :result="resultText" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import { SelectedStep } from "./MainExports";
import { CSVProcessDefinition } from "/@/models/CSVProcessDefinition";
import { CSVInput } from "../models/CSVInput";
import { setupDependencies } from "/@/services/SetupDependencies";
import Steps from "./Steps.vue";
import DefinitionEditor from "./DefinitionEditor.vue";
import Output from "./Output.vue";
import { useDependency } from "../services/UseDependency";
import { CSVProcessorServiceKey } from "../services/ICSVProcessorService";

export default defineComponent({
  components: {
    steps: Steps,
    "definition-editor": DefinitionEditor,
    "output-pane": Output,
  },
  setup() {
    setupDependencies();

    const selectedStep = ref<SelectedStep>({ type: "input" });
    const inputData = ref<CSVInput>({ inputType: "string", data: "" });
    const processDefinitions = ref<CSVProcessDefinition[]>([
      { type: "sum-by-key", keyColumnNum: 0 },
    ]);

    const CSVProcessorService = useDependency(CSVProcessorServiceKey);
    const resultText = ref("");
    const onOutputAsText = async () => {
      resultText.value = await CSVProcessorService.execute({
        input: inputData.value,
        processDefs: processDefinitions.value,
      });
    };

    return {
      selectedStep,
      inputData,
      processDefinitions,
      resultText,
      onOutputAsText,
    };
  },
});
</script>