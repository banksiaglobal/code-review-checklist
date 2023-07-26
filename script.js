const messages = {
    dev: 'Nice job! Thanks a lot! Create the pull request, please',
    rev: 'Nice job! Thanks a lot! The review is completed!'
}

// Get references to all the forms and submit buttons
const formRev = document.getElementById('formRev');
const submitButtonRev = formRev.querySelector('.formRev-btn');

// Function to handle reviewer's form data
function displayRevFormData(event) {
    event.preventDefault(); // Prevent form submission and page reload

    if (formRev.checkValidity()) {
        const formData = new FormData(event.target);
        alert(messages.rev);
    } else {
        // Show custom validation message if form is invalid
        alert('Please finish review');
    }
}

// Add submit event listener to the reviewer's form
formRev.addEventListener('submit', displayRevFormData);

// Enable or disable submit button based on form validity
formRev.addEventListener('change', function () {
    submitButtonRev.disabled = !formRev.checkValidity();
});

const formDev = document.getElementById('formDev');
const submitButtonDev = formDev.querySelector('.formDev-btn');

// Function to handle developer's form data
function displayDevFormData(event) {
    event.preventDefault(); // Prevent form submission and page reload

    if (formDev.checkValidity()) {
        const formData = new FormData(event.target);
        alert(messages.dev);
    } else {
        // Show custom validation message if form is invalid
        alert('Please finish review');
    }
}

// Add submit event listener to the developer's form
formDev.addEventListener('submit', displayDevFormData);

// Enable or disable submit button based on form validity
formDev.addEventListener('change', function () {
    submitButtonDev.disabled = !formDev.checkValidity();
});
