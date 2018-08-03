/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-13 12:41:06
 * @version $Id$
 */

let jsAndroid = {
	//扫码
	barcode: {
		scan: function(){
			var d = jsAndroid.jsAndroidCallback()
			window.jsAndroid.scan()
			return d
		},
		scanBtn: function(){
			var d = jsAndroid.jsAndroidCallback()
			window.jsAndroid.scanBtn()
			return d
		}
	},
	//分享
	share: {
		//分享连接
		shareHref: function(p){
			var d = jsAndroid.jsAndroidCallback()
			window.jsAndroid.shareHref(p)
			return d
		},
		//分享文字
		shareText: function(p){
			var d = jsAndroid.jsAndroidCallback()
			window.jsAndroid.shareText(p)
			return d
		}
	},
	//图片保存
	saveImage: {
		save: function(p){
			var d = jsAndroid.jsAndroidCallback()
			window.jsAndroid.saveImage(p)
			return d
		}
	},
	//callback回调
	jsAndroidCallback(){
		return new Promise((resolve) => {
				window["receiveMsgFromNative"] = function (msg) {
				  resolve(msg)
				}
			});
	}
}

export default jsAndroid
