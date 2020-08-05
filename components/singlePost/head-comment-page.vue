<template>
  <div class="row">
    <button-block-head :id="data.id" :slug="data.slug" :category="data.category" :type="'comment'" />
    <div class="col-lg-12">
      <h1 class="post-page-title">{{data.title}}</h1>
      <h2>{{data.subTitle}}</h2>
    </div>
    <div class="col-lg-12">
      <div class="container">
        <div class="row" style="margin-bottom: 3.1em;">
          <div class="col-lg-6">
            <author-block v-if="data.author" :author="data.author" :publishedAt="data.publishedAt" />
          </div>
          <div class="col-lg-6" style="align-items: center; display: flex;">
            <marks v-if="data.author" :data="data" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorBlock from "~/components/singlePost/authorBlock.vue";
import ButtonBlockHead from "~/components/singlePost/buttonBlockHead.vue";
import Marks from "~/components/singlePost/marks.vue";

export default {
  components: {
    AuthorBlock,
    ButtonBlockHead,
		Marks,
  },
  props: {
    data: Object
	},
  provide() {
    return {
      id: this.data.id
    };
  }
};
</script>
