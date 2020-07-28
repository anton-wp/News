<template>
  <div class="container-fluid followVerdict">
    <div class="wrapper-title-follow px-0">
      <h5>
        <span>follow verdict</span>
      </h5>
    </div>
    <div class="col-12 social-links px-0 px-md-3 px-lg-0">
      <social-block />
    </div>
    <div id="follow">
      <div class="row">
        <div class="col-12 text-center">
          ..iframe
          <!-- <div class="fb-page medium-order-3 tablet-order-2 fb_iframe_widget"
            data-href="https://www.facebook.com/VerdictNews/" data-width="100%" data-height="180" data-small-header="true"
            data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" fb-xfbml-state="rendered"
            fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=232569150656491&amp;container_width=500&amp;height=180&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FVerdictNews%2F&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=true&amp;width=500px">
            <span id="fb2" style="vertical-align: bottom; width: 500px; height: 121px;">
              <iframe id="fb" name="f1693d670ecf8c4" height="180px" title="fb:page Facebook Social Plugin" frameborder="0"
                allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media"
                src="https://www.facebook.com/v2.11/plugins/page.php?adapt_container_width=true&amp;app_id=232569150656491&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D45%23cb%3Df5465c3e893ec%26domain%3Dverdict.org%26origin%3Dhttps%253A%252F%252Fverdict.org%252Ff298448ffc54b04%26relation%3Dparent.parent&amp;container_width=500&amp;height=180&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FVerdictNews%2F&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=true&amp;width=500px"
                style="border: none; visibility: visible; width: 500px; height: 121px;" class="">
              </iframe>
            </span>
          </div>-->
        </div>
      </div>
    </div>
    <div class="col-12 px-0" v-if="!posts">
      <sidebar-with-posts />
      <sidebar-with-recent v-if="recent" />
    </div>
  </div>
</template>

<script>
import SidebarWithPosts from "~/components/universal-components/sidebar-with-posts.vue";
import SocialBlock from "~/components/universal-components/socialBlock.vue";
import SidebarWithRecent from "~/components/universal-components/sidebar-with-recent";

export default {
  components: {
    SidebarWithPosts,
    SocialBlock,
    SidebarWithRecent,
  },
  props: {
		posts: Boolean,
		recent: Boolean
  },
};
</script>
