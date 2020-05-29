<template>
  <div class="container wrapper-horizontal-verdict-card" [ngClass]="{back_block:type === 'minimal-block'}">
    <div class="row">
      <div class="pad0-image col-12 col-sm-12 col-md-6 col-lg-6">
        <!-- add go to post page {id} -->
        <a [routerLink]="['', horizontalPost.slug]">
          <img  [src]="horizontalPost.featured.landscape" class="post-image" alt="">
        </a>
      </div>
      <div class="pad0-image col-12 col-sm-12 col-md-6 col-lg-6">
        <div class="information" [ngClass]="{padding0:type === 'minimal-block' || type === 'full-block', paddingBT0: type !== 'full-block'}">
          <div class="container-fluid">
            <vrd-vhc [idPost]="horizontalPost.id" [Post]="horizontalPost" colorScheme="dark" [cardHeaderObject]="setHeaderComponentObject()" ></vrd-vhc>
            <div class="row block wrapp">
              <h2 class="title" >
                <!-- add go to post page {id} -->
                <a [routerLink]="['', horizontalPost.slug]" *ngIf="type === 'full-block'">{{getTitleForMinimalBlock(horizontalPost.title, true)}}...</a>
                <a [routerLink]="['', horizontalPost.slug]" *ngIf="(type === 'minimal-block')">{{getTitleForMinimalBlock(horizontalPost.title, false)}}...</a>
              </h2>
            </div>
            <div *ngIf="horizontalPost" class="shortContent">
              <p [routerLink]="['', horizontalPost.slug]" *ngIf="!background">{{horizontalPost.shortContent}}[...]</p>
            </div>
            <div *ngIf="type === 'full-block'" class="row wrapp">
              <span class="about-news" [innerHTML]="horizontalPost.body?.slice(0, 125)"></span>
            </div>
            <vrd-vboc [Post]="horizontalPost" [cardHeaderObject]="setHeaderComponentObject()"></vrd-vboc>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsCardHeader from '~/components/news/NewsCardHeader'
import NewsCardFooter from '~/components/news/NewsCardFooter'
export default {
  props: {
    backBlock: Boolean
  },
  components: {
    NewsCardHeader,
    NewsCardFooter
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/utils/variables";

</style>
