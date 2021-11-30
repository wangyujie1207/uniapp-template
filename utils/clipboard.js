const onClipboard = (value) => {
	uni.setClipboardData({
		data: value,
		success: () => {
			uni.showToast({
				icon: "success",
				title: "复制成功"
			})
		},
		fail: () => {
			uni.showToast({
				icon: "error",
				title: "复制失败"
			})
		}
	})
}

export default onClipboard
