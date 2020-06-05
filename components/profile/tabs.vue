<template>
    <div class="tabs">
        <ul>
            <li class="menu" v-for="item in tabs" :key="item.title">
                <!-- <span>comments</span> -->
                <nuxt-link class="link" v-bind:to="item.children ? '' : `/profile${item.path}`">
                    <span
                        class="menu-block"
                        :class="item.status ? 'active-tab' : ''"
                        @click="item.children ? openCloseTabs(item.title) : activTabsUpdate(item.path)"
                    >
                        <svg width="20" height="20">
                            <use v-bind:xlink:href="`#${item.title}`" />
                        </svg>
                        <span class="title">
                            {{ item.title }}
                            <span
                                class="counter"
                                v-if="item.counter > 0"
                            >({{ item.counter }})</span>
                        </span>
                        <svg
                            class="icon"
                            :class="item.status ? 'open' : ''"
                            v-if="item.children"
                            width="17"
                            height="17"
                        >
                            <use xlink:href="#caret-down" />
                        </svg>
                    </span>
                </nuxt-link>
                <!-- <fa-icon *ngIf="!item.click && item.children" class="icon" (click)="expandMenu(item.title)" [icon]="faSortDown"></fa-icon>
                <fa-icon *ngIf="item.click && item.children" class="icon" (click)="expandMenu(item.title)" [icon]="faSortUp"></fa-icon>-->
                <ul class="blockSubMenu" v-if="item.children && item.status">
                    <li class="subMenu" v-for="subTabs in item.children" :key="subTabs.title">
                        <nuxt-link class="link" v-bind:to="`/profile${subTabs.path}`">
                            <span
                                class="subtitle"
                                :class="subTabs.status ? 'active-tab' : ''"
                                @click="activTabsUpdate(subTabs.path)"
                            >
                                {{ subTabs.title }}
                                <span
                                    class="counter"
                                    v-if="subTabs.counter"
                                >({{ subTabs.counter }})</span>
                            </span>
                        </nuxt-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
// import axios from 'axios'
import { log } from "util";

export default {
    data() {
        return {
            tabs: [],
            token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0OTc5ZDdmYy05MjcxLTQ4MGEtOTI5ZS00ODlkY2U0OTZlYjgiLCJ1c2VybmFtZSI6ImFkbWluIiwidXNlclJvbGUiOiJzdXBlci1hZG1pbiIsInR5cGUiOiJzeXN0ZW0iLCJpYXQiOjE1OTEzNjA4NzcsImV4cCI6MTU5MTQ0NzI3N30.SXvitSphmYD_JSAiJrqmPrzxP-82fskTMjLEG6CKwe0"
        };
    },
    methods: {
        openCloseTabs(id) {
            this.tabs.map(tab =>
                tab.title === id ? (tab.status = !tab.status) : null
            );
        },
        activTabsStart(res, rout2, rout3) {
            let rout = [];
            if (!rout2) {
                let str = "";
                rout = this.$route.fullPath.split("/");
                rout = rout.map(rout => (rout = str.concat("/", rout)));
            } else {
                rout[2] = rout2;
                rout[3] = rout3;
            }
            res.map(data => {
                if (data.path === rout[2]) {
                    data.status = true;
                    if (data.children && rout[3]) {
                        data.children.map(tab =>
                            tab.path === rout[2] + rout[3]
                                ? (tab.status = true)
                                : (tab.status = false)
                        );
                    }
                    if (data.children && !rout[3]) {
                        data.children.map(tab =>
                            tab.path === rout[3] || tab.path === rout[2]
                                ? (tab.status = true)
                                : (tab.status = false)
                        );
                    }
                } else {
                    data.status = false;
                    if (data.children) {
                        data.children.map(tab => (tab.status = false));
                    }
                }
            });
            this.tabs = res;
        },
        activTabsUpdate(id) {
            let str = "";
            let rout = id.split("/");
            rout = rout.map(rout => (rout = str.concat("/", rout)));
            this.activTabsStart(this.tabs, rout[1], rout[2]);
        },
        sortTabs(res) {
            let example = {
                Dashboard: 0,
                Comments: 1,
                Posts: 2,
                Bookmarks: 3,
                Followers: 4,
                Following: 5,
                Notifications: 6,
                Settings: 7
            };
            let dasboard = {
                Notes: 0,
                Posts: 1,
                Draftposts: 2,
                Comments: 3,
                Verdicts: 4,
                Blocked: 5,
                Tags: 6,
                AdminDashboard: 7
            };
            let comments = {
                Verdicts: 0,
                AllComments: 1,
                Replies: 2,
                Subscribed: 3
            };
            let posts = {
                Published: 0,
                Pending: 1,
                Declined: 2,
                Scheduled: 3,
                Draft: 4,
                AddPost: 5
            };
            let childrenDashboard;
            let childrenComments;
            let childrenPosts;

            res.data.data.map(tab =>
                tab.title === "Dashboard"
                    ? (childrenDashboard = tab.children)
                    : null
            );
            res.data.data.map(tab =>
                tab.title === "Comments"
                    ? (childrenComments = tab.children)
                    : null
            );
            res.data.data.map(tab =>
                tab.title === "Posts" ? (childrenPosts = tab.children) : null
            );

            if (childrenDashboard) {
                childrenDashboard.map(
                    res => (res["sort"] = res.title.replace(/\s+/g, ""))
                );
                childrenDashboard.sort(
                    (l, r) => dasboard[l.sort] - dasboard[r.sort]
                );
            }

            if (childrenComments) {
                childrenComments.map(
                    res => (res["sort"] = res.title.replace(/\s+/g, ""))
                );
                childrenComments.sort(
                    (l, r) => comments[l.sort] - comments[r.sort]
                );
            }

            if (childrenPosts) {
                childrenPosts.map(
                    res => (res["sort"] = res.title.replace(/\s+/g, ""))
                );
                childrenPosts.sort((l, r) => posts[l.sort] - posts[r.sort]);
            }

            res.data.data.sort((l, r) => example[l.title] - example[r.title]);
            this.activTabsStart(res.data.data);
        }
    },
    beforeMount() {
        const httpOptions = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        };
        this.$http
            .get(`/api/profile/tabs`)
            .then(res => {
                this.sortTabs(res);
            })
            .catch(error => console.error(error));
    }
};
</script>

