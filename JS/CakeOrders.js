document.querySelector(".cake-order-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    // Convert FormData to URL-encoded string
    const params = new URLSearchParams();
    for (const pair of formData) {
        params.append(pair[0], pair[1]);
    }

    const googleScriptURL =  "https://docs-link-here.com";;

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
