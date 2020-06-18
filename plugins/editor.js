import Vue from 'vue'

import Editor from '../components/editor/Editor';
import VuejsClipper from 'vuejs-clipper';
import Toasted from 'vue-toasted';

Vue.component('editor', Editor)




Vue.use(VuejsClipper, {
	components: {
		clipperBasic: true,
		clipperPreview: true,
	}
})

let Options = {
	position: 'bottom-center',
	className: 'toastedCustom',
	containerClass: 'containerToastedCustom',
	singleton: true,
	duration: 8000
}

Vue.use(Toasted, Options)

