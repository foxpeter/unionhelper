(function(window){
	var url = window.location.href;
	var re = /http.*item\.jd\.com\/(.*)\.html.*/;
	var reVal = url.match(re);
	if(reVal != null){
		var skuId = reVal[1];

		$.ajax({
			type: "get",
			url: "http://media.jd.com/gotoadv/goods?pageIndex=&pageSize=10&property=&sort=&adownerType=&pcRate=&wlRate=&category=&category1=0&condition=0&keyword=" + skuId,
			success: function(msg){
				var $html = $(msg);
				var rate = $html.find('.basic.text-center.background_fff_k tbody tr td:eq(2)').html() ;
				var rates = rate.split('<div></div>');
				var comm = $html.find('.basic.text-center.background_fff_k tbody tr td:eq(3)').html() ;
				var comms = comm.split('<div></div>');

				$('#summary-service').after(
					'<div id="summary-service"  clstag="shangpin|keycount|product|fuwu_1" style="background-color: #EEEEEE;">' +
						'<div class="dt">京东联盟：</div>' +
						'<table><tbody><tr><td>'
							+ rates[0] + ' = ' + comms[0].replace('PC： ','') +
						'</td><td>'
							+ rates[1] + ' = ' + comms[1].replace('无线： ','') +
						'</td></tr></tbody></table>' +
					'</div>');

				//$('#InitCartUrl').after('<button id="JDUHBT" class="btn-append">' + rate + comm + '</button>');
			}
		});
	}

	//$('#JDUHBT').click(function(){
	//
	//})
})(window);