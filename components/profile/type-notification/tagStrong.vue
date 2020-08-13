<template>
  <strong>{{ data.data.replacements.userFirstName }} {{ data.data.replacements.userLastName }}</strong>
</template>
<script>
export default {
  props: {
    data: Object,
    type: String,
  },
};
</script>
