<template>
  <div class="popup-wrapper-user-info">
    <div>
      <div class="header-user-popup container">
        <div class="row">
          <div class="col-8 col-padding-0">
            <!-- TODO go to user -->
            <a class="user-name-span">displayName</a>
            <span class="user-role-span">rank</span>
            <span class="v-rap-span">
              <span class="count-vraps">points</span>
              V-Rap
            </span>
            <span class="stat">newsCount posts / verdictsCount verdicts</span>
          </div>
          <div class="col-4 col-padding-0 img-wrapper">
            <img class="user-avatar">
          </div>
        </div>
      </div>
      <div class="latest-posts">
        <div>
          <p class="latest-posts-title">
            latest posts:
          </p>
          <ol class="latest-posts-list">
            <li class="latest-posts-titles">
              <a>1. post.title...</a>
            </li>
          </ol>
        </div>
      </div>
      <div class="followed-people-count-wrapper">
        <span>Followed by followers people</span>
        <button class="button-followed follow">
          Follow
        </button>
        <button class="button-followed unfollow">
          Unfollow
        </button>
        <button class="button-followed unfollow">
          <i class="fa fa-circle-o-notch fa-spin" />
          Loading
        </button>
      </div>
    </div>
    <!-- <div class="cssload-container">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div> -->
  </div>
</template>

<style lang="scss">
@import "../../assets/utils/variables";
@import "../../assets/utils/colors";

.cssload-container {
  position: absolute;
  top: 100px;
  left: 100px;

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: grey;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(0);
    }
  }

  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(24px, 0);
    }
  }
}

.popup-wrapper-user-info {
  z-index: 999;
  position: relative;

  .header-user-popup {
    align-items: center;
    border-bottom: 1px solid $dedede;
    padding-bottom: 10px;

    .col-padding-0 {
      padding-left: 0;
      padding-right: 0;
    }

    .img-wrapper {
      align-items: center;
      align-content: center;
      justify-content: flex-end;
      display: flex;
    }

    .user-avatar {
      border-radius: 25px;
      width: 50px;
      height: 50px;
    }

    .user-name-span {
      color: $black;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.9em;
      display: block;
      transition: color .25s;

      &:hover {
        color: $primary_color;
      }
    }

    .user-role-span {
      color: $black;
      display: block;
      font-size: 0.8em;
    }

    .v-rap-span {
      display: block;
      font-size: 0.9em;
      font-weight: 600;
      color: $black;

      .count-vraps {
        font-weight: 700;
        color: $yellowCount;
        margin-right: 4px;
      }
    }

    .stat {
      color: $black;
      font-size: 0.9em;
      font-weight: 600;
    }
  }

  .latest-posts {
    margin-top: 1em;
    border-bottom: 1px solid $dedede;
    min-height: 106px;
    color: $black;

    .latest-posts-title {
      font-weight: bold;
      margin: 0.4em 0;
      font-size: 1.1em;
    }

    .latest-posts-list {
      padding-left: 0;
      margin-bottom: 0;

      .latest-posts-titles {
        text-overflow: ellipsis;
        max-height: 1.6em;
        overflow: hidden;

        a {
          transition: color .25s;
          font-weight: 400;
          font-family: "Open Sans";
          font-size: 0.9em;
          white-space: nowrap;
          color: $black;
          text-decoration: none;

          &:hover {
            color: $primary_color;
          }
        }
      }
    }
  }

  .followed-people-count-wrapper {
    margin-top: 1.9em;

    span {
      vertical-align: middle;
      color: $black;
      font-family: "Open Sans";
      font-weight: 600;
      font-size: 0.9em;
    }

    .follow{
      color: #ff4242;
      border-color: #ff4242;
      &:hover {
        background-color: #bc2d2d;
        color: #fff;
      }
    }

    .unfollow{
      color: #474747;
      border-color:#474747;
      &:hover {
        background-color: #474747;
        color: #fff;
      }

      .fa {
        margin-left: -12px;
        margin-right: 8px;
      }
    }

    .button-followed {
      font-size: 12px;
      width: 88px;
      height: 28px;
      float: right;
      border: 1px solid;
      border-radius: 5px;
      background-color: #fff;
    }
  }
}

</style>
