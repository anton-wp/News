<template>
    <div class="add-post-wrapper">
        <div class="container p-0">
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
                    <div class="col-sm col-lg-4" style="padding-left: 0px; padding-right: 0px;">
                        <div class="schedule-date-col schedule-time">
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
                                <div class="select-wrap minutes-select" style="margin-left: 10px;">
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
                        :key="category.id"
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
                        :key="option.id"
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
                    @remove="saveDraft"
                    @close="saveDraft"
                    :class="(errorNotif && selectedLinkOption.length < 1) ? 'error' : ''"
                ></multiselect>

                <div
                    class="error-notification"
                    v-if="errorNotif && selectedLinkOption.length < 1"
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
                    <div class="buttons-forse">
                        <label class="d-flex align-items-center w-100">
                            <div class="categoryCheckbox">
                                <svg width="10" height="10" v-if="forcePublish">
                                    <use xlink:href="#checkbox" />
                                </svg>
                                <input type="checkbox" v-model="forcePublish" @change="saveDraft" />
                            </div>

                            <div class="categoryTitle ml-2">force publish</div>
                        </label>
                    </div>
                    <button class="button-add post-button" @click.prevent="publishedPost">Publish</button>
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
    </div>
</template>

<script>
import { months } from "~/constants/dates";
import Multiselect from "vue-multiselect";

export default {
    middleware: "auth",
    components: {
        Multiselect
    },

    props: {
        postData: Object
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
            isLoadingAuthor: false
        };
    },

    methods: {
        getOptions() {
            this.$axios
                .$get("/api/posts/create-helpers/verdict-options/")
                .then(resp => {
                    this.options = resp.data;
                })
                .catch(error => {
                    this.errorMessage = error;
                });
        },

        getCategories() {
            this.$axios
                .$get("/api/categories/")
                .then(resp => {
                    this.categories = resp.data;
                })
                .catch(error => {
                    this.errorMessage = error;
                });
        },

        searchOptions(query) {
            if (query) {
                this.isLoading = true;

                this.$axios
                    .$get(
                        "https://dev.api.verdict.org/tags/list?search=" + query
                    )
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
                    "https://dev.api.verdict.org/posts/create-helpers/authors-search?search=" +
                        query
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

        getFields() {
            this.$axios
                .$get("api/profile/post-fields?action=create")
                .then(({ data }) => {
                    fields: data.fields;
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

        saveDraft() {
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

            // this.$axios
            //     .$patch(`/api/posts/${this.postId}`, newData)
            //     .then(resp => {
            //         this.$toasted.show(resp.message);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //         this.$toasted.show(error.message);
            //     });

            console.log(newData);
        },

        publishedPost() {
            // this.$v.$touch();
            // if (this.$v.$invalid) {
            //     this.errorNotif = true;
            //     return;
            // }
            // this.errorNotif = false;
            // this.$axios
            //     .$patch(`/api/posts/${this.postId}/publish`, this.formData)
            //     .then(resp => {
            //         // console.log(resp);
            //         this.$toasted.show(resp.message);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //         this.$toasted.show(error.message);
            //     });
        }
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

        this.getOptions();
        this.getCategories();
        this.getFields();

        this.$axios
            .$post("/api/posts/")
            .then(resp => {
                this.postId = resp.id;
                this.dropOptions.params.postId = resp.id;
            })
            .catch(error => {
                console.log(error);
            });

        this.postId = this.postData.id;
        this.selectedOption = this.postData.verdictOption;
        this.selectedCategory = this.postData.category.id;
        this.selectedOption = this.postData.verdictOption;
        this.selectedLinkOption = this.postData.tags;
    },
    mounted() {
        this.$store.commit("SET_BREADCRUMBS", [{ title: "Add" }]);
    }
};
</script>
