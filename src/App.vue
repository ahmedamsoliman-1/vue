<!-- src/App.vue -->

<template>
  <div id="app">
    <DocumentViewer />
  </div>
</template>

<script>
import DocumentViewer from './components/DocumentViewer.vue';

export default {
  name: 'App',
  components: {
    DocumentViewer
  }
};
</script>

<style>
/* Add global styles here */
</style>
