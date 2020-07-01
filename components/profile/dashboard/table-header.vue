<template>
  <div class="table-header-component">
    <div class="sort">
      Sort by
      <select class="form-input select" v-model="sort">
        <option v-for="(sort, index) of sortArr" :value="sort" :key="index">{{sort.title}}</option>
      </select>
    </div>
    <div class="row sort-header">
      <div class="col-lg-auto checkbox" @click="checkboxChange">
        <div class="categoryCheckbox">
          <svg width="10" height="10" v-if="checkboxActive">
            <use xlink:href="#checkbox" />
          </svg>
        </div>
      </div>
      <div class="col-lg title active" v-if="header.title" @click="getSort('title')">
        <h6>{{header.title}}</h6>
      </div>
      <div class="col-lg-4 category" v-if="header.description">
        <h6>{{header.description}}</h6>
      </div>
      <div class="col-lg-3 category" v-if="header.response">
        <h6>{{header.response}}</h6>
      </div>
      <div class="col-lg-2 category active" v-if="header.date" @click="getSort('publishedAt')">
        <h6>{{header.date}}</h6>
      </div>
      <div class="col-lg-2 published active" v-if="header.status" @click="getSort('status')">
        <h6>{{header.status}}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      checkboxActive: false,
      name: "",
      type: "",
      sort: "",
      sortArr: []
    };
  },
  computed: {
    ...mapState(["dashboard"])
  },
  props: {
    header: Object
  },
  watch: {
    sort() {
      this.$emit("getSort", { name: this.sort.name, type: this.sort.type });
    }
  },
  mounted() {
    for (let head in this.header) {
      if (head === "response") {
        continue;
      }
      if (head === "description") {
        continue;
      }
      this.sortArr.push(
        {
          name: this.getName(this.header[`${head}`]),
          type: "ASC",
          title: this.header[`${head}`] + " ASC"
        },
        {
          name: this.getName(this.header[`${head}`]),
          type: "DESC",
          title: this.header[`${head}`] + " DESC"
        }
	  );
	  this.sort =  this.sortArr[0];
    }
  },
  methods: {
    getName(name) {
      // console.log(name[0].toLowerCase())
      name = name.split("");
      name[0] = name[0].toLowerCase();
      name = name.join("");
      return name.split(" ").join("");
    },
    checkboxChange() {
      this.checkboxActive = !this.checkboxActive;
      let ids = [];
      this.dashboard.posts.map(post => ids.push(post.id));
      if (this.checkboxActive) {
        this.$store.commit("ADD_IDS", ids);
      } else {
        this.$store.commit("DEL_IDS", ids);
      }
    },
    getSort(name) {
      if (name !== this.name) {
        this.name = name;
        this.type = "ASC";
      } else if (name === this.name && this.type === "ASC") {
        this.type = "DESC";
      } else if (name === this.name && this.type === "DESC") {
        this.type = "ASC";
      }
      this.$emit("getSort", { name: this.name, type: this.type });
    }
  }
};
</script>
