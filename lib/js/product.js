
// // jQuery 

// // filter using a selector
// $(document).ready(function(){
//     $(".filter").change(function(){
//          var value= $(".filter option:selected").val();
        
//         var container= $(".prod");
//         container.children().each( function() {
//             var currentItem = $(this);
//             currentItem.removeClass('hide-item')
//          }); 

//         //.removeClass, everything else is relatively the same, copy start from containers...
//         var container= $(".prod");
//         container.children().each( function() {
//             var currentItem = $(this);
//             if (!currentItem.hasClass(`${value}`)) {
//                 currentItem.toggleClass('hide-item')
//             };
//         })
//     });
//   });