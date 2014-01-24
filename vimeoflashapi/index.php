<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Vimeo Video Experiments</title>
<script type="text/javascript" src="http://a.vimeocdn.com/js/froogaloop2.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="js/script.js"></script>
</head>

<body>

	<iframe class="vimeo" id="player1" src="//player.vimeo.com/video/84058031?api=1&player_id=player1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	<p id="text"></p>
	<button id="playButton">Play</button>
	<button id="pauseButton">Pause</button>
	<button id="unloadButton">Unload</button>

	<dl>
    	<dt>Console</dt>
        	<dd><textarea class="output" readonly="readonly">player_1 ready!</textarea></dd>
    </dl>
</body>
</html>