function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "abbezz@live.com",
        Password : "413FDFB0BA8FE424E06906AC7E0F3D5083B3",
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
