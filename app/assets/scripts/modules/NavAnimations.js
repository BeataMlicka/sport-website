import $ from 'jquery';

const navigationVersion = function() {
    if ((screen.width < 768) || ($('.site-header').width())) {
        $('.nav').addClass('nav--mobile');
    } else {
        $('.nav').addClass('nav--standard');
    }
}

const mobileMenu = function() {

    let open = false;

    $('.site-header--menu-icon').click(function() {
        if (!open) {
            $('.nav').addClass('nav--open');
            open = true;
            console.log(open);
        } else {
            $('.nav').removeClass('nav--open');
            open = false;
            console.log(open);
        }
    });

    $('.site-header--lang').mouseover(function() {
        $('.site-header--lang--choose').addClass('site-header--lang--choose--show');
    });
    $('.site-header--lang').mouseleave(function() {
        $('.site-header--lang--choose').removeClass('site-header--lang--choose--show');
    });
}



module.exports.mobileMenu = mobileMenu;
module.exports.navigationVersion = navigationVersion;