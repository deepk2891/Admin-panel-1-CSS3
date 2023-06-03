$(document).ready(function () {
    $('.profile-avatar').click(function () {
        $('.profile-setting').toggleClass('visible');
        $('.profile-setting').toggle();
    });
    $('.accordion').click(function () {
        $(this).toggleClass('active');
        $(this).find('i').toggleClass('fa-angle-right fa-angle-down');
        $(this).find('ul').slideToggle();
    });
});
