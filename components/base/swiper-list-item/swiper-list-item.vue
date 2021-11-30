<template>
	<view class="h-100">
		<z-paging ref="paging" v-model="dataList" @query="queryList" :fixed="false" :auto="false">
			<slot name="list" :props="dataList" v-if="dataList && dataList.length" />
		</z-paging>
	</view>
</template>

<script>
	import request from '../../../utils/request.js'
	export default {
		data() {
			return {
				dataList: [],
				firstLoaded: false
			}
		},
		props:{
			path: {
				type: String,
				required: true
			},
			tabIndex: {
				type: Number,
				default: function(){
					return 0
				}
			},
			currentIndex: {
				type: Number,
				default: function(){
					return 0
				}
			}
		},
		watch: {
			currentIndex: {
				handler(newVal) {
					if(newVal === this.tabIndex){
						if(!this.firstLoaded){
							setTimeout(() => {
								this.$refs.paging.reload();
							}, 5);
						}
					}
				},
				immediate: true
			},
		},
		methods: {
			async queryList(page, limit) {
				const { path } = this
				try {
					const result = await request({
						url: path,
						data: {
							page,
							limit
						},
						method: 'POST',
						showLoading: false
					})
					if (result.code === 200) {
						this.$refs.paging.complete(result.data.list.data);
						this.firstLoaded = true;
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
