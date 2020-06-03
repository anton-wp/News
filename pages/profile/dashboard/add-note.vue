<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form id="addNoteForm" class="primary-form">
          <div class="col-12 blockInput">
            <label>
              Recipients
              <span class="required">*</span>
            </label>
            <select formControlName="author" class="form-input select">
              <!-- [(ngModel)]="initialCategory" -->
              <option>gjhgjh</option>
              <option>gjhgjh</option>
              <option>gjhgjh</option>
            </select>
          </div>
          <div class="col-12 blockInput">
            <label>
              Note Message
              <span class="required">*</span>
            </label>
            <textarea
              required="required"
              formControlName="message"
              autocomplete="off"
              class="form-input"
              maxlength="150"
              rows="2"
            ></textarea>
          </div>
        </form>
      </div>
      <div class="col-12 button-block">
        <button class="add">
          Add note
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'profile'
}
</script>

<style lang="scss" scoped>
  .button-block {
  display: flex;
  margin-top: 17px;

  .active{
    margin-left: 0;
    margin-right: 10px;
  }
  // .cancel {
  //   background-color: #8d8d8d;
  //   &:hover {
  //     background-color: #606060;
  //   }
  // }
  .add {
    background-color: #ff4242;
    &:hover {
      background-color: #bc2d2d;
    }
  }
  button {
    box-sizing: inherit;
    text-decoration: none;
    display: inline-block;
    vertical-align: middle;
    // margin: 0 0 1rem;
    font-family: inherit;
    border: 1px solid transparent;
    border-radius: 0;
    transition: background-color .25s ease-out,color .25s ease-out;
    font-size: .9rem;
    line-height: 1;
    text-align: center;
    cursor: pointer;
    color: #fefefe;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .8px;
    user-select: none;
    padding: .85em 1.4em .8em;
  }
}
.blockInput{
  padding-left: 0px;
  margin-bottom: 15px;
  .form-input{
    border: 1px solid #c6c6c6;
    border-radius: 2px;
    padding: .4em;
    line-height: 1.25;
  }
  .select {
    margin: 0;
    box-sizing: border-box;
    font-family: inherit;
    border: 1px solid #c6c6c6;
    border-radius: 2px;
    padding: .65em;
    line-height: 1.25;
    background: 0 0;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .7px;
    font-size: .8em;
    width: 100%;
    appearance: none;
    cursor: pointer;
    option {
      font-size: 1em;
    }
  }
  textarea {
    width: 100%;
    height: auto;
    min-height: 50px;
  }
  label {
    display: block;
    line-height: 1.5;
    color: #0a0a0a;
    box-sizing: inherit;
    font-weight: 600;
    font-size: 1.2em;
    letter-spacing: .5px;
    margin-bottom: .1em;
  }
}
</style>