<style lang="scss" scoped>
.menu {
    // display: inline-block;
    margin-right: 10px;

    .menu-block {
        display: flex;
        align-items: center;

        @media (max-width: 768px) {
            display: inline;
        }
    }
}
.open {
    transform: rotate(180deg);
}
.counter {
    margin-left: 5px;
}
.icon {
    color: #919191;
    display: block;
    margin-left: 10px !important;
    @media (max-width: 768px) {
        display: none !important;
    }
}

.active-tab {
    color: #ff4242;
}

ul {
    position: sticky;
    top: 90px;
}

ul {
    z-index: 1;
    padding-left: 0 !important;
    margin-top: -15px;
    @media (max-width: 768px) {
        margin-top: -40px;
    }
}

li {
    display: block;
    margin-top: 20px;

    @media (max-width: 768px) {
        text-align: center;
    }
    @media (max-width: 639px) {
        margin-top: 5px;
    }
    // ul {
    //   padding-top: 5px;
    // }
}

.title {
    vertical-align: middle;
    display: contents;
    @media (max-width: 639px) {
        display: none;
        margin-top: 25px;
    }
}
.link {
    text-decoration: none;
    color: inherit;
}

.menu {
    color: #0a0a0a;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    transition: color 0.25s;
    @media (max-width: 768px) {
        text-transform: none;
        font-size: 0.7em;
        font-weight: 400;
    }

    &:hover {
        color: #ff4242;
    }

    svg {
        margin: 8px 0;
        margin-right: 1.2em;
        @media (max-width: 768px) {
            margin-right: 0;
            margin: 0 auto;
            display: block;
        }
        @media (max-width: 639px) {
            width: 25px;
            height: 25px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }
}
.blockSubMenu {
    @media (max-width: 768px) {
        display: flex;
        position: absolute;
        width: calc(100vw - 100% - 0.9375rem);
        overflow-x: scroll;
        left: 85px;
        top: 25px;
        background-color: #f4f4f4;
        cursor: pointer;
    }
    @media (max-width: 639px) {
        left: 50px;
        top: 35px;
        width: calc(100vw - 100% - 1rem);
    }
    .subMenu {
        list-style-type: none;
        color: #7a7a7a;
        // color: #ff4242;
        font-weight: 700;
        cursor: pointer;
        transition: color 0.25s;
        font-size: 16px;
        margin-left: 60px;
        text-transform: none;
        @media (max-width: 768px) {
            margin-left: 0px;
            margin-top: 0px;
            padding: 0.4em 1em 0.8em;
            display: list-item;
            white-space: nowrap;
        }
        @media (max-width: 639px) {
            font-size: 11.5px;
        }

        &:hover {
            color: #ff4242;
        }
    }
}
</style>
