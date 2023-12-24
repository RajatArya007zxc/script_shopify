function extractTextFromUrl(url) {
    // Check if the URL contains the "variant" parameter
    const variantMatch = url.match(/variant=([^&]+)/);
    if (variantMatch) {
        return { text: variantMatch[1], type: 'variant' }; // Return the text after "variant="
    }
  
    // If "variant" parameter is not present, check for "product/"
    const productMatch = url.match(/\/products\/([^\/]+)/);
    if (productMatch) {
        return { text: productMatch[1], type: 'product' }; // Return the text after "product/"
    }
  
    // Return null if no match is found
    return null;
  }



document.addEventListener('DOMContentLoaded', function () {


    let product_page = window.location.href;
    if (product_page.includes("products/")) {
                    const domain = window.location.origin;
                    let customer_id = "";
                    let source =domain.split('/')[2].split('.')[0];
                    let allScript = document.getElementsByTagName("script");

                    // if (allScript.length > 0) {
                    // for (let i = 0; i < allScript.length; i++) {
                    //     if (
                    //     allScript[i].outerHTML.includes(`http://local/onsitescript.js?customer_id=`)
                    //     ) {
                    //     let checkId = allScript[i].outerHTML.split("customer_id=");
                    //     if (checkId.length == 2) {
                    //         customer_id = checkId[1].slice(0, 20);
                    //         break;
                    //     }
                    //     }
                    // }
                    // }




        // Find the form element with the specified class
        var formElement = document.querySelector('.product-form__buttons');

        // Check if the form element exists
        if (formElement) {
    
            // Create a new button element
            var newButton = document.createElement('button');
            newButton.id = 'custom_designButton';
            newButton.style.backgroundColor = '#fad71e';
            newButton.style.color = 'black';
            newButton.style.padding = '10px 30px';
            newButton.style.fontSize = '18px';
            newButton.style.fontWeight = '700';
            newButton.style.marginTop="40px";
            newButton.textContent = 'Create design';
    
            // Append the new button to the end of the form
            formElement.appendChild(newButton);
    
            // Add a click event listener to the new button
            newButton.addEventListener('click', function () {
                console.log("action on new button", newButton)
    
                // Get the current URL
                var currentUrl = window.location.href;
                let extractText=extractTextFromUrl(currentUrl);

                if(extractText!==null){

                    

                     if(extractText.type=="variant"){
                        var redirectUrl = 'http://localhost:3000/variant/' + extractText.text + "/src/" + source + "/customer_id/"+ "123";
                        window.location.href = redirectUrl;
                     }
                     if(extractText.type=="product"){
                        var redirectUrl = 'http://localhost:3000/product/' + extractText.text + "/src/" + source + "/customer_id/"+ "123";
                        window.location.href = redirectUrl;
 
                     }
             //test
                } 
            });
        }

    }


});

