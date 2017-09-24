$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	var offsetHeight = document.getElementById('banner').offsetHeight;
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - offsetHeight
      }, 1000);
      return false;
    }
  }
});