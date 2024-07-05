
document.addEventListener('DOMContentLoaded', function() {
    var player = videojs('myVideo');
    player.src({
      src: 'http://stream.flynetwifi.com:1935/live/mobile-062/playlist.m3u8', // Aquí debes colocar la URL de tu stream HLS
      type: 'application/x-mpegURL'
    });
  });