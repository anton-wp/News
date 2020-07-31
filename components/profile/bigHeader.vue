<template>
  <div v-if="$isAMP">
    <div class="container">
      <div class="text-center">
        <amp-img
          class="author-img"
          src="/image/default-avatar-original.png"
          v-if="!userAuthor.avatar"
          width="200"
          height="200"
        ></amp-img>
        <amp-img
          :src="userAuthor.avatar.big"
          class="author-img"
          v-if="userAuthor.avatar"
          width="200"
          height="200"
        ></amp-img>

        <h2 class="author-name">{{userAuthor.firstName}} {{userAuthor.lastName}}</h2>
        <p
          class="author-date"
        >{{userAuthor.rank}} since: {{ new Date(userAuthor.createdAt).toDateString()}}</p>

        <div class="author-info">
          <p class="author-info__rank">{{userAuthor.rank}}</p>
          <p class="author-info__points">
            <span>{{userAuthor.points}}</span> V-rep
          </p>
        </div>
      </div>

      <div class="author-stats">
        <div class="author-stats__item">
          <p class="count">{{userAuthor.postsCount }}</p>
          <p class="title">Posts</p>
        </div>
        <div class="author-stats__item">
          <p class="count">{{userAuthor.verdictsCount }}</p>
          <p class="title">Verdicts</p>
        </div>
        <div class="author-stats__item">
          <p class="count">{{userAuthor.commentsCount }}</p>
          <p class="title">Comments</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="bigHeader">
    <div class="container">
      <div class="row bigHeader-row">
        <div class="image-block col-sm-auto">
          <div class="img">
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
            <div class="addPhoto" v-if="!slug" v-on:click="submitFile()">
              <svg width="22" height="19">
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
            <div class="d-none d-md-block">
              <p class="vrep-count">{{$store.state.profile.points}}</p>
              <p class="vrep-title">V-rep</p>
            </div>
            <div class="follow-block" v-if="slug">
              <follow-buttons full :id="$store.state.profile.id" />
            </div>
          </div>
        </div>
        <div class="d-block d-md-none">
          <h4 class="your-name mb-0 mb-md-2 bigHeader-row">{{$store.state.profile.firstName}} {{$store.state.profile.lastName}}</h4>
          <p
            class="member-since bigHeader-row"
          >{{$store.state.profile.rank}} since: {{ new Date($store.state.profile.createdAt).toDateString()}}</p>
          <div class="d-flex stat">
            <div class="wrapper-statistic bigHeader-row__vRep">
              <p class="statistic-count">{{ $store.state.profile.postsCount }}</p>
              <p class="statistic-title">Posts</p>
            </div>
            <div class="wrapper-statistic bigHeader-row__vRep">
              <p class="statistic-count">{{ $store.state.profile.verdictsCount }}</p>
              <p class="statistic-title">Verdicts</p>
            </div>
            <div class="wrapper-statistic bigHeader-row__vRep">
              <p class="statistic-count">{{ $store.state.profile.commentsCount }}</p>
              <p class="statistic-title">Comments</p>
            </div>
          </div>
          <div class="bigHeader-row__vRep">
            <p class="vrep-count">{{$store.state.profile.points}}</p>
            <p class="vrep-title">V-rep</p>
          </div>
        </div>
        <div class="d-none d-md-block" style="flex: 1 1 0px;">
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
        <div class="col-12 col-sm-auto ml-auto stat d-none d-md-block">
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
    FollowButtons,
  },

  props: {
    userAuthor: Object,
  },
  data() {
    return {
      profile: Object,
      slug: String,
      file: "",
    };
  },

  methods: {
    getProfileFull() {
      this.$axios
        .$get(`/api/profile/full`)
        .then((res) => {
          this.$store.dispatch("GET_PROFILE", res.data);
        })
        .catch((error) => console.error(error));
    },
    updateAvatar(img) {
      const formData = new FormData();
      if (img) {
        formData.append("avatar", img);
      }
      this.$axios
        .$put(`/api/profile/update-avatar`, formData)
        .then((res) => {
          this.$toasted.show(res.message);
          this.$store.dispatch("CLEAR_PROFILE");
          this.getProfileFull();
        })
        .catch((error) => console.error(error));
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
    },
  },

  created() {
    this.slug = this.$route.params.slug;
  },
};
</script>
