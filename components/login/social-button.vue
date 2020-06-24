<template>
  <div class="login-social-button">
    <div class="row">
      <div v-for="icon in social" :key="icon" class="col-12 col-sm-6">
        <div class="social-button">
          <a href="#">
            <div class="icon" :class="icon">
              <svg width="29" height="29">
                <use v-bind:xlink:href="`#${icon}`" />
              </svg>
            </div>
            <div :class="icon + '-color'" class="social-name">
              <span>Using {{ icon }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      social: ["facebook", "google", "twitter", "linkedin"]
    };
  }
};
</script>

