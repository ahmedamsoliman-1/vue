<template>
  <div>
    <vue-pdf :src="pdfSrc" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import VuePdf from 'vue-pdf';

export default defineComponent({
  name: 'DocumentViewer',
  components: {
    VuePdf
  },
  data() {
    return {
      pdfSrc: '/pdf/example.pdf'  // Adjust the path as per your folder structure
    };
  }
});
</script>

<style scoped>
/* Add scoped styles here */
</style>
