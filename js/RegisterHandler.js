const registerButton = document.getElementById('registerbtn');

registerButton.addEventListener( 'click',  (e) => {
    e.preventDefault();

    let data = {
        name : document.getElementById('inputName').value,
        email : document.getElementById('inputEmail').value,
        password : document.getElementById('inputPassword').value
    }

    if(checkRegister(data.name, data.email)) {
        const xhr = new XMLHttpRequest();
        const url = 'http://localhost/TharosChat/php/register.php';

        xhr.open('POST', url,true);

        xhr.onreadystatechange = () => {
            if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
                alert('did it');
            }
        }
        let formData = new FormData();
        formData.append('name',data.name);
        formData.append('email',data.email);
        formData.append('password',data.password);

        xhr.send(formData);

        xhr.onload = function() {
            if (xhr.status != 200) {
                alert(`Error ${xhr.status}: ${xhr.statusText}`);
            } else {
                alert(`${xhr.responseText}`);
            }
        };

    }

});


function checkName(name) {
    const nameRegex = /^[a-zA-Z0-9]*$/;

    if (name == null || name=="") {
        alert("Der Name kann nicht leer sein");
    } else {
        if(!nameRegex.test(name)) {
            alert("Der Name kann nur aus Buchstaben und Zahlen bestehen");
            return false;
        }
        return true;
    }
}

function checkEmail(email) {
    const mailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!mailRegex.test(email)) {
        alert("Die Email muss eine gueltige email sein!");
        return false;
    }else{
        return true;
    }
}

function checkPassword() {

}

function checkRegister(name, email) {
    if(checkName(name) && checkEmail(email)) {
        console.log("Check gültig");
        return true;
    } else {
        return false;
    }
}