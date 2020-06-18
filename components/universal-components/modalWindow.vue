<template>
  <div class="c_modal">
    <div class="c_modal-wrapper opened">
      <div class="c_modal-reveal delete-form-wrap opened">
				<!-- (click)="profileStore.changeModal(false)" -->
        <button class="close-modal" @click="closeModal">×</button>
        <div class="c_modal-content">
          <div class="delete-form-wrap" id="confirm-delete-modal">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	methods: {
		closeModal () {
			this.$emit('closeModal')
		}
	}
}
</script>

<style lang="scss" scoped>
.c_modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(40, 40, 40, 0.8);
  width: 100%;
  height: 100%;
  padding: 5.5em 2em 2em;
  .c_modal-wrapper {
    display: flex;
    justify-content: center;
    .form-header {
      input {
        -webkit-font-smoothing: antialiased;
        pointer-events: all;
        visibility: visible;
        box-sizing: inherit;
        font-size: 100%;
        margin: 0;
        overflow: visible;
        font-family: inherit;
        margin-bottom: 1em;
        border: 1px solid #c6c6c6;
        border-radius: 2px;
        padding: 0.65em;
        line-height: 1.25;
      }
    }
    .close-modal {
      padding: 0;
      font-size: 2.5rem;
      line-height: 1;
      background: 0 0;
      border: none;
      position: absolute;
      top: 5px;
      right: 11px;
      color: #ff4242;
      font-weight: 700;
      cursor: pointer;
      z-index: 20;
    }
    .c_modal-reveal {
      font-size: 100%;
      border-radius: 8px;
      position: relative;
      background: #fff;
      box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.4);
      transition: opacity 0.15s 0.3s ease, visibility 0.15s 0.3s ease,
        transform 0.2s 0.3s ease-in-out, -webkit-transform 0.2s 0.3s ease-in-out;
      text-align: center;
      max-width: 26rem;
      width: 95%;
      .c_modal-content {
        padding: 2em;
      }
      .form-merge {
        display: flex;
        flex-direction: column;
        input {
          font-family: inherit;
          width: 100%;
          border: 1px solid #c6c6c6;
          border-radius: 2px;
          padding: 0.65em;
          line-height: 1.25;
          margin-bottom: 16px;
        }
        p {
          margin-right: auto;
        }
      }
      h4 {
        font-size: 100%;
        line-height: 1.5;
        font-weight: 700;
        visibility: visible;
        box-sizing: inherit;
        margin-top: 0;
      }
      span {
        display: block;
        font-size: 100%;
        border: 1px solid;
        cursor: pointer;
        font-weight: 700;
        letter-spacing: 0.8px;
        padding: 0.85em 1.4em 0.8em 1.4em;
        transition: background-color 0.25s ease-out, color 0.25s ease-out;
        line-height: 14.4px;
      }
      .form-wrap-confirm {
        display: flex;
        justify-content: center;
        .confirm {
          color: #ff4242;
          border-color: #ff4242;
          &:hover {
            border-color: #a10000;
            color: #fff;
            background-color: #bc2d2d;
          }
        }
      }

    }
  }
}
</style>
