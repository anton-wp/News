<template>
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
        <p class="member-since">{{$store.state.profile.rank}} since: {{ new Date($store.state.profile.createdAt).toDateString()}}</p>
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
	computed: {

	},
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
        case 'author':
        return false;
        default:
        return true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/utils/variables";
@import "../../assets/utils/colors";

.menu {
  display: inline-block;
  margin-right: 10px;
}

.container {
  max-width: $global-width;
  font-family: open sans, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;

  .stat {
    text-align: end;
    margin-top: 15px;

    .wrapper-statistic {
      display: inline-block;
      margin: 0 15px;
      text-align: center;
      min-width: 80px;

      .statistic-title {
        line-height: 1.9;
        font-weight: 600;
        color: $primary-color;
        letter-spacing: 0.5px;
        font-size: 100%;
        font-family: "Open Sans", sans-serif;
      }

      .statistic-count {
        font-family: "Open Sans", sans-serif;
        line-height: 1;
        color: $black;
        letter-spacing: 0.5px;
        font-size: 2.1em;
        font-weight: 400;
        margin-bottom: 0px;
      }
    }
  }

  .breadcrumbs {
    font-size: 11px;
    font-weight: 400;
    margin-top: 7px;
    margin-bottom: 1em;

    span {
      font-size: 10px;
      margin: 0 2px;
    }

    a {
      text-decoration: none;
      color: rgb(10, 10, 10);

      &:hover {
        color: #ff4242;
      }
    }

    p {
      display: contents;
    }
  }

  .addPhoto {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 8%;
    top: 2%;
    z-index: 3;
    text-align: center;
    color: white;
    background-color: #ff4242;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    fill: $white;
  }

  .img {
    position: relative;
    // border-radius: 50%;
    // overflow: hidden;
    // border-radius: 50%;
    max-width: 230px;
    max-height: 230px;

    margin: 0.9em auto;

    #file {
      opacity: 0;
      display: none;
    }

    img {
      border-radius: 50%;
      border: 8px solid #f4f4f4;
    }

    .icon-add-photo {
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: red;
    }

    .default-avatar {
      width: 100%;
      height: 100%;
      max-width: 214px;
      max-height: 214px;
      min-height: 100%;
    }
  }

  .follow-block {
    display: flex;
    justify-content: center;
  }

  .about-your-role {
    text-align: center;

    .your-role {
      margin-bottom: 0.4em;
      font-size: 1.1em;
      font-weight: 600;
    }

    .vrep-count {
      color: #e0a31b;
      font-size: 2.2em;
      font-weight: 200;
      line-height: 1.15;
      margin-bottom: 0px;
    }

    .vrep-title {
      font-size: 1em;
    }
  }
  .your-name {
    letter-spacing: 0.35px;
    margin: 0.2em 0 0.4em 0;
    font-size: 1.8em;
    font-weight: 700;
    font-family: "Open Sans", sans-serif;
  }

  .mail-content {
    margin-top: 25px;

    .mail-wrapper {
      background-color: #ffbb28;
      color: $white;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      overflow: hidden;
      text-align: center;
      line-height: 40px;
      font-size: 20px;
    }
  }

  .member-since {
    font-size: 0.9em;
    font-weight: 700;
  }
}

@media (max-width: 576px) {
  .container {
    .your-name,
    .member-since,
    .stat {
      text-align: center;
    }

    .mail-content {
      display: none;
    }

    .your-name {
      font-size: 1.5em;
    }

    .your-role {
      font-size: 0.85em;
    }
  }
}
</style>
