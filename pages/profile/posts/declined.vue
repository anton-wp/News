<template>
  <div class="component-following">
    <posts :type="'profile'" :typePost="'Declined'" />
  </div>
</template>

<script>
import Posts from "~/components/profile/posts";
export default {
  layout: "profile",
  components: {
    Posts
  }
};
</script>
