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
          </div> -->
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
        <button class="add" @click="updateNote">Edit note</button>
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
    updateNote() {
      this.$axios
        .$put(`/api/profile/notes/${this.$route.params.slug}`, {
          message: this.message,
        })
        .then((res) => {
					this.$toasted.show('Note has been changed')
					this.$router.push({ path: "/profile/dashboard" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getNote() {
      this.$axios
        .$get(`/api/profile/notes/${this.$route.params.slug}`)
        .then((res) => {
					console.log(res);
					this.message = res.data.message
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getNote();
  },
};
</script>

