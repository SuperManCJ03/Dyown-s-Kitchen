document.querySelector(".contact-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    // Convert FormData to URL-encoded string
    const params = new URLSearchParams();
    for (const pair of formData) {
        params.append(pair[0], pair[1]);
    }

    const googleScriptURL = "https://script.google.com/macros/s/AKfycbz8ZLV4Y_PQl-AcSbQ-9J4qcp4RzOZLu52hea0mkwUGXxedcC5r3JBVVNfsebF0HRQcVg/exec";

    try {
        const response = await fetch(googleScriptURL, {
            method: "POST",
            body: params,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        if (response.ok) {
            alert("Form submitted successfully!");
            form.reset(); // Clear form after submission
        } else {
            alert("Submission failed. Please try again.");
        }
    } catch (error) {
        alert("Error submitting form.");
        console.error(error);
    }
});
