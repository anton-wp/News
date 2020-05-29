<template>
  <div>
    <div class="wrapper-block-news">
      <div class="container">
        <div class="row top-verdict">
          <div class="col-lg-4 col-md-6">
            <top-news-card />
          </div>
          <div class="col-lg-4 col-md-6">
            <top-news-card />
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="wrapper-title-hot">
              <h5 class="title-hot">
                <span>top verdicts</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-block-news background">
      <div class="container">
        <div class="row row-flex top-verdict">
          <div class="col-12 col-sm-6 col-md-4 col-lg-4">
            <default-news-card type="first-block" :padding="false" />
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-4">
            <default-news-card type="first-block" :padding="false" />
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-4">
            <default-news-card type="first-block" :padding="false" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNewsCard from '~/components/news/TopNewsCard'
import DefaultNewsCard from '~/components/news/DefaultNewsCard'
export default {
  components: {
    TopNewsCard,
    DefaultNewsCard
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/utils/variables";
@import "../assets/utils/colors";
.background {
    background-color: $secondary-bgcolor;
}

.row-flex {
  display: flex;
  flex-flow: row wrap;
}

.wrapper-block-news {
    width: 100%;
    .container {
        max-width: $global-width;
        .top-verdict {
            padding: 24px 0;
            .wrapper-title-hot {
              position: relative;
              padding: 0 1.2em;
              .title-hot {
                position: relative;
                color: $doveGray;
                font-size: 1.4em;
                font-weight: 700;
                line-height: 16px;
                width: 100%;
                span {
                    background-color: $white;
                    position: relative;
                    z-index: 5;
                    padding-right: 5px;
                }
                &::after {
                  content: '';
                  position: absolute;
                  display: block;
                  top: 8px;
                  height: 1px;
                  width: 100%;
                  background-color: $doveGray;
                  z-index: 2;
                }
            }
            }
        }

    }
}

.padding-0 {
  padding-left: 0;
  padding-right: 0;
}
.load-more-wrapper {
  margin-bottom: 3em;
  text-align: center;
  span {
    position: relative;
    font-size: .95rem;
    padding: 1.15em 2.8em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .8px;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 0;
    line-height: 1;
    text-align: center;
    cursor: pointer;
    background-color: $primary_color;
    color: $whiteFE;
    transition: background-color .25s ease-out,color .25s ease-out;
    &:hover {
      background-color: $button-hover-background;
    }
    &:after {
      content: "";
      position: absolute;
      height: 3px;
      width: 30px;
      left: 2.8em;
      bottom: 0.8em;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
}
.follow {
    margin: 2em 0;
    padding: 0 28px;
    h5 {
      color: $doveGray;
      font-weight: 700;
      line-height: 16px;
      font-size: 1em;
      margin-bottom: 10px;
      letter-spacing: 1px;
      position: relative;
      span {
        background-color: $white;
        position: relative;
        z-index: 5;
        padding-right: 5px;
      }
      &::before {
        content: '';
        position: absolute;
        display: block;
        top: 8px;
        height: 1px;
        width: 100%;
        background-color: $doveGray;
        z-index: 2;
    }
    }
    .instagram { background-color: $millbrook; };
    .twitter { background-color: $pictonBlue; };
    .feed { background-color: $flamingo; };
    .pinterest { background-color: $cardinal; };
    .news-icon { background-color: $lochmara; };
    .facebook { background-color: $chambray; };
    .social-icon-round {
      width: 45px;
      height: 45px;
      border-radius: 25px;
      position: relative;
      margin: 0 0 15px;
      cursor: pointer;
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

</style>
