$(document).ready(function () {
  console.log("in1")
  $(document).on(`click`, `#education`, function () {

    //$('.education').css("display", "flex")
    $('.summary').css("display", "none")
    $('.career').css("display", "none")
    $('.projects').css("display", "none")
    $('.skills').css("display", "flex")
    $('#education').addClass("btn-dark")
    $('#about').removeClass("btn-dark")
    $('#career').removeClass("btn-dark")
    $('#projects').removeClass("btn-dark")

    $(".education").slideDown("slow", function () {
      // Animation complete.
    });


  })

  $(document).on(`click`, `#about`, function () {

    $(".summary").slideDown("slow")
    $('.education').css("display", "none")
    $('.skills').css("display", "flex")

    $('.career').css("display", "none")
    $('.projects').css("display", "none")

    $('#education').removeClass("btn-dark")
    $('#about').addClass("btn-dark")
    $('#career').removeClass("btn-dark")
    $('#projects').removeClass("btn-dark")
  })

  $(document).on(`click`, `#career`, function () {

    $('.education').css("display", "none")
    $('.summary').css("display", "none")
    // $('.career').css("display", "flex")
    $('.career').slideDown('slow')
    $('.projects').css("display", "none")
    $('.skills').css("display", "none")
    $('#education').removeClass("btn-dark")
    $('#about').removeClass("btn-dark")
    $('#career').addClass("btn-dark")
    $('#projects').removeClass("btn-dark")


  })

  $(document).on(`click`, `#projects`, function () {

    $('.education').css("display", "none")
    $('.summary').css("display", "flex")
    $('.career').css("display", "none")
    $('.projects').css("display", "none")

    $('#education').removeClass("btn-dark")
    $('#about').removeClass("btn-dark")
    $('#career').removeClass("btn-dark")
    $('#projects').addClass("btn-dark")

  })






})
