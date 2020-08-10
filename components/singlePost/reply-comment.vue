<template>
  <div class="reply-comment">
    <textarea class="form-input with-border" v-model="comment"></textarea>
    <div class="blockCheckbox">
      <label for="checkbox" @click="subscribe = !subscribe">
        <div class="categoryCheckbox">
          <svg width="10" height="10" v-if="subscribe">
            <use xlink:href="#checkbox" />
          </svg>
          <input type="checkbox" class="checkbox" />
        </div>subscribe to comments
      </label>
    </div>
    <div class="blockButton">
      <button @click="createdReply">Reply</button>
    </div>
  </div>
</template>

<script>
export default {
	data () {
		return {
			subscribe: true,
			comment: '',
		}
	},
	props: {
		postId: String,
		id: String,
	},
	methods: {
		createdReply() {
			 let data = {
        body: this.comment,
        subscribe: this.subscribe
      };
			this.$axios
				.$post(`/api/posts/${this.postId}/comments/${this.id}`, data)
				.then(res => {
					this.$toasted.show(res.message);
					this.$emit('updateCommentReplies')
					this.comment = ''
					this.$emit('createComments', res.data)
				})
				.catch((error) => {
          console.log(error);
        });
		}
	}
}
</script>
