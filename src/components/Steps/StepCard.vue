<template>
  <div
    class="rounded-sm px-4 py-2 transition-shadow duration-200 shadow-sm hover:shadow-md cursor-pointer"
    v-bind="$attrs"
    :class="customClass"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const bgColorClass = computed<string[]>(() => {
      const isPrimary = props.primary;
      return isPrimary ? ["bg-blue-100"] : [];
    });
    const borderColorClass = computed<string[]>(() => {
      const isSelected = props.selected;
      return isSelected ? ["border-blue-500"] : ["border-gray-500"];
    });
    const borderWidthClass = computed<string[]>(() => {
      const isSelected = props.selected;
      return isSelected ? ["border-2"] : ["border"];
    });

    return {
      customClass: computed(() =>
        bgColorClass.value
          .concat(borderColorClass.value)
          .concat(borderWidthClass.value)
      ),
    };
  },
});
</script>