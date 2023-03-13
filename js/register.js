var states = ["error", "success"],
  curState = 0;
var firstname, lastname, email, password, password_r;
var error_box = document.querySelector("#error-box");
$(".dsButtonAnim").on("click", function () {
  firstname = document.querySelector("#firstname").value;
  lastname = document.querySelector("#lastname").value;
  email = document.querySelector("#email-box").value;
  password = document.querySelector("#password").value;
  password_r = document.querySelector("#password-r").value;
  if (firstname == "") {
    error_box.innerHTML = "لطفا نام خود را وارد نمایید";
  } else if (lastname == "") {
    error_box.innerHTML = "لطفا نام خانوادگی خود را وارد نمایید";
  } else if (email == "") {
    error_box.innerHTML = "لطفا ایمیل خود را وارد نمایید";
  } else if (password == "") {
    error_box.innerHTML = "لطفا گذرواژه خود را وارد نمایید";
  } else if (password_r == "") {
    error_box.innerHTML = "لطفا تکرار گذرواژه تان را نیز وارد کنید";
  } else if (password != password_r) {
    error_box.innerHTML = "پسورد و تکرار پسورد یکسان نیستند";
  } else {
    error_box.innerHTML='';
    $('input[type=text], input[type=password], input[type=email]').val('');
    curState ? (curState = 0) : (curState = 1);

    that = $(this);

    if (that.hasClass("success")) {
      that.removeClass("success");
    } else if (that.hasClass("error")) {
      that.removeClass("error");
    } else {
      that.addClass("loading");

      window.setTimeout(function () {
        that.removeClass("loading").addClass(states[curState]);
      }, 4000);
    }
    // set time out to show JSON result
    setTimeout(function(){
        let user = {
            userFn: firstname,
            userLn: lastname,
            userEmail: email,
            userPassword: password,
          }
          let result = document.querySelector("#form-result");
          let json ='The JSON Result is : \n'+JSON.stringify(user);
          Toastify({
            text: json,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            gravity: "top",
            position: "center", 
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){}
          }).showToast();
    },4200)
  }
});
