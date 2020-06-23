<template>
  <div>
		<search />
		<table-header />
  </div>
</template>

<script>
import Search from '~/components/profile/dashboard/search'
import TableHeader from '~/components/profile/dashboard/table-header'

export default {
	layout: 'profileSmall',
	middleware: "auth",
	components: {
		Search,
		TableHeader
	}
}
</script>
