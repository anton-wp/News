<template>
  <div class="row">
		<!-- (click)="changeCheck()"
		*ngIf="!checkboxBig" -->
    <div class="col-lg-auto checkbox" >
      <!-- <fa-icon *ngIf="!check" [icon]="faSquare"></fa-icon>
      <fa-icon *ngIf="check" [icon]="faCheckSquare"></fa-icon> -->
    </div>
    <!-- <div *ngIf="checkboxBig" class="col-lg-2 checkbox" (click)="changeCheck()"> -->
      <!-- <fa-icon *ngIf="!check" [icon]="faSquare"></fa-icon>
      <fa-icon *ngIf="check" [icon]="faCheckSquare"></fa-icon> -->
    <!-- </div> -->
      <!-- *ngIf="title"
      (click)="sortTitle()"
      [routerLink]="'/profile' + rout"
      [queryParams]="{
          q: profileStore.search,
          status: profileStore.statusSearch,
          category: profileStore.categorySearch,
          author: profileStore.user,
          sort: 'titleSort',
          direction: profileStore.sort === 'titleSort'  && profileStore.typeSort !== 'DESC' ? 'DESC' : 'ASC',
          page: 1
        }" -->
    <div
      class="col-lg title active"
    >
      <h6>Title</h6>
    </div>
		<!-- *ngIf="category"  -->
    <div class="col-lg-4 category">
      <h6>Category</h6>
    </div>
    <!-- <div class="col-lg-3 category">
      <h6>Category</h6>
    </div> -->

    <div class="col-lg-2 category">
      <h6>Response To</h6>
    </div>
      <!-- *ngIf="published"
      (click)="sortDate()"
      [routerLink]="'/profile' + rout"
      [queryParams]="{
          q: profileStore.search,
          status: profileStore.statusSearch,
          category: profileStore.categorySearch,
          author: profileStore.user,
          sort: 'publishedAtSort',
          direction: profileStore.sort === 'publishedAtSort'  && profileStore.typeSort !== 'DESC' ? 'DESC' : 'ASC',
          page: 1
        }" -->
    <div
      class="col-lg-2 published active"
    >
      <h6>Published At</h6>
    </div>
      <!-- *ngIf="created"
      (click)="sortDate()"
      [routerLink]="'/profile' + rout"
      [queryParams]="{
          q: profileStore.search,
          author: profileStore.user,
          sort: 'publishedAtSort',
          direction: profileStore.sort === 'publishedAtSort'  && profileStore.typeSort !== 'DESC' ? 'DESC' : 'ASC',
          page: 1
        }" -->

  </div>
</template>

<style lang="scss" scoped>
.row {
  padding: 1em 1em 0px 0px;
  align-items: baseline;
  border-bottom: 1px solid;
  border-color: #DEDEDE;
  margin-left: 0px;
  @media (max-width: 991px) {
    display: none;
  }
}
.checkbox {
  padding-right: 0px;
  padding-left: 0px;
  cursor: pointer;
}
h6 {
  line-height: 1.5;
  font-family: open sans,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  border-collapse: collapse;
  text-align: left;
  font-size: 90%;
  font-weight: 600;
  box-sizing: inherit;
  text-decoration: none;
  color: inherit;
  background-color: transparent;
}
.active {
  cursor: pointer;
}

</style>
