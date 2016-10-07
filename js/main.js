$(document).ready(function() {

	// submenu left
	$('.wrap__submenu .active > a').on('click', function () {
		if($(this).parent('li').hasClass('open')) { 
			$(this).next('ul').slideUp(300);
			$(this).parent('li').removeClass('open');
		} else {
			$(this).next('ul').slideDown(300);
			$(this).parent('li').addClass('open');
		};
		return false;
	});

	// persona detals open
	$('.persona__detals-lnk a').on('click', function () {
		if($(this).parent().hasClass('active')) { 
			$(this).parent().next('div').slideUp(300);
			$(this).parent().removeClass('active');
		} else {
			$(this).parent().next('div').slideDown(300);
			$(this).parent().addClass('active');
		};
		return false;
	});

	// Center Modal
	function centerModal() {
	  $(this).css('display', 'block');
	  var $dialog = $(this).find(".modal-dialog");
	  var offset = ($(window).height() - $dialog.height()) / 2;
	  $dialog.css("margin-top", offset);
	  $(this).css('display', 'none');
	};
	$('.modal').on('show.bs.modal', centerModal);
	$(window).on("resize", function () {
	    $('.modal').each(centerModal);
	});

	// select style
	$('.select-st').selectize({
	    sortField: 'text'
	});

	// slider
	$('.owl-carousel-big').owlCarousel({
    	items:1,
	    margin:0,
	    autoHeight:true,
	    nav:true
	});
	$('.owl-carousel-min').owlCarousel({
    	items:3,
	    margin:16,
	    autoHeight:true,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        992:{
	            items:2
	        }
	    }

	});

	// mobile menu
	$('.menu-btn').on('click', function () {
		$('.head__menu-wrap, .mob-menu-bg').fadeIn();
		$('.menu-btn-close').show();
		return false;
	});
	$('.menu-btn-close, .mob-menu-bg').on('click', function () {
		$('.head__menu-wrap, .mob-menu-bg').fadeOut();
		$('.menu-btn-close').hide();
		return false;
	});
	$('.lnk-sub').on('click', function () {
		if($(this).hasClass('active')) { 
			$(this).next().slideUp(300);
			$(this).removeClass('active');
		} else {
			$(this).next().slideDown(300);
			$(this).addClass('active');
		};
		return false;
	});


})



//REMOVE
$('body').append(
	'<div style="position: fixed; z-index: 9999; bottom: 0; right: 0; background: #fff; border: solid 1px #000; width: 250px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px;position:relative;z-index:20;" onclick="$(this).parent().hide()">Закрыть X</a> \
	<ol style="padding: 5px 0 7px 30px; margin: 0"> \
		<li style="margin: 0;"><a href="index.html" style="color:#000;">Index</a></li> \
		<li style="margin: 0;"><a href="typography.html" style="color:#000;">Typography</a></li> \
	</ol> \
</div>');