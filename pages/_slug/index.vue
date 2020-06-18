<template>
	<component :is="type" :data="data" :tag="tag" :slug="$route.params.slug" :term="term" :pagination="pagination" v-if="type"/>
</template>

<script>
	import Category from '@/components/layout/Category';
	import Post from '@/components/layout/Post';

	export default {
		components: {
			Post,
			Category
		},
		data() {
			return {
				type: null,
				data: null,
				pagination: null,
				term: null,
				rout: String,
				tag: Boolean
			}
		},
		mounted() {
			// console.log(this.$route.params)
			if(this.$route.params.slug === 'news') {
				console.log(this.rout)
				this.rout = 'posts/query/news'
			} else {
				this.rout = this.$route.params.slug
			}
			this.$http.get(`/api/${this.rout}?limit=12`)
				.then(({ data }) => {
					this.tag = data.type === 'feed' ? false : true;
					this.type = data.type === 'feed' ? 'category' : data.type;
					this.data = data.data;
					this.term = data.term || {name: 'news'};
					this.pagination = data.pagination;
				})
				.catch(error => {
					this.$router.push('/');
				});
		},
	}
</script>


