import Config from '@/config/config.js'

const request = ({
	url,
	data,
	method,
	showLoading = true
}) => {
	return new Promise((resolve, reject) => {
		if (showLoading) {
			uni.showLoading({
				title: '加载中..',
				mask: false
			});
		}
		uni.request({
			url: Config.BASE_URL + url,
			data,
			method,
			header: {
				token: '0bca5871-1dcd-4d25-b39e-7b79c614983a'
			},
			success: ({
				data
			}) => {
				resolve(data)
			},
			fail: (error) => {
				reject(error);
			},
			complete: () => {
				if (showLoading) {
					uni.hideLoading();
				}
			}
		});
	});
}

export default request;
