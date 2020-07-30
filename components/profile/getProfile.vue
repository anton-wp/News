<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      slug: String,
    };
  },
  mounted() {
    if (this.typeProfile() && !this.$store.state.profile.id) {
      this.getProfileFull();
    } else if (!this.typeProfile()) {
      this.getProfile();
    }
    this.$store.commit("SET_BREADCRUMBS", [
      { title: `${this.$store.state.profile.firstName} ${this.$store.state.profile.lastName}` },
    ]);
  },
  destroyed() {
    if (!this.typeProfile()) {
      this.$store.commit("CLEAR_PROFILE");
    }
  },
  methods: {
    typeProfile() {
      switch (this.$route.matched[0].components.default.extendOptions.layout) {
        case "author":
          return false;
        default:
          return true;
      }
    },
    getProfileFull() {
      this.$axios
        .$get(`/api/profile/full`)
        .then((res) => {
          this.$store.dispatch("GET_PROFILE", res.data);

          this.$store.commit("SET_BREADCRUMBS", [
            { title: `${res.data.firstName} ${res.data.lastName}` },
          ]);
        })
        .catch((error) => console.error(error));
    },
    getProfile() {
      this.slug = this.$route.params.slug;
      this.$axios
        .$get(`/api/author/${this.slug}`)
        .then((res) => {
          this.$store.dispatch("GET_PROFILE", res.data);

          this.$store.commit("SET_BREADCRUMBS", [
            { title: `${res.data.firstName} ${res.data.lastName}` },
          ]);
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>
