<template>
	<div id="imageBoxContainer">
		<img v-for="file in filesUploaded" :key="file.id" :src="file.dataURL" :style="{ opacity : file.config.opacity / 100}">
	</div>
</template>

<script>
export default {
	computed : {
		filesUploaded : {
			get(){
				return this.$store.state.filesUploaded
			}
		}
	}
}
</script>

<style>
	#imageBoxContainer{
		width: clamp(360px, 95vw, 1000px);
		position: relative;
		display:grid;
		place-items: center;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		margin: auto;
	}
	#imageBoxContainer > img{
		position: relative;
		grid-row: 1;
		grid-column: 1;
		width: 100%;
		height: 100%;
	}
</style>