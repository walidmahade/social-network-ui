jQuery(document).ready(function($) {
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
            popupChatWindow.toggleClass('show-me');
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

   /*
    // lightbox
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
            searchSuggBox.removeClass('show');
        } else {
            searchSuggBox.addClass('show');
        }
    }
    searchInput.keyup(function() {
        showHideSuggBox();
    });
    searchInput.focusout(function () {
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
    $('.user-feed__connect-carousel-wrap').owlCarousel({
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
    })

});