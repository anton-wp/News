<template>
    <div class="add-post-wrapper">
        <div class="container">
            <div class="row blockForm">
                <div class="col-lg-12">
                    <h1 class="create-post-title">Add Post</h1>
                    <h1 class="create-post-title">Edit Draft</h1>
                    <p class="create-post-subtitle">
                        must follow
                        <a href="#">TOS</a> and general post
                        <a href="#">guidelines</a>
                    </p>
                </div>
            </div>

            <form class="primary-form" id="addPostForm">
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
                                    maxlength="120"
                                    rows="2"
                                    v-model.trim="$v.title.$model"
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

                                <editor v-model="content" />

                                <div class="radius">
                                    <div class="body"></div>
                                </div>
                                <div class="counter radius">
                                    <span>0/</span>
                                    <span>10000</span>
                                </div>
                            </div>
                            <div
                                class="error-notification"
                                v-if="!$v.body.required && $v.body.$dirty"
                            >This field is required</div>
                            <div
                                class="error-notification"
                                v-if="!$v.body.minLength"
                            >Minimum content length: 350 words</div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-5 col-xl-4">
                        <div class="container date">
                            <div class="row">
                                <div
                                    class="col-sm-auto col-lg-8"
                                    style="padding-left: 0px; padding-right: 0px;"
                                >
                                    <div class="schedule-date-col schedule-date">
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
                                                >
                                                    <option
                                                        v-for="year of years"
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
                                    <div class="schedule-date-col schedule-time">
                                        <label>Time</label>
                                        <div class="time-select-wrap">
                                            <div class="select-wrap hours-select">
                                                <select
                                                    class="form-input select"
                                                    v-model="date.hours"
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
                        <div class="input-wrapper">
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

                            <select class="form-input select" v-model="selectedCategory">
                                <option
                                    v-for="category of categories"
                                    :value="category.id"
                                >{{ category.slug }}</option>
                            </select>
                        </div>

                        <div class="input-wrapper">
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
                            <select class="form-input select" v-model="selectedOption">
                                <option
                                    v-for="option of options"
                                    :value="option.title"
                                >{{ option.title }}</option>
                            </select>
                        </div>

                        <div class="input-wrapper input-block">
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
                            ></multiselect>

                            <div
                                class="error-notification"
                                v-if="errorNotif && selectedLinkOption.length > 0"
                            >Please add at least 1 link</div>
                        </div>

                        <div class="input-wrapper author">
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
                            >
                                <template slot="option" slot-scope="props">
                                    <div class="option__desc">
                                        <span class="option__title">{{ props.option.firstName }}</span>
                                    </div>
                                </template>
                            </multiselect>
                        </div>

                        <div class="buttons-wrapp">
                            <!-- <button class="button-add draft-button">Save Draft</button> -->
                            <div>
                                <button
                                    class="button-add post-button"
                                    @click.prevent="saveDraft"
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

                    <div class="col-12 col-lg-7 col-xl-8">
                        <div class="buttons-wrapp input-wrapper">
                            <label>
                                Featured Image
                                <span class="required">*</span>
                            </label>

                            <button class="button-add post-button">Add Image</button>
                            <input type="file" id="file" />
                        </div>

                        <clipper-basic
                            src="http://dummyimage.com/1920x1080/99cccc.jpeg"
                            preview="preview"
                            :grid="true"
                            :ratio="16/9"
                            :touch-create="false"
                            class
                        />
                    </div>
                    <div class="col-12 col-lg-5 col-xl-4">
                        <div
                            class="animation prevImgBlock"
                            style="max-width: 410px; height: 100%; margin: 0 auto;"
                        >
                            <clipper-preview name="preview"></clipper-preview>
                            <div class="header-metadata">
                                <span class="category js--post-category-preview">
                                    <span>category</span>
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
                            <h2 class="title-posts">title-post</h2>
                        </div>
                    </div>
                    <div class="col-12 col-lg-7 col-xl-8">
                        <div class="input-wrapper">
                            <label>
                                Featured Image source
                                <span class="required">*</span>
                            </label>
                            <input
                                required="required"
                                class="form-input"
                                placeholder="e.g Instagram, Youtube, etc"
                            />
                            <label class="require">
                                <span class="required">*</span> required fields
                            </label>
                            <div class="error-notification">This field is required</div>
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

