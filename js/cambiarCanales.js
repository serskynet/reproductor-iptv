document.addEventListener('DOMContentLoaded', function() {
    // Referencia al campo de entrada y al botón en el HTML
    //var urlInput = document.getElementById('urlInput');
    
    var cambiarCanal0 = document.getElementById('cambiarCanal0');
    var cambiarCanal1 = document.getElementById('cambiarCanal1');
    var cambiarCanal2 = document.getElementById('cambiarCanal2');
    var cambiarCanal3 = document.getElementById('cambiarCanal3');
    var cambiarCanal4 = document.getElementById('cambiarCanal4');
    var cambiarCanal5 = document.getElementById('cambiarCanal5');
    var cambiarCanal6 = document.getElementById('cambiarCanal6');
    var cambiarCanal7 = document.getElementById('cambiarCanal7');
    var cambiarCanal8 = document.getElementById('cambiarCanal8');
    var cambiarCanal9 = document.getElementById('cambiarCanal9');
    var cambiarCanal10 = document.getElementById('cambiarCanal10');
     var cambiarCanal11 = document.getElementById('cambiarCanal11');
     var cambiarCanal12 = document.getElementById('cambiarCanal12');
      var cambiarCanal13 = document.getElementById('cambiarCanal13');

    var canal0 =  'https://hls.tdtcolombiana.com/static/streaming-playlists/hls/0b111256-9c4a-4e63-89ad-78e9ebbc1487/0.m3u8'
    var canal1  = 'https://play.cdn.enetres.net/C99D9A0676F3401589C768D47D31605C021/021/playlist.m3u8'  
    var canal2  = 'https://streaming.rtvc.gov.co/TV_Senal_Colombia_live/smil:live.smil/playlist.m3u8';
    var canal3  = 'https://s1.abntelevision.com/avivamientoabr/stream/avivamientohd/avivamientohd/playlist.m3u8';
    var canal4  = 'https://play.cdn.enetres.net/C99D9A0676F3401589C768D47D31605C022/022/playlist.m3u8';
    var canal5  = 'https://mdstrm.com/live-stream-playlist/629a63ae8df27c082901f78b.m3u8';
    var canal6  = 'https://latv-rcn-xtra-1-mx.tcl.wurl.tv/playlist.m3u8';
    var canal7  = 'https://inforedvos.lcdn.claro.net.co/Content/HLS_HLS_DIR/Live/channel(REDMASHDWEB)/master.m3u8';
    var canal8  = 'https://seo.tv.bo/tv/SEOTV4_HD.m3u8';
    var canal9  = 'https://mdstrm.com/live-stream-playlist/5a5e1c2568b1910913db5fe2.m3u8';
    var canal10 = 'https://play.cdn.enetres.net/C99D9A0676F3401589C768D47D31605C021/021/playlist.m3u8';
    var canal11 = 'https://stmv1.srvif.com/animetv/animetv/chunklist_w1769730028.m3u8';
     var canal12 = 'https://stmv1.srvif.com/retrotv/retrotv/playlist-480p.m3u8';
      var canal13 = 'https://usher.ttvnw.net/api/channel/hls/f1leld026.m3u8?acmb=e30%3D&allow_source=true&browser_family=chrome&browser_version=126.0&cdm=wv&fast_bread=true&os_name=Windows&os_version=NT%2010.0&p=270022&parent_domains=twitchplayer&platform=web&play_session_id=723044703ee78be22b4b0229bb99ed32&player_backend=mediaplayer&player_version=1.30.0-rc.2&playlist_include_framerate=true&reassignments_supported=true&sig=6ba50c7c5136d81702585339ef35a43975ed153f&supported_codecs=av1,h264&token=%7B%22adblock%22%3Afalse%2C%22authorization%22%3A%7B%22forbidden%22%3Afalse%2C%22reason%22%3A%22%22%7D%2C%22blackout_enabled%22%3Afalse%2C%22channel%22%3A%22f1leld026%22%2C%22channel_id%22%3A911072185%2C%22chansub%22%3A%7B%22restricted_bitrates%22%3A%5B%5D%2C%22view_until%22%3A1924905600%7D%2C%22ci_gb%22%3Afalse%2C%22geoblock_reason%22%3A%22%22%2C%22device_id%22%3A%22952c7d0459f27c96%22%2C%22expires%22%3A1720702619%2C%22extended_history_allowed%22%3Afalse%2C%22game%22%3A%22%22%2C%22hide_ads%22%3Afalse%2C%22https_required%22%3Atrue%2C%22mature%22%3Afalse%2C%22partner%22%3Afalse%2C%22platform%22%3A%22web%22%2C%22player_type%22%3A%22embed%22%2C%22private%22%3A%7B%22allowed_to_view%22%3Atrue%7D%2C%22privileged%22%3Afalse%2C%22role%22%3A%22%22%2C%22server_ads%22%3Atrue%2C%22show_ads%22%3Atrue%2C%22subscriber%22%3Afalse%2C%22turbo%22%3Afalse%2C%22user_id%22%3Anull%2C%22user_ip%22%3A%22191.95.135.142%22%2C%22version%22%3A2%7D&transcode_mode=cbr_v1';


    cambiarCanal0.addEventListener('click', function() {

        var cambiar = canal0;

        console.log("canal: ");
        reproductor(cambiar);

    });

    cambiarCanal1.addEventListener('click', function() {

        var cambiar = canal1;

        console.log("canal: ");
        reproductor(cambiar);

    });

    cambiarCanal2.addEventListener('click', function() {

        var cambiar = canal2;

        console.log("canal".cambiar);
        reproductor(cambiar);

    });

    cambiarCanal3.addEventListener('click', function() {

        var cambiar = canal3;

        console.log("canal".cambiar);
        reproductor(cambiar);

    });

    cambiarCanal4.addEventListener('click', function() {

        var cambiar = canal4;

        console.log("canal".cambiar);
        reproductor(cambiar);

    });

    
    cambiarCanal5.addEventListener('click', function() {

        var cambiar = canal5;

        console.log("canal".cambiar);
        reproductor(cambiar);

    });

    cambiarCanal6.addEventListener('click', function() {

        var cambiar = canal6;

        console.log("canal".cambiar);
        reproductor(cambiar);

    });

    cambiarCanal7.addEventListener('click', function() {

        var cambiar = canal7;

        console.log("canal".cambiar);
        reproductor(cambiar);

    });

    cambiarCanal8.addEventListener('click', function() {

        var cambiar = canal8;

        console.log("canal".cambiar);
        reproductor(cambiar);

    });

    cambiarCanal9.addEventListener('click', function() {

        var cambiar = canal9;

        console.log("canal".cambiar);
        reproductor(cambiar);

    });

    cambiarCanal10.addEventListener('click', function() {

        var cambiar = canal10;

        console.log("canal".cambiar);
        reproductor(cambiar);

    });

       cambiarCanal11.addEventListener('click', function() {

        var cambiar = canal11;

        console.log("canal".cambiar);
        reproductor(cambiar);

    });

    cambiarCanal12.addEventListener('click', function() {

        var cambiar = canal12;

        console.log("canal".cambiar);
        reproductor(cambiar);

    });

    cambiarCanal13.addEventListener('click', function() {

        var cambiar = canal13;

        console.log("canal".cambiar);
        reproductor(cambiar);

    });

   
});

