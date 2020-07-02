<template>
    <div class="add-post-wrapper">
        <div class="container">
            <div class="row blockForm">
                <div class="col-lg-12">
                    <h1 class="create-post-title">Add Post</h1>
                    <p class="create-post-subtitle">
                        must follow
                        <a href="#">TOS</a> and general post
                        <a href="#">guidelines</a>
                    </p>
                </div>
            </div>

            <form class="primary-form dropzone" id="addPostForm">
                <div class="row blockForm">
                    <div class="col-12 col-lg-7 col-xl-8">
                        <div class="add-field" v-if="fields.title">
                            <div class="input-wrapper title">
                                <label>
                                    Title
                                    <span class="required">*</span>
                                </label>

                                <textarea
                                    placeholder="Minimum title length: 50 characters"
                                    class="form-input"
                                    :class="(errorNotif && $v.title.$anyError) ? 'error' : ''"
                                    maxlength="120"
                                    rows="2"
                                    v-model.trim="$v.title.$model"
                                    @blur="saveDraft"
                                ></textarea>

                                <div class="counter">
                                    <span>{{ titlesLength.title }}/</span>
                                    <span>120</span>
                                </div>
                            </div>
                            <div
                                class="error-notification"
                                v-if="!$v.title.required && errorNotif"
                            >This field is required</div>
                            <div
                                class="error-notification"
                                v-if="!$v.title.minLength && errorNotif"
                            >Minimum title length: 50 characters</div>
                        </div>

                        <div class="add-field" v-if="fields.subTitle">
                            <div class="input-wrapper">
                                <label>Subtitle(optional)</label>
                                <textarea
                                    placeholder="Minimum title length: 50 characters"
                                    class="form-input"
                                    maxlength="120"
                                    rows="2"
                                    v-model.trim="$v.subtitle.$model"
                                    @blur="saveDraft"
                                ></textarea>
                                <div class="counter">
                                    <span>{{ titlesLength.subtitle }}/</span>
                                    <span>120</span>
                                </div>
                            </div>
                            <div
                                class="error-notification"
                                v-if="!$v.subtitle.minLength && errorNotif"
                            >Minimum title length: 50 characters</div>
                        </div>

                        <div class="add-field" v-if="fields.body">
                            <div class="input-wrapper" v-if="fields.body">
                                <label>
                                    Post Content
                                    <span class="required">*</span>
                                </label>

                                <editor
                                    v-if="postId"
                                    :postid="postId"
                                    v-model="content"
                                    @editor:saved="saveDraft"
                                    :class="(errorNotif && countContent < 1000) ? 'error' : ''"
                                />

                                <div class="radius">
                                    <div class="body"></div>
                                </div>
                                <div class="counter radius">
                                    <span>{{ countContent }}/</span>
                                    <span>10000</span>
                                </div>
                            </div>
                            <div
                                class="error-notification"
                                v-if="countContent == 0 && errorNotif"
                            >This field is required</div>
                            <div
                                class="error-notification"
                                v-if="countContent < 1000 && countContent !== 0 && errorNotif"
                            >Minimum content length: 1000 letters</div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-5 col-xl-4">
                        <div class="container date">
                            <div class="row">
                                <div
                                    class="col-sm-auto col-lg-8"
                                    style="padding-left: 0px; padding-right: 0px;"
                                >
                                    <div
                                        class="schedule-date-col schedule-date"
                                        v-if="fields.publishedAt"
                                    >
                                        <label>Date</label>
                                        <div class="date-select-wrap">
                                            <div class="select-wrap month-select">
                                                <div class="arrow-date">
                                                    <!-- <fa-icon [icon]="faCaretDown"></fa-icon> -->
                                                    <svg class="icon" width="17" height="17">
                                                        <use xlink:href="#caret-down" />
                                                    </svg>
                                                </div>
                                                <select
                                                    class="form-input select"
                                                    v-model="date.month"
                                                    @change="saveDraft"
                                                >
                                                    <option
                                                        v-for="(month, index) of months"
                                                        :value="index"
                                                        :key="month"
                                                        :disabled="index - now.getMonth() < 0 && date.year === now.getFullYear()"
                                                    >{{month}}</option>
                                                </select>
                                            </div>
                                            <div class="select-wrap day-select">
                                                <div class="arrow-date">
                                                    <!-- <fa-icon [icon]="faCaretDown"></fa-icon> -->
                                                    <svg class="icon" width="17" height="17">
                                                        <use xlink:href="#caret-down" />
                                                    </svg>
                                                </div>
                                                <select
                                                    class="form-input select"
                                                    v-model="date.day"
                                                    @change="saveDraft"
                                                >
                                                    <option
                                                        v-for="day of daysInMonth"
                                                        :key="day"
                                                        :value="day"
                                                        :disabled="day - now.getDate() < 0 && disabledDates.minutes < 1440"
                                                    >{{day}}</option>
                                                </select>
                                            </div>
                                            <div class="select-wrap year-select">
                                                <div class="arrow-date">
                                                    <!-- <fa-icon [icon]="faCaretDown"></fa-icon> -->
                                                    <svg class="icon" width="17" height="17">
                                                        <use xlink:href="#caret-down" />
                                                    </svg>
                                                </div>
                                                <select
                                                    class="form-input select"
                                                    v-model="date.year"
                                                    @change="saveDraft"
                                                >
                                                    <option
                                                        v-for="year of years"
                                                        :key="year"
                                                        :value="year"
                                                    >{{year}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="col-sm col-lg-4"
                                    style="padding-left: 0px; padding-right: 0px;"
                                >
                                    <div
                                        class="schedule-date-col schedule-time"
                                        v-if="fields.publishedAt"
                                    >
                                        <label>Time</label>
                                        <div class="time-select-wrap">
                                            <div class="select-wrap hours-select">
                                                <select
                                                    class="form-input select"
                                                    v-model="date.hours"
                                                    @change="saveDraft"
                                                >
                                                    <option
                                                        v-for="hour of hours"
                                                        :value="hour"
                                                        :key="hour"
                                                        :disabled="hour - now.getHours() < 0 && disabledDates.minutes < 60"
                                                    >{{hour}}</option>
                                                </select>

                                                <div class="arrow-date">
                                                    <svg class="icon" width="17" height="17">
                                                        <use xlink:href="#caret-down" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="time-dots">:</div>
                                            <div
                                                class="select-wrap minutes-select"
                                                style="margin-left: 10px;"
                                            >
                                                <select
                                                    class="form-input select"
                                                    v-model="date.minutes"
                                                    @change="saveDraft"
                                                >
                                                    <option
                                                        v-for="minute of minutes"
                                                        :value="minute"
                                                        :key="minute"
                                                        :disabled="minute - now.getMinutes() < 0 && disabledDates.minutes < 0"
                                                    >{{minute}}</option>
                                                </select>
                                                <div class="arrow-date">
                                                    <svg class="icon" width="17" height="17">
                                                        <use xlink:href="#caret-down" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="input-wrapper" v-if="fields.category">
                            <div class="arrow">
                                <span>
                                    <!-- <fa-icon [icon]="faCaretDown"></fa-icon> -->
                                    <svg class="icon" width="17" height="17">
                                        <use xlink:href="#caret-down" />
                                    </svg>
                                </span>
                            </div>
                            <label>
                                Category
                                <span class="required">*</span>
                            </label>

                            <select
                                class="form-input select"
                                v-model="selectedCategory"
                                @change="saveDraft"
                            >
                                <option
                                    v-for="category of categories"
                                    :key="category.id"
                                    :value="category.id"
                                >{{ category.slug }}</option>
                            </select>
                        </div>

                        <div class="input-wrapper" v-if="fields.verdictOption">
                            <div class="arrow">
                                <!-- <fa-icon [icon]="faCaretDown"></fa-icon> -->
                                <svg class="icon" width="17" height="17">
                                    <use xlink:href="#caret-down" />
                                </svg>
                            </div>
                            <label>
                                Verdict Options
                                <span class="required">*</span>
                            </label>
                            <select
                                class="form-input select"
                                v-model="selectedOption"
                                @change="saveDraft"
                            >
                                <option
                                    v-for="option of options"
                                    :key="option.id"
                                    :value="option.title"
                                >{{ option.title }}</option>
                            </select>
                        </div>

                        <div class="input-wrapper input-block" v-if="fields.tags">
                            <label>
                                Links
                                <span class="required">*</span>
                            </label>
                            <label class="require links">5 links limit</label>

                            <multiselect
                                v-model="selectedLinkOption"
                                id="linksOpt"
                                label="name"
                                track-by="id"
                                placeholder="Type to search"
                                open-direction="bottom"
                                :options="linkOption"
                                :multiple="true"
                                :searchable="true"
                                :loading="isLoading"
                                :internal-search="false"
                                :clear-on-select="false"
                                :close-on-select="false"
                                :options-limit="300"
                                :max-height="600"
                                :show-no-results="false"
                                :hide-selected="false"
                                :taggable="true"
                                :max="5"
                                @tag="addTag"
                                @search-change="searchOptions"
                                @remove="saveDraft"
                                @close="saveDraft"
                                :class="(errorNotif && selectedLinkOption.length < 1) ? 'error' : ''"
                            ></multiselect>

                            <div
                                class="error-notification"
                                v-if="errorNotif && selectedLinkOption.length < 1"
                            >Please add at least 1 link</div>
                        </div>

                        <div class="input-wrapper author" v-if="fields.author">
                            <label>
                                Author
                                <span class="required">*</span>
                            </label>

                            <multiselect
                                v-model="selectedAuthor"
                                id="author"
                                label="firstName"
                                track-by="id"
                                placeholder="Type to search"
                                open-direction="bottom"
                                :options="authorsOption"
                                :searchable="true"
                                :loading="isLoadingAuthor"
                                :max-height="600"
                                :show-no-results="false"
                                :hide-selected="false"
                                @search-change="searchAuthors"
                                @select="saveDraft"
                                :class="(errorNotif && selectedAuthor.length < 1) ? 'error' : ''"
                            >
                                <template slot="option" slot-scope="props">
                                    <div class="option__desc">
                                        <span class="option__title">{{ props.option.firstName }}</span>
                                    </div>
                                </template>
                            </multiselect>

                            <div
                                class="error-notification"
                                v-if="errorNotif && selectedAuthor.length < 1"
                            >This field is required</div>
                        </div>

                        <div class="buttons-wrapp">
                            <!-- <button class="button-add draft-button">Save Draft</button> -->
                            <div>
                                <div class="buttons-forse" v-if="fields.forcePublish">
                                    <label class="d-flex align-items-center w-100">
                                        <div class="categoryCheckbox">
                                            <svg width="10" height="10" v-if="forcePublish">
                                                <use xlink:href="#checkbox" />
                                            </svg>
                                            <input
                                                type="checkbox"
                                                v-model="forcePublish"
                                                @change="saveDraft"
                                            />
                                        </div>

                                        <div class="categoryTitle ml-2">force publish</div>
                                    </label>
                                </div>
                                <button
                                    class="button-add post-button"
                                    @click.prevent="publishedPost"
                                >Publish</button>
                                <div class="buttons-forse">
                                    <div class="forse">
                                        <div class="fa-icon">
                                            <!-- <fa-icon *ngIf="!force" [icon]="faSquare"></fa-icon>
                                            <fa-icon *ngIf="force" [icon]="faCheckSquare"></fa-icon>-->
                                        </div>
                                        <!-- <p>force publish</p> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="buttons-wrapp">
                            <button class="button-add post-button">Update</button>
                        </div>-->
                    </div>
                    <!-- [disabled]="addPostForm.status === 'INVALID'" -->

                    <div class="col-12 col-lg-7 col-xl-8" v-if="fields.cropper">
                        <div class="buttons-wrapp input-wrapper">
                            <label>
                                Featured Image
                                <span class="required">*</span>
                            </label>

                            <button
                                class="button-add post-button"
                                @click.prevent="trigerInputUpload()"
                            >Add Image</button>
                            <input
                                name="file"
                                type="file"
                                id="file"
                                ref="imgUploadInpt"
                                @change="uploadImg()"
                            />
                        </div>

                        <dropzone
                            id="foo"
                            ref="drope"
                            :options="dropOptions"
                            :destroyDropzone="true"
                            @vdropzone-success="afterComplete"
                            @vdropzone-processing="loadingDrop=true; imgCrop=''"
                            :include-styling="false"
                            class="drop-wrap"
                            v-if="dropVisible"
                            :useCustomSlot="true"
                        >
                            <h3 class="drop-title text-center">
                                Drag and drop your image
                                <br />or
                            </h3>
                            <div class="drop-btn my-4">Choose Your Image</div>

                            <p class="drop-subtitle">maximum file size: 50mb</p>

                            <div
                                v-if="errorNotif && !imgCrop"
                                class="form-field-tip error-tip"
                            >Featured image is required</div>

                            <div class="cssload-container" v-if="loadingDrop">
                                <div class="lds-ellipsis">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </dropzone>

                        <vue-cropper
                            v-if="imgCrop"
                            ref="cropper"
                            :aspect-ratio="16 / 9"
                            :src="imgCrop"
                            preview=".preview"
                            :movable="false"
                            :rotatable="false"
                            :zoomable="false"
                            @ready="clipperReady"
                            @cropend="saveDraft"
                        />
                    </div>

                    <div class="col-12 col-lg-5 col-xl-4">
                        <div class="animation prev-img-block">
                            <div class="preview"></div>

                            <div class="header-metadata" v-if="categories">
                                <span class="category js--post-category-preview">
                                    <span>{{ categories.find(x => x.id === selectedCategory ).slug }}</span>
                                </span>
                                <div class="news-item-metadata">
                                    <span class="metadata-block">
                                        <i class="icons color-primary">
                                            <svg
                                                id="comment-o"
                                                viewBox="0 0 1792 1792"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                            >
                                                <path
                                                    d="M896 384q-204 0-381.5 69.5t-282 187.5-104.5 255q0 112 71.5 213.5t201.5 175.5l87 50-27 96q-24 91-70 172 152-63 275-171l43-38 57 6q69 8 130 8 204 0 381.5-69.5t282-187.5 104.5-255-104.5-255-282-187.5-381.5-69.5zm896 512q0 174-120 321.5t-326 233-450 85.5q-70 0-145-8-198 175-460 242-49 14-114 22h-5q-15 0-27-10.5t-16-27.5v-1q-3-4-.5-12t2-10 4.5-9.5l6-9 7-8.5 8-9q7-8 31-34.5t34.5-38 31-39.5 32.5-51 27-59 26-76q-157-89-247.5-220t-90.5-281q0-174 120-321.5t326-233 450-85.5 450 85.5 326 233 120 321.5z"
                                                />
                                            </svg>
                                        </i>
                                        <span>999</span>
                                    </span>
                                    <span class="metadata-block">
                                        <i class="icons color-primary">
                                            <svg
                                                id="eye"
                                                viewBox="0 0 1792 1792"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                            >
                                                <path
                                                    d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"
                                                />
                                            </svg>
                                        </i>
                                        <span>999</span>
                                    </span>
                                </div>
                            </div>
                            <h2 class="title-posts" v-if="$v.title.$model">{{ $v.title.$model }}</h2>
                        </div>
                    </div>
                    <div class="col-12 col-lg-7 col-xl-8">
                        <div class="input-wrapper" v-if="fields.featuredImage">
                            <label>
                                Featured Image source
                                <span class="required">*</span>
                            </label>
                            <input
                                class="form-input"
                                placeholder="e.g Instagram, Youtube, etc"
                                v-model.trim="$v.imgDescript.$model"
                                @blur="saveDraft"
                                :class="($v.imgDescript.$anyError && errorNotif) ? 'error' : ''"
                            />
                            <label class="require">
                                <span class="required">*</span> required fields
                            </label>
                            <div
                                class="error-notification"
                                v-if="!$v.imgDescript.required && errorNotif"
                            >This field is required</div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { maxLength, minLength, required } from "vuelidate/lib/validators";
import { months } from "~/constants/dates";
import Multiselect from "vue-multiselect";
import Dropzone from "nuxt-dropzone";
import { clipperUpload } from "vuejs-clipper";

import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

export default {
    middleware: "auth",
    components: {
        Multiselect,
        Dropzone,
        VueCropper
    },

    data() {
        return {
            defImg: undefined,
            postId: undefined,
            date: {
                month: null,
                day: null,
                year: null,
                hours: null,
                minutes: null
            },
            months,
            hours: [],
            minutes: [],
            years: [],
            now: new Date(),

            content: null,

            title: "",
            subtitle: "",
            imgDescript: "",
            forcePublish: false,
            fields: {
                title: false,
                subTitle: false,
                body: false,
                tags: false,
                author: false,
                category: false,
                verdictOption: false,
                forcePublish: false,
                publishedAt: false,
                source: false,
                featuredImage: false,
                cropper: false
            },
            errorNotif: false,
            selectedCategory: null,
            categories: null,

            selectedOption: null,
            options: null,

            selectedLinkOption: [],
            linkOption: [],
            newLinkOption: [],
            isLoading: false,

            selectedAuthor: [],
            authorsOption: [],
            isLoadingAuthor: false,

            // cropper
            imgId: undefined,
            imgCrop: undefined,
            cropperX: undefined,
            cropperY: undefined,
            cropperW: undefined,
            cropperH: undefined,
            dropOptions: {
                url: "/api/media/image-preload/",
                maxFilesize: 50, // MB
                maxFiles: 1,
                headers: { Authorization: "barier" },
                paramName: "image",
                params: {
                    postId: null
                }
            },
            loadingDrop: false,
            dropVisible: true
        };
    },

    async asyncData({ $axios }) {
        const fields = await $axios.$get(
            "api/profile/post-fields?action=create"
        );

        const cat = await $axios.$get("/api/categories/");

        const opt = await $axios.$get(
            "/api/posts/create-helpers/verdict-options/"
        );

        // const regPost = await $axios.$post("/api/posts/");

        return {
            fields: fields.fields,
            categories: cat.data,
            selectedCategory: cat.data[0].id,
            options: opt.data,
            selectedOption: opt.data[0].title
            // postId: regPost.id
        };
    },

    validations: {
        title: {
            required,
            minLength: minLength(50),
            maxLength: maxLength(120)
        },
        imgDescript: {
            required
        },
        subtitle: {
            minLength: minLength(50)
        }
    },
    methods: {
        errorCrop(er, er2) {
            // console.log(er, er2);
        },
        searchOptions(query) {
            if (query) {
                this.isLoading = true;

                this.$http
                    .get(
                        "https://dev.api.verdict.org/tags/list?search=" + query
                    )
                    .then(({ data }) => {
                        this.linkOption = data.data;
                        this.linkOption = [
                            ...this.linkOption,
                            ...this.newLinkOption
                        ];
                        this.isLoading = false;
                    });
            }
        },

        searchAuthors(query) {
            this.isLoadingAuthor = true;

            this.$http
                .get(
                    "https://dev.api.verdict.org/posts/create-helpers/authors-search?search=" +
                        query
                )
                .then(({ data }) => {
                    this.authorsOption = data.data;

                    this.isLoadingAuthor = false;
                });
        },

        addTag(newTag) {
            const tag = {
                id: Math.floor(Math.random() * 10000000),
                type: "created",
                name: newTag
            };

            this.newLinkOption.push(tag);
            this.selectedLinkOption.push(tag);
        },

        formatTags() {
            const tagsForFormdata = this.selectedLinkOption.map(function(item) {
                if (item.type === "created") {
                    return item.name;
                } else {
                    return item.id;
                }
            });

            console.log(tagsForFormdata);

            return tagsForFormdata.toString();
        },

        addFields() {
            this.$axios
                .$get("api/profile/post-fields?action=create")
                .then(({ data }) => {
                    fields: data.fields;
                })
                .catch(error => {
                    // this.errorMessage = error.response.data.message;
                });
        },

        // getCategories() {
        //     this.$http
        //         .get("https://dev.api.verdict.org/categories/")
        //         .then(({ data }) => {
        //             this.categories = data.data;

        //             this.selectedCategory = this.categories[0].id;
        //         })
        //         .catch(error => {
        //             // this.errorMessage = error.response.data.message;
        //         });
        // },

        // getOptions() {
        //     this.$http
        //         .get(
        //             "https://dev.api.verdict.org/posts/create-helpers/verdict-options/"
        //         )
        //         .then(({ data }) => {
        //             this.options = data.data;

        //             this.selectedOption = this.options[0].title;
        //         })
        //         .catch(error => {
        //             // this.errorMessage = error.response.data.message;
        //         });
        // },

        monthDiff(dateFrom, dateTo) {
            return (
                dateTo.getMonth() -
                dateFrom.getMonth() +
                12 * (dateTo.getFullYear() - dateFrom.getFullYear())
            );
        },

        minutesDiff(dateFrom, dateTo) {
            let diffMs = dateTo - dateFrom;
            return Math.floor(diffMs / 1000 / 60);
        },

        initDate() {
            this.date.day = this.now.getDate();
            this.date.year = this.now.getFullYear();
            this.date.month = this.now.getMonth();

            this.date.hours = this.now.getHours();
            this.date.minutes = this.now.getMinutes();
        },

        trigerInputUpload() {
            this.$refs.imgUploadInpt.click();
        },

        clipperReady() {
            this.dropVisible = false;
            this.loadingDrop = false;

            if (this.imgCrop) {
                this.$refs.cropper.setCropBoxData({
                    left: this.cropperX,
                    top: this.cropperY,
                    width: this.cropperW,
                    height: this.cropperH
                });
            }
        },

        afterComplete(file, res) {
            this.imgCrop = undefined;

            this.imgCrop = res.file;
            this.imgId = res.mediaId;
        },

        uploadImg() {
            this.loadingDrop = true;
            this.imgCrop = undefined;

            const formData = new FormData();

            formData.append("image", this.$refs.imgUploadInpt.files[0]);
            formData.append("postId", this.postId);

            this.$http
                .post("/api/media/image-preload/", formData)
                .then(res => {
                    this.imgId = res.data.mediaId;
                    this.imgCrop = res.data.file;
                })
                .catch(error => console.error(error));
        },

        saveDraft() {
            if (this.$refs.cropper) {
                const cropData = this.$refs.cropper.getCropBoxData();

                console.log(cropData);

                this.cropperX = Math.floor(cropData.left);
                this.cropperY = Math.floor(cropData.top);
                this.cropperW = Math.floor(cropData.width);
                this.cropperH = Math.floor(cropData.height);
            }

            const newData = {};

            if (this.$v.title.$model) {
                newData.title = this.$v.title.$model;
            }
            if (this.$v.subtitle.$model) {
                newData.subtitle = this.$v.subtitle.$model;
            }
            if (this.content) {
                newData.bodyJson = this.content;
            }
            if (this.selectedLinkOption.length) {
                const tagsForFormdata = this.selectedLinkOption.map(function(
                    item
                ) {
                    if (item.type === "created") {
                        return item.name;
                    } else {
                        return item.id;
                    }
                });

                newData.tags = tagsForFormdata.toString();
            }
            if (this.selectedCategory) {
                newData.category = this.selectedCategory;
            }
            if (this.selectedOption) {
                newData.verdictOption = this.selectedOption;
            }
            if (this.selectedDate && this.fields.publishedAt) {
                newData.publishedAt = this.selectedDate;
            }

            if (this.forcePublish) {
                newData.forcePublish = this.forcePublish;
            }

            if (this.imgCrop) {
                newData.media = this.imgId;
            }

            if (this.$v.imgDescript.$model) {
                newData.source = this.$v.imgDescript.$model;
            }

            if (this.cropperX || this.cropperX == 0) {
                newData.cropperX = this.cropperX;
            }
            if (this.cropperY || this.cropperY == 0) {
                newData.cropperY = this.cropperY;
            }
            if (this.cropperW) {
                newData.cropperWidth = this.cropperW;
            }
            if (this.cropperH) {
                newData.cropperHeight = this.cropperH;
            }

            this.$http
                .patch(`/api/posts/${this.postId}`, newData)
                .then(resp => {
                    this.$toasted.show(resp.data.message);
                })
                .catch(error => {
                    console.log(error);
                    this.$toasted.show(error.data.message);
                });

            console.log(newData);
        },

        publishedPost() {
            this.$v.$touch();

            if (this.$v.$invalid) {
                this.errorNotif = true;
                return;
            }

            this.errorNotif = false;

            this.$http
                .patch(`/api/posts/${this.postId}/publish`, this.formData)
                .then(resp => {
                    // console.log(resp);
                    this.$toasted.show(resp.data.message);
                })
                .catch(error => {
                    console.log(error);
                    this.$toasted.show(error.data.message);
                });
        }
    },
    computed: {
        // ...mapGetters(["loggedInUser"]),

        daysInMonth() {
            return new Date(this.date.year, this.date.month + 1, 0).getDate();
        },
        selectedDate() {
            return new Date(
                this.date.year,
                this.date.month,
                this.date.day,
                this.date.hours,
                this.date.minutes
            );
        },
        disabledDates() {
            const diffs = {
                months: this.monthDiff(this.now, this.selectedDate),
                minutes: this.minutesDiff(this.now, this.selectedDate)
            };

            if (diffs.minutes < 0) {
                this.initDate();
            }

            return diffs;
        },

        titlesLength() {
            const lengthTitle = {
                title: this.$v.title.$model.length,
                subtitle: this.$v.subtitle.$model.length
            };

            return lengthTitle;
        },

        countContent() {
            let cContent = 0;
            if (this.content) {
                cContent = this.content.blocks.reduce(function(prev, el) {
                    let counter = 0;

                    if (
                        el.type !== "linkTool" &&
                        el.type !== "image" &&
                        el.type !== "list" &&
                        el.type !== "embed"
                    ) {
                        counter = el.data.text.length;
                        return counter + prev;
                    }

                    if (el.type === "list" && el.data.items.length > 0) {
                        counter = el.data.items.reduce(function(previus, elem) {
                            return elem.length + previus;
                        }, 0);
                    } else {
                        counter = 0;
                    }

                    return counter + prev;
                }, 0);
            }

            return cContent;
        }
    },

    created() {
        this.initDate();

        for (
            let i = this.now.getFullYear();
            i <= this.now.getFullYear() + 3;
            i++
        ) {
            this.years.push(i);
        }

        for (let i = 1; i <= 24; i++) {
            this.hours.push(i);
        }

        for (let i = 0; i < 60; i++) {
            this.minutes.push(("0" + i).slice(-2));
        }

        // this.addFields();
        // this.getCategories();
        // this.getOptions();

        this.$http
            .post("/api/posts/")
            .then(resp => {
                this.postId = resp.data.id;
                this.dropOptions.params.postId = resp.data.id;
            })
            .catch(error => {
                console.log(error);
            });
    },
    mounted() {
        this.$store.commit("SET_BREADCRUMBS", [{ title: "Add" }]);
        this.dropOptions.headers.Authorization = this.$auth.getToken("local");
        // this.dropOptions.params.postId = this.postId
    }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped>
// @import "nuxt-dropzone/dropzone.css";
@import "../assets/utils/variables";
@import "../assets/utils/colors";

.preview-area {
    width: 307px;
}
.preview-area p {
    font-size: 1.25rem;
    margin: 0;
    margin-bottom: 1rem;
}
.preview-area p:last-of-type {
    margin-top: 1rem;
}
.preview {
    width: 100%;
    height: calc(400px * (9 / 16));
    overflow: hidden;
}
.crop-placeholder {
    width: 100%;
    height: 200px;
    background: #ccc;
}
.cropped-image img {
    max-width: 100%;
}

.categoryCheckbox {
    width: 16px;
    height: 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    border: 1px solid #0a0a0a;
    border-radius: 5px;
    input {
        display: none;
    }
    svg {
        display: block;
    }
}
.categoryTitle {
    display: inline-block;
    vertical-align: middle;
}

.prev-img-block {
    max-width: 410px;
    height: 100%;
    margin: 0 auto;
}

.cssload-container {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
    margin-top: 0 !important;
    z-index: 3;
    .lds-ellipsis {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }

    .lds-ellipsis div {
        position: absolute;
        top: 33px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: grey;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    .lds-ellipsis div:nth-child(1) {
        left: 8px;
        animation: lds-ellipsis1 0.6s infinite;
    }

    .lds-ellipsis div:nth-child(2) {
        left: 8px;
        animation: lds-ellipsis2 0.6s infinite;
    }

    .lds-ellipsis div:nth-child(3) {
        left: 32px;
        animation: lds-ellipsis2 0.6s infinite;
    }

    .lds-ellipsis div:nth-child(4) {
        left: 56px;
        animation: lds-ellipsis3 0.6s infinite;
    }

    @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0);
        }

        100% {
            transform: scale(1);
        }
    }

    @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1);
        }

        100% {
            transform: scale(0);
        }
    }

    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0);
        }

        100% {
            transform: translate(24px, 0);
        }
    }
}

