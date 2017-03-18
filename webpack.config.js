var  htmlWebpackPlugin  = require('html-webpack-plugin');
var  path = require('path');
var webpack = require('webpack');
module.exports= {
	context:__dirname,
	entry:'./src/app.js',
	output:{
		path:'./dist',
		filename:'js/[name].bundle.js',
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude:path.resolve(__dirname, 'node_modules'),
				loader: "babel-loader",
				query: {
                    "presets": ["latest"]
                }
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.html$/,
				loader:'html-loader'
			},
			{
				test:/\.tpl$/,
				loader:'ejs-loader'
			},
			{
				test:/\.less$/,
				loader:'style-loader!css-loader!less-loader'
			},
			{
				test:/\.scss$/,
				loader:'style-loader!css-loader!sass-loader'
			},
			{
				test:/\.(png|jpg|gif|svg)$/i,
				loaders:[
				'url-loader?limit=1000&name=images/[name]-[hash:5].[ext]',
				'image-webpack-loader'
				]
			}
		]
	},
	devServer: {
	    contentBase: "./dist",//本地服务器所加载的页面所在的目录
	    historyApiFallback: true,//不跳转
	    inline: true//实时刷新
	 } ,
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:'body'
		}),
		new webpack.HotModuleReplacementPlugin()//热加载插件
	]
}