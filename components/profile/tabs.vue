<template>
  <ul>
    <li class="menu">
      <svg width="20" height="20">
        <use xlink:href="#dashboard" />
      </svg>
      <span>comments</span>
      <span>
        <span class="title">
          title
          <span>(0)</span>
        </span>
      </span>
      <svg class="icon" width="17" height="17">
        <use xlink:href="#caret-down" />
      </svg>
      <!-- <fa-icon *ngIf="!item.click && item.children" class="icon" (click)="expandMenu(item.title)" [icon]="faSortDown"></fa-icon>
      <fa-icon *ngIf="item.click && item.children" class="icon" (click)="expandMenu(item.title)" [icon]="faSortUp"></fa-icon>-->
      <ul class="blockSubMenu">
        <li class="subMenu">
          <span class="subtitle">
            tags
            <span>(123)</span>
          </span>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.menu {
  display: inline-block;
  margin-right: 10px;
}
.icon {
  color: #919191;
  margin-left: 10px;
  @media (max-width: 768px) {
    display: none !important;
  }
}

ul {
  position: sticky;
  top: 90px;
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
    margin-top: 5px;
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
    top: 5px;
    background-color: #f4f4f4;
    cursor: pointer;
  }
  @media (max-width: 639px) {
    left: 50px;
    // top: 50px;
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
