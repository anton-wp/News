<template>
  <div class="login-social-button">
    <div class="row mx-0 mr-md-n3">
      <div v-for="icon in social" :key="icon" class="social-button-block">
        <div class="social-button">
          <a href="#">
            <div class="icon" :class="icon">
              <svg>
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

