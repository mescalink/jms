$(document).ready(function() {
	$('#quotes ul li').quovolver(800,15000);

	var reviews = $("#reviews-slider");
	var reviews_container= $("#reviews-slider-container");
	reviews.owlCarousel({
		items :1,
		autoPlay: true,
		autoHeight:false
	});

	reviews_container.find(".next").click(function(){

		reviews.trigger("owl.next");
	});
	reviews_container.find(".prev").click(function(){
		//alert ("ergtdergt");
		reviews.trigger("owl.prev");
	});


	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>





	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	$(".main_menu_button").click(function(){
		$(".menu-courses>ul").slideToggle();
	});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	$(".callback").fancybox();	

	$('.button-register').on("click", function (e) {
    e.preventDefault(); // avoids calling preview.php
    var course_id=$(this).attr("data-course-id");
    $.ajax({
      type: "POST",
      cache: false,
      url: this.href, // preview.php
      data: {"course_id":course_id}, // all form fields
      success: function (data) {
        // on success, post (preview) returned data in fancybox
        $.fancybox(data, {
          // fancybox API options
          fitToView: false,
          width: 905,
          height: 505,
          autoSize: false,
          closeClick: false,
          openEffect: 'none',
          closeEffect: 'none'
        }); // fancybox
      } // success
    }); // ajax
  }); // on



	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});