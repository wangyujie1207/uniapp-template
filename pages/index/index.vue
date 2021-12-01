<template>
	<view>
		<div>
			<view class="flex-1"></view>
		</div>
		<div>{{ 1999999 }}</div>
		<div>{{ '2021-11-30 10:11' | relativeTime}}</div>
		{{ new Date() | formatTime}}
		<view @click="test('/pages/test/tab-swiper-test')">test swiper tab</view>
		<view @click="test('/pages/test/test_list')">test listpaging</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
		
			};
		},
		methods: {
			test(url){
				uni.navigateTo({url})
			}
		}
	}
</script>

<style lang="scss">
</style>