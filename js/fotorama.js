// TOP slider
$(document).ready(function() {
 	$('.next').on('click', function() {
  		var currentSlider = $('.active-slider-item');
  		var nextSlider = currentSlider.next();

  	if(nextSlider.length == 0) {
   		nextSlider = $('.slider-item').first();
  	}

  		currentSlider.removeClass('active-slider-item');
  		nextSlider.addClass('active-slider-item');
	});

 	$('.prev').on('click', function() {
  		var currentSlider = $('.active-slider-item');
  		var prevSlider = currentSlider.prev();

  	if(prevSlider.length == 0) {
   		prevSlider = $('.slider-item').last();
  	}

  		currentSlider.removeClass('active-slider-item');
  		prevSlider.addClass('active-slider-item');
 	});
});﻿



// Gallery
$(function(){
	$('.g-right-arrow').on('click', function() {
		var sliderLine = $('.gallery-slider-line');
		sliderLine.css('left', -400);
	})
})





// MAP
function initMap() {
	var uluru = {lat: 41.878114, lng: -87.629798};
	var map = new google.maps.Map(document.getElementById("contact-map"), {
		zoom: 4,
		center: uluru
	});
	var marker = new google.maps.Marker({
          position: uluru,
          map: map
      });
}



// #Contact FORM subscribe
$(function(){
	$('.subs-form form').on('submit', function(e){
		e.preventDefault();

		var elEmail = $('input[type=mail');
		var email = elEmail.val().trim();

		if (!email) {
			$('#email-subs-empty').show();
			elEmail.addClass('error-input');
			return;
		}
		if (!validateEmail(email)) {
			$('#email-subs-invalid').show();
			elEmail.addClass('error-input');
			return;
		}
	})
	$('input').on('focus', function(){
		$(this).parent().parent().find('small').hide();
		$(this).removeClass('error-input');
	})
})


// #Contact FORM
$(function(){
	$('#contact form').on('submit', function(e){
		e.preventDefault();

		var elName = $('#name-input');
		var elEmail = $('input[type=email]');
		var elComment = $('textarea');
		var elTel = $('#tel-input');

		var name = elName.val().trim();
		var email = elEmail.val().trim();
		var comment = elComment.val().trim();
		var tel = elTel.val().trim();

		if (!name) {
			$('#name-empty').show();
			elName.parent().addClass('error-input');
			return;
		}
		if (name.length < 2) {
			$('#name-invalid').show();
			elName.parent().addClass('error-input');
			return;
		}
		if (!email) {
			$('#email-empty').show();
			elEmail.parent().addClass('error-input');
			return;
		}
		if (!validateEmail(email)) {
			$('#email-invalid').show();
			elEmail.parent().addClass('error-input');
			return;
		}
		if (!tel) {
			$('#tel-empty').show();
			elTel.parent().addClass('error-input');
			return;
		}
		if (isNaN(tel)) {
			$('#tel-invalid').show();
			elTel.parent().addClass('error-input');
			return;
		}
		if (tel.length <= 10) {
			$('#tel-invalid').show();
			elTel.parent().addClass('error-input');
			return;
		}
		if (!comment) {
			$('#comment-empty').show();
			elComment.parent().addClass('error');
			return;
		}
		if (comment.length < 6) {
			$('#comment-invalid').show();
			elComment.parent().addClass('error');
			return;
		}

		$.ajax({
			url: 'https://gsclasses-ajax.herokuapp.com/contact',
			method: 'post',
			data: {
				name: name,
				email: email,
				message: comment
			},
			success: function(){
				console.log('Succsess');
			},
			error: function(){
				console.log('Error');
			}
		})

	})

	$('input, textarea').on('focus', function(){
		$(this).parent().parent().find('small').hide();
		$(this).parent().removeClass('error-input');
	})
	
})

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
     