<template>
  <div class="wrapper">
    <div class="container">
      <div class="row sub-wrapper">
        <div class="first-block col-lg-2 col-xl-3 col-12 col-sm-6 order-1">
          <a href="/" class="footer-logo">
            <img class="footer-logo-icon" src="/image/logo-white.svg">
          </a>
          <p class="text-block-after-logo">
            your opinion on latest news, events, and society developments
          </p>
        </div>
        <div class="second-block col-lg-8 col-xl-6 order-3 order-sm-3 order-md-3 order-lg-2">
          <div class="footer-general-icons-list">
            <nuxt-link class="footer-general-link" to="/">
              HOME
            </nuxt-link>
            <nuxt-link class="footer-general-link" to="/about-verdict">
              ABOUT VERDICT
            </nuxt-link>
            <nuxt-link class="footer-general-link" to="/terms-of-service">
              TERMS OF SERVICE
            </nuxt-link>
            <nuxt-link class="footer-general-link" to="/privacy-policy">
              PRIVACY POLICYT
            </nuxt-link>
            <nuxt-link class="footer-general-link" to="/contact">
              CONTACT
            </nuxt-link>
            <a class="footer-general-link">
              RSS
            </a>
            <a class="footer-general-link">
              SITEMAP
            </a>
          </div>
          <div class="footer-social-icons-list">
            <a class="touchable-social-zone">
              <svg width="30" height="30">
                <use xlink:href="#facebook" />
              </svg>
            </a>
            <a class="touchable-social-zone">
              <svg width="30" height="30">
                <use xlink:href="#twitter" />
              </svg>
            </a>
            <a class="touchable-social-zone">
              <svg width="30" height="30">
                <use xlink:href="#pinterest" />
              </svg>
            </a>
            <a class="touchable-social-zone">
              <svg width="30" height="30">
                <use xlink:href="#feed" />
              </svg>
            </a>
            <a class="touchable-social-zone">
              <svg width="30" height="30">
                <use xlink:href="#feedburner" />
              </svg>
            </a>
            <a class="touchable-social-zone">
              <svg width="30" height="30">
                <use xlink:href="#instagram" />
              </svg>
            </a>
          </div>
          <div class="copyright-text d-none d-sm-block">
            <span class="text-string">
              Copyright © 2018-2020 VERDICT, LLC - All Rights Reserved.</span>
          </div>
        </div>
        <div class="third-block col-lg-2 col-xl-3 order-4 order-sm-2 order-md-2 order-lg-3 col-12 col-sm-6">
          <div class="wrapper-market-icon">
            <button class="market-place-button">
              <img class="market-place-icon" src="/image/app-store-badge.svg" alt="Verdict">
              <!-- TODO link to application and move link to config-->
            </button>
          </div>
          <div class="wrapper-market-icon">
            <button class="market-place-button">
              <img class="market-place-icon google-play" src="/image/google-play-badge.svg" alt="Verdict">
              <!-- TODO link to application and move link to config-->
            </button>
          </div>

          <div class="copyright-text d-block d-sm-none">
            <span class="text-string">Copyright © 2018-2020 VERDICT, LLC - All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/utils/variables";
@import "../../assets/utils/colors";
.wrapper {
  background-color: $doveGray;
  .container {
    max-width: $global-width;
    padding-left: 0;
    padding-right: 0;
    .sub-wrapper {
      height: auto;
      padding: 32px 10px;
      .first-block {
        .footer-logo {
          .footer-logo-icon {
            width: 70%;
            min-width: 137px;
            margin-bottom: 10px;
            @media (max-width: 992px) {
              max-width: 195px;
            }
          }
        }
        .text-block-after-logo {
          color: $white;
          font-size: 20px;
          line-height: 25px;
          font-family: $default-font-family;
          user-select: none;
        }
      }
      .second-block {
        .footer-general-icons-list,
        .footer-social-icons-list {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 24px;

          a {
            text-decoration: none;
          }

          @media (max-width: 992px) {
            margin-top: 32px;
          }

          .footer-general-link {
            letter-spacing: 2px;
            // white-space: nowrap;
            margin: 0 10px;
            color: $white;
            text-transform: uppercase;
            font-family: $default-font-family;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            &:hover {
              opacity: 0.7;
              transition: 0.3;
            }
          }
          .touchable-social-zone {
            cursor: pointer;

            svg {
              fill: #fff;
              margin: 0 15px;
            }

            @media (max-width: 400px) {
                .social-icon {
                    margin: 0 10px;
                }
            }
            @media (max-width: 576px) {
                .social-icon {
                    height: 27px;
                }
            }

            &:hover {
              opacity: 0.7;
              transition: 0.3;
            }
          }
        }
        .copyright-text {
          text-align: center;
          .text-string {
            color: $white;
            font-size: 12px;
            font-weight: 400;
            font-family: $default-font-family;
          }
        }
      }
      .third-block {
        text-align: right;
        .market-place-button {
          background-color: transparent;
          outline: none;
          border: none;
          .market-place-icon {
            display: block;
            width: 145px;
            height: auto;
          }
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .wrapper {
    .container {
      .sub-wrapper {
        padding: 24px 10px;
        .first-block {
          text-align: center;
          .text-block-after-logo {
            font-size: 18px;
          }
          .footer-logo {
            .footer-logo-icon {
              width: 50%;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .wrapper {
    .container {
      .sub-wrapper {
        .second-block {
          .footer-general-link {
            letter-spacing: 0px !important;
          }
        }
        .third-block {
          text-align: center;
          .wrapper-market-icon {
            display: inline-block;
            .google-play {
              width: 162px !important;
            }
          }
          .copyright-text {
            text-align: center;
            margin-top: 20px;
            .text-string {
              color: $white;
              font-size: 12px;
              font-weight: 400;
              font-family: $default-font-family;
            }
          }
        }
      }
    }
  }
}
</style>
