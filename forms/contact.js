function sendmail(){
    let params={
        mail:document.getElementById("email").value,
        from_name:document.getElementById("name").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,   
    }

    emailjs.send("service_0wycmjq","template_70vh4dq",params).then(alert("Email Sent!!..."))
}