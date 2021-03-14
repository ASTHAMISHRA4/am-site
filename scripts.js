$(document).ready(function () {

'use strict';
$(window).on('load', function () {
    if ($(".pre-loader").length > 0)
    {
        $(".pre-loader").remove();
    }
});
  $('#sidebar').height($(window).innerHeight());
  $('#home').height($(window).innerHeight());
  
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        off(this.id);
       
        if ( $(window).width() < 992) {     
          on('navbar-expand-btn');
        }
        else{
          on('sidebarExpand');
        }
    });

  $('#sidebarExpand').on('click', function () {
      $('#sidebar').toggleClass('active');
      off(this.id);   
      on('sidebarCollapse');
  });

  $('#navbar-expand-btn').on('click', function () {
    off(this.id);
    on('collapsibleNavbar');
    window.scrollTo(0, 0);
  });
  $('#collapsibleNavbar').on('click', function () {
    off(this.id);
    on('navbar-expand-btn');
  });
});

//typing text
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

// When the user scrolls the page, increment the progress bar
window.onscroll = function() {scrollProgress()};

function scrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//------------ Contact Form -----------------------------//

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

 //-----------------------//

 //popover
 $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//overlay
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
//profile pic
function onHover(id,img)
{
    $(id).attr('src', img);
}

function offHover(id,img)
{
    $(id).attr('src', img);
}
