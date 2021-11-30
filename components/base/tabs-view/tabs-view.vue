<template name="tabs-view">
	<view class="segment">
		<view class="segment-item" :class="{'on': currentIndex == index}" v-for="(tab,index) in items" :key="index"
			:style="{width:itemWidth}" @click="itemClick(index)">
			<view class="title-container">
				<text class="title">{{tab.name}}</text>
			</view>
			<view class="line"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'tabs-view',
		data() {
			return {
				currentIndex: 0
			};
		},
		props: {
			items: {
				type: Array,
				default: function() {
					return [];
				}
			},
			current: {
				type: Number,
				default: function() {
					return 0;
				}
			}
		},
		watch: {
			current(newVal) {
				this.currentIndex = newVal;
			}
		},
		computed: {
			itemWidth() {
				// #ifdef APP-NVUE
				return (750 / this.items.length) + 'rpx';
				// #endif
				// #ifndef APP-NVUE
				return ((1.0 / this.items.length) * 100) + '%';
				// #endif
			}
		},
		methods: {
			itemClick(index) {
				if (this.currentIndex != index) {
					this.$emit('change', index);
				}
				this.currentIndex = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.segment-control {}

	.segment {
		background-color: white;
		height: 80rpx;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		font-size: 30rpx;
		color: darkgray;
		border-bottom: #eeeeee solid 1px;
		z-index: 1000;
	}

	.segment-item {
		height: 80rpx;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.title {
			color: darkgray;
		}
		.line {
			color: transparent;
		}
		&.on {
			.title{
				color: $uni-color-primary;
			}
			.line {
				background-color: $uni-color-primary;
			}
		}
	}

	.title-container {
		width: 100%;
		height: 76rpx;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.title {
		width: 100%;
		font-size: 30rpx;
		text-align: center;
	}

	.line {
		height: 2px;
		width: 70%;
	}
</style>
