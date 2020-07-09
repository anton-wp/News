<template>
  <div class="col table-footer" v-if="actionsBlock">
    <select class="form-input select" v-model="selectedAction">
      <option v-for="action of actionsBlock" :value="action" :key="action">{{action}}</option>
    </select>
    <div class="form-wrap button-block">
      <button class="search" @click="aplly">Aplly</button>
      <button v-if="merge" class="search" @click="mergeOpen">Merge</button>
    </div>
    <modal-window v-if="modal" @closeModal="no">
      <div class="delete-form-wrap" id="confirm-delete-modal">
        <div class="form-header">
          <h4>
            {{ selectedAction }}
            confirmation
          </h4>
          <p>
            Are you sure you want to
            {{ selectedAction }}
            this?
          </p>
        </div>
        <div class="form-wrap">
          <span @click="no" class="no">No</span>
          <span @click="yes" class="yes">Yes</span>
        </div>
      </div>
    </modal-window>
    <modal-window v-if="mergeOn" @closeModal="mergeClose">
      <div class="delete-form-wrap" id="confirm-delete-modal">
        <div class="form-header">
          <h4>Merge Tag</h4>
          <p class="text-left">Select new Tag name for:</p>
          <input type="text" class="text-left" placeholder="New Tag name" v-model="mergeValue"/>
        </div>
        <div class="form-wrap">
          <span @click="mergeTag" class="yes">Merge</span>
          <span @click="mergeClose" class="no">Decline</span>
        </div>
      </div>
    </modal-window>
  </div>
</template>

<script>
import ModalWindow from "~/components/universal-components/modalWindow";
import { mapState } from "vuex";

export default {
  components: {
    ModalWindow
  },
  data() {
    return {
      selectedAction: "",
      modal: false,
			mergeOn: false,
			mergeValue: ''
    };
  },
  props: {
    actionsBlock: Array,
    merge: Boolean
  },
  computed: {
    ...mapState(["dashboard"])
  },
  created() {
    this.selectedAction = this.actionsBlock[0];
  },
  methods: {
    mergeOpen() {
      this.mergeOn = true;
    },
    mergeClose() {
      this.mergeOn = false;
    },
    mergeTag() {
			console.log(this.mergeValue)
			console.log(this.dashboard.ids)
			this.$axios
          .$put(`/api/admin/tags/merge`, { name: this.mergeValue, tags: this.dashboard.ids })
          .then(res => {
						this.$toasted.show(res.message);
						this.$store.commit("CLEAR_DASHBOARD_IDS");
						this.mergeClose()
          })
          .catch(error => console.error(error));

		},
    aplly() {
      if (this.selectedAction === "Action:") {
        this.modal = false;
      } else {
        this.modal = true;
      }
    },
    yes() {
      this.$emit("aplly", this.selectedAction);
      this.modal = false;
    },
    no() {
      this.modal = false;
    }
  }
};
</script>
