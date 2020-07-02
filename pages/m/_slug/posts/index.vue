<template>
  <div class="component-following">
    <posts :type="'author'" :typePost="'Published'" />
  </div>
</template>

<script>
import Posts from "~/components/profile/posts";

export default {
  layout: "author",
  components: {
    Posts
  },
};
</script>
