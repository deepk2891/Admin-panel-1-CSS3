$(document).ready(function () {
    $('.profile-avatar').click(function () {
        $('.profile-setting').toggleClass('visible');
        $('.profile-setting').toggle();
    });
    $('.accordion').click(function () {
        $(this).find('i').toggleClass('fa-angle-down fa-angle-right');
        $(this).find('ul').slideToggle();
    });
    $('.toggle-menu').click(function () {
        $(this).find('.menu-icon').toggleClass('active');
    });
    $('.toggle-menu').click(function () {
        $(this).toggleClass('active');
        $('header').toggleClass('move-header');
        $('main').toggleClass('move-main');
        $('aside').toggleClass('move-aside');
    });
    $('.right-bar-control').click(function () {
        $('.right-bar').toggleClass('rightbar-margin-r0');
    });
    $('#DarkShadeButton').click(function () {
        $('#DarkShade').toggleClass('visible');
    });
    $('#DarkModeButton').click(function () {
        $('html').toggleClass('dark-mode');
    });
    function toggleFullscreen (elem) {
        elem = elem || document.documentElement;
        if (
            !document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement
        )
        {
            if (elem.requestFullscreen)
            {
                elem.requestFullscreen();
            } else if (elem.msRequestFullscreen)
            {
                elem.msRequestFullscreen();
            } else if (elem.mozRequestFullScreen)
            {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen)
            {
                elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else
        {
            if (document.exitFullscreen)
            {
                document.exitFullscreen();
            } else if (document.msExitFullscreen)
            {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen)
            {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen)
            {
                document.webkitExitFullscreen();
            }
        }
    }
    document.getElementById("FullScreenButton").addEventListener("click",function () {
        toggleFullscreen();
    });
});