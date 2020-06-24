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
				<nuxt-link class="link" :to="`/m/${author.slug}/posts`">
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
          {{ new Date(this.publishedAt).toDateString() }}
        </time>
      </div>
    </div>
    <div class="element follow-me">
      <follow-buttons :id="author.id"/>
    </div>
  </div>
</template>

<script>
import PopupUserInfo from '~/components/universal-components/popup-user-info.vue'
import FollowButtons from "~/components/universal-components/Follow-Buttons";

export default {
  components: {
		PopupUserInfo,
		FollowButtons
	},
	props: {
		author: Object,
		publishedAt: String
	},
  data () {
    return {
			showPopup: false,
    }
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