.drop-wrap {
    height: 400px;
    width: 100%;
    background-color: #e5e5e5;
    position: relative;
    cursor: pointer;
    padding-top: 400/850 * 100%;
    &:after {
        content: "";
        position: absolute;
        top: 20px;
        left: 20px;
        right: 20px;
        bottom: 20px;
        border: 2px dashed #867f7f;
        opacity: 0;
        transition: all 0.5s ease;
        z-index: 1;
    }
    &:hover {
        &:after {
            opacity: 1;
        }
    }
}

.drop-btn {
    display: inline-flex;
    border: 1px solid #8d8d8d;
    color: #8d8d8d;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px 20px;
    transition: all 0.5s ease;
    &:hover {
        color: #e5e5e5;
        background-color: #8d8d8d;
    }
}

.drop-subtitle {
    font-weight: bold;
}

.croper {
    width: 100%;
}
select {
    outline: none;
}

.time-select-wrap {
    display: flex;
}

.error {
    background-color: rgba(255, 66, 66, 0.25);
    border: 1px solid #ff4242 !important;
}

.errorBody {
    width: 100%;
    height: calc(100% - 30px);
    padding-top: 49px;
    position: absolute;
    top: 30px;
    // opacity: 0.5;

    bottom: 30px;
    // border-bottom-left-radius: 10px;
    // border-bottom-right-radius: 10px;
    border-radius: 10px;
    z-index: 1;
    pointer-events: none;
    border: 1px solid #ff4242 !important;

    .body {
        width: 100%;
        height: 100%;
        background: rgba(255, 66, 66, 0.25);
    }
}

