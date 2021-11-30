<template>
	<view class="content">
		<z-paging ref="paging" v-model="dataList" @query="queryList">
			<template #top v-if="tabs.length">
				<TabView @change="tabChange" :items="tabs" />
			</template>
			<slot name="list" :props="dataList" v-if="dataList && dataList.length" />
		</z-paging>
	</view>
</template>

<script>
	import request from '../../../utils/request.js'
	import TabView from '../tabs-view/tabs-view.vue'
	export default {
		components: {
			TabView
		},
		props: {
			path: {
				type: String,
				required: true
			},
			tabs: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				dataList: [],
				currentTabIndex: 0
			}
		},
		computed: {
			currentTab() {
				const { currentTabIndex, tabs } = this
				if(tabs.length === 0) return []
				return tabs[currentTabIndex]
			}
		},
		methods: {
			tabChange(index) {
				this.currentTabIndex = index;
				this.$refs.paging.reload();
			},
			async queryList(page, limit) {
				const { currentTab, path } = this
				try {
					const result = await request({
						url: path,
						data: {
							page,
							limit,
							type: currentTab.value
						},
						method: 'POST',
						showLoading: false
					})
					if (result.code === 200) {
						this.$refs.paging.complete(result.data.list.data);
					} else {
						this.$refs.paging.complete(false);
					}
				} catch (error) {
					this.$refs.paging.complete(false);
				}
			}
		}
	}
</script>
