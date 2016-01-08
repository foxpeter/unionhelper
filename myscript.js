$(function(){
	$('#InitCartUrl').after('<button id="JDUHBT" class="btn-append">test</button>');
	$('#JDUHBT').click(function(){
		$.ajax({
			type: "POST",
			url: "http://media.jd.com/gotoadv/selectProMediaType",
			data: "id=0&type=4&status=1",
			success: function(msg){
				alert( "Data Saved: " + msg );
			}
		});
	})
});