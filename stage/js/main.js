$(function () {
  'use strict';

  $("input").val();

  //Toggle Sidebar
  $(".toggle-sidebar").on("click", function () {
    $(".content-area, .sidebar").toggleClass("half-sidebar");
  });
  //radio button ==> options
  //half sidebar
  $("#radio-no-sidebar").on("click", function () {
    $(".content-area, .sidebar").removeClass("half-sidebar");
    $(".content-area, .sidebar").addClass("no-sidebar");
  });
  //no sidebar
  $("#radio-half-side-bar").on("click", function () {
    $(".content-area, .sidebar").removeClass("no-sidebar");
    $(".content-area, .sidebar").addClass("half-sidebar");
  });
  //default sidebar
  $(".default-options-side-bar-width").on("click", function () {
    $(".content-area, .sidebar").removeClass("no-sidebar");
    $(".content-area, .sidebar").removeClass("half-sidebar");
  });




  //Toggle Sub Menu
  $(".toggle-submenu").on("click", function () {
    //$(this).addClass('collapse').siblings().find('.child-links').removeClass('collapse').hide();
    $(this).find(".fa-angle-right").toggleClass("down");
    $(this).next('.child-links').slideToggle()

  });




  // Open / Close Full Screen
  $('.toggle-full-screen').on('click', function () {
    $(this).toggleClass("full-screen");
    if ($(this).hasClass('full-screen')) {
      openFullscreen();
    } else {
      closeFullscreen();
    }
  });

  //Toggle Settings Menu
  $('.toggle-settings').on('click', function () {
    $(this).find('i').toggleClass('fa-spin');
    $(this).parent().toggleClass("hide-settings");
  })


  //Get All Colors themes
  var themeClasses = [];
  $('.color-options li').each(function () {
    themeClasses.push($(this).data("theme"));
  })

  //switch colors themes
  $('.color-options li').on("click", function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('body').removeClass(themeClasses).addClass(($(this).data("theme")));
  });

  //Get All Fonts
  var fontClasses = [];
  $('.font-options select option').each(function () {
    fontClasses.push($(this).val());
  })

  //switch Fonts
  $('.font-options select').on("change", function () {
    var optionSelected = ($(this).find("option:selected").val());
    $('body').removeClass(fontClasses).addClass(optionSelected);
  });


  //Get All color SideBar
  var sidebareClasses = [];
  $('.sidebar-options li').each(function () {
    sidebareClasses.push($(this).data("sidebar"));
  })

  //switch color SideBar
  $('.sidebar-options li').on("click", function () {
    $(this).addClass('active').siblings().removeClass('active');

    $('.sidebar').removeClass('sidebar-default-theme');
    $('.page-footer').removeClass('sidebar-default-theme');

    $('.sidebar').removeClass(sidebareClasses).addClass(($(this).data("sidebar")));
    $('.page-footer').removeClass(sidebareClasses).addClass(($(this).data("sidebar")));

  });
  //restore defualt theme
  $('.sidebar-options .default-options-side-bar').on("click", function () {
    $('.sidebar-options li').removeClass('active');
    $('.sidebar').removeClass(sidebareClasses).addClass('sidebar-default-theme');
    $('.page-footer').removeClass(sidebareClasses).addClass('sidebar-default-theme');
  });


  //Input Focus
  inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
  });


  // input tag
  $('.add-tag').on('keyup', function () {

    var keyboardKey = event.keyCode || event.wich;
    console.log(keyboardKey);
    if (keyboardKey === 32) {
      var thisValue = $(this).val();
      $('.tags').wrap('<span  class="tag-span"><i class="fas fa-times"></i>' + thisValue + '</span>');
      
      $(this).val('');
      console.log(thisValue);
    }
  });

  /**Tab Sytem */

  $('#form-upload .nav-tabs li').on("click", function () {
    var myId = $(this).attr("id");
    $(this).addClass('active').siblings().removeClass('active');
    $('#form-upload .form-row').hide();

    $("#" + myId + "-content").css('display', 'flex').fadeIn("1000");
  });






  /*
    $('#btn-next').on("click", function () {
      var tabLi = $('#form-upload .nav-tabs li');
      var myId = tabLi.attr("id");
      var m=$('#form-upload .nav-tabs li').next().attr("id");
      //tabLi.next().addClass('active').siblings().removeClass('active');
      //$('#form-upload .form-row').hide();
  
      $(m + "-content").addClass('active').siblings().removeClass('active');
      $('#form-upload .form-row').hide();
    });
  */
  /******************************** */


});


var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}


//Input
const inputs = document.querySelectorAll(".input");


function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}


