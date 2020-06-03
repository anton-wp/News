<template>
  <div class="block">
    <img src="/image/default_image_landscape.png" alt>
    <!-- <img *ngIf="post.featured.original" [src]="post.featured.landscape" alt /> -->
    <div class="content">
      <h5>title</h5>
      <span class="bottom">
        <svg class="icon" width="17" height="17">
          <use xlink:href="#clock-o" />
        </svg>
        <p>
          time
          <!-- <time
            datetime="{{post.publishedAt}}"
            class="date-created"
          >{{post.publishedAt | date:'MMM d,y h:mm a' }}</time> -->
        </p>
        <button>
          <svg class="icon" width="17" height="17">
            <use xlink:href="#pencil" />
          </svg>
          Edit
        </button>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  font-family: open sans,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  img{
    width: 100%;
    cursor: pointer;
  }
  .content{
    padding: .9em 0;
    .bottom {
      margin-top: 5px;
    }
    svg{
      fill: #ff4242;
      width: 15px;
    }
    span {
      display: flex;
      align-items: center;
    }
    h5{
      color: #0a0a0a;
      box-sizing: inherit;
      max-height: calc(1.3em * 3);
      font-size: 1.3em;
      letter-spacing: -.3px;
      margin: 0;
      transition: color .25s;
      line-height: 1.15;
      font-weight: 700;
      transition: color .25s ease-out,color .25s ease-out;
      cursor: pointer;
      &:hover {
        color: #575757;
      }
    }
    button{
      margin-left: auto;
      padding: .35em .9em;
      border-radius: 3px;
      box-sizing: inherit;
      display: flex;
      align-items: center;
      font-family: inherit;
      transition: background-color .25s ease-out,color .25s ease-out;
      line-height: 1;
      text-align: center;
      cursor: pointer;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .8px;
      user-select: none;
      text-decoration: none;
      font-size: .6rem;
      background: 0 0;
      padding: .35em .9em;
      border-radius: 3px;
      border: 1px solid #8d8d8d;
      color: #8d8d8d;
      &:hover{
        border-color: #474747;
        background-color: #606060;
        color: #fff;
      }
      svg{
        margin-right: 5px;
        color: #ff4242;
      }
    }
    p{
      margin-left: 5px;
      font-weight: 600;
      font-size: .9em;
      letter-spacing: -.3px;
      color: inherit;
      line-height: 1.8;
      box-sizing: inherit;
      margin-bottom: auto;
      cursor: pointer;
      transition: color .25s ease-out,color .25s ease-out;
      &:hover {
        color: #ff4242;
      }
    }
  }
}
</style>
