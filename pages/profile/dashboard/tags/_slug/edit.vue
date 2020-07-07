<template>
  <div  class="edit-form-tag" id="settingForm">
    <div class="wrap">
      <span>Name</span>
      <input type="text" v-model="name" placeholder="name" />
    </div>
    <div class="wrap">
      <span>Slug</span>
      <input type="text" v-model="slug" placeholder="slug" />
    </div>
    <div class="wrap">
      <span>Description</span>
      <textarea type="text" v-model="description" placeholder="description"></textarea>
    </div>
    <div class="wrap wrap-featured" @click="changeFeatured">
      <label class="categoryCheckbox">
        <svg width="10" height="10" v-if="featured">
          <use xlink:href="#checkbox" />
        </svg>
      </label>
      Featured
    </div>
    <div class="block-button text-right">
      <button class="update" @click="updateTag">update</button>
      <button class="delete" @click="deleteTag">delete</button>
    </div>
  </div>
</template>
<script>
export default {
  layout: "profile",
  data() {
    return {
      name: "",
      slug: "",
      description: "",
      featured: Boolean
    };
  },
  mounted() {
    this.getTag();
  },
  methods: {
    getTag() {
      this.$axios
        .$get(`/api/tags/${this.$route.params.slug}`)
        .then(res => {
          this.name = res.data.name;
          this.slug = res.data.slug;
          this.description = res.data.description;
          this.featured = res.data.featured;
        })
        .catch(error => console.error(error));
    },
    updateTag() {
      let data = {
        description: this.description,
        featured: this.featured,
        name: this.name,
        slug: this.slug
      };
      this.$axios
        .$patch(`/api/tags/${this.$route.params.slug}`, data)
        .then(res => {
          this.$toasted.show(res.message);
        })
        .catch(error => console.error(error));
    },
    deleteTag() {
      this.$axios
        .$delete(`/api/tags/${this.$route.params.slug}`)
        .then(res => {
					this.$toasted.show(res.message);
					this.$router.push({ path: "/profile/dashboard/tags" });
        })
        .catch(error => console.error(error));
    },
    changeFeatured() {
      this.featured = !this.featured;
    }
  }
};
</script>
