
	// scroll
	var scrollWindow = function() {
        $(window).scroll(function(){
          var $w = $(this),
              st = $w.scrollTop(),
              navbar = $('.pb_navbar'),
              sd = $('.js-scroll-wrap'),
              logo = $('.navbar-brand img'); // Select the logo image

          if (st > 150) {
            if (!navbar.hasClass('scrolled')) {
              navbar.addClass('scrolled');
              logo.attr('src', 'assets/images/logo/hcsa-logo-negro.jpg'); // Change logo source
            }
          } 
          if (st < 150) {
            if (navbar.hasClass('scrolled')) {
              navbar.removeClass('scrolled sleep');
              logo.attr('src', 'assets/images/logo/hcsa-logo-blanco.png'); // Revert logo source
            }
          } 
          if (st > 350) {
            if (!navbar.hasClass('awake')) {
              navbar.addClass('awake');
            }

            if (sd.length > 0) {
              sd.addClass('sleep');
            }
          }
          if (st < 350) {
            if (navbar.hasClass('awake')) {
              navbar.removeClass('awake');
              navbar.addClass('sleep');
            }
            if (sd.length > 0) {
              sd.removeClass('sleep');
            }
          }
        });
      };
      scrollWindow();
	