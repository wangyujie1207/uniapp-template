<template>
	<view>
		<div>
			<view class="flex-1"></view>
		</div>
		<div>{{ 1999999 }}</div>
		<div>{{ '2021-11-30 10:11' | relativeTime}}</div>
		{{ new Date() | formatTime}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
		
			};
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
</style>