$(document).ready(function(){
	$('#text').keyup(function(){
		var textValue = $('#text').val();
		$.get('http://api.bing.com/qsonhs.aspx?q='+textValue,function(data){
			var d = data.AS.Results[0].Suggests;
			var len = d.length;
			var html = '';
			for(var i = 0;i<len;i++){
				html+='<li>'+d[i].Txt+'</li>';
			}
			$('#ul').html(html);
			$('#search-suggest').show();
		},'json');
	});
	$(document).click(function(){
		$('#search-suggest').hide();
	});
	$(document).delegate('li','click',function(){
		var keyword = $(this).text();
		location.href = 'http://cn.bing.com/search?q='+keyword;
	});
});