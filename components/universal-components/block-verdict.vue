<template>
  <div class="verdict__block" :class="small ? '' : 'shadow'">
    <svg :width="small ? 33 : 40 " height="40">
      <use xlink:href="#verdict-icon-selected" />
    </svg>
    <span class="px-2 px-md-3">{{verdict}}%</span>
  </div>
</template>

<script>
export default {
  props: {
    verdict: Number | String,
    small: Boolean
  }
};
</script>

<style lang="scss">
.shadow {
  box-shadow: 2px 4px 16px 0 rgba(35, 36, 40, 0.4);
}
.verdict__block {
  font-size: 100%;
  font-weight: 700;
  font-size: 20px;
  box-sizing: inherit;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background: #fff;
  max-width: 7.5em;
  z-index: 2;
  color: inherit;
}
</style>
