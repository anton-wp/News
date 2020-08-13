<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <block-notes v-for="(note, index) of notes" :key="index" :data="note" @minPage="minPage"/>
      </div>
      <pagination
        class="pagination"
        style="width: 100%;"
        v-if="pagination && pagination.pagesCount > 1"
        :pagination="pagination"
        @openPage="openPage"

      />
      <div class="col-12 button-block" v-if="$store.state.auth.user && ['editor', 'super-admin'].includes($store.$auth.user.group.name)">
        <nuxt-link class="link" to="/profile/dashboard/add-note">
          <button class="add">Add note</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlockNotes from "~/components/profile/block-notes";
import { mapState } from "vuex";
import Pagination from "~/components/profile/pagination";

export default {
  middleware: "auth",
  layout: "profile",
  components: {
    BlockNotes,
    Pagination,
  },
  data() {
    return {
      page: 1,
      pagination: Object,
    };
  },
  computed: {
    ...mapState(["notes"]),
  },
  created() {
    if (this.$route.query.page) {
      this.page = this.$route.query.page;
    }
		this.getNote();
		console.log(this.$store.$auth.user.group.name)
	},
  methods: {
    minPage() {
      if (this.page > 1) {
        this.page = this.page - 1;
        this.getNote();
      } else if (this.pagination.pagesCount !== 1) {
        this.getNote();
      }
		},
    getNote() {
      this.$axios
        .$get(`/api/profile/notes?page=${this.page}`)
        .then((res) => {
          if (res.data.length === 0) {
						this.page = 1;
						this.getNote()
          } else {
            this.$store.commit("SET_NOTE", res.data);
            this.pagination = res.pagination;
            this.$router.push({
              path: "/profile/dashboard",
              query: { page: this.page },
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openPage(page) {
      this.page = page;
      this.getNote();
    },
  },
};
</script>

<style lang="scss" scoped>
.button-block {
  display: flex;
  margin-top: 60px;

  .link {
    margin-left: auto;
  }

  .add {
    background-color: #ff4242;
    &:hover {
      background-color: #bc2d2d;
    }
  }
  button {
    margin-left: auto;
    box-sizing: inherit;
    text-decoration: none;
    display: inline-block;
    vertical-align: middle;
    // margin: 0 0 1rem;
    font-family: inherit;
    border: 1px solid transparent;
    border-radius: 0;
    transition: background-color 0.25s ease-out, color 0.25s ease-out;
    font-size: 0.9rem;
    line-height: 1;
    text-align: center;
    cursor: pointer;
    color: #fefefe;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    user-select: none;
    padding: 0.85em 1.4em 0.8em;
  }
}
</style>
