<template>
    <form @submit.prevent="handleImageUpload">
        <label for="fileInput">Seleccionar imágenes</label>
        <input type="file" name="image" id="fileInput" ref="fileUploader" multiple>
        <input type="submit" value="Cargar">
    </form>
</template>

<script>
export default {
    methods: {
        handleImageUpload (){
			for (const file of this.$refs.fileUploader.files) {
                this.$store.commit('addImage',file)
			}
        }
    }
}
</script>

<style>
    form{
        display:flex;
        justify-content: center;
        align-items: center;
        width: clamp(200px, 80%, 500px);
        margin: 2vh auto;
        padding: 10px;
        border-radius: 10px;
        background: #ffffff;
    }
    input[type="file"]{
        display:none;
    }
    input[type="submit"], label{
        cursor: pointer;
        padding: 5px 10px;
        border:1px solid lightblue;
        margin: auto 5px;
        border-radius: 5px;
        background: #ffffff;
    }
</style>