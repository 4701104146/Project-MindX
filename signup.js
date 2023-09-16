let apiUser = "http://localhost:3000/user";
const username = document.querySelector("#exampleFormControlInput1");
const password = document.querySelector("#exampleFormControlInput2");
const repassword = document.querySelector("#exampleFormControlInput3");
const bntSignup = document.querySelector(".signup-btn");
// signup
bntSignup.addEventListener("click", (e) => {
    //   e.preventDefault();
    if (username.value == "" || password.value == "") {
        alert("Please enter your username and password");
        return;
    }
    else if (repassword.value != password.value) {
        alert("Your password and re-type password are not similar");
        return;
    } else {
        const user = {
            username: username.value,
            password: password.value,
        };
        fetch(apiUser, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),

        })
            .then((res) => res.json())
            .then((data) => console.log(data))

        if (fetch) {
            alert("Successful!")
            window.location.href = "MakeUpArtist.html";
        }
    }
});
