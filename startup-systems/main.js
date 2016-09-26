function main() {

  $('.contact').hide();

  $('.contact-button').on('click', function() {
		//$(this).next().toggle();
    $('.contact').slideToggle(400);
    $(this).toggleClass('active');
	});
}

$(document).ready(main);
