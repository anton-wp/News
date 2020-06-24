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
    closeModal() {
      this.$emit("closeModal");
    }
  }
};
</script>
