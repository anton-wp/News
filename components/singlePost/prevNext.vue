<template>
  <div class="row align-justify next-section">
    <div class="column" v-if="posts.previous" >
      <div class="link-wrapper">
        <i class="color-primary angle-left">
          <svg width="40" height="40">
            <use xlink:href="#angle-left" />
          </svg>
        </i>
        <div class="info info-left">
          <div class="label">
            Previous Post
          </div>
          <nuxt-link class="title text-overflow-clamp-3" :to="`/${posts.previous.slug}`">
            {{posts.previous.title}}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="column column-right" v-if="posts.next">
      <div class="link-wrapper">
        <div class="info info-right">
          <div class="label">
            Next Post
          </div>
          <nuxt-link class="title text-overflow-clamp-3" :to="`/${posts.next.slug}`">
						{{posts.next.title}}
					</nuxt-link>
        </div>
        <i class="color-primary angle-right">
          <svg width="40" height="40">
            <use xlink:href="#angle-right" />
          </svg>
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		slug: String
	},
	data () {
		return {
			posts: Object
		}
	},
	created () {
		this.getPosts()
	},
	methods: {
		getPosts () {
			this.$http.get(`/api/posts/${this.slug}/previous-next`)
				.then(res => {
					console.log(res)
					this.posts = res.data
				})
				.catch(error => {
					console.log(error)
			})
		},
	}
}
</script>

<style lang="scss" scoped>
  @import "../../assets/utils/variables";
  @import "../../assets/utils/colors";

  i{
    fill: #ff4242;
    position: absolute;
  }

  a{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    height: 100px;
    padding: 5px;
    cursor: pointer;
    font-weight: 700;
    line-height: 30px;
    overflow-wrap: normal;
    word-wrap: normal;
    word-break: break-word;
    line-break: auto;
    font-size: 1.1em;
    color: rgb(10,10,10);
    text-decoration: none;
  }

  .label{
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    color: #7b7b7b;
    line-height: 25px;
  }

  .link-wrapper:hover{
    .label{
      color: #ff4242;
    }
    a{
      color: #696969;

    }
  }

  .next-section{
    margin-bottom: 55px;
    @media screen and (max-width: 460px) {
      margin-bottom: 1.5em;
    }
  }

  .angle-left{
    top: 20%;
    left: 0;
  }

  .angle-right{
    top: 20%;
    right: 0;
  }

  .column{
    font-size: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: #0a0a0a;
    -webkit-font-smoothing: antialiased;
    font-family: open sans,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
    -webkit-box-direction: normal;
    box-sizing: inherit;
    min-width: 0;
    padding-right: .9375rem;
    padding-left: .9375rem;
    max-width: 50%;
    -webkit-box-flex: 0;
    flex: 0 0 370px;
    position: relative;

    @media screen and (max-width: 460px) {
      flex: 0 0 100%;
      max-width: 100%;
      margin-bottom: 1em;
    }
  }

  .info-right{
    text-align: right;
    padding-right: 30px;
  }

  .info-left{
    text-align: left;
    padding-left: 30px;
  }

  .column-right{
    margin-left: auto;
  }

  .preview-and-next{
    margin-bottom: 0px;
  }

</style>
