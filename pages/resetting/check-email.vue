<template>
  <div class="login-popup">
    <div class="block-login" style="padding: 2.4rem 3rem 0em;">
      <div class="col-12">
        <h3 class="form-title">Log In</h3>
      </div>
      <div class="input-block">
        An email has been sent. It contains a link you must click to reset your password.
        Note: You can only request a new password once within 2 hours.
        If you don't get an email check your spam folder or try again.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "notAuth"
};
</script>
