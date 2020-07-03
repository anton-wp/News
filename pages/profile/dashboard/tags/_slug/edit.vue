<template>
  <form class="edit-form-tag" id="settingForm">
    <div class="wrap">
      <span>Name</span>
      <input type="text" name="name"  placeholder="name" />
    </div>
    <div class="wrap">
      <span>Slug</span>
      <input type="text" name="slug" placeholder="slug" />
    </div>
    <div class="wrap">
      <span>Description</span>
      <textarea type="text" placeholder="description"></textarea>
    </div>
    <div class="wrap">
      <!-- <label (click)="changeFeatured()">
        <fa-icon *ngIf="!featured" [icon]="faSquare"></fa-icon>
        <fa-icon *ngIf="featured" [icon]="faCheckSquare"></fa-icon>Featured
      </label> -->
    </div>
    <div class="block-button text-right">
			<!-- (click)="update()" -->
      <button class="update" >update</button>
			<!-- (click)="delete()" [routerLink]="['/profile/dashboard/tags'] -->
      <button class="delete">delete</button>
    </div>
  </form>
</template>
<script>
export default {
  layout: "profile"
};
</script>
