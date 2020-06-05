<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 sort">
          <span class="verdicts-posts">Sort by:</span>
          <button class="click-for-follow follow">latest</button>
          <button class="click-for-follow follow">top</button>
        </div>
        <follower-block :type="'following'" />
        <!-- <div *ngFor="let profile of profileStore.Follow" class="col-sm-6 profile">
          <vrd-fpb [id]="id" [profile]="profile" [rout]="rout"></vrd-fpb>
        </div>-->
        <div class="col-12 button-block">
          <button class="loadMore">Load More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FollowerBlock from "~/components/profile/block-follower"
import axios from 'axios'

export default {
  layout: "profile",
  components: {
    FollowerBlock
  },
  methods: {
    getFollowing () {
      const httpOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        }
      };
      axios.get(`/api/profile/tabs`, httpOptions)
      .then(res => {
        this.sortTabs(res)
      })
      .catch(error => console.error(error))
    }
  },
  created () {

  }
};
</script>

<style lang="scss">
  .sort {
    margin-bottom: 20px;

    .verdicts-posts {
      margin-right: 10px;
    }
  }

  .profile {
    margin-bottom: 3.2em;
  }

.button-block{
  display: flex;
  justify-content: center;
  .loadMore {
    box-sizing: inherit;
    overflow: visible;
    background: 0 0;
    border: 1px solid;
    line-height: 1;
    text-align: center;
    transition: 0.3s;
    cursor: pointer;
    margin-top: 0.5em;
  }

  .active {
    background-color: #bc2d2d;
    color: #fff !important;
  }

  .follow {
    color: #ff4242;
    margin-right: 5px;

    &:hover {
      background-color: #bc2d2d;
      color: #fff;
    }
  }

  .button {
    display: flex;
    justify-content: center;
    background-color: none;

    .loadMore {
      box-sizing: inherit;
      overflow: visible;
      background: 0 0;
      display: inline-block;
      vertical-align: middle;
      margin: 0 0 1rem;
      font-family: inherit;
      border: 1px solid transparent;
      border-radius: 0;
      transition: background-color .25s ease-out, color .25s ease-out;
      line-height: 1;
      text-align: center;
      cursor: pointer;
      background-color: #ff4242;
      color: #fefefe;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .8px;
      user-select: none;
      padding: .85em 1.4em .8em;
      font-size: .75rem;
      position: relative;

      &:hover {
        background-color: #bc2d2d;
      }
    }
  }
}
</style>
