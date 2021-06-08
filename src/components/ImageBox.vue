<template>
	<div id="imageBoxContainer">
		<img
		v-for="file in filesUploaded" 
		:key="file.id" 
		:src="file.dataURL" 
		:style="{ opacity : file.config.opacity / 100, top : file.config.top * -1 + 'px', left : file.config.left * -1 + 'px' }"
		>
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
		background: white;
	}
	#imageBoxContainer > img{
		position: relative;
		grid-column: 1;
		grid-row: 1;
		width: 100%;
	}
</style>