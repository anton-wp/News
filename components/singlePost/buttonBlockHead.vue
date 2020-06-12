<template>
  <div class="col-12 blockHead">
      <nuxt-link class="link" :to="`/${category.slug}`">
				<h5 class="category-name" >
						{{category.name}}
				</h5>
			</nuxt-link>
    <div class="blockAction">
      <a class="action" v-if="actions.review" >
        <svg width="12" height="15">
          <use xlink:href="#delete" />
        </svg>
        review
      </a>
      <a class="action" v-if="actions.remove" @click="removePost">
        <svg width="12" height="15">
          <use xlink:href="#delete" />
        </svg>
        remove
      </a>
      <a class="action" v-if="actions.delete"  @click="deletePost">
        <svg width="12" height="15">
          <use xlink:href="#delete" />
        </svg>
        delete
      </a>
      <nuxt-link class="action" v-if="actions.edit" :to="`/${slug}/edit`">
        <svg width="12" height="15">
          <use xlink:href="#pencil" />
        </svg>
        edit
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		category: Object,
		id: String,
		slug: String
	},
	data () {
		return {
			actions: Object
		}
	},
	created () {
		this.getButton()
	},
	methods: {
		getButton () {
			this.$http.get(`/api/posts/${this.id}/actions`)
				.then(({ data }) => {
					// console.log(data.data)
					this.actions = data.data
				})
				.catch(error => {
					console.log(error)
				});
		},
		removePost () {
			this.$http.delete(`/api/posts/${this.id}/mark-deleted`)
				.then(({ data }) => {
					console.log(data)
				})
				.catch(error => {
					console.log(error)
			});
		},
		deletePost () {
			this.$http.delete(`/api/posts/${this.id}`)
				.then(({ data }) => {
					console.log(data)
				})
				.catch(error => {
					console.log(error)
			});
		},
	}
}
</script>

<style lang="scss" scoped>
  @import "../../assets/utils/variables";
  @import "../../assets/utils/colors";

  .blockHead {
    display: flex;
    align-items: center;

		.link{
			text-decoration: none;
			color: inherit;
		}

    .category-name {
      position: relative;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 700;
      margin: 15px 15px 15px 0;
      display: inline-block;
      font-family: "Open Sans";

      &:after {
        content: '';
        background-color: $primary_color;
        height: 3px;
        width: 1.9em;
        position: absolute;
        left: 0.04em;
        bottom: 1px;
        top: 20px;
      }
    }

    .blockAction {
      display: inline-block;
      margin-left: auto;

      .action{
        cursor: pointer;
        text-decoration: none;
        padding: 4px 9px;
        margin: 0 0.9375rem;
        border: 1px solid;
        border-color: $primary_color;
        color: $primary_color;
        fill: $primary_color;
        transition: all .25s;
        border-radius: 4px;
        vertical-align: middle;
        align-items: center;
        letter-spacing: .8px;
        font-weight: 700;
        font-size: 10px;
        text-transform: uppercase;

        &:hover{
          color: $white;
          fill: $white;
          background-color: $button-hover-background;
          border-color: $button-hover-background;
        }

        svg {
          fill: inherit;
          font-size: 11px;
          margin-right: 5px;
          vertical-align: sub;
        }
      }
    }
  }
</style>
