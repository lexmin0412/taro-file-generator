// 引入配置文件
import pageGenerator from './page/index'

export default plop => {
	// 欢迎语
	plop.setWelcomeMessage('欢迎使用~ 请选择需要创建的模版：')
	// views 相关
	plop.setGenerator('page', pageGenerator)
}
