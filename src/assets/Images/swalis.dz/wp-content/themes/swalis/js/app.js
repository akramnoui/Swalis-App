$(document).ready(function(){


	

	if(window.location.hash) {
		$("#banners img").hide();
		var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
		$("#banners").find("#" + hash + "-banner").fadeIn();
		$("#banners").find(".title-inner-page").text(hash);
	}

	
	var hash = window.location.hash;
	hash && $('ul.nav a[href="' + hash + '"]').tab('show');
	  
  $('.nav-tabs a').click(function (e) {
	$("#banners img").hide();
	var hash_link = $(this).attr("href").split('#')[1];
	$("#banners").find("#" + hash_link + "-banner").fadeIn();
	$("#banners").find(".title-inner-page").text(hash_link);
    $(this).tab('show');
    var scrollmem = $('body').scrollTop();
    window.location.hash = this.hash;
	$('html,body').scrollTop(scrollmem);
	return false
  });

	
	$("#products-list .product").on("click" , function(){
		$("#products-list .active-product").removeClass("active-product");
		$(this).addClass("active-product");
		var title = $(this).find("span").text();
		var img = $(this).find("img").attr("src");
		var descrition = $(this).find(".descrition").text();
		$("#text-product-single h2").text(title);
		$("#text-product-single .text").text(descrition);
		hash($(this).attr('href')); 
		return false;
	});

	$("#search, #search-mob").on("click" , function(){
		$('.search-input').toggleClass("search-open");
		$(".search-mob-input").toggleClass("search-open");
		$(this).find('i').toggleClass("fa-times");
		return false;
	});

	$("#products-list").owlCarousel({
		loop:false,
		autoplay:false,
		nav:true,
		dots: false,
		navText: ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
		responsive:{
			0:{
	            items:1,
	        },
			575:{
	            items:1,
	        },
			767:{
	            items:2,
			},
			991:{
				items:3,
			},
    	}
	});

	$("#produits-phares, #categoris,  #mobile-terms > .col-lg-12 > div,  #mobile-posts > .col-lg-12 > div ").owlCarousel({
		loop:false,
		autoplay:false,
		responsive:{
			0:{
	            items:1,
	        },
			575:{
	            items:1,
	        },
			767:{
	            items:2,
			},
			991:{
				items:3,
			},
    	}
	});

	$("#new-slider, .ingredients-mobile, #sentences, #succes-swalis, #produits-term-current, #desktop-posts > .col-lg-12 > div ").owlCarousel({
		items:1,
		loop:false,
		autoplay:false,
	});

	$(window).scroll(function(){
		if($(this).scrollTop()>450) {
			$("#btn-new").fadeIn();
		} else {
			$("#btn-new").fadeOut();
		}
	})

    $("#categories").owlCarousel({
		loop:false,
    	autoplay:false,
        dots: false,
        margin: 30,
        navText: ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
        nav:true,
        responsive:{
			0:{
	            items:1,
	        },
			575:{
	            items:1,
	        },
			767:{
	            items:2,
			},
			991:{
				items:3,
			},
    	}
	});

	$("#nav-product > li > a").on("click" , function(){
		$(".under-category-nav").slideUp();
		$("#nav-product").find("i").removeClass("rotate-menu");
		if(!$(this).next("i").next(".under-category-nav").is(":visible")){
			$(this).next("i").next(".under-category-nav").slideToggle();
			$(this).next("i").toggleClass("rotate-menu");
		}
        return false;
	});

	$(".active-category-nav").parents(".under-category-nav").css("display","block");

	$(".active-category-nav").parents(".under-category-nav").prev().addClass("rotate-menu");

	$(".ubermenu-submenu-id-34 .ubermenu-submenu  .ubermenu-target-title").on("click" , function(){
		var href = $(this).parent("a").attr("href");
		var href_hash = href.substring(href.indexOf('#'));
		window.location.href = href_hash;
		window.location.reload(true);
	});

	var url = window.location.href;
	var id = url.substring(url.lastIndexOf('/') + 1);
	id = id.replace("#", '');
	if (!id.length == 0) {
		$("."+id).css("display","block");

		$(".category").each(function( index ) {
			if($(this).attr("href")=="#"+id){
				$(this).find("h2").addClass('img-category-h2');
				$('#categories').trigger('to.owl.carousel', index);
				var title = $(this).find("span").text();
				var descrition = $(this).find(".descrition").text();
				$("#text-product-single h2").text(title);
				$("#text-product-single .text").text(descrition);
			}
		});

		$("#products-list .product").each(function( index ) {
			if($(this).attr("href")=="#"+id){
				$(this).addClass('active-product');
				$('#products-list').trigger('to.owl.carousel', index);
			}
		});
	} else {
		$("#products-list .owl-item:first-child .product").addClass("active-product");
		
		
	}
	$("#categories .category").on("click" , function(){
		$(".category").find("h2").removeClass("img-category-h2");
		$(this).find("h2").addClass("img-category-h2")
		var link = $(this).attr("href").replace("#", '');
		if($(".under-categories").is(":visible") ){
			$(".under-categories").slideUp("100")
			$("."+link).delay(500).slideDown("100");
		} else{
			$("."+link).slideDown("100");
		}
		hash($(this).attr('href')); 
		return false;
	});

	$("#btn-nav-mobile").on("click" , function(){
		$(".navigation-mobile").slideToggle();
       /* $(".navigation-mobile").addClass("navigation-mobile-display");
        $(".cover-all").addClass("cover-all-display");*/
        return false;
	});
	
	/*$(".btn-close , .cover-all").on("click" , function(){
        $(".navigation-mobile").removeClass("navigation-mobile-display");
		$(".cover-all").removeClass("cover-all-display");
		$(".sub-nav-fix-left").removeClass("show-nav-fix-left")
        return false;
	});*/

    $(".navigation-mobile .menu-item-has-children > a").on("click" , function(){
        $(this).next(".sub-menu").slideToggle();
       $(this).toggleClass("rotate")
        return false;
	});

	$(window).scroll(function(){
		if($(this).scrollTop()>450) {
			$("#scroll , #nav-menu-lateral").fadeIn();
		} else {
			$("#scroll , #nav-menu-lateral").fadeOut();
		}
	})

	$("#scroll a").click(function(){
		$("body,html").animate({
			scrollTop :0
		},500)
		return false;
	});


	



	if($("body.tax-types")) {
		var hash = window.location.hash;
		var q = $('#desktop-posts').find('a[href="' +  hash   + '"]').parents('.owl-item')
		$('.owl-carousel').trigger('to.owl.carousel', q.closest('.owl-item').index() )
	}

});

hash = function(h) {
	if (history.pushState) {
	  history.pushState(null, null, h);
	}else{
	  location.hash = h;
	}
}

//wow
new WOW().init();





