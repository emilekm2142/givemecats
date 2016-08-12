
    """
player = undefined
tag = document.createElement('script')
tag.src = 'https://www.youtube.com/player_api'
firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore tag, firstScriptTag
onYouTubePlayerAPIReady = ->
    alert 'ready'
    player = new (YT.Player)('player',
    height: '390'
    width: '640'
    videoId: '0Bmhjf0rKe8'
    events:
        'onReady': onPlayerReady
        'onStateChange': onPlayerStateChange)
    return

# autoplay video

onPlayerReady = (event) ->
    event.target.playVideo()
    return

# when video ends

onPlayerStateChange = (event) ->
    if event.data == 0
     alert 'done'
    return
    """