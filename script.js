document.addEventListener('DOMContentLoaded', function () {
    // Find the form element with the specified class
    var formElement = document.querySelector('.product-single__form.uploadkit-form');
  console.log("Running and get form ELEMENT",formElement)
    // Check if the form element exists
    if (formElement) {
        console.log(" get form ELEMENT 🆎",formElement)
        // Create a new button element
        var newButton = document.createElement('button');
        newButton.id = 'custom_designButton';
        newButton.style.backgroundColor = '#fad71e';
        newButton.style.color = 'black';
        newButton.style.padding = '10px 30px';
        newButton.style.fontSize = '18px';
        newButton.style.fontWeight = '700';
        newButton.textContent = 'Create design';

        // Replace the form element with the new button
        formElement.parentNode.replaceChild(newButton, formElement);

        // Add a click event listener to the new button
        newButton.addEventListener('click', function () {
            console.log("action on new button",newButton)
            // Get the current URL
            var currentUrl = window.location.href;

            // Extract the variant ID from the URL
            var match = currentUrl.match(/variant=(\d+)/);
            var variantId = match ? match[1] : null;
            console.log("current URL ",currentUrl)
            // Check if the variant ID is found
            if (variantId) {
                // Redirect to the specified URL with the variant ID
                var redirectUrl = 'http://localhost:3000?variant=' + variantId ;
                window.location.href = redirectUrl;
            } else {
                console.error('Variant ID not found in the URL.');
            }
        });
    }
});
