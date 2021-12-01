<template>
	<list-paging path="/goods/goods_list" :tabs="tabs">
		<template #list="scope">
			<view>{{scope.props}}</view>
		</template>
	</list-paging>
</template>

<script>
	import ListPaging from "../../components/base/list-paging/list-paging.vue"
	export default {
		components: {
			ListPaging
		},
		data(){
			return {
				tabs: [{
					name: "测试1"
				},{
					name: "测试2"
				}]
			}
		}
	}
</script>

<style>
</style>
