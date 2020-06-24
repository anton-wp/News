<template>
  <div class="contact">
    <div class="terms-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="wrapper-terms">
              <h1 class="terms-page-title">CONTACT</h1>
              <p class="text">Verdict Membership Questions</p>
              <p
                class="text"
              >For any question related to your Verdict Member account please contact:</p>
              <p class="text">
                Verdict Members Team -
                <a class="terms-text-link">members@verdict.org</a>
              </p>
              <br />
              <br />
              <div class="paragraph">
                <p class="text">Verdict Technical Problems</p>
                <p class="text">For any question related to Verdict Site or App please contact:</p>
                <p class="text">
                  Verdict Support Team -
                  <a class="terms-text-link">support@verdict.org</a>
                </p>
              </div>
              <br />
              <br />
              <div class="paragraph">
                <p class="text">Verdict Content Questions</p>
                <p
                  class="text"
                >For any question related to Content on Verdict Site or App please contact:</p>
                <p class="text">
                  Verdict Content Team -
                  <a class="terms-text-link">content@verdict.org</a>
                </p>
              </div>
              <br />
              <br />
              <div class="paragraph">
                <p class="text">Verdict Development</p>
                <p class="text">For any question related to Verdict development including ideas:</p>
                <p class="text">
                  Verdict Community Team -
                  <a class="terms-text-link">community@verdict.org</a>
                </p>
              </div>
              <br />
              <br />
              <br />
              <div class="paragraph">
                <p class="text">Other Questions About Verdict:</p>
                <p class="text">For all other questions please fill out the form below:</p>
              </div>
              <form class="form">
                <div class="input-unit">
                  <h3>Your Name (required)</h3>
                  <input formControlName="name" />
                  <div>
                    <div class="errors">Name is required</div>
                  </div>
                </div>
                <div class="input-unit">
                  <h3>Your Email (required)</h3>
                  <input formControlName="email" />
                  <div>
                    <div class="errors">Email is required</div>
                    <div class="errors">Email must be a valid email address</div>
                  </div>
                </div>
                <div class="input-unit">
                  <h3>Your Message</h3>
                  <textarea formControlName="message" />
                  <div>
                    <div class="errors">Message is required</div>
                  </div>
                </div>
                <div class="input-unit">
                  <div class="reCaptcha">
                    <!-- <re-captcha
                    (resolved)="resolved($event)"
                    formControlName="recaptchaReactive"
                    siteKey="6Lcp8vkUAAAAAA2t0VjE6zLLHFEW1Td_OYuoTKUF"
                    ></re-captcha>-->
                  </div>
                  <div>
                    <div class="errors">Press the reСaptch</div>
                  </div>
                </div>
                <button type="submit" class="signup-btn">Send mail</button>
              </form>
            </div>
          </div>
          <div class="col-lg-4">
            <follow />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Follow from "~/components/universal-components/followBlock.vue";

export default {
  components: {
    Follow
  },
  created() {
    this.$store.commit("SET_BREADCRUMBS", [{ title: "Contact" }]);
  }
};
</script>

