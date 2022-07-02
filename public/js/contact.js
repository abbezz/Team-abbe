function sendEmail(){
    Email.send({
        SecureToken: "4729bb6d-83dd-45d7-add4-02b04048f47e",
        To : 'abbezz@live.com',
        From : document.getElementById("email").value,
        Subject : "New Contact From Enquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById(email).value
        + "<br> Pnone no: " + document.getElementById(phone).value
        + "<br> Message: " + document.getElementById(message).value
    }).then(
    message => alert("Message Sent Succesfully")
    );
}


<script src=" https://smtpjs.com/v3/smtp.js"></script>
