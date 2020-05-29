<template>
  <div class="terms-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="wrapper-terms">
            <h1 class="terms-page-title">
              CONTACT
            </h1>
            <p class="text">
              Verdict Membership Questions
            </p>
            <p class="text">
              For any question related to your Verdict Member account please contact:
            </p>
            <p class="text">
              Verdict Members Team -<a class="terms-text-link">members@verdict.org</a>
            </p>
            <br>
            <br>
            <div class="paragraph">
              <p class="text">
                Verdict Technical Problems
              </p>
              <p class="text">
                For any question related to Verdict Site or App please contact:
              </p>
              <p class="text">
                Verdict Support Team -
                <a class="terms-text-link">support@verdict.org</a>
              </p>
            </div>
            <br>
            <br>
            <div class="paragraph">
              <p class="text">
                Verdict Content Questions
              </p>
              <p class="text">
                For any question related to Content on Verdict Site or App please contact:
              </p>
              <p class="text">
                Verdict Content Team -
                <a class="terms-text-link">content@verdict.org</a>
              </p>
            </div>
            <br>
            <br>
            <div class="paragraph">
              <p class="text">
                Verdict Development
              </p>
              <p class="text">
                For any question related to Verdict development including ideas:
              </p>
              <p class="text">
                Verdict Community Team -
                <a class="terms-text-link">community@verdict.org</a>
              </p>
            </div>
            <br>
            <br>
            <br>
            <div class="paragraph">
              <p class="text">
                Other Questions About Verdict:
              </p>
              <p class="text">
                For all other questions please fill out the form below:
              </p>
            </div>
            <form class="form" [formGroup]="messageForm" (ngSubmit)="sendMail()">
              <div class="input-unit">
                <h3>
                  Your Name (required)
                </h3>
                <input formControlName="name">
                <div>
                  <div class="errors">
                    Name is required
                  </div>
                </div>
              </div>
              <div class="input-unit">
                <h3>Your Email (required)</h3>
                <input formControlName="email">
                <div>
                  <div class="errors">
                    Email is required
                  </div>
                  <div class="errors">
                    Email must be a valid email address
                  </div>
                </div>
              </div>
              <div class="input-unit">
                <h3>Your Message</h3>
                <textarea formControlName="message" />
                <div>
                  <div class="errors">
                    Message is required
                  </div>
                </div>
              </div>
              <div class="input-unit">
                <div class="reCaptcha">
                  <!-- <re-captcha
                    (resolved)="resolved($event)"
                    formControlName="recaptchaReactive"
                    siteKey="6Lcp8vkUAAAAAA2t0VjE6zLLHFEW1Td_OYuoTKUF"
                  ></re-captcha> -->
                </div>
                <div>
                  <div class="errors">
                    Press the reСaptch
                  </div>
                </div>
              </div>
              <button type="submit" class="signup-btn">
                Send mail
              </button>
            </form>
          </div>
        </div>
        <div class="col-lg-4">
          <follow />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Follow from '~/components/universal-components/followBlock.vue'

export default {
  components: {
    Follow
  }
}
</script>

<style lang="scss">
@import "../assets/utils/variables";
@import "../assets/utils/colors";

.background {
  background-color: $secondary-bgcolor;
}

.terms-wrapper {
  font-family: open sans, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
  width: 100%;

  .container {
    max-width: $global-width;

    .wrapper-terms {
      padding-left: 15px;
    }

    .terms-page-title {
      left: -15px;
      text-transform: uppercase;
      font-size: 1.9em;
      line-height: 1.5;
      position: relative;
      color: $dark-gray;
      // font-family: "Open Sans";
      font-weight: bold;
      text-size-adjust: 100%;
      -webkit-box-direction: normal;
      -webkit-font-smoothing: antialiased;
      margin: 0 15px 32px 0;

      &:after {
        content: "";
        background-color: $primary_color;
        height: 3px;
        width: 1.9em;
        position: absolute;
        left: 0.04em;
        bottom: 1px;
      }
    }

    .form {
      width: 100%;
      padding-left: 1em;
      padding-right: 1em;
      margin-top: 16px;

      .input-unit {
        margin-bottom: 1em;

        h3 {
          line-height: 1.5;
          color: #0a0a0a;
          display: inline-block;
          font-weight: 600;
          font-size: 1em;
          letter-spacing: 0.5px;
          margin-bottom: 0.1em;
        }

        input,
        textarea {
          font-size: 100%;
          line-height: 1.15;
          margin: 0;
          width: 100%;
          max-width: 100%;
          padding: 0.8em;

        }
        textarea {
          min-height: 140px;
        }

        .errors {
          color: $hover_color;
        }

        .reCaptcha {
          width: 304px;
        }

        .is-invalid {
          border: 1px solid;
          border-color: $hover_color;
        }
      }

      .signup-btn {
        background-color: $primary_color;
        color: $white;
        cursor: pointer;
        height: 39px;
        padding: 0 20px;
        font-weight: 700;
        font-size: 0.9rem;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        border: none;
        -webkit-appearance: none;
        font-family: "Open Sans";
        &:hover {
          background-color: $hover_color;
        }
      }
    }

    .pargraph {

      li {
        margin: 50px 0;

        .text {
          margin-bottom: 0;
        }
      }

      h5 {
        padding-bottom: 20px;
      }

      .in-text-ul {
        padding-left: 50px;
      }
    }

    .text {
      box-sizing: border-box;
      color: rgb(10, 10, 10);
      font-family: "Open Sans", sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 27px;
      margin-bottom: 0;
      text-size-adjust: 100%;
      -webkit-box-direction: normal;
      -webkit-font-smoothing: antialiased;

      .terms-text-link {
        color: $primary_color;
        text-decoration: underline;
      }
    }

    .tab {
      padding-left: 30px;
    }
  }
}

@media (max-width: 480px) {

  .wrapper-terms {
    padding-right: 0.9375rem;
    padding-left: 0.9375rem;
  }
}
</style>
