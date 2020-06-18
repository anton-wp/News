<template>
	<category :slug="$route.params.slug" :data="data" :term="term" :pagination="pagination" v-if="type !== null" />
</template>

<script>
	import Category from '@/components/layout/Category';

	export default {
		components: {
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
			this.$http.get(`/api/tags/${this.$route.params.slug}`)
				.then(({ data }) => {
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
