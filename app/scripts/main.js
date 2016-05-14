$(document).ready(function () {

	// cut text overflow
	// $(".dot").dotdotdot();

	// check window witdh
	// if ($(window).width() < 960) {}

	// $(".iframe").colorbox({
	// 	iframe:true,
	// 	width:"95%",
	// 	height:"95%",
	// 	onOpen: addButtons
	// });
	$(document).on('click', '.iframe', function (e) {
		e.preventDefault();
		var
		$modal = $(''
			+'<div class="my-modal my-modal_iframe">'
			+'<div class="my-modal__close arcticmodal-close">закрыть</div>'
			+'<iframe frameborder="0" name="" allowfullscreen="" src="" class="my-modal__iframe"></iframe>'
			+'</div>'
			)
		,$url = $(this).attr('href')
		;

		$modal.arcticmodal({
			beforeOpen: function(data, el) {
				$modal.find('iframe').attr('src', $url);
			},
		});
	});

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
	console.log('it work');
}