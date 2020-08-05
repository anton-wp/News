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
                                    <select class="form-input select" v-model="date.month">
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
                                    <select class="form-input select" v-model="date.day">
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
                                    <select class="form-input select" v-model="date.year">
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
                                    <select class="form-input select" v-model="date.hours">
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
                                    <select class="form-input select" v-model="date.minutes">
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
                    :class="(errorNotif && selectedLinkOption.length < 1) ? 'error' : ''"
                ></multiselect>

                <div
                    class="error-notification"
                    v-if="errorNotif && selectedLinkOption.length < 1"
                >Please add at least 1 link</div>
            </div>

            <div class="input-wrapper input-block">
                <label>
                    Publish to Google News
                    <span class="required">*</span>
                </label>

                <div class="radio-btn d-flex">
                    <div class="radio-btn__item mr-4">
                        <input
                            id="google-true"
                            type="radio"
                            name="gogle-news"
                            :value="true"
                            v-model="displayInFeed"
                        />
                        <label for="google-true">Yes</label>
                    </div>

                    <div class="radio-btn__item">
                        <input
                            id="google-false"
                            type="radio"
                            name="gogle-news"
                            :value="false"
                            v-model="displayInFeed"
                        />
                        <label for="google-false">No</label>
                    </div>
                </div>
            </div>

            <div class="buttons-wrapp d-block">
                <div class="buttons-forse">
                    <label class="d-flex align-items-center w-100">
                        <div class="categoryCheckbox">
                            <svg width="10" height="10" v-if="forcePublish">
                                <use xlink:href="#checkbox" />
                            </svg>
                            <input type="checkbox" v-model="forcePublish" />
                        </div>

                        <div class="categoryTitle ml-2">force publish</div>
                    </label>
                </div>
                <div class="d-flex justify-content-between">
                    <button
                        class="button-add post-button"
                        @click.prevent="upproved = true; declined = false; publishedPost()"
                    >Approve</button>

                    <button
                        class="button-add button-add--decline post-button"
                        @click.prevent="upproved = false; declined = true; publishedPost()"
                    >Decline</button>
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
        Multiselect,
    },

    props: {
        postData: Object,
    },

    data() {
        return {
            postId: undefined,
            date: {
                month: null,
                day: null,
                year: null,
                hours: null,
                minutes: null,
            },
            months,
            hours: [],
            minutes: [],
            years: [],
            now: new Date(),
            reservedTimes: [],

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
                cropper: false,
            },
            errorNotif: false,
            selectedCategory: null,
            categories: null,

            selectedOption: null,

            selectedLinkOption: [],
            linkOption: [],
            newLinkOption: [],
            isLoading: false,

            selectedAuthor: null,

            // cropper
            imgId: undefined,
            cropperX: undefined,
            cropperY: undefined,
            cropperW: undefined,
            cropperH: undefined,
            displayInFeed: false,
            upproved: false,
            declined: false,
        };
    },

    methods: {
        getCategories() {
            this.$axios
                .$get("/api/categories/")
                .then((resp) => {
                    this.categories = resp.data;
                })
                .catch((error) => {
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
                            ...this.newLinkOption,
                        ];
                        this.isLoading = false;
                    });
            }
        },

        addTag(newTag) {
            const tag = {
                id: Math.floor(Math.random() * 10000000),
                type: "created",
                name: newTag,
            };

            this.newLinkOption.push(tag);
            this.selectedLinkOption.push(tag);
        },

        formatTags() {
            const tagsForFormdata = this.selectedLinkOption.map(function (
                item
            ) {
                if (item.type === "created") {
                    return item.name;
                } else {
                    return item.id;
                }
            });

            return tagsForFormdata.toString();
        },

        getFields() {
            this.$axios
                .$get("api/profile/post-fields?action=create")
                .then(({ data }) => {
                    fields: data.fields;
                })
                .catch((error) => {
                    // this.errorMessage = error.response.data.message;
                });
        },

        getReservedTimes() {
            this.$axios
                .$get("/api/posts/create-helpers/get-reserved-time")
                .then((resp) => {
                    resp.data.forEach((element) => {
                        this.reservedTimes.push(Date.parse(element));
                    });
                })
                .catch((error) => {
                    console.log(error);
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

        getRoundedDate(minutes, d) {
            let ms = 1000 * 60 * minutes; // convert minutes to ms
            let roundedDate = new Date(Math.ceil(d.getTime() / ms) * ms);

            this.date.day = roundedDate.getDate();
            this.date.year = roundedDate.getFullYear();
            this.date.month = roundedDate.getMonth();

            this.date.hours = roundedDate.getHours();
            this.date.minutes = roundedDate.getMinutes();
        },

        initDate(settedDate = null) {
            const now = settedDate !== null ? settedDate : this.now;

            this.date.day = now.getDate();
            this.date.year = now.getFullYear();
            this.date.month = now.getMonth();

            this.date.hours = now.getHours();
            this.date.minutes = now.getMinutes();
        },

        publishedPost() {
            const newData = {};

            if (this.postData.title) {
                newData.title = this.postData.title;
            }
            if (this.subtitle) {
                newData.subtitle = this.subtitle;
            }
            if (this.content) {
                newData.bodyJson = this.content;
            }
            if (this.imgId) {
                newData.media = this.imgId;
            }
            if (this.imgDescript) {
                newData.source = this.imgDescript;
            }
            if (this.cropperX) {
                newData.cropperX = this.cropperX;
            }
            if (this.cropperY) {
                newData.cropperY = this.cropperY;
            }
            if (this.cropperW) {
                newData.cropperWidth = this.cropperW;
            }
            if (this.cropperH) {
                newData.cropperHeight = this.cropperH;
            }
            if (this.selectedOption) {
                newData.verdictOption = this.selectedOption;
            }
            if (this.forcePublish) {
                newData.forcePublish = this.forcePublish;
            }
            if (this.displayInFeed) {
                newData.displayInFeed = this.displayInFeed;
            }
            if (this.upproved) {
                newData.upproved = this.upproved;
            }
            if (this.declined) {
                newData.declined = this.declined;
            }

            if (this.selectedLinkOption.length) {
                const tagsForFormdata = this.selectedLinkOption.map(function (
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
            if (this.selectedDate) {
                newData.publishedAt = this.selectedDate;
            }
            this.errorNotif = true;
            if (this.selectedLinkOption.length < 1) {
                return;
            }

            this.errorNotif = false;
            this.$axios
                .$patch(`/api/posts/${this.postId}/review`, newData)
                .then((resp) => {
                    this.$toasted.show(resp.message);
                })
                .catch((error) => {
                    console.log(error);
                    this.$toasted.show(error.message);
                });
        },
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
                minutes: this.minutesDiff(this.now, this.selectedDate),
            };

            if (this.reservedTimes.includes(Date.parse(this.selectedDate))) {
                this.$toasted.error("This date is reserved");
                this.initDate();
            } else if (diffs.minutes < 0) {
                this.initDate();
            }

            return diffs;
        },
    },

    created() {
        this.initDate();
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

        for (let i = 0; i < 60; i++) {
            this.minutes.push(("0" + i).slice(-2));
        }

        this.getCategories();
        this.getFields();

        if (this.postData.id) {
            this.postId = this.postData.id;
        }

        if (this.postData.category.id) {
            this.selectedCategory = this.postData.category.id;
        }

        if (this.postData.tags) {
            this.selectedLinkOption = this.postData.tags;
        }

        if (this.postData.title) {
            this.title = this.postData.title;
        }

        if (this.postData.bodyJson) {
            this.content = this.postData.bodyJson;
        }

        if (this.postData.verdictOption) {
            this.selectedOption = this.postData.verdictOption;
        }
        if (this.postData.cropData) {
            if (this.postData.cropData.x) {
                this.cropperX = this.postData.cropData.x;
            }
            if (this.postData.cropData.y) {
                this.cropperY = this.postData.cropData.y;
            }

            if (this.postData.cropData.width) {
                this.cropperW = this.postData.cropData.width;
            }

            if (this.postData.cropData.height) {
                this.cropperH = this.postData.cropData.height;
            }
        }
        if (this.postData.featured.id) {
            this.imgId = this.postData.featured.id;
        }
        if (this.postData.featured.source) {
            this.imgDescript = this.postData.featured.source;
        }
        if (this.postData.subtitle) {
            this.subtitle = this.postData.subtitle;
        }
    },
    mounted() {
        this.$store.commit("SET_BREADCRUMBS", [{ title: "Review" }]);
    },
};
</script>
