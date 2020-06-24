<template>
  <div class="bigHeader">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-3">
          <div class="img">
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
            <div class="addPhoto" v-if="!slug" v-on:click="submitFile()">
              <svg width="24" height="27">
                <use xlink:href="#camera" />
              </svg>
            </div>
            <img
              class="default-avatar"
              src="/image/default-avatar-original.png"
              v-if="!$store.state.profile.avatar"
            />
            <img
              :src="$store.state.profile.avatar.big"
              class="default-avatar"
              v-if="$store.state.profile.avatar"
            />
          </div>
          <div class="about-your-role">
            <p class="your-role">{{$store.state.profile.rank}}</p>
            <div class>
              <p class="vrep-count">{{$store.state.profile.points}}</p>
              <p class="vrep-title">V-rep</p>
            </div>
            <div class="follow-block" v-if="slug">
              <follow-buttons full :id="$store.state.profile.id" />
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-5">
          <h4 class="your-name">{{$store.state.profile.firstName}} {{$store.state.profile.lastName}}</h4>
          <p
            class="member-since"
          >{{$store.state.profile.rank}} since: {{ new Date($store.state.profile.createdAt).toDateString()}}</p>
          <div class="mail-content">
            <div class="mail-wrapper">
              social
              <!-- <fa-icon [icon]="faEnvelope"></fa-icon> -->
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-4 stat">
          <div class="wrapper-statistic">
            <p class="statistic-count">{{ $store.state.profile.postsCount }}</p>
            <p class="statistic-title">Posts</p>
          </div>
          <div class="wrapper-statistic">
            <p class="statistic-count">{{ $store.state.profile.verdictsCount }}</p>
            <p class="statistic-title">Verdicts</p>
          </div>
          <div class="wrapper-statistic">
            <p class="statistic-count">{{ $store.state.profile.commentsCount }}</p>
            <p class="statistic-title">Comments</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FollowButtons from "~/components/universal-components/Follow-Buttons";

export default {
  components: {
    FollowButtons
  },
  data() {
    return {
      profile: Object,
      slug: String,
      file: ""
    };
  },
  created() {
    this.slug = this.$route.params.slug;
  },
  computed: {},
  methods: {
    getProfileFull() {
      this.$http
        .get(`/api/profile/full`)
        .then(res => {
          this.$store.dispatch("GET_PROFILE", res.data.data);
        })
        .catch(error => console.error(error));
    },
    updateAvatar(img) {
      const formData = new FormData();
      if (img) {
        formData.append("avatar", img);
      }
      this.$http
        .put(`/api/profile/update-avatar`, formData)
        .then(res => {
          this.$toasted.show(res.data.message);
          this.$store.dispatch("CLEAR_PROFILE");
          this.getProfileFull();
        })
        .catch(error => console.error(error));
    },
    handleFileUpload() {
      this.updateAvatar(this.$refs.file.files[0]);
      // this.file = this.$refs.file.files[0];
    },
    submitFile() {
      document.getElementById("file").click();
    },
    typeTabs() {
      switch (this.$route.matched[0].components.default.extendOptions.layout) {
        case "author":
          return false;
        default:
          return true;
      }
    }
  }
};
</script>
