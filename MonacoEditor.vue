<script setup lang="ts">
import { nextTick, onMounted, ref, defineProps } from 'vue';
import { editor as monacoEditor } from 'monaco-editor/esm/vs/editor/editor.api';

const props = defineProps<{
  onChange?: (value: string) => any;
  initialValue?: string;
  config?: monacoEditor.IStandaloneEditorConstructionOptions;
}>();

const container = ref<null | HTMLElement>(null);

onMounted(() => {
  nextTick(() => {
    const editor = monacoEditor.create(container.value!, {
      value: props.initialValue,
      ...props.config
    });
    editor.onDidChangeModelContent(() => {
      (props.onChange || (() => {}))(editor.getValue());
    });
  });
});
</script>

<template>
  <div id="container" ref="container" style="height: 100%"></div>
</template>
