<template>
  <div class="col-12 blockHead">
    <nuxt-link v-if="category" class="link" :to="`/${category.slug}`">
      <h5 class="category-name">{{category.name}}</h5>
    </nuxt-link>
    <div v-if="type !== 'comment'" class="blockAction">
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
      <div class="position__verdict__single" v-if="data.verdictValue">
        <block-verdict :verdict="data.verdictValue" />
      </div>
    </div>
  </div>
</template>

<script>
import BlockVerdict from "~/components/universal-components/block-verdict";

export default {
  components: {
    BlockVerdict
  },
  props: {
    category: Object,
    id: String,
    slug: String,
		type: String,
		data: Object
  },
  data() {
    return {
      actions: Object
    };
  },
  created() {
    if (this.type !== "comment") {
      this.getButton();
    }
  },
  methods: {
    getButton() {
      this.$axios
        .$get(`/api/posts/${this.id}/actions`)
        .then(data => {
          // console.log(data.data)
          this.actions = data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    removePost() {
      this.$axios
        .$delete(`/api/posts/${this.id}/mark-deleted`)
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    deletePost() {
      this.$axios
        .$delete(`/api/posts/${this.id}`)
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

