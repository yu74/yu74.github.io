      // $(function () {
      //   $('[data-toggle="popover"]').popover()
      // });


      $(document).ready(function() {
      $(".amenu, .menu a").click(function() {
      		$(".menu").slideToggle();
      	});

       var maxHeight = 0;
       $('.tile10').each(function() {
            if ($(this).height()>maxHeight) maxHeight = $(this).height();
      }).each(function() {
            if ($(this).height()<maxHeight) {$(this).height(maxHeight);}
            });

            //Каруселька
      //Документация: http://owlgraphic.com/owlcarousel/
      var owl = $("#owl-example");
      owl.owlCarousel({
            items : 2,
            margin: 30,
            itemsDesktop : [1200,1], //5 items between 1000px and 901px
            itemsDesktopSmall : [900,1], // betweem 900px and 601px
            itemsTablet: [600,1], //2 items between 600 and 0
            itemsMobile : false, // itemsMobile disabled - inherit from it
            slideSpeed: 500
      });
      owl.on("mousewheel", ".owl-wrapper", function (e) {
            if (e.deltaY > 0) {
                  owl.trigger("owl.prev");
            } else {
                  owl.trigger("owl.next");
            }
            e.preventDefault();
      });
      $(".next").click(function(){
            owl.trigger("owl.next");
      });
      $(".prev").click(function(){
            owl.trigger("owl.prev");
      });

            //Плавный скролл до блока .div по клику на .scroll
      //Документация: https://github.com/flesler/jquery.scrollTo
      $("a.asmart").click(function() {
            $.scrollTo($("#smart"), 800, {
                  offset: -0
            });
      });
      $("a.aworking").click(function() {
            $.scrollTo($("#working"), 800, {
                  offset: -0
            });
      });
      $("a.afeatured").click(function() {
            $.scrollTo($("#featured"), 800, {
                  offset: -0
            });
      });
      $("a.aservices").click(function() {
            $.scrollTo($("#services"), 800, {
                  offset: -0
            });
      });
      $("a.ateam").click(function() {
            $.scrollTo($("#team"), 800, {
                  offset: -0
            });
      });
      $("a.aclients").click(function() {
            $.scrollTo($("#clients"), 800, {
                  offset: -0
            });
      });
      $("a.acontact").click(function() {
            $.scrollTo($("#contact"), 800, {
                  offset: -0
            });
      });

      //Добавляет классы дочерним блокам .block для анимации
      // Документация: http://imakewebthings.com/jquery-waypoints/
      $("#working").waypoint(function(direction) {
            if (direction === "down") {
                  // $(".class").addClass("active");
                  $(".tile1").removeClass("start1 start11 start12 start13 start14");
            } else if (direction === "up") {
                  // $(".class").removeClass("deactive");
            };
           }, {offset: '25%'});

      $("#featured").waypoint(function(direction) {
            if (direction === "down") {
                  $(".tile22").removeClass("start2");
            } else if (direction === "up") {
                  // $(".class").removeClass("deactive");
            };
           }, {offset: '25%'});
      $("#services").waypoint(function(direction) {
            if (direction === "down") {

                  $(".sect32").removeClass("start3");
            } else if (direction === "up") {
                  // $(".class").removeClass("deactive");
            };
           }, {offset: '25%'});


});

      function a3change (event,n) {
            event.preventDefault();
            $(".a3").removeClass("active");
            $(".a3" + n).addClass("active");
      }

