<template>
  <div class="component-following">
    <posts :type="'author'" :typePost="'PendingReview'" />
  </div>
</template>

<script>
import Posts from "~/components/profile/posts";
import BigHeader from "~/components/profile/bigHeader";

export default {
  layout: "author",
  components: {
    Posts,
    BigHeader,
  },
};
</script>
