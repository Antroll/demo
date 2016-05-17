$(document).ready(function() {

    $(".iframe").colorbox({
    	iframe: true,
    	width: "95%",
    	height: "95%",
    	onOpen: addButtons
    });

    var myTimeout = null;
    $(window).resize(function() {
    	clearTimeout(myTimeout);
    	myTimeout = setTimeout(function() {
    		Resize_Box();
    	}, 100);
    })

    // close on focus lost
    $(document).click(function(e) {
    	var $trg = $(e.target);
    	if (!$trg.closest(".parent-element").length && !$trg.hasClass('trigger-class') || $trg.hasClass('close-btn')) {
    		$('.block').removeClass('active');
    		$('.spoiler').slideUp(200);
    	}
    });

});
$(window).load(function() {
    // preloader
    // $('#status').fadeOut();
    // $('#preloader').delay(350).fadeOut('slow');
    // $('body').delay(350).css({
    // 	'overflow': 'visible'
    // });
});

function addButtons() {
	var
	$t = $(this),
	href = $t.attr('href'),
	$btn = '<a class="cboxFull" href=' + href + ' target="_blank"></a>';
	$('#cboxContent').append($btn)
}

function Resize_Box(){
	var x = $('body').width() - 30;
	var y = $('body').height() - 30;
	parent.$.fn.colorbox.resize({
		innerWidth: x,
		innerHeight: y
	});
}