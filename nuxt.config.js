const axios = require('axios');

export default {
	target: 'static',
	// ssr: 'false',

	// Transition between pages
	pageTransition: 'pages',
	
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		
		title: 'Jennita Photography',
		htmlAttrs: {
			lang: 'nl'
		},
		meta: [
			{ charset: 'UTF-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
			{ hid: 'description', name: 'description', content: '' },
			// { name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', href: '/jf_icon_16.png', sizes: '16x16' },
			{ rel: 'icon', href: '/jf_icon_32.png', sizes: '32x32' },
			{ rel: 'icon', href: '/jf_icon_57.png', sizes: '57x57' },
			{ rel: 'icon', href: '/jf_icon_76.png', sizes: '76x76' },
			{ rel: 'icon', href: '/jf_icon_96.png', sizes: '96x96' },
			{ rel: 'apple-touch-icon', href: '/jf_icon_120.png', sizes: '120x120' },
			{ rel: 'apple-touch-icon', href: '/jf_icon_152.png', sizes: '152x152' },
			{ rel: 'apple-touch-icon', href: '/jf_icon_180.png', sizes: '180x180' },
			{ rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;500;600;700&display=swap' },
			{ rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
			{ rel: 'stylesheet', media: 'print', onload: 'this.onload=null;this.removeAttribute("media");', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;500;600;700&display=swap' },
			{ rel: 'stylesheet', media: 'print', onload: 'this.onload=null;this.removeAttribute("media");', href: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;500;600;700&display=swap' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap' },
		],

		// Google Tag Manager - Configuration
		// __dangerouslyDisableSanitizers: ['script'],
		script: [
		// {
		//   charset: 'utf-8',
		//   type: "text/javascript",
		//   innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		//   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		//   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		//   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		//   })(window,document,'script','dataLayer','GTM-NWX2HBM');`
		// }
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/css/reset.css',
		'~/assets/css/form.css', 
		'~/assets/css/fonts.css', 
		'~/assets/css/general.css', 
		'~/assets/pageTransition.css',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/gtm.js', mode: 'client' },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/sitemap'
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	},


	// Sitemap configuration: https://sitemap.nuxtjs.org/
	sitemap: {
		hostname: 'https://jennitaphotography.nl',
		trailingSlash: true,
		exclude: [
			"/winkelwagen/bedankt"
		],
		defaults: {
			lastmod: new Date(),
		},
		routes: async () => {
			const { data } = await axios.get('https://jennitaphotography.nl/server/json/PhotoCards.json')
			return data.map((item) => `/kaarten/${item.slug}`)
		}
	},
}
