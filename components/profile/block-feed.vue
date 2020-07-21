<template>
  <div class="feed__profile">
    <p>
      “
      <a :href="data.postLink" target="_blank">{{ data.title }}</a>”
    </p>
    <time class="posted published" datetime="Dec 25,2018 4:28 pm EST">{{ new Date(data.publishedAt).toDateString() }}</time>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
.feed__profile {
  font-size: 100%;
  font-weight: 400;
  line-height: 1.5;
  color: #0a0a0a;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e4e4e4;
  padding: 1em;

  p {
    margin-bottom: 0.2em;
  }

  a {
    color: inherit;
    background-color: transparent;
    text-decoration: underline;
  }
}
</style>
