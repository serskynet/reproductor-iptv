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
      var canal13 = 'https://jactvpro.xyz/auth/10300.m3u8?token=FDq4e0T01ywUvVNQsMSTRIDInkJKaZLFFXWuO3ByFnqoR9B0FniHWHIMQPQigc5ui85MtRdxlate4LLHD6AkZLFzaiFUMMixXqMZVupfNmqtwjC6G2qfDai_qAwwrhbXD2eBPFNIlus5aHntFiQMvb_S64mOINDCBbG3G1eGVxRJCkrS8Rh442HiVXiED-T3lc0tvj-wi3pMepwnnOcg24_heBqB9KGMrZST3ALTsdVk9OTn0SvIeQrbe4yGoQ8Obdpy3zMd12zqBRZVtO-qXV9sgpk9n4dO47_xOyZlsdSVOey5Yn8RL1ydaqnoWOeQ-xK1NYinsNjOF22XWAVgeT2-fLxnl1gf6Oeaq7z_RyPxK5jj4O35d2IYCeqLhmjSW6YM3LTAk6NM-_BGJHZGgF6c1JsgjtZEps5OpjCQTZ2U7Yuvs3p8OREziWQG9g1vTkd6GQ6uz55DMVEyY9WeC44oYakITV6zETNd2z2Zn9HYKsMDVr_rifsNA9SxQSFIOhOsO2YOqGFGARB0UPM4lZTh9o_3Rm84_geoOzJxYreVzPpNBMQhYK7xF_ixooXfEDZZLAxaWl1-UhFvgmZt9LL58j-59cFqJor-aGmuV6V-tP4Pr7vcsb4IS0ncBtBM';


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

