<template>
  <div class="block-note">
    <div class="block">
      <div class="content-note">
        <p class="text">{{ data.message }}</p>
        <p class="date">{{ parse(data.createdAt, 'MMM DD,YYYY HH:mm a ZZ') }}</p>
      </div>
      <div class="options" v-click-outside="backOption">
        <button @click="openOption" style="height: 45px;">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </button>
        <!-- (click)="openOption()" (clickOutside)="backOption()" -->
        <!-- <fa-icon [icon]="faEllipsisV"></fa-icon> -->
        <div class="block-options" v-if="optionOpen">
          <nuxt-link :to="`/profile/dashboard/edit-note/${data.id}`">Edit</nuxt-link>
          <span @click="delNote">Delete</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import { mapState } from "vuex";
import { format } from "fecha";

export default {
  directives: {
    ClickOutside,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      optionOpen: false,
    };
  },
  computed: {
    ...mapState(["notes"]),
  },
  methods: {
    parse(date, f) {
      return format(new Date(date), f);
    },
    openOption() {
			this.optionOpen = true;
    },
    backOption() {
      this.optionOpen = false;
    },
    delNote() {
      this.$axios
        .$delete(`/api/profile/notes/${this.data.id}`)
        .then((res) => {
          this.$toasted.show(res.message);
					this.$store.commit("DEL_NOTE", this.data.id);
					if(this.notes.length === 0) {
						this.$emit('minPage')
					}
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
