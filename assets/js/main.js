$(document).ready(function () {
    $('.profile-avatar').click(function () {
        $('.profile-setting').toggleClass('visible');
        $('.profile-setting').toggle();
    });
    $('.accordion').click(function () {
        $(this).toggleClass('active');
        $(this).find('i').toggleClass('fa-angle-down fa-angle-right');
        $(this).find('ul').slideToggle();
    });
    $('.toggle-menu').click(function () {
        $(this).find('.menu-icon').toggleClass('active');
    });
    $('.toggle-menu').click(function () {
        $(this).toggleClass('active');
        $('header').toggleClass('move-header');
        $('aside').toggleClass('move-aside');
    });
    $('.right-bar-control').click(function () {
        $('.right-bar').toggleClass('rightbar-margin-r0');
    });
});