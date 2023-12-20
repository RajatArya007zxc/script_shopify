document.addEventListener('DOMContentLoaded', function () {
    // Find the form element with the specified class
    var formElement = document.querySelector('.product-single__form.uploadkit-form');

    // Check if the form element exists
    if (formElement) {
        // Find the button element with the specified class within the form
        var buttonElement = formElement.querySelector('.btn.button');

        // Check if the button element exists
        if (buttonElement) {
            // Add a click event listener to the button
            buttonElement.addEventListener('click', function () {
                // Get the current URL
                var currentUrl = window.location.href;

                // Extract the variant ID from the URL
                var match = currentUrl.match(/variant=(\d+)/);
                var variantId = match ? match[1] : null;

                // Check if the variant ID is found
                if (variantId) {
                    // Redirect to the specified URL with the variant ID
                    var redirectUrl = 'http://localhost:3000?variant=' + variantId;
                    window.location.href = redirectUrl;
                } else {
                    console.error('Variant ID not found in the URL.');
                }
            });
        }
    }
});
