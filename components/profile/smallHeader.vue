<template>
  <div class="container">
    <div class="row">
      <div class="img">
        <img
          class="default-avatar"
          src="/image/default-avatar-original.png"
        >
        <!-- <img
          *ngIf="profileStore.profile?.avatar?.medium"
          class="default-avatar"
          [src]="profileStore.profile?.avatar?.medium"
        /> -->
      </div>
      <div class="author">
        <h4 class="your-name">
          firstName lastName
        </h4>
        <p class="member-since">
          rank since:
          time
          <!-- <time
            datetime="{{profileStore.profile.createdAt}}"
          >{{profileStore.profile.createdAt | date:'MMM d,y h:mm a' }}</time> -->
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
