<template>
  <div class="tabs">
    <ul>
      <li class="menu" v-for="item in tabs" :key="item.title">
        <!-- <span>comments</span> -->
        <span class="menu-block" @click="openCloseTabs(item.title)">
          <svg width="20" height="20">
            <use v-bind:xlink:href="`#${item.title}`" />
          </svg>
          <span class="title">
            {{ item.title }}
            <span v-if="item.counter > 0">({{ item.counter }})</span>
          </span>
          <svg class="icon" :class="item.status ? 'open' : ''" v-if="item.children" width="17" height="17">
            <use xlink:href="#caret-down" />
          </svg>
        </span>
        <!-- <fa-icon *ngIf="!item.click && item.children" class="icon" (click)="expandMenu(item.title)" [icon]="faSortDown"></fa-icon>
        <fa-icon *ngIf="item.click && item.children" class="icon" (click)="expandMenu(item.title)" [icon]="faSortUp"></fa-icon>-->
        <ul class="blockSubMenu" v-if="item.children && item.status">
          <li class="subMenu" v-for="subTabs in item.children" :key="subTabs.title">
            <span class="subtitle">
              {{ subTabs.title }}
              <span v-if="subTabs.counter">({{ subTabs.counter }})</span>
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0OTc5ZDdmYy05MjcxLTQ4MGEtOTI5ZS00ODlkY2U0OTZlYjgiLCJ1c2VybmFtZSI6ImFkbWluIiwidXNlclJvbGUiOiJzdXBlci1hZG1pbiIsInR5cGUiOiJzeXN0ZW0iLCJpYXQiOjE1OTEyNzc0NDUsImV4cCI6MTU5MTM2Mzg0NX0.-fz-5kOLaPcbNuZjWkh9zHhWeoVh51Oivm7jnXcFKYM',
      tabs: []
    }
  },
  methods: {
    openCloseTabs (id) {
      this.tabs.map(tab => tab.title === id ? tab.status = !tab.status : null)
    }
  },
  beforeMount () {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      }
    };
    axios.get(`/api/profile/tabs`, httpOptions)
    .then(res => {
      console.log(res)
      res.data.data.map(data => data.status = false)
      this.tabs = res.data.data
    })
    .catch(error => console.error(error))
  }
}
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
.icon {
  color: #919191;
  display: block;
  margin-left: 10px !important;
  @media (max-width: 768px) {
    display: none !important;
  }
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
