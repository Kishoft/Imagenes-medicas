<template>
    <draggable
        v-model="filesUploaded"
        tag="div"
        class="list-group"
        handle=".handle"
        item-key="id"
    >
        <template #item="{ element }">
            <div class="imageUploadedItem glass">
                <i class="handle">
                    <svg id="f1453671-76fd-4d52-8e09-3f9a3cc7a071" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 46">
                        <path d="M22,0,15.6,6.3A1,1,0,0,0,17,7.7l4-3.9V13H0v4H44V13H23V3.8l3.9,3.9a1,1,0,1,0,1.4-1.4L22,0ZM0,21v4H44V21Zm0,8v4H21v9.2l-3.9-3.9a1,1,0,1,0-1.4,1.4L22,46h0l6.4-6.3A1,1,0,0,0,27,38.3l-4,3.9V33H44V29Z"/>
                    </svg>
                </i>
                <span>{{ element.name }} </span>
                <input type="range" min="0" max="100" v-model="element.config.opacity"/>
                <div class="position">
                    <input type="number" placeholder="Izquierda o Derecha" v-model="element.config.left">
                    <input type="number" placeholder="Arriba o Abajo" v-model="element.config.top">
                </div>
                <i class="close" @click="remove(element.id)">
                    <svg id="abf82c46-cc2c-4748-92e3-4f0ede5a0ffd" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 303 303">
                        <path d="M151.5,100.1,251.6,0,303,51.3,202.9,151.5l-51.4-51.4Z"/>
                        <path d="M51.3,303,0,251.6,100.2,151.5l51.3,51.4L51.3,303Z"/>
                        <path d="M303,251.6,251.6,303,151.5,202.8l51.4-51.4Z"/>
                        <path d="M0,51.4,51.4,0,151.6,100.1l-51.3,51.4Z"/>
                        <path d="M151.5,202.9l-51.4-51.4,51.4-51.4,51.4,51.4-51.4,51.4Z"/>
                    </svg>
                </i>
            </div>
        </template>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    components : {
        draggable
    },
    computed : {
		filesUploaded : {
            get(){
                return this.$store.state.filesUploaded
            },
            set(value){
                this.$store.commit('saveSort', value)
            }
        }
    },
    methods : {
        remove(id){
            console.log(id)
            this.$store.commit('removeImage', id)
        }
    }
}
</script>

<style scoped>
    .imageUploadedItem{
        display:flex;
        justify-content: space-between;
        align-items: center;
        width: clamp(200px, 80%, 600px);
        padding: 5px 10px;
        margin: 10px auto;
        border-radius: 5px;
    }
    i{
        display:flex;
        justify-content: center;
        align-items: center;
    }
    i.handle{
        cursor: grab;
    }
    i.close{
        cursor: pointer;
    }
    input[type="range"]{
        cursor: col-resize;
    }
    i > svg{
        width: 24px;
    }
    span{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 15ch;
        margin: auto 5px;
    }
    .position{
        display:flex;
        flex-direction: column;
    }
</style>