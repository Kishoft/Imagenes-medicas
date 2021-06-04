<template>
  <div class="home">
    <file-uploader/>
    <image-box/>
    <drag-and-drop-box/>
  </div>
</template>

<script>
import FileUploader from '@/components/FileUploader.vue'
import DragAndDropBox from '@/components/DragAndDropBox.vue'
import ImageBox from '@/components/ImageBox.vue'
export default {
  name: 'Home',
  components: {
    FileUploader,
    DragAndDropBox,
    ImageBox
  }
}
</script>
