jQuery(document).ready(function($) {
    /*
     * Add new post text are
     */
    const addNewPost = $("#add-new-post");
    const addPostInput = $('#add-post');
    addPostInput.focusin(function () {
        addNewPost.addClass('focus-mobile');
        addPostInput.animate({height: "200px"}, 200);
    });
    addPostInput.focusout(function () {
        if (!addPostInput.val()) {
            addNewPost.removeClass('focus-mobile');
            addPostInput.animate({height: "110px"}, 200);
        }
    });

    /**
     * Popup Chat window toggle
     */
    const popupChatWindow = $(".popup-chat__window");
    const popupChatWindowMessages = $('.popup-chat__window__messages');
    const popupChatWindowHeight = popupChatWindow.height();

    if (popupChatWindow.length) {
        popupChatWindow.css('bottom', -popupChatWindowHeight + 41);
        popupChatWindowMessages.scrollTop(popupChatWindowMessages[0].scrollHeight);

        popupChatWindow.children('.card-head').click(function () {
            $(this).parent(popupChatWindow).toggleClass('show-me');
        });

        const chatWindowToggleCloseIcon = $(".close-chat-window");
        chatWindowToggleCloseIcon.click(function (e) {
            e.stopImmediatePropagation();
            $(this).closest(popupChatWindow).remove();
        });
    }
    /*
        chat menu show hide toggle
   */
    let isChatPage = $('body').hasClass('page-chat');

    if (!isChatPage) {
       const chatWindow = $("#chat-window");
       const chatWindowToggle = $("#chat-window-toggle");

       // const chatList = $("#chat-list");
       // console.log(chatWindow.height());
       // intially keep chat window shinkred
       setTimeout(function () {
           chatWindow.css('bottom' , -chatWindow.height() + 45);
       }, 1000);

       function toggleChatWindow() {
           if (chatWindow.hasClass('expanded')) {
               chatWindow.css('bottom' , 0);
           } else {
               chatWindow.css('bottom' , -chatWindow.height() + 45);
           }
       }

       chatWindowToggle.click(function () {
           chatWindow.toggleClass('expanded');
           toggleChatWindow();
       });
    }

   // chat page search bar
    const searchActiveChat = $('#search-active-chat');
    const searchActiveInput = searchActiveChat.children('#chat-search');

    searchActiveChat.click(function () {
        $(this).addClass('expand');
    });

    searchActiveInput.focusout(function () {
        searchActiveChat.removeClass('expand');
        this.value = '';
    });
    // chat page body scroll to latest
    const chatWindow = $("#active-chat");
    const chatWindowMessages = chatWindow.children('.active-chat__body');
    if (chatWindow.length) {
        chatWindowMessages.scrollTop(chatWindowMessages[0].scrollHeight);
    }


   /*
        Mobile navigation sticky trigger
   */
   const header = $(".header");

   $(window).scroll(function () {
       let sTop = $(window).scrollTop();
       if (sTop >= 73) {
           header.addClass('sticky--active');
           $('body').addClass('fixed-header--active');
       } else {
           header.removeClass('sticky--active');
           $('body').removeClass('fixed-header--active');
       }
   });

   // search bar show hide
    const headerSearchBar = $(".header__search");

    $(window).on("resize", function () {
        checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize(){
        let newWindowWidth = $(window).width();
        if (newWindowWidth < 576) {
            let position = $(window).scrollTop();
            // should start at 0
            $(window).scroll(function() {
                let scroll = $(window).scrollTop();
                if (scroll < 75) {
                    headerSearchBar.removeClass('hide-me');
                } else if (scroll > position) {
                    headerSearchBar.removeClass('hide-me');
                } else {
                    headerSearchBar.addClass('hide-me');
                }
                position = scroll;
            });
        }
    }

   /*
    // lightbox image
   */
    const lightbox = $("#imageLightbox");
    const lightboxOverlay = $("#lightboxOverlay");

    function imageLightbox (img) {
        lightbox.children('img').first().attr('src', img);
        lightboxOverlay.addClass('show-me');
        lightbox.addClass('show-me');
    }

    $('.uf__post__image a, .gallery-photo').click(function (e) {
        e.preventDefault();
        let imgAddress = $(this).attr('href');
        // console.log(imgAddress);
        imageLightbox(imgAddress);
    });

    lightboxOverlay.click(function () {
        lightbox.removeClass('show-me');
        lightboxOverlay.removeClass('show-me');
    });

    /*
    *   Header search suggestions trigger
    */
    const searchSuggBox = $("#header__search-suggestion");
    const searchInput = $("#ajax-search-input");

    function showHideSuggBox() {
        if (searchInput.val() === null || searchInput.val() === "") {
            searchInput.removeClass('dropdown-visible');
            searchSuggBox.removeClass('show');
        } else {
            searchInput.addClass('dropdown-visible');
            searchSuggBox.addClass('show');
        }
    }
    searchInput.keyup(function() {
        showHideSuggBox();
    });
    searchInput.focusout(function () {
        searchInput.removeClass('dropdown-visible');
        searchSuggBox.removeClass('show');
    });
    searchInput.focusin(function () {
        showHideSuggBox();
    });

    /*
    *   Notification dorpdowns
    */
    $("#notification-all-seen, #message-all-seen").click(function (e) {
        // e.preventDefault();
        $('.mw-megamenu__line__item').addClass('seen');
    });
    $(document).on('click', '.nav-item--has-dropdown .dropdown-menu', function (e) {
        e.stopPropagation();
    });

    /*
    *  Feed carousel
    */
    if ( $(window).width() < 576 ) {
        const carouselMobile1 = $("#carousel-mobile-1");
        const carouselMobile2 = $("#carousel-mobile-2");
        // const carouselCardsWrappers = userActivityCard.children('.suggested-users-group');

        carouselMobile1.addClass('owl-carousel');
        carouselMobile2.addClass('owl-carousel');

        carouselMobile1.owlCarousel({
            items: 1,
            dots:true,
            margin: 10,
            nav: true,
            center: true,
            navText: [
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175"><path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"/></svg>',
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z"/></svg>'
            ]
        });
        carouselMobile2.owlCarousel({
            items: 1,
            dots:true,
            margin: 10,
            nav: true,
            center: true,
            navText: [
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175"><path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"/></svg>',
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z"/></svg>'
            ]
        });
    }


    $('.user-feed__connect-carousel-wrap').owlCarousel({
        items:2,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            }
        }
    });

}); // jquery document ready