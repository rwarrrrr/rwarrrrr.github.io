$(document).ready(function () {
    "use strict";
    $("#file").on("change", function (e) {
        var files = $(this)[0].files;
        if (files.length >= 2) {
            $(".file_label").text(files.length + " Files Ready To Upload");
        } else {
            var fileName = e.target.value.split("\\").pop();
            $(".file_label").text(fileName);
        }
    });


    // Sliders
    var left = $('#certificate #left');
    var right = $('#certificate #right');
    var slider = $('#certificate .slider');
    // Slider scroll delay in milliseconds
    var sliderDelay = 400;
    // Slider margin when scolling the elements
    var sliderMargin = 300;
    // Image Popup overlay
    var imagePopup = $('#i-love-you');

    // Toggle button visibility first
    toggleButtons();

    // certificate left button press
    left.click(function () {
        var slider = $('#certificate .slider');
        var width = slider.width();

        // Animate the slider container to the left
        slider.animate({
            scrollLeft: '-=' + (width - sliderMargin)
        }, sliderDelay, 'swing', toggleButtons);
    });

    // certificate right button press
    right.click(function () {
        var slider = $('#certificate .slider');
        var width = slider.width();

        // Animate the slider container to the right
        slider.animate({
            scrollLeft: '+=' + (width - sliderMargin)
        }, sliderDelay, 'swing', toggleButtons);
    });


    function toggleButtons() {
        var scrollWidth = slider[0].scrollWidth;
        var scrollLeft = slider.scrollLeft();
        var scrollPosition = parseInt(scrollWidth - scrollLeft);
        var innerWidth = parseInt(slider.innerWidth());

        // Show/Hide the left button
        if (slider.scrollLeft() > 0) {
            left.show();
        } else if (slider.scrollLeft() <= 0) {
            left.hide();
        }

        // Show/hide the right button
        if (scrollPosition > innerWidth) {
            right.show();
        } else if (scrollPosition == innerWidth) {
            right.hide();
        }
    }

});