﻿// Generated by IcedCoffeeScript 108.0.11
(function() {
  "player = undefined\ntag = document.createElement('script')\ntag.src = 'https://www.youtube.com/player_api'\nfirstScriptTag = document.getElementsByTagName('script')[0]\nfirstScriptTag.parentNode.insertBefore tag, firstScriptTag\nonYouTubePlayerAPIReady = ->\n    alert 'ready'\n    player = new (YT.Player)('player',\n    height: '390'\n    width: '640'\n    videoId: '0Bmhjf0rKe8'\n    events:\n        'onReady': onPlayerReady\n        'onStateChange': onPlayerStateChange)\n    return\n\n# autoplay video\n\nonPlayerReady = (event) ->\n    event.target.playVideo()\n    return\n\n# when video ends\n\nonPlayerStateChange = (event) ->\n    if event.data == 0\n     alert 'done'\n    return";


}).call(this);