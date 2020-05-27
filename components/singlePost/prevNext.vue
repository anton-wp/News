<template>
  <div class="row align-justify next-section">
    <div class="column">
      <div class="link-wrapper">
        <i class="icons color-primary angle-left">
          <svg id="angle-left" viewBox="0 0 16 38" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path fillrule="evenodd" d="M 13.5-0C 13.5-0 16.01 1.74 16.01 1.74 16.01 1.74 2.5 20.8 2.5 20.8 2.5 20.8-0.01 19.06-0.01 19.06-0.01 19.06 13.5-0 13.5-0Z" />
            <path fillrule="evenodd" d="M-0.01 18.94C-0.01 18.94 2.5 17.2 2.5 17.2 2.5 17.2 16.01 36.26 16.01 36.26 16.01 36.26 13.5 38 13.5 38 13.5 38-0.01 18.94-0.01 18.94Z" />
          </svg>
        </i>
        <div class="info info-left">
          <div class="label">
            Previous Post
          </div>
          <a class="title text-overflow-clamp-3">
            PrevPost title
          </a>
        </div>
      </div>
    </div>
    <div class="column column-right">
      <div class="link-wrapper">
        <div class="info info-right">
          <div class="label">
            Next Post
          </div>
          <a class="title text-overflow-clamp-3">nextPost title</a>
        </div>
        <i class="icons color-primary angle-right">
          <svg id="angle-right" viewBox="0 0 16 38" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path fillrule="evenodd" d="M 2.5 38C 2.5 38-0.01 36.26-0.01 36.26-0.01 36.26 13.5 17.2 13.5 17.2 13.5 17.2 16.01 18.94 16.01 18.94 16.01 18.94 2.5 38 2.5 38Z" />
            <path fillrule="evenodd" d="M 16.01 19.06C 16.01 19.06 13.5 20.8 13.5 20.8 13.5 20.8-0.01 1.74-0.01 1.74-0.01 1.74 2.5-0 2.5-0 2.5-0 16.01 19.06 16.01 19.06Z" />
          </svg>
        </i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/utils/variables";
  @import "../../assets/utils/colors";

  i{
    fill: #ff4242;
    position: absolute;
  }
  a{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    height: 100px;
    padding: 5px; /* Поля */
    // display: block;
    // overflow: hidden; /* Обрезаем содержимое */
    // text-overflow: ellipsis; /* Многоточие */
    font-weight: 700;
    line-height: 30px;
    overflow-wrap: normal;
    word-wrap: normal;
    word-break: break-word;
    line-break: auto;
    // max-height: calc(30px * 3);
    font-size: 1.1em;
    // padding-left: 30px;
    color: rgb(10,10,10);
    text-decoration: none;
  }
  .label{
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    color: #7b7b7b;
    line-height: 25px;
  }
  .link-wrapper:hover{
    .label{
      color: #ff4242;
    }
    a{
      color: #696969;

    }
  }
  .next-section{
    margin-bottom: 55px;
    @media screen and (max-width: 460px) {
      margin-bottom: 1.5em;
    }
  }
  .angle-left{
    top: 20%;
    left: 0;
  }
  .angle-right{
    top: 20%;
    right: 0;
  }
  svg{
    width: 40px;
    height: 40px;
  }
  .column{
    font-size: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: #0a0a0a;
    -webkit-font-smoothing: antialiased;
    font-family: open sans,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
    -webkit-box-direction: normal;
    box-sizing: inherit;
    min-width: 0;
    padding-right: .9375rem;
    padding-left: .9375rem;
    max-width: 50%;
    -webkit-box-flex: 0;
    flex: 0 0 370px;
    position: relative;
    // text-align: right;
    @media screen and (max-width: 460px) {
      flex: 0 0 100%;
      max-width: 100%;
      margin-bottom: 1em;
    }
  }
  .info-right{
    text-align: right;
    padding-right: 30px;
  }
  .info-left{
    text-align: left;
    padding-left: 30px;
  }
  .column-right{
    margin-left: auto;
  }
  .preview-and-next{
    margin-bottom: 0px;
  }
</style>
