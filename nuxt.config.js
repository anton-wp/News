module.exports = {
	mode: 'universal',
	// cache: true,
	/*
	** Headers of the page
	*/
	head: {
		title: 'VERDICT - your opinion on latest news, current events and society developments',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
			{ rel: 'canonical', href: '/' },
			{
				rel: 'stylesheet',
				type: 'text/css',
				href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700&display=swap'
			}
		],
		script: [
			{ src: 'https://cdn.ampproject.org/v0/amp-sidebar-0.1.js', defer: true }
		],
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	/*
	** Global CSS
	*/
	css: [],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		{ src: '~/plugins/jsonld' },
		{ src: '~/plugins/editor', ssr: false },
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		// '@nuxtjs/eslint-module'
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv',
		'@nuxtjs/auth',
		'@nuxtjs/amp',
		'vue-social-sharing/nuxt',
		// ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }]
	],

	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
	axios: {
		proxy: true,
	},

	auth: {
		redirect: {
			logout: '/',
		},
		resetOnError: true,
		strategies: {
			local: {
				endpoints: {
					login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
					user: { url: '/api/profile', method: 'get', propertyName: '' },
					logout: null
				},
			}
		},
		cookie: {
			secure: true
		},
		plugins: [
			{ src: '~/plugins' },
			{ src: '~/plugins/http' },
			{ src: '~/plugins/aToken' }
		]
	},

	proxy: {
		'/api/': {
			target: 'https://dev.api.verdict.org',
			pathRewrite: { '^/api/': '' }
		}
	},
	/**
	 * load info to vuex
	 */
	router: {
		linkActiveClass: 'active-link',
		linkExactActiveClass: 'your-custom-exact-active-link',
	},
	env: {
		baseUrl: process.env.BASE_URL || 'http://localhost:3000'
	},


	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
		}
	}
}
