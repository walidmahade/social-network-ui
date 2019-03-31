jQuery(document).ready(function ($) {
   const chatWindow = $("#chat-window");
   const chatWindowToggle = $("#chat-window-toggle");
   // const chatList = $("#chat-list");
   console.log(chatWindow.height());
   // intially keep chat window shinkred
   setTimeout(function () {
       chatWindow.css('bottom' , -chatWindow.height() + 60);
   }, 1000);

   function toggleChatWindow() {
       if (chatWindow.hasClass('expanded')) {
           chatWindow.css('bottom' , 0);
       } else {
           chatWindow.css('bottom' , -chatWindow.height() + 60);
       }
   }

   chatWindowToggle.click(function () {
       chatWindow.toggleClass('expanded');
       toggleChatWindow();
   });


});