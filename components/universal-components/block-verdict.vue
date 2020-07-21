<template>
  <div class="verdict__block">
    <svg width="40" height="40">
      <use xlink:href="#verdict-icon-selected" />
    </svg>
    <span>{{verdict}} %</span>
  </div>
</template>

<script>
export default {
  props: {
    verdict: Number|String
  }
};
</script>

<style lang="scss">
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
  box-shadow: 2px 4px 16px 0 rgba(35, 36, 40, 0.4);
  z-index: 2;
  color: inherit;
  span {
    padding: 0 12px;
  }
}
</style>
