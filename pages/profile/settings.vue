<template>
  <div>
    <form class="primary-form">
      <div class="container account">
        <div class="row">
          <div class="col-12 blockTitle">
            <h4 class="title">Account</h4>
          </div>
          <div class="col-12 email">
            <div class="row container-fluid string">
              <h5 class="col-12 col-xl-3 text-xl-right">Email</h5>
              <input
                class="col-12 col-sm-5 col-xl-3 email"
                type="text"
                placeholder="Email"
              />
              <label class="col-4 col-sm-3 col-lg-2 labelRadio">
                <span class="custom-radio">
                	<div class="active-radio" v-if="emailType === 'public'" />
                </span>
                <input type="radio" class="radioEmail" id="emailType" value="public" v-model="emailType" />
                public
              </label>
              <label class="col-4 col-sm-3 col-lg-2 labelRadio">
                <span class="custom-radio">
                	<div class="active-radio" v-if="emailType === 'private'" />
                </span>
                <input type="radio" class="radioEmail" id="emailType" value="private" v-model="emailType" />
                private
              </label>
            </div>
            <div class="row container-fluid string">
              <h5 class="col-12 col-xl-3 text-xl-right">Phone</h5>
              <div class="col-12 col-sm-7 col-xl-6 phone">
                <!-- *ngIf="profileStore.verified" -->
                <div class="disabled"></div>
                <!-- <ngx-intl-tel-input
							[cssClass]="'custom'"
							[preferredCountries]="preferredCountries"
							[enableAutoCountrySelect]="false"
							[enablePlaceholder]="true"
							[searchCountryFlag]="true"
							[searchCountryField]="[SearchCountryField.Iso2, SearchCountryField.Name]"
							[selectFirstCountry]="false"
							[selectedCountryISO]="CountryISOactive"
							[maxLength]="15"
							[tooltipField]="TooltipLabel.Name"
							[phoneValidation]="true"
							[separateDialCode]="separateDialCode"
							name="phone" formControlName="phone">
                </ngx-intl-tel-input>-->
                <!-- [ngClass]="{active:profileStore.verified, inactive: !profileStore.verified }" (click)="verifiedPhone()" -->
                <div class="verified">
                  <svg width="12" height="15">
                    <use xlink:href="#shield" />
                  </svg>
                  <!-- *ngIf="profileStore.verified" -->
                  <span>Verified</span>
                  <!-- *ngIf="!profileStore.verified" -->
                  <span>Verify</span>
                </div>
                <!-- (click)="changeVerified()" -->
                <button class="col-12 text-left button-change">change</button>
              </div>
            </div>
            <div class="row container-fluid string">
              <h5 class="col-12 col-xl-3 text-xl-right">First Name</h5>
               <!-- formControlName="firstName" -->
			  <input
                class="col-12 col-sm-5 col-xl-3"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div class="row container-fluid string">
              <h5 class="col-12 col-xl-3 text-xl-right">Last Name</h5>
                <!-- formControlName="lastName" -->
              <input
                class="col-12 col-sm-5 col-xl-3"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div class="row container-fluid string">
              <h5 class="col-12 col-xl-3 text-xl-right">About me</h5>
                <!-- formControlName="aboutMe" -->
              <textarea
                class="col-12 col-sm-12 col-xl-9"
                type="text"
                placeholder="Tell something about yourself..."
              ></textarea>
            </div>
            <div class="row container-fluid string">
              <h5 class="col-12 col-xl-3 text-xl-right">Profile visibility</h5>
              <label class="col-4 col-sm-3 col-lg-2 labelRadio">
               <span class="custom-radio">
					<div class="active-radio" v-if="profileVisibility === 'public'" />
                </span>
                <input
                  type="radio"
                  class="profileVisibility"
                  value="public"
				  v-model="profileVisibility"
                />
                public
              </label>
              <label class="col-4 col-sm-3 col-lg-2 labelRadio">
                <span class="custom-radio">
					<div class="active-radio" v-if="profileVisibility === 'private'" />
                </span>
                <input
                  type="radio"
                  class="profileVisibility"
				  value="private"
				  v-model="profileVisibility"
                />
                private
              </label>
            </div>
            <div class="row container-fluid string">
              <h5 class="col-12 col-xl-3 text-xl-right">Password</h5>
              <div class="col-12 col-sm-12 col-xl-9 block-change-password">
                  <!-- *ngIf="!changePasswordBlock"
                  (click)="visibleChangePasswordBlock()" -->
                <button
                  class="col-12 text-left button-change"
                  v-if="!changePassword"
                  @click="visibleChangePasswordBlock"
                >change password</button>
				<!-- *ngIf="changePasswordBlock" -->
                <div style="margin-top: 25px;" v-if="changePassword">
                    <!-- formControlName="oldPassword" -->
                  <input
                    class="col-12 col-sm-4 col-xl-4"
                    type="password"
                    placeholder="old password"
                  />
                    <!-- formControlName="newPassword" -->
                  <input
                    class="col-12 col-sm-4 col-xl-4"
                    type="password"
                    placeholder="new password"
                  />
                    <!-- formControlName="repeatNewPassword" -->
                  <input
                    class="col-12 col-sm-4 col-xl-4"
                    type="password"
                    placeholder="repeat new password"
                  />
                  <div class="block-button text-right">
					   <!-- (click)="visibleChangePasswordBlock()" -->
                    <button class="cancel" @click="visibleChangePasswordBlock">cancel</button>
					<!-- (click)="changePassword()"  -->
                    <button class="update">update profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="container">
        <div class="row">
          <div class="col-12 blockTitle">
            <h4 class="title">Social profiles</h4>
          </div>
          <div class="row container-fluid string">
            <h4 class="col-12 col-xl-3 text-xl-right">Linked accounts</h4>
            <div class="col-12 col-sm-12 col-xl-9">
              <a class="social" :class="social" v-for="social in socialProfilesAccount" :key="social">
                <svg width="21" height="21">
					<use v-bind:xlink:href="`#${social}`" />
				</svg>
                <p>connect {{social}}</p>
              </a>
            </div>

            <!-- <input class="col-12 col-sm-5 col-xl-3" type="text" formControlName="firstName" placeholder="First Name"> -->
          </div>
        </div>
      </div>
      <hr />
      <div class="container">
        <div class="row container-fluid string" v-for="profile in socialProfiles" :key="profile" style="text-transform: capitalize;">
          <h5 class="col-12 col-xl-3 text-xl-right">{{profile}} Profile</h5>
            <!-- formControlName="facebookProfile" -->
          <input
            class="col-12 col-sm-5 col-xl-3"
            type="text"
            v-bind:placeholder="`https://${profile}.com/profile`"
          />
        </div>
      </div>
      <hr />
      <div class="container">
        <div class="row container-fluid string followingCategories">
          <h4 class="col-12 col-xl-3 title">Following Categories</h4>
          <div class="col-12 col-xl-9">
              <!-- *ngFor="let category of profileStore.categoryList"
              (click)="changeActive(category.id)" -->
            <label
              class="col-12 col-sm-6 col-md-4"
			  v-for="category in followingCategories"
			  :key="category.id"
            >
				<div class="categoryCheckbox">
				  <svg width="10" height="10" v-if="followingCategoriesActive.filter(follow => follow === category.id).length > 0">
					<use xlink:href="#checkbox" />
				  </svg>
				</div>
				<input type="checkbox" id="category.id" :value="category.id" v-model="followingCategoriesActive">
				<div class="categoryTitle">{{category.name}}</div>
            </label>
          </div>
        </div>
      </div>
      <hr />
	  <div class="container">
		<div class="row">
			<div class="col-12 blockTitle">
				<h4 class="title">Notification settings</h4>
			</div>
			<div class="row container-fluid string">
				<h4 class="col-12 col-xl-3 text-xl-right">Send me notifications when</h4>
				<div class="col-12 col-sm-12 col-xl-9">
					<div class="row" v-for="string in notificationSettings" :key="string.id">
						<!-- <div class="col-12" > -->
							<h6 class="col-12 col-lg-5 col-xl-4">
								{{string.title}}
							</h6>
							<div class="col-12 col-lg-7 col-xl-8 d-flex flex-column flex-sm-row justify-content-around align-items-sm-center">
								<label class="labelRadio" v-for="(setting, key, index) in settings" :key="index">
									<span class="custom-radio">
									  <div class="active-radio" v-if="setting === string.settings" />
									</span>
									<input type="radio" class="radioEmail" :value="setting" v-model="string.settings">
									{{setting}}
								</label>
							</div>
						<!-- </div> -->

					</div>

					</div>
				</div>
				<!-- <h4 class="col-12 col-xl-3 text-xl-right ">Send Admin notifications when</h4>
				<div class="col-12 col-sm-12 col-xl-9">
				<div class="row">
					<h6 class="col-12 col-lg-5 col-xl-4">
					someone adds new post
					</h6>
					<div class="col-12 col-lg-7 col-xl-8 d-flex flex-column flex-sm-row justify-content-end align-items-sm-center">
					<label class="radioBottom">
						<span class="custom-radio">
						<fa-icon *ngIf="this.settingForm.get('addsNewPost').value != 'display'" [icon]="faCircle"></fa-icon>
						<fa-icon *ngIf="this.settingForm.get('addsNewPost').value === 'display'" [icon]="faDotCircle"></fa-icon>
						</span>
						<input type="radio" class="radioEmail" value="display" name="addsNewPost" formControlName="addsNewPost">
						display
					</label>
					<label class="radioBottom">
						<span class="custom-radio">
						<fa-icon *ngIf="this.settingForm.get('addsNewPost').value != 'hide'" [icon]="faCircle"></fa-icon>
						<fa-icon *ngIf="this.settingForm.get('addsNewPost').value === 'hide'" [icon]="faDotCircle"></fa-icon>
						</span>
						<input type="radio" class="radioEmail" value="hide" name="addsNewPost" formControlName="addsNewPost">
						hide
					</label>
					</div>
				</div>
				</div>
				<div class="bottom-button"> -->
				<!-- <button class="update" (click)='update()' >update profile</button> -->


			</div>
		</div>
    </form>

    <!-- <div *ngIf="profileStore.modal" class="c_modal">
      <div class="c_modal-wrapper opened">
        <div class="c_modal-reveal delete-form-wrap opened">
          <button class="close-modal" (click)="profileStore.changeModal(false)">×</button>
          <div class="c_modal-content">
            <div class="delete-form-wrap" id="confirm-delete-modal">
              <div class="form-header">
                <h4>Send Confirmation Code</h4>
                <p>Is this phone number correct?</p>
                <h4>{{phone}}</h4>
              </div>
              <div class="form-wrap">
                <span class="yes" (click)="phoneVerify()">Yes</span>
                <span class="no" (click)="profileStore.changeModal(false)">No</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div *ngIf="profileStore.codeModal" class="c_modal">
      <div class="c_modal-wrapper opened">
        <div class="c_modal-reveal delete-form-wrap opened">
          <button class="close-modal" (click)="changeCodeModal(false)">×</button>
          <div class="c_modal-content">
            <div class="delete-form-wrap" id="confirm-delete-modal">
              <div class="form-header">
                <h4>Enter Confirmation Code</h4>
                <input (keyup)="onKey($event)" placeholder="Enter Code" />
              </div>
              <div class="form-wrap-confirm">
                <span class="confirm" (click)="confirm()">CONFIRM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  layout: "profile",
  middleware: "auth",
  data () {
    return {
      emailType: '',
	  changePassword: false,
	  socialProfilesAccount: ['facebook', 'google', 'twitter', 'linkedin'],
	  socialProfiles: ['facebook', 'twitter', 'linkedin'],
	  followingCategories: [],
	  followingCategoriesActive: [],
	  profile: Object,
	  profileVisibility: '',
	  settings: ['immediately','daily','weekly','never'],
	  notificationSettings:{
		email_post_published:  {
			title: 'my post is published',
			settings: ''
		},
		email_post_replies:  {
			title: 'someone replies to my verdict/comment/reply',
			settings: ''
		},
		email_user_follow:  {
			title: 'someone follows me',
			settings: ''
		},
		email_recive_point:  {
			title: 'my post is published',
			settings: ''
		},
		email_verdict_replies:  {
			title: 'gained V-rep',
			settings: ''
		},
	  }
    }
  },
  created () {
	  this.getFollowingCategories()
	  this.getProfileFull()
  },
  methods: {
    visibleChangePasswordBlock () {
      this.changePassword = !this.changePassword;
	},
	getFollowingCategories () {
		this.$http.get(`/api/categories/list`)
		.then(res => {
			this.followingCategories = res.data.data
		})
		.catch(error => console.error(error))
	},
	getProfileFull () {
		this.$http.get(`/api/profile/full`)
		.then(res => {
			this.profile = res.data.data
			this.notificationSettings.email_post_published.settings = res.data.data.settings.email_post_published;
			this.notificationSettings.email_post_replies.settings = res.data.data.settings.email_post_replies;
			this.notificationSettings.email_user_follow.settings = res.data.data.settings.email_user_follow;
			this.notificationSettings.email_recive_point.settings = res.data.data.settings.email_recive_point;
			this.notificationSettings.email_verdict_replies.settings = res.data.data.settings.email_verdict_replies;

			this.followingCategoriesActive = res.data.data.categories;
		})
		.catch(error => console.error(error))
	},
  }
};
</script>

