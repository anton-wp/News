import Vue from 'vue'

import Editor from '../components/editor/Editor';
import VuejsClipper from 'vuejs-clipper';

Vue.component('editor', Editor)

Vue.use(VuejsClipper, {
	components: {
		clipperBasic: true,
		clipperPreview: true
	}
})
