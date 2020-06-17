<template>
	<component :is="type" :data="data" tag :slug="$route.params.slug" :term="term" :pagination="pagination" v-if="type"/>
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
			}
		},
		created() {
			// console.log(this.$route.params)
			this.$http.get(`/api/${this.$route.params.slug}?limit=12`)
				.then(({ data }) => {
					// console.log(data.data)
					this.type = data.type;
					this.data = data.data;
					this.term = data.term;
					this.pagination = data.pagination;
				})
				.catch(error => {
					this.$router.push('/');
				});
		},
	}
</script>


