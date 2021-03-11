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
  });
  $('#collapsibleNavbar').on('click', function () {
    off(this.id);
    on('navbar-expand-btn');
  });
});

//typing text
var text = ["Developer", "Singer", "Coder", "Blogger"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 2000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
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

//Contact Form
var fields = {}
function sendContact(){
   fields.name = document.getElementById('name');
   fields.email = document.getElementById('email');
   fields.subject = document.getElementById('subject');
   fields.message = document.getElementById('message');

   return isValid();
}

function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined' ) return false;
  return (value.length > 0);
 }

 function isEmail(email) {
  let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
  if (field == null) return false;
 
  var valid = validationFunction(field.value);
  if(!valid)
  {
    alert("Invalid Value of "+field.name + ". Please Enter Valid Value and Try Again!!!")
  }
  return valid;
  }

 function isValid() {
  var valid = true;
  
  valid &= fieldValidation(fields.name, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.subject, isNotEmpty);
  valid &= fieldValidation(fields.message, isNotEmpty);
  return valid;

 }


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

//profile pic
function onHover(id,img)
{
    $(id).attr('src', img);
}

function offHover(id,img)
{
    $(id).attr('src', img);
}
