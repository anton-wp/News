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
                                        v-if="add && fields.publishedAt"
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
                                        v-if="add && fields.publishedAt"
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
                            </div>
                        </div>
                    </div>

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

                        <div class="crop-wrap">
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
                                :class="{'visible-crop' : !visibleCrop}"
                            />
                        </div>
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
                            <h2 class="title-posts" v-if="title">{{ title }}</h2>
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
    middleware: ["auth", "role"],
    components: {
        Multiselect,
        Dropzone,
        VueCropper
    },

    props: {
        add: String,
        edit: String
    },

    data() {
        return {
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
            reservedTimes: [],

            content: null,
            editContent: null,

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
                cropper: false,
                publishInterval: null
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
            visibleCrop: false,
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
        // Getters

        getFields() {
            this.$axios
                .$get("/api/profile/post-fields?action=create")
                .then(resp => {
					console.log(resp);

                    this.fields = resp.fields;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        getCategories() {
            this.$axios
                .$get("/api/categories/")
                .then(resp => {
                    this.categories = resp.data;
                    this.selectedCategory = resp.data[0].id;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        getOptions() {
            this.$axios
                .$get("/api/posts/create-helpers/verdict-options/")
                .then(resp => {
                    this.options = resp.data;
                    this.selectedOption = resp.data[0].title;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        getReservedTimes() {
            this.$axios
                .$get("/api/posts/create-helpers/get-reserved-time")
                .then(resp => {
                    resp.data.forEach(element => {
                        this.reservedTimes.push(Date.parse(element));
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        },

        searchOptions(query) {
            if (query) {
                this.isLoading = true;

                this.$axios
                    .$get("/api/tags/list?search=" + query)
                    .then(({ data }) => {
                        this.linkOption = data;
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

            this.$axios
                .$get(
                    "/api/posts/create-helpers/authors-search?search=" + query
                )
                .then(({ data }) => {
                    this.authorsOption = data;

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

        getRoundedDate(minutes, d) {
            let ms = 1000 * 60 * minutes; // convert minutes to ms
            let roundedDate = new Date(Math.ceil(d.getTime() / ms) * ms);

            this.date.day = roundedDate.getDate();
            this.date.year = roundedDate.getFullYear();
            this.date.month = roundedDate.getMonth();

            this.date.hours = roundedDate.getHours();
            this.date.minutes = roundedDate.getMinutes();
        },

        initDate() {
            this.date.day = this.now.getDate();
            this.date.year = this.now.getFullYear();
            this.date.month = this.now.getMonth();

            this.date.hours = this.now.getHours();
            this.date.minutes = this.now.getMinutes();

            if (this.fields.publishInterval == 10) {
                this.getRoundedDate(10, this.selectedDate);

                return;
            }
        },

        trigerInputUpload() {
            this.$refs.imgUploadInpt.click();
        },

        clipperReady() {
            this.dropVisible = false;
            this.loadingDrop = false;
            this.visibleCrop = true;

            if (this.imgCrop) {
                this.$refs.cropper.setCropBoxData({
                    left: this.cropperX,
                    top: this.cropperY,
                    width: this.cropperW,
                    height: this.cropperH
                });
            }

            this.saveDraft();
        },

        afterComplete(file, res) {
            this.imgCrop = undefined;

            this.imgCrop = res.file;
            this.imgId = res.mediaId;
        },

        uploadImg() {
            this.dropVisible = true;
            this.loadingDrop = true;
            this.visibleCrop = false;
            this.imgCrop = undefined;

            const formData = new FormData();

            formData.append("image", this.$refs.imgUploadInpt.files[0]);
            formData.append("postId", this.postId);

            this.$axios
                .$post("/api/media/image-preload/", formData)
                .then(res => {
                    this.imgId = res.mediaId;
                    this.imgCrop = res.file;
                })
                .catch(error => console.error(error));
        },

        saveDraft() {
            if (this.$refs.cropper) {
                const cropData = this.$refs.cropper.getCropBoxData();

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
                newData.publishedAt = this.selectedDate.toString();
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

            this.$axios
                .$patch(`/api/posts/${this.postId}`, newData)
                .then(resp => {
                    this.$toasted.show(resp.message);
                })
                .catch(error => {
                    console.log(error);
                    this.$toasted.show(error.message);
                });
        },

        publishedPost() {
            this.$v.$touch();

            this.errorNotif = true;
            if (
                this.$v.$invalid &&
                !this.imgId &&
                !this.selectedLinkOption.length
            ) {
                return;
            }

            this.errorNotif = false;

            this.$axios
                .$patch(`/api/posts/${this.postId}/publish`, this.formData)
                .then(resp => {
                    // console.log(resp);
                    this.$toasted.show(resp.message);
                })
                .catch(error => {
                    console.log(error);
                    this.$toasted.show(error.message);
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

            if (this.reservedTimes.includes(Date.parse(this.selectedDate))) {
                this.$toasted.error("This date is reserved");
                this.initDate();
            } else if (diffs.minutes < 0) {
                this.initDate();
            }

            return diffs;
        },

        titlesLength() {
            const lengthTitle = {
                title: 0,
                subtitle: 0
            };

            if (this.title) lengthTitle.title = this.title.length;
            if (this.subtitle) lengthTitle.subtitle = this.subtitle.length;

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

        this.getFields();
        this.getCategories();
        this.getOptions();
        this.getReservedTimes();

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

        if (this.fields.publishInterval == 10) {
            this.minutes = [0, 10, 20, 30, 40, 50];
        } else {
            for (let i = 0; i < 60; i++) {
                this.minutes.push(("0" + i).slice(-2));
            }
        }

        if (this.add) {
            this.$axios
                .$post("/api/posts/")
                .then(resp => {
                    this.postId = resp.id;
                    this.dropOptions.params.postId = resp.id;
                })
                .catch(error => {
                    console.log(error);
                });
        }

        if (this.edit) {
            this.dropOptions.headers.Authorization = this.$auth.getToken(
                "local"
            );

            this.$axios
                .$get(`/api/posts/${this.$route.params.slug}/edit`)
                .then(resp => {
                    this.postId = resp.data.id;
                    this.selectedOption = resp.data.verdictOption;
                    this.title = resp.data.title;
                    if (resp.data.bodyJson) {
                        this.content = resp.data.bodyJson;
                        this.editContent = resp.data.bodyJson;
                    }

                    this.featuredImage = resp.data.source;
                    this.selectedCategory = resp.data.category.id;
                    this.selectedOption = resp.data.verdictOption;
                    this.selectedLinkOption = resp.data.tags;
                    if (resp.data.featured.original && resp.data.cropData) {
                        this.cropperX = resp.data.cropData.x;
                        this.cropperY = resp.data.cropData.y;
                        this.cropperW = resp.data.cropData.width;
                        this.cropperH = resp.data.cropData.height;
                        this.imgCrop = resp.data.featured.original;
                        this.imgId = resp.data.featured.id;
                    }
                    this.imgDescript = resp.data.featured.source;
                    this.subtitle = resp.data.subtitle;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    mounted() {
        let breadCrumbsItem = "";

        if (this.add) breadCrumbsItem = "Add";
        if (this.edit) breadCrumbsItem = "Edit";

        this.$store.commit("SET_BREADCRUMBS", [{ title: breadCrumbsItem }]);
        this.dropOptions.headers.Authorization = this.$auth.getToken("local");
        // this.dropOptions.params.postId = this.postId
    }
};
</script>