.blockForm {
    font-family: open sans, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;

    @media (max-width: 576px) {
        padding-left: 10px;
        padding-right: 10px;
    }

    .time-select-wrap {
        align-items: center;
    }

    .breadcrumbs {
        font-size: 11px;
        font-weight: 400;
        margin-top: 7px;

        span {
            font-size: 10px;
            margin: 0 2px;
        }

        a {
            text-decoration: none;
            color: rgb(10, 10, 10);

            &:hover {
                color: #ff4242;
            }
        }

        p {
            display: contents;
        }
    }
}

.date-select-wrap {
    display: flex;
}

.arrow-date {
    position: absolute;
    right: 1px;
    top: 3px;
    pointer-events: none;
}

.select-wrap {
    position: relative;
    margin-right: 8px;
}

.date {
    margin-bottom: 15px;
    margin-top: 17px;

    label {
        line-height: 1.5;
        color: #0a0a0a;
        font-family: open sans, Helvetica Neue, Helvetica, Roboto, Arial,
            sans-serif;
        box-sizing: inherit;
        display: inline-block;
        font-weight: 600;
        font-size: 1.2em;
        letter-spacing: 0.5px;
        margin-bottom: 0.1em;
    }

    select {
        margin: 0;
        box-sizing: border-box;
        width: 100%;
        font-family: inherit;
        border: 1px solid #c6c6c6;
        border-radius: 2px;
        padding: 0.65em;
        line-height: 1.25;
        background: none;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.7px;
        font-size: 0.8em;
        padding-right: 1.1em;
        appearance: none;
        // margin-left: 5px;
        margin-right: 10px;
    }
}

