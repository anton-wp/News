<template>
  <div class="container-fluid followVerdict">
    <div class="wrapper-title-follow">
      <h5>
        <span>follow verdict</span>
      </h5>
    </div>
    <div class="col-12 social-links">
      <social-block />
    </div>
    <div id="follow">
      <div class="row">
        <div class="col-12 text-center">
          iframe
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
    <div class="col-12" v-if="!posts">
      <sidebar-with-posts />
      <!-- <vrd-swp></vrd-swp> -->
    </div>
  </div>
</template>

<script>
import SidebarWithPosts from "~/components/universal-components/sidebar-with-posts.vue";
import SocialBlock from "~/components/universal-components/socialBlock.vue";

export default {
  components: {
    SidebarWithPosts,
    SocialBlock
  },
  props: {
    posts: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/utils/variables";
@import "../../assets/utils/colors";

.followVerdict {
  // font-family: 'Open Sans', Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  margin-bottom: 44px;
  position: sticky;
  top: 97px;
  display: block;
  margin-top: 30px;
  padding-left: 0;
  padding-right: 0;

  .row {
    margin-bottom: 44px;
  }

  .wrapper-title-follow {
    padding: 0 10px;

    h5 {
      // font-family: 'Open Sans', Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
      color: #696969;
      font-weight: 700;
      line-height: 16px;
      font-size: 1.4em;
      margin-bottom: 20px;
      // letter-spacing: 1px;
      position: relative;

      span {
        background-color: $white;
        position: relative;
        z-index: 2;
        padding-right: 5px;
      }
      &::after {
        content: "";
        position: absolute;
        display: block;
        top: 8px;
        height: 1px;
        width: 100%;
        background-color: $doveGray;
        z-index: 1;
      }
    }
  }

  .social-links {
    margin-bottom: 2.2em;

    .social-icon-in-menu {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
}

@media (max-width: 480px) {
  .follow {
    .wrapper-title-follow {
      padding: 0 1.2em;
    }
  }
}
</style>
