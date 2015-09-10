$(document).ready(function() {
	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#scroll-top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});	

	$(window).scroll(function(){
		if ($(window).scrollTop()<="250") $("#scroll-top").fadeOut("slow")
			else $("#scroll-top").fadeIn("slow")
		});


	var lastId,
	header=$("#main-header"),
	headerHeight = header.outerHeight(),
	mainMenu=$("#main-menu"),
	menuItems=mainMenu.find("a"),

	scrollItems = menuItems.map(function () {
		var item = $($(this).attr("href"));
		if (item.length) {
			return item;
		}
	});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	menuItems.click(function(e) {
		e.preventDefault();
		menuItems.removeClass("active");
		$(this).addClass("active");
		var section=$(this).attr("href");
		$.scrollTo($(section), 800, {
			offset: -headerHeight
		});
	});

	$(window).scroll(function () {
    	//alert("yes");
        // Get container scroll position
        var fromTop = $(this).scrollTop() + headerHeight+1;
        //console.log("fromTop="+fromTop);
        // Get id of current scroll item
        var cur = scrollItems.map(function () {
        	if ($(this).offset().top < fromTop)
        		return this;
        });
       // console.log(cur.length);
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
        	lastId = id;
            // Set/remove active class
            menuItems
            .removeClass("active")
            .filter("[href=#" + id + "]").addClass("active");
          }
        });


});