.buttonLoadImg {
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.8px;
    padding: 0.65em 1.4em 0.6em;
}

.file-size {
    margin-top: 15px;
    color: #0a0a0a;
}

.prevImgBlock {
    padding-top: 75px;

    @media (max-width: 991px) {
        padding-top: 45px;
        padding-bottom: 45px;
    }
}

.tags {
    padding-left: 0px;

    button {
        border-width: 0px;
        margin-right: 10px;
        padding: 0px;
        background-color: grey;
        color: white;
    }

    li {
        list-style-type: none;
        display: inline-block;
        background-color: grey;
        border-radius: 5px;
        margin-top: 10px;
        color: white;
        padding: 5px 10px;
        margin-right: 10px;
    }
}

.ng-dropdown-panel-items {
    background: white;
    padding-left: 15px;
}

.add-post-wrapper {
    margin-top: 10px;
    // .invalid {
    //   // opacity: 0.3;
    // }

    width: 100%;

    .modal-about-draft-create {
        position: fixed;
        bottom: 30px;
        background-color: red;
        left: 50%;
        transform: translateX(-50%);
    }

    .container {
        max-width: $global-width;

        .create-post-title {
            font-size: 1.9em;
            margin: 0;
            position: relative;
            color: $black;
            // font-family: "Open Sans";
            font-weight: bold;
            text-size-adjust: 100%;
            -webkit-box-direction: normal;
            -webkit-font-smoothing: antialiased;
            margin: 15px 15px 5px 0;
        }

        .create-post-subtitle {
            margin-top: 10px;
            color: $black;
            font-size: 16px;
            font-weight: 400;
            // font-family: "Open Sans";
            text-size-adjust: 100%;
            -webkit-box-direction: normal;
            -webkit-font-smoothing: antialiased;
            margin-bottom: 0px;

            a {
                color: $black;
                text-decoration: none;

                &:hover {
                    color: #ff4242;
                }
            }
        }

        .with-border {
            border-top: 5px solid #222222;
        }

        #file {
            opacity: 0;
            display: none;
        }

        .buttons-wrapp {
            display: flex;
            justify-content: space-between;
            padding-bottom: 5px;
            margin-bottom: 0 !important;

            .button-add {
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.8px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                padding: 0.85em 1.4em 0.8em 1.4em;
                -webkit-transition: background-color 0.25s ease-out,
                    color 0.25s ease-out;
                -o-transition: background-color 0.25s ease-out,
                    color 0.25s ease-out;
                transition: background-color 0.25s ease-out,
                    color 0.25s ease-out;
                line-height: 1;
                -webkit-appearance: none;
                font-size: 0.9rem;
                vertical-align: middle;
                // font-family: "Open Sans";
                cursor: pointer;
                text-align: center;
            }

            .post-button {
                border: 1px solid transparent;
                background-color: #ff4242;
                color: #fefefe;

                &:hover {
                    background-color: #bc2d2d;
                    color: #fefefe;
                }
            }

            .draft-button {
                border: 1px solid #8d8d8d;
                color: #8d8d8d;
                background: none;
                max-height: 40px;

                &:hover {
                    background-color: #8d8d8d;
                    color: #fefefe;
                }
            }
        }

        .author {
            margin-bottom: 40px !important;
        }

        .title {
            margin-top: 20px !important;
        }

        .input-wrapper {
            position: relative;
            margin-bottom: 10px;
            margin-top: 30px;

            .links {
                letter-spacing: 0px;
                margin-top: 0px !important;
                font-weight: 600 !important;
            }

            .require {
                font-size: 1em;
                display: block;
                margin-top: 10px;
                color: #6a6a6a;
                font-weight: 200;
            }

            label {
                margin: auto;
                margin-left: 0;
                font-weight: 600;
                font-size: 1.2em;
                letter-spacing: 0.5px;
                margin-bottom: 0.1em;
                // font-family: "Open Sans";

                span {
                    font-weight: 600;
                    font-size: 1em;
                    letter-spacing: 0.5px;
                }
            }

            select {
                border-radius: 0px;
                padding: 0.65em;
                line-height: 1.25;
                background-color: white;
                height: 35px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.7px;
                -webkit-appearance: none;
                color: #000;
                -moz-appearance: none;
                appearance: none;
                margin-bottom: 2em;
                z-index: 2;
                position: relative;
                background: transparent;
            }

            textarea,
            select,
            input {
                // font-family: "Open Sans";
                width: 100%;
                display: block;
                text-indent: 0;
                padding: 0.55em 0.65em;
                border: 1px solid #c6c6c6;
                font-size: 0.9em;
            }

            textarea,
            input {
                overflow-wrap: normal;
                word-wrap: normal;
                word-break: normal;
                line-break: auto;
                font-size: 16px;
                line-height: 24px;
                text-align: start;
                text-indent: 0;
                color: $black;
                overflow: hidden;
                outline: 0px solid transparent;

                &::placeholder {
                    color: #aaaaaa;
                    opacity: 1;
                    /* Firefox */
                }
            }

            select {
                border-radius: 3px;
                padding: 0.55em 0.65em 0.55em;
            }

            .counter {
                // border-bottom-right-radius: 10px;
                background-color: $white;
                position: absolute;
                bottom: 1px;
                padding: 5px;
                right: 1px;
                color: #ccc;
                content: attr(data-chars);
                font-size: 15px;
                font-family: "Times New Roman", Georgia, Serif;
                z-index: 1;
                border-top: solid 1px #ebebeb;
                border-left: solid 1px #ebebeb;
                border-radius: 2px 0 0;
                -webkit-background-clip: padding-box;
                background-clip: padding-box;
            }
        }

        .error-input-post {
            margin-bottom: 2em;
            color: #6a6a6a;
            -webkit-font-smoothing: antialiased;
        }

        .arrow {
            position: absolute;
            top: 34px;
            right: 10px;
        }

        .radius {
            border-bottom-right-radius: 10px !important;
        }
    }

    .news-item-metadata {
        margin-left: auto;

        .metadata-block {
            vertical-align: middle;
            margin-left: 5px;

            span {
                font-weight: 600;
                font-size: 0.85em;
            }
        }
    }

    .header-metadata {
        padding: 0.9em 0;
        display: flex;
    }

    .preview {
        padding: 5px;
    }

    .preview-img {
        width: 100%;
    }

    .js--post-category-preview {
        position: relative;

        span {
            line-height: 1.5;
            color: #0a0a0a;
            -webkit-font-smoothing: antialiased;
            // font-family: open sans, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
            -webkit-box-direction: normal;
            font-size: 0.9em;
            text-transform: uppercase;
            font-weight: 700;
            box-sizing: inherit;

            &::before {
                content: "";
                position: absolute;
                display: block;
                bottom: -6px;
                height: 3px;
                width: 40px;
                background-color: #ff4242;
            }
        }
    }

    .icons {
        fill: #ff4242;

        svg {
            margin-right: 0.25em;
            width: 15px;
            height: 15px;
        }
    }

    .loader {
        height: 100%;
        display: flex;

        .cssload-container {
            position: absolute;
            top: 100px;
            left: 100px;
        }

        .lds-ellipsis {
            display: inline-block;
            position: relative;
            margin: auto;
            width: 80px;
            height: 80px;
        }

        .lds-ellipsis div {
            position: absolute;
            top: 33px;
            width: 13px;
            height: 13px;
            border-radius: 50%;
            background: grey;
            animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }

        .lds-ellipsis div:nth-child(1) {
            left: 8px;
            animation: lds-ellipsis1 0.6s infinite;
        }

        .lds-ellipsis div:nth-child(2) {
            left: 8px;
            animation: lds-ellipsis2 0.6s infinite;
        }

        .lds-ellipsis div:nth-child(3) {
            left: 32px;
            animation: lds-ellipsis2 0.6s infinite;
        }

        .lds-ellipsis div:nth-child(4) {
            left: 56px;
            animation: lds-ellipsis3 0.6s infinite;
        }

        @keyframes lds-ellipsis1 {
            0% {
                transform: scale(0);
            }

            100% {
                transform: scale(1);
            }
        }

        @keyframes lds-ellipsis3 {
            0% {
                transform: scale(1);
            }

            100% {
                transform: scale(0);
            }
        }

        @keyframes lds-ellipsis2 {
            0% {
                transform: translate(0, 0);
            }

            100% {
                transform: translate(24px, 0);
            }
        }
    }

    .error-notification {
        font-weight: 600;
        font-size: 90%;
        margin-top: 0.3em;
        color: #ff4142;
        margin-bottom: 20px;
    }

    .error-tip {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        // font-family: open sans,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
        -webkit-box-direction: normal;
        text-align: center;
        user-select: none;
        box-sizing: inherit;
        font-size: 14.4px;
        margin: 0 auto;
        display: inline-block;
        font-weight: 600;
        padding: 0.3em 1em;
        margin-top: 1em;
        border-radius: 2px;
        background-color: #ff4242;
        color: #fff;
    }
}

