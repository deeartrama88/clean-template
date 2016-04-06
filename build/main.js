'use strict';

// typing function
function typing(element) {
    var animated_element, fake_el;

    animated_element = '<span class="typing_animate_element"></span>';
    fake_el = '<span class="fake_el" style="display: inline-block;"></span>';
    $(element).wrap('<span class="typing_wrapper"></span>');
    $('.typing_wrapper').append(animated_element);
    $('.typing_wrapper').append(fake_el);

    // make operation for every element in array

    var _loop = function _loop() {
        // get string
        var text = $(element[i]).text().toString();
        // GET LETTERS ARRAY TO FIND OUT EACH WIDTH
        var letter_array = [];
        for (x = 0; x < text.length + 1; x++) {
            c = text.charAt(x);

            letter_array.push(c);
        }

        // GET STEPS ARRAY TO KNOW HOW MUCH TO MOVE IN ANIMATION
        var steps_array = [];
        letter_array.forEach(function (entry) {
            var element = $('.fake_el');
            $(element).html(entry);
            if (entry == 'm' || entry == 'M') {
                steps_array.push($(element).outerWidth() + 5);
            } else if (entry == 'e' || entry == 'E') {
                steps_array.push($(element).outerWidth() + 4);
            } else if (entry == '' || entry == ' ') {
                steps_array.push($(element).outerWidth() + 9);
            } else {
                steps_array.push($(element).outerWidth());
            }
        });

        // animate typing block
        function animate_typing(arr_of_steps, arr_of_elem) {
            var step = 0;
            var long_delay = 0;
            console.log($(element[i]).closest('.typing_animate_element'));
            for (var j = 0; j < arr_of_steps.length; j++) {
                step += arr_of_steps[j];
                var number = step + "px";
                long_delay += 1;

                if (long_delay === 3) {
                    $('.typing_animate_element').delay(100).animate({ left: number }, 10);
                    long_delay = 0;
                } else {
                    $('.typing_animate_element').delay(30).animate({ left: number }, 10);
                }
            };
        }

        animate_typing(steps_array, element);
    };

    for (var i = 0; i < element.length; i++) {
        var x;
        var c;

        _loop();
    }
}

var typing_text = $('.typing_type');
typing(typing_text);