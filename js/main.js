$(document).ready(function(){
    $('.arrow').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        } else {
            currentImg.removeClass('active').css('z-index', -10);
            $('.slider-images img:first').addClass('active').css('z-index', 10);
        }
    });
});

$(document).ready(function(){
    $('.arrow').on('click', function(){
        var currentdot = $('.active1');
        var nextdot = currentdot.next();

        if(nextdot.length){
            currentdot.removeClass('active1').css('opacity', 1);
            nextdot.addClass('active1').css('opacity', 0.5);
        } else {
            currentdot.removeClass('active1').css('opacity', 1);
            $('.slider-dots img:first').addClass('active1').css('opacity', 0.5);
        }
    });
});

// $(document).ready(function(){
//     $('.arrow').on('click', function(){
//         // Image slider
//         var currentImg = $('.active');
//         var nextImg = currentImg.next();

//         // Check if there is a next image
//         if(nextImg.length){
//             // If there is a next image, switch to it
//             currentImg.removeClass('active').css('z-index', -10);
//             nextImg.addClass('active').css('z-index', 10);
//         } else {
//             // If there is no next image, loop back to the first image
//             currentImg.removeClass('active').css('z-index', -10);
//             $('.slider-images img:first').addClass('active').css('z-index', 10);
//         }

//         // Slider dots
//         var currentDot = $('.active1');
//         var nextDot = currentDot.next();

//         // Check if there is a next dot
//         if(nextDot.length){
//             // If there is a next dot, switch to it
//             currentDot.removeClass('active1').css('opacity', 1);
//             nextDot.addClass('active1').css('opacity', 0.2);
//         } else {
//             // If there is no next dot, loop back to the first dot
//             currentDot.removeClass('active1').css('opacity', 1);
//             $('.slider-dots img:first').addClass('active1').css('opacity', 0.2);
//         }
//     });
// });

// else {
//     // If there is no previous image, loop to the last image
//     currentImg.removeClass('active').css('z-index', -10);
//     $('.carousel-images img1').addClass('active').css('z-index', 10);
// }

// $(document).ready(function(){
//     $('.arrow').on('.click', function(){
//         $('.active').animate({left: '250px'});
//     })
// })


// $(".arrow").click(function(){
//     var div = $(".active");
//     div.animate({height: '300px', opacity: '0.4'}, "slow");
//     div.animate({width: '300px', opacity: '0.8'}, "slow");
//     div.animate({height: '100px', opacity: '0.4'}, "slow");
//     div.animate({width: '100px', opacity: '0.8'}, "slow");
//   }); 