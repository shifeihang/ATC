//var baseUrl = 'http://a394.213986.com:88/';//测试地址 
//var baseUrl = 'http://www.atc789.com/'
var baseUrl = 'http://400.213986.com:88/'
var apiUrl = {
	Index:baseUrl+'/api/Index/index', //首页信息
	login : baseUrl+'/api/login/login', //登陆信息
	reg: baseUrl+'api/member/registersave',//注册
	forget:  baseUrl+'api/member/bymess',//忘记密码
	send_code: baseUrl+'api/member/send_validate_code',//注册短信验证码
	send_code2: baseUrl+'api/member/send_validate_code2',//找回密码短信验证码
	member: baseUrl+'/api/member/memberProfile', //会员信息
	rollout: baseUrl+'/api/member/sale', //转出
	exchange: baseUrl+'/api/member/saletrans', //转出
	notice: baseUrl+'api/notice/getmail',//新消息
	message: baseUrl+'api/notice/getnotice',//公告
//	finance: baseUrl+'api/member/getfinance',//资产
	finance: baseUrl+'api/Finance/info',//资产
	finance_detail: baseUrl+'api/finance/wallet',//资产明细
	changePass: baseUrl+'api/member/passwordManagement',//修改登陆密码，支付密码
	bank_add: baseUrl+'api/member/editbank', //添加银行卡
	bank_list: baseUrl+'api/member/getbanks', //获取银行列表
	alipay: baseUrl+'api/member/editalipay',//支付宝
	wechat: baseUrl+'api/member/editwechat',//微信
	calc: baseUrl+'api/member/calc',//领取红包
//	share: baseUrl+'api/member/qrCode',//分享
	share:baseUrl+'api/member/qrcode', //分享
	sharelist: baseUrl+'api/network/recommendInList',//分享列表
	into: baseUrl+'api/member/savemoney',//转入
	redInfo: baseUrl+'api/finance/info',//红包记录
	market: baseUrl+'api/trade/index', //交易市场
	market_note: baseUrl+'api/trade/tradelist',//交易记录
	deal: baseUrl+'api/trade/start',//买入/卖出挂单
	dealDetail: baseUrl+'api/trade/viewbuytrade', //交易订单详情
	remittance: baseUrl+'api/trade/remitbuytrade',//汇款
	upload_img: baseUrl+'api/trade/upload',//上传图片
	buytrade: baseUrl+'api/trade/buytrade',//买单/卖单
	canceltrade: baseUrl+'api/trade/canceltrade',//交易市场撤销订单
	okbuytrade: baseUrl+'api/trade/okbuytrade',//卖出记录确认交易
	stopbuytrade: baseUrl+'api/trade/stopbuytrade',//卖出记录申请仲裁
	cancelbuytrade: baseUrl+'api/trade/cancelbuytrade',//买入记录撤销
	proofbuytrade: baseUrl+'api/trade/proofbuytrade',//买家提交凭据
//	profile: baseUrl+'api/member/profile',//可修改会员信息
	profile:baseUrl+'api/member/profileManagement', //可修改会员信息
	translist: baseUrl+'api/member/translist',//转入转出转换记录
//	profilemanagement: baseUrl+'api/member/profilemanagement',//修改资料
//	profilemanagement:baseUrl+'api/member/saveprofile', //修改资料
	saveprofile:baseUrl+'api/member/saveprofile', //修改资料
	logout:baseUrl+'api/login/logout', //退出登录
	detail:baseUrl+'api/help/detail',  //理财明细
	salelist:baseUrl+'api/help/salelist', //开心付出明细
	notice:baseUrl+'api/notice/notice', //公告列表
	index:baseUrl+'api/prize/index' //销售奖金列表
}
