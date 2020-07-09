<template>
  <div>
    <following :type="'author'" :typePage="'subscribers'" />
  </div>
</template>

<script>
import Following from "~/components/profile/following";

export default {
  layout: "author",
  components: {
    Following
  }
};
</script>
