$(document).ready(function () {

  //---------PRELOADER----------------//
'use strict';
$(window).on('load', function () {
    if ($(".pre-loader").length > 0)
    {
        $(".pre-loader").remove();
    }
    if($(window).width() >= 992){
      $('#cursor').css("visibility", "visible");
      $('#pointer').css("visibility", "visible");
    }
});

//----------DYNAMIC HEIGHT-----------//
  $('#sidebar').height($(window).innerHeight());
  $('#home').height($(window).innerHeight());
 
//----------SIDEBAR COLLAPSE-------//
  $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        off(this.id);
       
        if ( $(window).width() < 992) {     
          on('navbar-expand-btn');
        }
        else{
          on('sidebarExpand');
        }
        $(".nav-link").addClass("round");
        $(".nav-link").removeClass("clickable");
    });
  $('#sidebarExpand').on('click', function () {
      $('#sidebar').toggleClass('active');
      off(this.id);   
      on('sidebarCollapse');
      $(".nav-link").addClass("clickable");
      $(".nav-link").removeClass("round");
  });

//---------NAVBAR COLLAPSE---------//
  $('#navbar-expand-btn').on('click', function () {
    off(this.id);
    on('collapsibleNavbar');
    window.scrollTo(0, 0);
  });
  $('#collapsibleNavbar').on('click', function () {
    off(this.id);
    on('navbar-expand-btn');
  });

  //---------NAVBAR COLLAPSE---------//
//   $('#connect-icon').on('click', function () {
//     $('#connect-icon').toggleClass('closed');
    
// });

  //-------CURSOR---------------------//
  if($(window).width() >= 992){
    magnetCurs.init({
      click:3000,
      spacing:20,
      pointer:true,
      shockable:4
  });
  }

//-----------------SMOOTH SCROLL----------//
$(".home-btn").click(function() {
  $('html,body').animate({
      scrollTop: $("#home").offset().top},
      'slow');
});
$(".about-btn").click(function() {
  $('html,body').animate({
      scrollTop: $("#about").offset().top},
      'slow');
});
$(".education-btn").click(function() {
  $('html,body').animate({
      scrollTop: $("#education").offset().top},
      'slow');
});
$(".skills-btn").click(function() {
  $('html,body').animate({
      scrollTop: $("#skills").offset().top},
      'slow');
});
$(".experience-btn").click(function() {
  $('html,body').animate({
      scrollTop: $("#experience").offset().top},
      'slow');
});
$(".blog-btn").click(function() {
  $('html,body').animate({
      scrollTop: $("#blog").offset().top},
      'slow');
});
$(".contact-btn").click(function() {
  $('html,body').animate({
      scrollTop: $("#contact").offset().top},
      'slow');
});

//-------------------- CHANGE CURSOR COLOR ON HOVER IN LIGHT BACKGROUND------------------//
$("#interest,#skills-personal").hover(function(){
  $('#cursor').css("border-color", "#141a2c");
  $('#pointer').css("border-color", "#141a2c");
  }, function(){
  $('#cursor').css("border-color", "#288c6c");
  $('#pointer').css("border-color", "#288c6c");
});

});

//---------TYPING ANIMATION---------//
var text = ["Singer", "Coder", "Blogger","Developer"];
var counter = 0;
var elem1 = document.getElementById("changeText");
var elem2 = document.getElementById("changeTextAbt");
var inst = setInterval(change, 2000);
var i = 0;
var speed = 100; 
var txt ='';
function change() {
  elem1.innerHTML = "";
  elem2.innerHTML = "";
  i=0;
  txt = text[counter];
  typeWriter();
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}

function typeWriter() {
  if (i < txt.length) {
    elem1.innerHTML += txt.charAt(i);
    elem2.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//---------PROGRESS BAR ANIMATION---------//
window.onscroll = function() {scrollProgress()};
function scrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//------------ CONTACT FORM -----------------------------//

function isEmpty(value) {
  if (value == null || value == 'undefined' || value == "") return true;
  return (value.length == 0);
 }

 function isEmail(email) {
  let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

var fields = {};
function sendContact() {
  fields.name = document.getElementById('userName');
  fields.email = document.getElementById('email');
  fields.subject = document.getElementById('subject');
  fields.message = document.getElementById('message');
  var valid = isValid() == 0 ? false:true;
	return valid;
}

function validateName() {
  var valid = true;
  var value = fields.name.value;
  document.getElementById('invalidName').innerHTML = "";
	if( isEmpty(value))
  {
    valid = false;
    document.getElementById('invalidName').innerHTML = "Name is Required";
  }
  return valid;
}

function validateEmail() {
  var valid = true;
  var value = fields.email.value;
  document.getElementById('invalidEmail').innerHTML = "";
  if( isEmpty(value))
  {
    valid = false;
    document.getElementById('invalidEmail').innerHTML = "Email is Required";
  }
  else{
    valid = isEmail(value);
    if(!valid)
    document.getElementById('invalidEmail').innerHTML = "Invalid Email";
  }
  return valid;
}

function validateSubject() {
  var valid = true;
  var value = fields.subject.value;
  document.getElementById('invalidSubject').innerHTML = "";
	if( isEmpty(value))
  {
    valid = false;
    document.getElementById('invalidSubject').innerHTML = "Subject is Required";
  }
  return valid;
}

function validateMsg() {
  var valid = true;
  var value = fields.message.value;
  document.getElementById('invalidMsg').innerHTML = "";
	if( isEmpty(value))
  {
    valid = false;
    document.getElementById('invalidMsg').innerHTML = "Message is Required";
  }
  return valid;
}

 function isValid() {
  var valid = true;
  valid &= validateName();
  valid &= validateEmail();
  valid &= validateSubject();
  valid &= validateMsg();
  return valid;
 }

//---------TOOLTIP POPOVER---------//
 $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//---------OVERLAY ANIMATION---------//
function on(id) {
  document.getElementById(id).style.display = "block";
}

function off(id) {
  document.getElementById(id).style.display = "none";
}

function onOverlay(id)
{
  on(id);
  $("body").addClass("noscroll");
}

function offOverlay(id)
{
  off(id);
  $("body").removeClass("noscroll");
}

//---------PROFILE PICTURE ANIMATION---------//
function onHover(id,img)
{
    $('#'+id).attr('src', img);
}

function offHover(id,img)
{
    $('#'+id).attr('src', img);
}
function onHoverMove(id,img)
{
    onHover(id,img)
    document.getElementById(id).style.transform = "scaleX(-1)";
}

function offHoverMove(id,img)
{
    offHover(id,img);
    document.getElementById(id).style.transform = "scaleX(1)";
}

//---------------------ANIMATION SLIDE LEFT---------------------//
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');