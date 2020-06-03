<template>
  <div>
    <custom-svg />
    <app-header />
    <hot-news />
    <!-- <breadcrumbs /> -->
    <small-header />
    <div class="container">
      <div class="row">
        <div class="col-12 profile-bottom">
          <div class="line" />
        </div>
        <div class="col-auto sideBar">
          <ul>
            <li class="menu">
              <svg width="20" height="20">
                <use xlink:href="#dashboard" />
              </svg>
              <span>comments</span>
              <span>
                <span class="title">
                  title
                  <span>(0)</span>
                </span>
              </span>
              <!-- <fa-icon *ngIf="!item.click && item.children" class="icon" (click)="expandMenu(item.title)" [icon]="faSortDown"></fa-icon>
              <fa-icon *ngIf="item.click && item.children" class="icon" (click)="expandMenu(item.title)" [icon]="faSortUp"></fa-icon>-->
              <ul class="blockSubMenu">
                <li class="subMenu">
                  <span class="subtitle">
                    tags
                    <span>(123)</span>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="col content">
          <nuxt />
        </div>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import CustomSvg from '~/components/module/CustomSvg'
import HotNews from '~/components/layout/HotNews'
import AppHeader from '~/components/layout/AppHeader'
import smallHeader from '~/components/profile/smallHeader'
// import Breadcrumbs from '~/components/layout/Breadcrumbs'
import AppFooter from '~/components/layout/AppFooter'

export default {
  components: {
    CustomSvg,
    AppHeader,
    AppFooter,
    HotNews,
    smallHeader
    // Breadcrumbs
    // LoginPopup
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/app";

.container {
  font-family: open sans, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
  max-width: 1310px;

  .content {
    margin-top: 30px;
    @media (max-width: 480px) {
      margin-top: 10px;
      max-width: 70%;
    }
  }
  .menu {
    display: inline-block;
    margin-right: 10px;
  }

  .line {
    border-top: 1px solid #9b9b9b;
    margin-top: 2.4em;
    margin-right: 20px;
  }

  .profile-bottom {
    padding-bottom: 2.2em;
  }

  .sideBar {
    padding: 0 0 0 2.5em;
    @media (max-width: 991px) {
      padding: 0 0 0 1.1em;
    }
    @media (max-width: 768px) {
      padding: 0 0 0 1.1em;
    }
    @media (max-width: 639px) {
      margin-left: 15px;
      margin-right: 15px;
      padding: 0 0 0 0;
    }

    .active {
      color: #ff4242 !important;
    }

    fa-icon,
    svg {
      cursor: pointer;
    }

    ul {
      position: sticky;
      top: 90px;
      z-index: 1;
      padding-left: 0;
      margin-top: -15px;
      @media (max-width: 768px) {
        margin-top: -40px;
      }
    }

    li {
      display: block;
      margin-top: 20px;

      @media (max-width: 768px) {
        text-align: center;
      }
      @media (max-width: 639px) {
        margin-top: 5px;
      }

      .title {
        vertical-align: middle;
        display: contents;
        @media (max-width: 639px) {
          display: none;
          margin-top: 5px;
        }
      }
      // ul {
      //   padding-top: 5px;
      // }
    }

    .icon {
      color: #919191;
      margin-left: 10px;
      @media (max-width: 768px) {
        display: none !important;
      }
    }

    .menu {
      color: #0a0a0a;
      text-transform: uppercase;
      font-weight: 700;
      cursor: pointer;
      transition: color 0.25s;
      @media (max-width: 768px) {
        text-transform: none;
        font-size: 0.7em;
        font-weight: 400;
      }

      &:hover {
        color: #ff4242;
      }

      svg {
        margin: 8px 0;
        margin-right: 1.2em;
        width: 22px;
        height: 22px;
        @media (max-width: 768px) {
          margin-right: 0;
          margin: 0 auto;
          display: block;
        }
        @media (max-width: 639px) {
          width: 25px;
          height: 25px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }

      fa-icon {
        margin-right: 0.8em;
        font-size: 1.4em;
        @media (max-width: 768px) {
          font-size: 2em;
          margin-right: 0;
          text-align: center;
          display: block;
          width: 100%;
        }
        @media (max-width: 639px) {
          font-size: 2.3em;
        }
      }
    }
    .blockSubMenu {
      @media (max-width: 768px) {
        display: flex;
        position: absolute;
        width: calc(100vw - 100% - 0.9375rem);
        overflow-x: scroll;
        left: 66px;
        top: 25px;
        background-color: #f4f4f4;
        cursor: pointer;
      }
      @media (max-width: 639px) {
        left: 30px;
        top: 35px;
        width: calc(100vw - 100% - 1rem);
      }
      .subMenu {
        list-style-type: none;
        color: #7a7a7a;
        // color: #ff4242;
        font-weight: 700;
        cursor: pointer;
        transition: color 0.25s;
        font-size: 16px;
        margin-left: 60px;
        text-transform: none;
        @media (max-width: 768px) {
          margin-left: 0px;
          margin-top: 0px;
          padding: 0.4em 1em 0.8em;
          display: list-item;
          white-space: nowrap;
        }
        @media (max-width: 639px) {
          font-size: 11.5px;
        }

        &:hover {
          color: #ff4242;
        }
      }
    }
  }
}
</style>
