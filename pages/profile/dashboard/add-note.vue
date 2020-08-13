<template>
  <div class="container note-dashboard">
    <div class="row">
      <div class="col-12">
        <form id="addNoteForm" class="primary-form">
          <!-- <div class="col-12 blockInput">
            <label>
              Recipients
              <span class="required">*</span>
            </label>
            <select formControlName="author" class="form-input select">
              <option>gjhgjh</option>
              <option>gjhgjh</option>
              <option>gjhgjh</option>
            </select>
          </div>-->
          <div class="col-12 blockInput">
            <label>
              Note Message
              <span class="required">*</span>
            </label>
            <textarea
              required="required"
              v-model="message"
              autocomplete="off"
              class="form-input"
              maxlength="150"
              rows="2"
            ></textarea>
          </div>
        </form>
      </div>
      <div class="col-12 button-block">
        <button class="add" @click="createNote">Add note</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "profile",
  middleware: "auth",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    createNote() {
      this.$axios
        .$post(`/api/profile/notes`, { message: this.message })
        .then((res) => {
          this.$toasted.show("Note has been added");
          this.$router.push({ path: "/profile/dashboard" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

