// Get references to all the forms and submit buttons
const formDev = document.getElementById('formDev');
const submitButton1 = formDev.querySelector('button[type="submit"]');

/// Function to display form data in console
function displayFormData(event) {
    event.preventDefault(); // Prevent form submission and page reload

    if (formDev.checkValidity()) {
        const formData = new FormData(event.target);
        const formDataObject = Object.fromEntries(formData.entries());
        alert('Nice job! Thanks a lot! Create the pull request, please');

        // Add any additional logic or actions here
        // For example, you can use JavaScript to send the form data to the server via AJAX without reloading the page.
    } else {
        // Show custom validation message if form is invalid
        formDev.reportValidity();
    }
}

// Add submit event listener to the form
formDev.addEventListener('submit', displayFormData);

// Enable or disable submit button based on form validity
formDev.addEventListener('change', function () {
    submitButton1.disabled = !formDev.checkValidity();
});

// Get references to all the forms and submit buttons
const formRev = document.getElementById('formRev');
const submitButton2 = formRev.querySelector('button[type="submit"]');

/// Function to display form data in console
function displayFormData(event) {
    event.preventDefault(); // Prevent form submission and page reload

    if (formRev.checkValidity()) {
        const formData = new FormData(event.target);
        const formDataObject = Object.fromEntries(formData.entries());
        alert('Nice job! Thanks a lot! The review is completed!');

        // Add any additional logic or actions here
        // For example, you can use JavaScript to send the form data to the server via AJAX without reloading the page.
    } else {
        // Show custom validation message if form is invalid
        formRev.reportValidity();
    }
}

// Add submit event listener to the form
formRev.addEventListener('submit', displayFormData);

// Enable or disable submit button based on form validity
formRev.addEventListener('change', function () {
    submitButton2.disabled = !formRev.checkValidity();
});