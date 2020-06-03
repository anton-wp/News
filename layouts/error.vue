<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="content-404">
          <svg class="img404">
            <use xlink:href="#error404" />
          </svg>
          <h2>not found!</h2>
          <p>
            We're sorry, the page you have looked for does not exist in our content! Perhaps you would like to go
            to our homepage or try searching below.
          </p>
          <div class="search-form" id="addPostForm">
            <div class="form-body">
              <div class="search-input-wrapper">
                <input
                  v-model="search"
                  type="search"
                  formControlName="search"
                  autocomplete="off"
                  name="q"
                  placeholder="Search"
                  @keyup.enter="activeSearch"
                >
                <button class="clear" type="button">
                  <nuxt-link :to="{ path: '/search', query: { q: search }}">
                    <i class="icons color-primary">
                      <svg width="20" height="20">
                        <use xlink:href="#search-icon" />
                      </svg>
                    </i>
                  </nuxt-link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="col-12">
      <h1 class="category-page-title">latest news</h1>
      </div>-->

      <!-- <div class="col-12 content">
        <div class="row">
          <div class="col-12">
            <h1 class="category-page-title">latest news</h1>
          </div>
          <ng-container *ngFor="let post of postStore.postForSideBar">
            <vrd-vdc
              class="col-sm-12 col-md-6 col-lg-3"
              type="second-block"
              [defaultPost]="post"
              [padding]="true"
            ></vrd-vdc>
          </ng-container>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog', // you can set a custom layout for the error page
  data () {
    return {
      search: ''
    }
  },
  methods: {
    activeSearch () {
      if (this.search) {
        this.$router.push({ path: '/search', query: { q: this.search } })
      }
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../assets/utils/variables";
@import "../assets/utils/colors";

.content-404 {
  padding: 6.3em 2em 1.9em;
  max-width: 470px;
  margin: 0 auto;
  color: #0a0a0a;
  -webkit-font-smoothing: antialiased;
  font-family: open sans, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
  -webkit-box-direction: normal;
  box-sizing: inherit;
  text-align: center;
  .img404 {
    width: 100%;
  }
}
@media screen and (max-width: 48em) {
  .content-404 svg {
    max-width: 320px;
    // margin: 0 auto;
  }
}
@media screen and (max-width: 48em) {
  .content-404 h2 {
    font-size: 2.2em;
    text-align: center;
    padding-left: 1.8em;
  }
}
h2 {
  text-align: right;
  text-transform: uppercase;
  font-size: 3.3em !important;
  line-height: 1.4 !important;
  letter-spacing: 4px;
  margin: 0 -7px 0 0;
  font-weight: 700 !important;
}
p {
  text-align: left;
  font-weight: 600;
  font-size: 1em;
  line-height: 1.3;
  margin: 1.4em 0;
  overflow-wrap: normal;
  word-wrap: normal;
  word-break: normal;
  line-break: auto;
}
.search-form {
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  // width: 100%;
  margin-top: 0.6em;
  margin-bottom: 2.9em;
  font-size: 1.3em;
}
input {
  font-size: 100% !important;
  line-height: 1.15 !important;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  width: 100%;
  font-weight: 600;
  padding: 0.4em 2em 0.4em 0.6em;
  border: 1px solid #8d8d8d;
  color: #0a0a0a;
}
button {
  font-size: 100%;
  margin: 0;
  overflow: visible;
  text-transform: none;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: 0 0;
  line-height: 1;
  font-family: inherit;
  -webkit-appearance: button;
  position: absolute;
  right: 0.5em;
  top: 40%;
  transform: translateY(-50%);
  transition: fill 0.25s ease-out;
  cursor: pointer;
}
i {
  font-size: 100%;
  text-transform: none;
  line-height: 1;
  font-family: inherit;
  cursor: pointer;
  box-sizing: inherit;
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  color: $primary_color;
  fill: inherit;
}
.search-input-wrapper {
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  box-sizing: border-box;
  position: relative;
}
.category-page-title {
  padding-left: 10px;
  padding-bottom: 15px;
  // margin-bottom: 30px;
  text-transform: uppercase;
  font-size: 1.4em;
  font-weight: 700;
  line-height: 16px;
  margin: 0;
  position: relative;
  color: #696969;
  font-family: "Open Sans";
  font-weight: bold;
  text-size-adjust: 100%;
  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;
  margin: 15px 15px 30px 0;
  &:after {
    content: "";
    background-color: $primary_color;
    height: 3px;
    width: 3em;
    position: absolute;
    left: 0.04em;
    bottom: 1px;
  }
}

.content {
  padding: 0 30px;
  max-width: 1280px;
  margin: 0 auto;
  margin-bottom: 2em;
  @media (max-width: 576px) {
    padding: 0 40px;
  }
}
</style>
