import layer1 from './components/layer/layer.js';
import './css/common.css';
const App = function(){
	var dom = document.getElementById('app');
	var layer = new layer1();
	dom.innerHTML=layer.tpl({
		name:'tpn',
		arr:['aaa','bbb','ccc']
	});
}
new App();