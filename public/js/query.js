let qcontactForm = document.querySelector(".qcontact-form");
let qname = document.getElementById("qname");
let qemail = document.getElementById("qemail");
let qsubject = document.getElementById("qsubject");
let qmessage = document.getElementById("qmessage");
let qsend = document.getElementById("qsend-btn");

qcontactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = {
        name: qname.value,
        email: qemail.value,
        subject: qsubject.value,
        message: qmessage.value
    }
    qsend.value = "Sending Message..."
    console.log(formData);
    
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = () => {
        console.log(xhr.responseText);
        if(xhr.responseText == "success") {
            qname.value = "";
            qemail.value = "";
            qsubject.value = "";
            qmessage.value = "";
            qsend.value = "Message Sent Successfully!";
        } else {
            qsend.value = "Something Went Wrong!"
        }
    }
    xhr.send(JSON.stringify(formData));
});

