<template>
  <div class="col-12 blockHead">
    <nuxt-link class="link" :to="`/${category.slug}`">
      <h5 class="category-name">{{category.name}}</h5>
    </nuxt-link>
    <div class="blockAction">
      <nuxt-link class="action" v-if="actions.review" :to="`/${slug}/review`">
        <svg width="12" height="15">
          <use xlink:href="#delete" />
        </svg>
        review
      </nuxt-link>
      <a class="action" v-if="actions.remove" @click="removePost">
        <svg width="12" height="15">
          <use xlink:href="#delete" />
        </svg>
        remove
      </a>
      <a class="action" v-if="actions.delete" @click="deletePost">
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
  data() {
    return {
      actions: Object
    };
  },
  created() {
    this.getButton();
  },
  methods: {
    getButton() {
      this.$http
        .get(`/api/posts/${this.id}/actions`)
        .then(({ data }) => {
          // console.log(data.data)
          this.actions = data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    removePost() {
      this.$http
        .delete(`/api/posts/${this.id}/mark-deleted`)
        .then(({ data }) => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    deletePost() {
      this.$http
        .delete(`/api/posts/${this.id}`)
        .then(({ data }) => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

