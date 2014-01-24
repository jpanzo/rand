// JavaScript Document
$(document).ready(
	function() {
		$('iframe.vimeo').each(
			function(){
				$f(this).addEvent('ready',ready);
			});
	
	function ready(playerID){
		
		var player = $f(playerID),
		
		playButton = $('#playButton'),
        pauseButton = $('#pauseButton'),
        unloadButton = $('#unloadButton');
		
		var apiConsole = $('.console .output');
		
		//Add event listeners
		// http://vimeo.com/api/docs/player-js#events
		
		player.addEvent('play', play(playerID));
		$f(playerID).addEvent('seek', seek);
		
		pauseButton.click(function() {
			player.api('pause');
        });
		playButton.click(function() {
			player.api('play');
        });
		unloadButton.click(function() {
			player.api('unload');
        });
		
		//Fire API method
		//http://vimeo.com/api/docs/player-js#reference
		$f(playerID).api('play');
		
		apiConsole.html('hello world!');
		
		function apiLog(message) {
		apiConsole.html(message + '\n' + apiConsole.html());
		}
		
		
		$f(playerID).addEvent('playProgress', function(data) {
			apiLog('playProgress event: ' + data.seconds + ' : ' + data.percent + ' : ' + data.duration);
		});

	}
	
	function play(playerID){
		alert(playerID + " is playing!!!");
	}
	function seek(){
		alert('Seeking');
	}
	
	
	
});
/**
         * Called once a vimeo player is loaded and ready to receive
         * commands. You can add events and make api calls only after this
         * function has been called.
         *
         * @param String $player_id — id of the iframe element firing the event. This is
         * useful when listening to multiple videos so you can identify which one fired
         * the event.
		 
        function ready(player_id) {
            // Keep a reference to Froogaloop for this player
            var player = $f(player_id),

                playButton = document.getElementById('playButton'),
                pauseButton = document.getElementById('pauseButton'),
                unloadBUtton = document.getElementById('unloadButton');

            /**
             * Attach event listeners.
             *
             * If you're using a javascript framework like jQuery or Mootools
             * you'll probably use their addEvent method to add the click events.
             * Here we're just using the standard W3C addEventListener method. If
             * you need IE8 support, you'll need to use attachEvent for IE8 and
             * addEventListener for everything else (or just use jQuery or MooTools).
             

            playButton.addEventListener('click', function() {
                player.api('play');
            });

            pauseButton.addEventListener('click', function() {
                player.api('pause');
            });

            unloadButton.addEventListener('click', function() {
                player.api('unload');
            });
        }

        window.addEventListener('load', function() {
            //Attach the ready event to the iframe
            $f(document.getElementById('player')).addEvent('ready', ready);
        });
		*/