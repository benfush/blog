function showStatus(value){
	return value==1?'启用':'启用';
}

function showImg($url) {
    return '<img style="width:30px;height:30px" src="__PUBLIC__/uploads/' + $url + '" >';
}

function showTime(nS){
    return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');  
}

function createFrame(title,url,width='380px',height='70%'){
	layer.open({
	  type: 2,
	  title: title,
	  shadeClose: true,
	  shade: 0.8,
	  area: [width, height],
	  content: url //iframe的url
	});
}

function test(){
	console.log('共公函数加载成功');
}
