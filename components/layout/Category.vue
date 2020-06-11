<template>
	<div class="policy-wrapper animation">
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-8">
					<h1 class="category-page-title">{{slug}}</h1>
					<div class="row" v-for="(data, index) in posts" :key="index">
						<div class="col-12" v-for="post in data.slice(0, 1)" :key="post.id">
							<top-news-card :tag="tag" padding :post="post" />
						</div>
						<div class="col-12 col-lg-6"  v-for="post in data.slice(1, 3)" :key="post.id">
							<default-news-card type="first-block" :tag="tag" :post="post" :padding="true" />
						</div>
						<div class="col-12" v-for="post in data.slice(3, 6)" :key="post.id">
							<gorizontal-news-card type="full-block" :tag="tag" :post="post" :background="false" />
						</div>
						<div class="col-12" v-for="post in data.slice(6, 7)" :key="post.id">
							<top-news-card :post="post" :tag="tag" />
						</div>
						<div class="col-12 col-lg-6"  v-for="post in data.slice(7, 9)" :key="post.id">
							<default-news-card type="first-block" :tag="tag" :post="post" :padding="true" />
						</div>
						<div class="col-12" v-for="post in data.slice(9, 12)" :key="post.id">
							<gorizontal-news-card type="full-block" :tag="tag" :post="post" :background="false" />
						</div>
					</div>
					<div class="container" v-if="paginations.next">
						<div class="row">
							<div class="col-12">
								<div class="load-more-wrapper">
									<span @click="loadMore">load more</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="affix sticky-wrapper">
						<div class="sticky">
							<follow-block :posts="false"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import TopNewsCard from '~/components/news/TopNewsCard'
	import DefaultNewsCard from '~/components/news/DefaultNewsCard'
	import GorizontalNewsCard from '~/components/news/GorizontalNewsCard'
	import followBlock from '~/components/universal-components/followBlock'

	export default {
		components: {
			TopNewsCard,
			DefaultNewsCard,
			GorizontalNewsCard,
			followBlock,
		},
		data () {
			return {
				posts: [],
				limit: 12,
				page: 1,
				paginations: Object,
				api: ''
			}
		},
		props: {
			data: Array,
			slug: String,
			pagination: Object,
			tag: Boolean
		},
		mounted () {
			this.posts.push(this.data);
			this.paginations = this.pagination
			if(this.tag){this.api = 'tags/'}
		},
		methods: {
			getPosts () {
				this.$http.get(`/api/${this.api}${this.slug}?limit=${this.limit}&page=${this.page}`)
				.then(({ data }) => {
					this.posts.push(data.data);
					this.paginations = data.pagination
				})
				.catch(error => {
					console.log(error)
				});
			},
			loadMore () {
				this.page = this.page + 1;
				this.getPosts()
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../assets/utils/variables";
	@import "../../assets/utils/colors";

	.animation {
		animation: img 0.3s ease-in-out;

		@keyframes img {
			0% {
				opacity: 0;
			}

			100% {
				opacity: 1;
			}
		}
	}

	.policy-wrapper {
		width: 100%;

		.container {
			max-width: $global-width;

			.category-page-title {
				text-transform: uppercase;
				font-size: 1.9em;
				position: relative;
				color: $dark-gray;
				font-family: "Open Sans", sans-serif;
				font-weight: bold;
				text-size-adjust: 100%;
				-webkit-box-direction: normal;
				-webkit-font-smoothing: antialiased;
				margin: 15px 15px 15px 0;

				&:after {
					content: '';
					background-color: $primary_color;
					height: 3px;
					width: 1.9em;
					position: absolute;
					left: 0.04em;
					bottom: 1px;
				}
			}
		}
	}

	.load-more-wrapper {
		margin-bottom: 3em;
		text-align: center;
		margin-top: 3em;

		span {
			position: relative;
			font-size: .95rem;
			padding: 1.15em 2.8em;
			font-weight: 700;
			text-transform: uppercase;
			letter-spacing: .8px;
			user-select: none;
			border: 1px solid transparent;
			border-radius: 0;
			line-height: 1;
			text-align: center;
			cursor: pointer;
			background-color: $primary_color;
			color: $whiteFE;
			transition: background-color .25s ease-out, color .25s ease-out;

			&:hover {
				background-color: $button-hover-background;
			}

			&:after {
				content: "";
				position: absolute;
				height: 3px;
				width: 30px;
				left: 2.8em;
				bottom: 0.8em;
				background-color: rgba(255, 255, 255, 0.3);
			}
		}
	}

</style>
