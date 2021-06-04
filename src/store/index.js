import { createStore } from 'vuex'

function getDataFromImageFile(file) {
    return new Promise((resolve) => {

        let reader = new FileReader();

        reader.addEventListener('load', (event) => {
            resolve(event.target.result)
        });

        reader.readAsDataURL(file);

    })

}

export default createStore({
	state: {
		filesUploaded: [],
		test : "Otra vez"
	},
	mutations: {
		addImage(state, payload){
			getDataFromImageFile(payload).then(dataURL => {
				state.filesUploaded.push({
					id : Date.now(),
					dataURL : dataURL,
					name : payload.name,
					config : {
						opacity : 50
					}
				})
			})
		},
		removeImage(state, payload){
			state.filesUploaded = state.filesUploaded.filter(value => {
				return payload !== value.id
			})
		},
		saveSort(state, payload){
			state.filesUploaded = payload
			console.log(payload)
		},
		testing(state, payload){
			state.test = payload
		}
	},
	actions: {
	},
	modules: {
	}
})