<style lang="scss" scoped>
.primary-form {
  font-family: "Open Sans", Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
  .mb-2 {
    p {
      font-family: Lato;
    }
  }
  .labelRadio {
	display: flex;
    align-items: center;

	span{
		margin-right: 5px;
	}
  }
  .custom-radio {
	  width: 16px;
	  height: 16px;
	  border-radius: 8px;
	  border: 1px solid;
	  display: flex;
	  justify-content: center;
	  align-items: center;

	  .active-radio{
		 width: 8px;
		 height: 8px;
		 background-color: black;
		 border-radius: 5px;
	  }
  }
  .categoryCheckbox{
	width: 16px;
	height: 16px;
	display: inline-flex;
    justify-content: center;
    align-items: center;
	vertical-align: middle;
	border: 1px solid #0a0a0a;
    border-radius: 5px;

	svg{
		display: block;
	}
  }
  .categoryTitle {
	  display: inline-block;
	  vertical-align: middle;
  }
  .title {
    margin-top: 15px;
    box-sizing: border-box;
    display: table;
    max-width: 100%;
    padding: 0;
    color: inherit;
    white-space: normal;
    font-weight: 600;
    font-size: 1.2em;
    letter-spacing: 0.5px;
    line-height: 1;
    margin-bottom: 0.8em;
  }
  .followingCategories {
    input {
      display: none;
    }
    label {
      font-family: "Open Sans", Helvetica Neue, Helvetica, Roboto, Arial,
        sans-serif;
      cursor: pointer;
      margin-bottom: 1.05em;
      font-size: 0.9em;
      font-weight: 700;
      text-transform: uppercase;
      fa-icon {
        margin-right: 5px;
        font-size: 1.1em;
      }
    }
  }
  .string {
    margin-bottom: 10px;
    .row {
      @media (max-width: 576px) {
        padding-left: 15px;
      }
    }
    .social {
      display: flex;
      align-items: center;
      width: 220px;
      height: 40px;
      background-color: #8d8d8d;
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 0.5em 1.4em 0.5em 0.6em;
      cursor: pointer;
      transition: background-color 0.25s;
      p {
        font-weight: 700;
        font-size: 0.9rem;
        color: #fff;
        margin-bottom: 0px;
        margin-left: auto;
      }
      .right {
        float: right;
      }
      svg {
        fill: #fff;
      }
    }
    .facebook:hover {
      background-color: #2d4373;
    }
    .google:hover {
      background-color: #c63224;
    }
    .twitter:hover {
      background-color: #2795e9;
    }
    .linkedin:hover {
      background-color: #0a5579;
    }
  }
  .phone {
    padding: 0px;
    ngx-intl-tel-input {
      float: left;
      margin-right: 32px;
    }
    .verified {
      cursor: pointer;
      width: 90px;
      height: 23px;
      border: 1px solid;
      border-radius: 3px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 19px;
      margin-left: 20px;
      &.active {
        border-color: #00a167;
        background-color: #4cbd39;
        color: white;
      }
      &.inactive {
        border-color: #ff4242;
        background-color: white;
        color: #ff4242;
        &:hover {
          color: white;
          background-color: #bc2d2d;
        }
      }
      svg {
        width: 15px;
        height: 15px;
        color: inherit;
      }
      span {
        line-height: 1;
        text-align: center;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        user-select: none;
        font-size: 0.6rem;
        color: inherit;
        box-sizing: inherit;
        vertical-align: middle;
      }
    }
  }
  .disabled {
    position: absolute;
    z-index: 2;
    width: 286px;
    height: 42px;
    opacity: 0.1;
    background-color: black;
  }
  h4 {
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
  }
  h5 {
    padding-left: 0;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
  }
  h6 {
    margin-bottom: 1rem;
    font-size: 100%;
    line-height: 1.5;
    box-sizing: inherit;
    font-weight: 700;
    color: #8f8f8f;
    padding-right: 2em;
  }
  input,
  textarea {
    border: 1px solid #c6c6c6;
    border-radius: 2px;
    padding: 0.65em;
    line-height: 1.25;
    &:focus {
      outline: #8d8d8d auto 2px;
      outline-color: #8d8d8d;
      outline-style: auto;
      outline-width: 2px;
    }
  }
  .radioEmail,
  .profileVisibility {
    display: none;
  }
  .button-change {
    cursor: pointer;
    text-decoration: underline;
    border: 0;
    border-radius: 0;
    background: transparent;
    line-height: 1;
    padding: 0;
    margin-bottom: 8px;
  }
  .block-change-password {
    padding-left: 0px;
    input {
      margin-right: 16px;
      margin-bottom: 0.8em;
    }
    .block-button {
      button {
        user-select: none;
        padding: 0.85em 1.4em 0.8em 1.4em;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        color: #fefefe;
        border: none;
        margin-left: 5px;
        transition: background-color 0.25s;
        font-size: 0.9rem;
      }
      .cancel {
        background-color: #8d8d8d;
        &:hover {
          background-color: #606060;
        }
      }
      .update {
        background-color: #ff4242;
        &:hover {
          background-color: #bc2d2d;
        }
      }
    }
  }
  label {
    cursor: pointer;
  }
  .bottom-button {
    margin-top: 2.5em;
    margin-bottom: 2em;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    button {
      user-select: none;
      padding: 0.85em 1.4em 0.8em 1.4em;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #fefefe;
      border: none;
      margin-left: 5px;
      transition: background-color 0.25s;
      font-size: 0.9rem;
    }
    .update {
      background-color: #ff4242;
      &:hover {
        background-color: #bc2d2d;
      }
    }
  }
  .radioBottom {
    margin-right: 30px;
  }
  hr {
    margin: 2.45em 0 2.7em;
    border-top: 1px solid #e1e1e1;
    border-bottom: none;
    color: #fff;
    border-left: none;
    border-right: none;
    padding: 1px;
  }
}

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
      .form-wrap {
        display: flex;
        justify-content: space-between;
        .merge {
          font-size: 14px !important;
        }
        .yes {
          color: #ff4242;
          border-color: #ff4242;
          margin-left: 50px;
          &:hover {
            border-color: #a10000;
            color: #fff;
            background-color: #bc2d2d;
          }
        }
        .no {
          color: #8d8d8d;
          border-color: #8d8d8d;
          margin-right: 50px;
          &:hover {
            border-color: #474747;
            color: #fff;
            background-color: #606060;
          }
        }
      }
    }
  }
}
</style>
