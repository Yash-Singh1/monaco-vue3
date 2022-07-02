# `monaco-vue3`

The Monaco Editor for VueJS v3.

## Install

```sh
npm i monaco-vue3
```

## Usage

```vue
<script setup>
import MonacoEditor from 'monaco-vue3';
</script>

<template>
  <MonacoEditor onChange="onChangeMethod" initialValue="console.log('Hello World!')" />
</template>
```

## Props

### `onChange`

- Type: `Function`

Gets a value of the editor whenever it changes.

### `initialValue`

- Type: `string`

Initial value of the editor.

### `config`

- Type: `Object`

More configuration to be passed to Monaco Editor.
