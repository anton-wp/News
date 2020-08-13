<template>
  <span>{{ data.data.replacements.point }}</span>
</template>
<script>
export default {
  props: {
    data: Object,
    type: String,
  },
};
</script>