.animation {
    animation: img 1s ease-in-out;

    @keyframes img {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
}

.options {
    position: absolute;
    background-color: white;
    list-style-type: none;
    padding-left: 15px;
    width: 100%;
    z-index: 1;
}

.displayed {
    font-size: 100%;
    font-weight: normal;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: "Open Sans", Helvetica Neue, Helvetica, Roboto, Arial,
        sans-serif;
    box-sizing: inherit;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
    // transition: opacity .3s, visibility .3s, transform .2s ease-out;
    margin-bottom: 50px;
    pointer-events: none;
    padding-top: 10px;
    // opacity: 1;
    // transform: translateY(0);
    bottom: 0px;

    div {
        visibility: visible;
        pointer-events: all;
        display: inline-block;
        background: #545454;
        color: #fff;
        box-shadow: 2px 4px 16px 0 rgba(35, 36, 40, 0.26);
        font-weight: 600;
        max-width: 420px;
        width: 100%;
        text-align: center;
        border-left: 6px solid;
        padding: 1em 1.5em;
    }

    .modal-error {
        border-color: #ff4242;
    }

    .modal-draft {
        border-color: #51cd42;
    }
}

.buttons-forse {
    margin-top: 16px;
    display: flex;

    p {
        display: inline-block;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
        padding-left: 0.6em;
    }

    .forse {
        margin-left: auto;
        margin-right: 0;
    }

    .fa-icon {
        display: inline-block;
    }

    fa-icon {
        font-size: 20px;
    }
}

// :host {
//   display: block;
// }

// .open-close-container {
//   border: 1px solid #dddddd;
//   margin-top: 1em;
//   padding: 20px 20px 0px 20px;
//   color: #000000;
//   font-weight: bold;
//   font-size: 20px;
// }
.title-posts {
    cursor: pointer;
    font-weight: 700;
    color: #0a0a0a;
    -webkit-font-smoothing: antialiased;
    font-family: "Open Sans", Helvetica Neue, Helvetica, Roboto, Arial,
        sans-serif;
    -webkit-box-direction: normal;
    box-sizing: inherit;
    display: -webkit-box;
    max-height: calc(1.3em * 3);
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.3em;
    letter-spacing: -0.3px;
    margin: 0;
    line-height: 1.3;
    transition: color 0.25s;

    &:hover {
        color: #575757;
    }
}
</style>
