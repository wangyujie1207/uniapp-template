<template>
	<z-paging-swiper>
		<view slot="top">
			<tabs-swiper ref="uTabs" :list="tabList" :current="current" @change="tabsChange" :is-scroll="false"
				swiperWidth="750"></tabs-swiper>
		</view>
		<swiper class="swiper" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in tabList" :key="index">
				<swiper-list-item path="/goods/goods_list" :tabIndex="index" :currentIndex="swiperCurrent">
					<template #list="scope">
						<view>{{scope.props.length}}</view>
					</template>
				</swiper-list-item>
			</swiper-item>
		</swiper>
	</z-paging-swiper>
</template>

<script>
	import SwiperListItem from '../../components/base/swiper-list-item/swiper-list-item.vue'
	import TabsSwiper from '../../components/base/tabs-swiper/tabs-swiper.vue'
	import ListPaging from '../../components/base/list-paging/list-paging.vue'
	export default {
		components: {
			SwiperListItem,
			TabsSwiper,
			ListPaging
		},
		data() {
			return {
				tabList: [{
					name: '测试1',
					value: 1
				}, {
					name: '测试2',
					value: 2
				}, {
					name: '测试3',
					value: 3
				}, {
					name: '测试4',
					value: 4
				}],
				current: 0,
				swiperCurrent: 0,
			};
		},
		methods: {
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			}
		}
	}
</script>

<style>
	.swiper {
		height: 100%;
	}
</style>