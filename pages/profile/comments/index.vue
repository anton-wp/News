<template>
  <div></div>
</template>

<script>
export default {
  layout: "profile",
	middleware: "auth",
	mounted() {
		this.getComments();
	},
  methods: {
    getComments() {
      this.$axios.$get("/api/profile/comments").then(res => {
        console.log(res);
      });
    }
  }
};
</script>
