// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
import "jquery_ujs"
import "popper"
import "bootstrap"
import "application"
import "audio"
import "chord_piano"
import "jquery-1.7.1.min"
import "jquery-ui.min"
import "piano"

// $(function() {
//     $( document ).tooltip({
//     	items: '.suggestion',
//     	content: function() {
//     		var chord = $(this).data()['chord'];
//     		return '<img src="/assets/fingerings/' + chord + '.jpg" alt="' + chord + '">';
//     	}
//     });
$(".chordbox").each(function(b) {
	$(this).find(".finger").on("click", function( e ) {
		e.preventDefault
		$(this).closest(".chordbox").find(".sm-audio").get(0).play();
		});
	});

	$(document).on('click', ".progress-play", function( e ) {
		console.log("progress clicked");
		e.preventDefault();

		$(".prog").each(function(delay_length){
			console.log('timeout', delay_length);
			setTimeout(play_audio, delay_length * 1000, this);
		});

		function play_audio(audio) {
			console.log("play", audio);
			audio.play();
		}
	});
});


