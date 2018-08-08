var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

	//Slide 1
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("c-use__slide");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" u-active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " u-active";

}
//Slide 2
var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function showSlides2(n) {

	var i;
	var slides2 = document.getElementsByClassName("c-use__slide-2");
  var dots2 = document.getElementsByClassName("dot-2");

  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" u-active", "");
  }
  slides2[slideIndex2-1].style.display = "flex";
  dots2[slideIndex2-1].className += " u-active";
}
//Slide 3

var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}
function showSlides3(n) {

	var y;
	var slides3 = document.getElementsByClassName("c-use__slide-3");
  var dots3 = document.getElementsByClassName("dot-3");

  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (y = 0; y < slides3.length; y++) {
      slides3[y].style.display = "none";
  }
  for (y = 0; y < dots3.length; y++) {
      dots3[y].className = dots3[y].className.replace(" u-active", "");
  }
  slides3[slideIndex3-1].style.display = "flex";
  dots3[slideIndex3-1].className += " u-active";
}

$(document).ready(function() {
  // Scrollify
  var $section = $('.js-section');
  var $pager = $('#c-progress-bar-pager');

  var option = {
    section : '.js-section',
    easing: "swing",
    scrollSpeed: 600,
    scrollbars: true,
    before:function(index, section) {
      setCurrent(index);
      pagerCurrent(index);
    },
    afterRender:function() {
      createPager();
      setCurrent();
    }
  };

  $(function() {
    $.scrollify(option);
  });

  function setCurrent(index = 0) {
    $section.removeClass('is-show');
    $section.eq(index).addClass('is-show');
  }

  function pagerCurrent(index = 0) {
    var $li = $pager.find('li');
    $li.removeClass('is-current');
    $li.eq(index).addClass('is-current');
  }

  function createPager() {
    $section.each(function(i, e){
      var sectionName = $(e).attr('data-section-name');
      var addClass = '';
      if (i === 0) {
          addClass = 'is-current';
      }
      var html = '';
      html += '<li class="' + addClass + '">';
       html += '<a href="#' + sectionName + '">';
        html += '<img src="assets/img/pc/top-aficon.png">';
       html += '</a>';
      html += '</li>';
      $pager.append(html);
    });
    pagerLink();
  }

  function pagerLink () {
    $pager.find('a').on('click', function() {
      $.scrollify.move($(this).attr("href"));
    });
  }
});
$(document).ready(function() {
    //Fixed menu
    var urllogoSP = './assets/img/sp/logo-sp.png';
    var urllogoImgSP = './assets/img/sp/sp-f-logo-ex.png';
    var urlImgfbSP = './assets/img/sp/sp-i-fb.png';
    var urlImgfbSPex = './assets/img/sp/sp-i-fb-ex.png';
    var urlImgtwSp = './assets/img/sp/sp-i-tw.png';
    var urlImgtwSPex = './assets/img/sp/sp-i-tw-ex.png';

    $(window).on('scroll', function() {
      if($(window).scrollTop()){
        $(".c-headerSP").addClass("u-bgcolor-2 c-header-fix");
        $(".c-headerSP__menuSP--1").css('background','#fff');
        $(".c-headerSP__menuSP--2").css('background','#fff');
        $(".c-headerSP__menuSP--3").css('background','#fff');
        $(".c-headerSP__logo").find("img").attr('src', urllogoImgSP);
        $(".c-headerSP__social").find("img.i-fb").attr('src', urlImgfbSPex);
        $(".c-headerSP__social").find("img.i-tw").attr('src', urlImgtwSPex);
      }
      else{
        $(".c-headerSP").removeClass("u-bgcolor-2 c-header-fix");
        $(".c-headerSP__menuSP--1").css('background','#000');
        $(".c-headerSP__menuSP--2").css('background','#000');
        $(".c-headerSP__menuSP--3").css('background','#000');
        $(".c-headerSP__logo").find("img").attr('src', urllogoSP);
        $(".c-headerSP__social").find("img.i-fb").attr('src', urlImgfbSP);
        $(".c-headerSP__social").find("img.i-tw").attr('src', urlImgtwSp);
      }
    });

});