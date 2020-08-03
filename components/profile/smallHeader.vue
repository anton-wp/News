<template>
  <div class="smallHeader">
    <div class="container">
      <div class="row">
        <div class="img">
          <img
            class="default-avatar"
            src="/image/default-avatar-original.png"
            v-if="!$store.state.profile.avatar"
          />
          <img
            :src="$store.state.profile.avatar.big"
            class="default-avatar"
            v-if="$store.state.profile.avatar"
          />
        </div>
        <div class="author">
          <h4 class="your-name">{{$store.state.profile.firstName}} {{$store.state.profile.lastName}}</h4>
          <p class="member-since">
            {{$store.state.profile.rank}}
            since:
            <time
              class="member-since"
            >{{ parse($store.state.profile.createdAt, 'MMMM DD,YYYY') }}</time>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "fecha";

export default {
  methods: {
    parse(date, f) {
      if(date) {
				return format(new Date(date), f);
			}
		},
	}
}
</script>
