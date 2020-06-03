<template>
  <div>
    <div class="row">
      <!-- <div class="col-12 sort">
        <span class="verdicts-posts">Sort by:</span>
        <button class="click-for-follow follow">
          latest
        </button>
        <button class="click-for-follow follow">
          top voted
        </button>
      </div> -->
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <draft-post />
          </div>
          <!-- <div *ngIf="profileStore.pagination" class="block-counter">
            <vrd-pcpb *ngIf="profileStore.pagination.pagesCount > 1" [rout]="rout"></vrd-pcpb>
          </div> -->
        </div>
      </div>
    </div>
    <!-- <div>
    </div> -->
  </div>
</template>

<script>
import DraftPost from '~/components/profile/posts-draft'

export default {
  components: {
    DraftPost
  },
  layout: 'profile'
}
</script>

<style lang="scss">
.sort {
  margin-bottom: 20px;
  .verdicts-posts {
    vertical-align: bottom;
    font-size: 100%;
    box-sizing: inherit;
    color: #8d8d8d;
    font-weight: 600;
  }
  .follow {
    color: #ff4242;
    margin-right: 5px;
    &:hover {
      background-color: #bc2d2d;
      color: #fff;
    }
  }
  .verdicts-posts {
    margin-right: 10px;
  }
  .click-for-follow {
    font-size: 0.75rem;
    padding: 0.55em 1.4em;
    text-transform: none;
    letter-spacing: 0.9px;
    border-radius: 5px;
    vertical-align: text-top;
    margin-bottom: 0;
    font-weight: 400;
    pointer-events: all;
    background: 0 0;
    border: 1px solid;
    line-height: 1;
    text-align: center;
    transition: 0.3s;
    cursor: pointer;
    margin-top: 0.5em;
  }
}
.block-counter {
  width: 100%;
}
</style>
