import request from '@/utils/request.js'

export const testApi = (data) => {
	return request({
	  url: '/goods/goods_list',
	  data
	});
}