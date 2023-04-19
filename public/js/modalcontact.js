let mcontactForm = document.querySelector(".mcontact-form");
let mname = document.getElementById("mname");
let memail = document.getElementById("memail");
let msubject = document.getElementById("msubject");
let mmessage = document.getElementById("mmessage");
let msend = document.getElementById("msend-btn");

mcontactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = {
        name: mname.value,
        email: memail.value,
        subject: msubject.value,
        message: mmessage.value
    }
    msend.value = "Sending Message..."
    console.log(formData);
    
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = () => {
        console.log(xhr.responseText);
        if(xhr.responseText == "success") {
            mname.value = "";
            memail.value = "";
            msubject.value = "";
            mmessage.value = "";
            msend.value = "Message Sent Successfully!";
        } else {
            msend.value = "Something Went Wrong!"
        }
    }
    xhr.send(JSON.stringify(formData));
});

