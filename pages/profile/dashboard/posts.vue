<template>
  <div>
		<search />
		<table-header />
		<table-block />
  </div>
</template>

<script>
import Search from '~/components/profile/dashboard/search'
import TableHeader from '~/components/profile/dashboard/table-header'
import TableBlock from '~/components/profile/dashboard/table-block'

export default {
	layout: 'profileSmall',
	// middleware: "auth",
	components: {
		Search,
		TableHeader,
		TableBlock
	}
}
</script>
