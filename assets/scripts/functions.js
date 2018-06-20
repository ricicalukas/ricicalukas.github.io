window.addEventListener('load', function() {
  var loader = document.getElementById('loader');
  loader.classList.add('loader--hidden');
  $("body").toggleClass("no-scroll");
});

$(document).ready(function() {
  var margin = 0;
  // Disabling older browsers
  if(Sniffr.browser.name === 'ie'){
    $("#older-devices").addClass("older-devices--is-showing");
    $("body").toggleClass("no-scroll");
  }
  else if(Sniffr.browser.name === 'firefox' && Sniffr.browser.version <= 27){
    $("#older-devices").addClass("older-devices--is-showing");
    $("body").toggleClass("no-scroll");
  }
  else if(Sniffr.browser.name === 'chrome' && Sniffr.browser.version <= 20){
    $("#older-devices").addClass("older-devices--is-showing");
    $("body").toggleClass("no-scroll");
  }
  else if(Sniffr.browser.name === 'safari' && Sniffr.browser.version <= 6){
    $("#older-devices").addClass("older-devices--is-showing");
    $("body").toggleClass("no-scroll");
  }
  else if(Sniffr.browser.name === 'opera' && Sniffr.browser.version <= 11.5){
    $("#older-devices").addClass("older-devices--is-showing");
    $("body").toggleClass("no-scroll");
  }
  else if(Sniffr.browser.name === 'android' && Sniffr.browser.version <= 4.6){
    $("#older-devices").addClass("older-devices--is-showing");
    $("body").toggleClass("no-scroll");
  }
  else if(Sniffr.browser.name === 'android'){
    $("#older-devices").addClass("older-devices--is-showing");
    $("body").toggleClass("no-scroll");
  }
  else if(Sniffr.browser.name === 'com.android.browser'){
    $("#older-devices").addClass("older-devices--is-showing");
    $("body").toggleClass("no-scroll");
  }
  else if(Sniffr.browser.name === 'ios' && Sniffr.browser.version <= 6.1){
    $("#older-devices").addClass("older-devices--is-showing");
    $("body").toggleClass("no-scroll");
  };
  // Smooth scroll

  $(".slide-anchor").click(function(e) {
    var linkHref = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(linkHref).offset().top - margin
    }, 1000);
  });

  // Toggle button
  $("#toggle").click(function() {
  	$("#toggle").toggleClass("menu-active");
    $(".menu").toggleClass("menu-active");
    $("body").toggleClass("no-scroll");
  });
  // Tracks child inside of menu to toggle classes
  $('.box__right').on({
    mouseenter: function() {
      $(this).closest('.box').css('z-index', '50');
    },
    mouseleave: function() {
      var that = $(this);
      setTimeout(function() {
        that.closest('.box').css('z-index', '');
      }, 150);
    }
  });
});
$(document).on('click', '.menu-active a', function(e) {
  $("#toggle").toggleClass("menu-active");
  $(".menu").toggleClass("menu-active");
  $("body").toggleClass("no-scroll");
})
// Flowing items
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  if (wScroll > $(".work-container").offset().top - ($(window).height() / 1.25)) {
    $(".box").each(function(i){
      setTimeout(function(){
        $(".box").eq(i).addClass("is-showing")
      }, 150 * (i+1));
    });
  };

  if (wScroll > $(".gallery").offset().top - ($(window).height() / 1.25)) {
    $(".gallery__item").each(function(i){
      setTimeout(function(){
        $(".gallery__item").eq(i).addClass("is-showing")
      }, 150 * (i+1));
    });
  };

});
