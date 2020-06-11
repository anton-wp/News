<template>
  <div class="about-user-in-post">
    <div class="element photo">
      <img v-if="!author.avatar.small" src="/image/default-avatar-original.png" class="user-profile-info">
      <img v-if="author.avatar.small" :src="author.avatar" class="user-profile-info">
    </div>
    <div class="element information" @mouseleave="hide">
      <div v-if="showPopup" class="user-popup">
        <popup-user-info :authorId="author.id" />
      </div>
      <span class="name" @mouseover="toggle">
				<nuxt-link class="link" :to="`/m/${author.slug}`">
        	{{author.firstName}} {{author.lastName}}
				</nuxt-link>
			</span>
      <div>
        <!-- <span class="role">
          role
        </span> -->
        <span class="role">
          {{author.rank}}
        </span>
      </div>
      <div>
        <time class="date-created">
          {{publishedAtFormat}}
        </time>
      </div>
    </div>
    <div class="element follow-me">
      <button class="click-for-follow follow">
        Follow
      </button>
      <button class="click-for-follow unfollow">
        Unfollow
      </button>
    </div>
  </div>
</template>

<script>
import PopupUserInfo from '~/components/universal-components/popup-user-info.vue'

export default {
  components: {
    PopupUserInfo
	},
	props: {
		author: Object,
		publishedAt: String
	},
  data () {
    return {
			showPopup: false,
			publishedAtFormat: String
    }
	},
	created () {
		this.publishedAtFormat = new Date(this.publishedAt).toDateString()
	},
  methods: {
    toggle () {
      this.showPopup = true
    },
    hide () {
      this.showPopup = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/utils/variables";
  @import "../../assets/utils/colors";

  .about-user-in-post {
    height: 100%;
    display: flex;

    .user-popup {
      padding: 1.5em 1.2em 0.8em 1.2em;
      border-radius: 2px;
      background-color: $white;
      position: absolute;
      top: 30px;
      z-index: 3;
      max-width: 20em;
      min-height: 300px;
      min-width: 250px;
      width: 100%;
      border: 1px solid $dedede;
      border-radius: 4px;
      // visibility: hidden;
      opacity: 1;
      -webkit-box-shadow: 2px 4px 16px 0 $shark026;
      box-shadow: 2px 4px 16px 0 $shark026;
      font-family: "Open Sans";

      &::before {
        content: '';
        border-left: 1px solid $secondary-bgcolor;
        border-top: 1px solid $secondary-bgcolor;
        position: absolute;
        top: -8px;
        right: 80%;
        background: $whiteFE;
        width: 15px;
        height: 15px;
        z-index: 5;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }

    .element {
      display: inline-block;
      margin-right: 1em;
      height: 100%;

      &.information {
        .role {
          display: grid;
          line-height: 1;
          font-size: .8em;
          margin-bottom: .4em;
          font-family: "Open Sans";
        }

        .name {
          display: grid;
          font-weight: 600;
          transition: color .25s;
          font-family: "Open Sans";
          font-size: 16px;
          cursor: pointer;

          &:hover {
            color: $primary_color;
            transition: 0.3s;
          }
					.link {
						text-decoration: none;
						color: inherit;
					}
        }

        .date-created {
          display: grid;
          font-size: .9em;
          letter-spacing: -.2px;
          line-height: 1;
          font-family: "Open Sans";
          font-weight: 600;
        }
      }

      .user-profile-info {
        width: 47px;
        height: 47px;
        border-radius: 25px;
        overflow: hidden;
        margin-top: 5px;
      }

      .follow {
        color: $primary_color;
        &:hover {
          background-color: $hover_color;
          color: $white;
        }
      }
      .unfollow {
        color: #474747;
        border-color:#474747;
        &:hover {
          background-color: #474747;
          color: $white;
        }
      }

      .click-for-follow {
        font-size: .75rem;
        padding: .55em 1.4em;
        text-transform: none;
        letter-spacing: .9px;
        border-radius: 5px;
        vertical-align: text-top;
        margin-bottom: 0;
        font-weight: 400;
        pointer-events: all;
        background: 0 0;
        border: 1px solid;
        line-height: 1;
        text-align: center;
        transition: 0.3s;
        cursor: pointer;
      }
    }
    .follow-me {
      display: flex;
      align-items: center;
    }
  }
</style>
