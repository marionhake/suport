(function() {
    emailjs.init("YOUR_EMAILJS_USER_ID");
})();

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const error_code = document.getElementById("error_code").value;
    const proposal = document.getElementById("proposal").value;

    if (!name || !email || !error_code || !proposal) {
        alert("Please fill in all fields.");
        return;
    }

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        name: name,
        email: email,
        error_code: error_code,
        proposal: proposal
    })
    .then((response) => {
        document.getElementById("statusMessage").textContent = "Report sent successfully!";
    }, (error) => {
        document.getElementById("statusMessage").textContent = "Error sending report. Please try again.";
        console.error("Error:", error);
    });
}
