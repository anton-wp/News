<template>
  <div class="container">
    <div class="row">
      <div class="img">
        <img
          class="default-avatar"
          src="/image/default-avatar-original.png"
					v-if="!$store.state.profile.avatar"
        >
				<img
					:src="$store.state.profile.avatar.big"
					class="default-avatar"
					v-if="$store.state.profile.avatar"
          />
      </div>
      <div class="author">
        <h4 class="your-name">
          {{$store.state.profile.firstName}} {{$store.state.profile.lastName}}
        </h4>
        <p class="member-since">
          {{$store.state.profile.rank}}
          since:
          <time class="member-since">
        		{{ new Date($store.state.profile.createdAt).toDateString()}}
        	</time>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  border-radius: 50%;
  border: 8px solid;
  border-color: #F4F4F4;
  width: 100px;
  height: 100px;
  margin: 0 15px;
  @media (max-width: 639px) {
    margin: 0 8px;
  }
}
.container {
  margin-top: 10px;
  // margin-left: 15px;
  max-width: 1310px;
  @media (max-width: 639px) {
    margin-left: 5px;
  }
}
h4 {
  line-height: 1.5;
  color: #0a0a0a;
  font-family: open sans,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  box-sizing: inherit;
  letter-spacing: .35px;
  margin: .2em 0 0;
  font-size: 1.7em;
  font-weight: 700;
}
p{
  font-size: 100%;
  line-height: 1.5;
  color: #0a0a0a;
  font-family: open sans,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  box-sizing: inherit;
  font-weight: 700;
  @media (max-width: 1023px) {
    font-size: 14.4px;
  }
  time {
    @media (max-width: 540px) {
      display: block;
    }
  }
}
.author {
  margin-left: 15px;
  @media (max-width: 460px) {
    text-align: center;
    width: calc(100% - 150px);
  }
}
</style>
