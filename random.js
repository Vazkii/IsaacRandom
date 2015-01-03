var randomsLeft = 0;

$(function() {
	$('.character-box').each(function(e) {
		var character = $(this).attr('data-character');
		var name = $(this).attr('data-name');
		
		$(this).html("<div class='down-text'>" + name + "</div><img src='img/" + character +".png'></img>");
	});
	
	setInterval(randomize, 50);
});

$('.character-box').click(function() {
	if($(this).hasClass('randomized'))
		$(this).removeClass('randomized');
	else if($(this).hasClass('selected'))
		$(this).removeClass('selected');
	else $(this).addClass('selected');
});

$('#select-button').click(function() {
	randomsLeft = 20;
});

function randomize() {
	if(randomsLeft <= 0)
		return;
		
	$('.randomized').each(function(e) {
		$(this).removeClass('randomized');
	});
	
	var characters = $('.character-box:not(.selected)');
	var element = characters[rand(0, characters.length)];
	element.className = element.className + " randomized";
	
	--randomsLeft;
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}