export default {
    // middleware: "auth",
    components: {
        Multiselect
    },
    data() {
        return {
            postId: null,
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

            content: [],

            title: "",
            subtitle: "",
            submitStatus: "",
            body: "",
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
            isLoadingAuthor: false
        };
    },
    validations: {
        title: {
            required,
            minLength: minLength(50),
            maxLength: maxLength(120)
        },
        subtitle: {
            minLength: minLength(50)
        },
        body: {
            required,
            minLength: minLength(160),
            maxLength: maxLength(1000)
        },
        imgTitle: {
            required
        }
    },
    methods: {
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

                    console.log(this.authorsOption);

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
        submit() {
            this.errorNotif = true;
            console.log("submit!");
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
            } else {
                // do your submit logic here
                this.submitStatus = "PENDING";
                setTimeout(() => {
                    this.submitStatus = "OK";
                }, 500);
            }
        },

        addFields() {
            this.$http
                .get("api/profile/post-fields?action=create")
                .then(({ data }) => {
                    this.fields = data.fields;
                })
                .catch(error => {
                    // this.errorMessage = error.response.data.message;
                });
        },

        getCategories() {
            this.$http
                .get("https://dev.api.verdict.org/categories/")
                .then(({ data }) => {
                    this.categories = data.data;

                    this.selectedCategory = this.categories[0].id;
                })
                .catch(error => {
                    // this.errorMessage = error.response.data.message;
                });
        },

        getOptions() {
            this.$http
                .get(
                    "https://dev.api.verdict.org/posts/create-helpers/verdict-options/"
                )
                .then(({ data }) => {
                    this.options = data.data;

                    this.selectedOption = this.options[0].title;
                })
                .catch(error => {
                    // this.errorMessage = error.response.data.message;
                });
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

        initDate() {
            this.date.day = this.now.getDate();
            this.date.year = this.now.getFullYear();
            this.date.month = this.now.getMonth();

            this.date.hours = this.now.getHours();
            this.date.minutes = this.now.getMinutes();
        },

        formatTags() {
            const tagsForFormdata = this.selectedLinkOption.map(function(item) {
                if (item.type) {
                    return item.name;
                } else {
                    return item.id;
                }
            });

            return tagsForFormdata;
        },

        saveDraft() {
			// let formData = this.formData
            this.$http
                .post( '/api/posts/', this.formData
                )
                .then(resp => {
					console.log(resp);
				})
                .catch(error => {
                    console.log(error);
                });
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

        this.addFields();
        this.getCategories();
        this.getOptions();
    },
    computed: {
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

        formData() {
            const newData = {
                publishedAt: this.selectedDate,
                category: this.selectedCategory,
                verdictOption: this.selectedOption
            };

            if (this.$v.title.$model) newData.title = this.$v.title.$model;
            if (this.$v.subtitle.$model)
                newData.subTitle = this.$v.subtitle.$model;
            if (this.content.length) newData.body = this.content;
            if (this.formatTags().length) newData.tags = this.formatTags();

            // title: this.$v.title.$model,
            //     subTitle: this.$v.subtitle.$model,
            //     body: this.content,
            //     tags: this.formatTags(),
            //     category: this.selectedCategory,
            //     verdictOption: this.selectedOption,
            //     publishedAt: this.selectedDate
            // featuredImage: (binary)
            // source: sdf sdf sdf sdf s
            // cropperX: 134
            // cropperY: 69.21875
            // cropperWidth: 500
            // cropperHeight: 281

            // const newData = new FormData();

            // newData.append("publishedAt", this.selectedDate);
            // newData.append("category", this.selectedCategory);
            // newData.append("verdictOption", this.selectedOption);

            // newData.append("", this.selectedDate);

            // if (this.$v.title.$model)
            //     newData.append("title", this.$v.title.$model);
            // if (this.$v.subtitle.$model)
            //     newData.append("subTitle", this.$v.subtitle.$model);
            // if (this.content.length) newData.append("body", this.content);
            // if (this.formatTags().length)
            //     newData.append("tags", this.selectedDate);

            return newData;
        }
    }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped>
@import "../assets/utils/variables";
@import "../assets/utils/colors";

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
