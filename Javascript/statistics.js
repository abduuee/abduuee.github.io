$(document).ready(function() {

    $('.counter').each(function () {
        // To set the initial counter value to 0 using the 'counter' property
        $(this).prop('Counter', 0).animate({
            // To animate the counter value from 0 to the target value
            Counter: $(this).text()
        }, {
            // Set the duration of the animation to 4 seconds
            duration: 4000,
            // Use the 'swing' function for a smooth animation
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    }); 

});
