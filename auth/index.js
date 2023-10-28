let token = "";
let id = "";
let role ="";
let signUpPage = document.querySelector(".signUpPage");
let loginPage = document.querySelector(".loginPage");

function changeSignUp(isSignUp) {
  isSignUp == true
    ? signUpPage.classList.remove("isNotOnPage")
    : signUpPage.classList.add("isNotOnPage");
  isSignUp == true
    ? loginPage.classList.add("isNotOnPage")
    : loginPage.classList.remove("isNotOnPage");
}

const account = document.querySelector(".account");
const password = document.querySelector(".password");

function signUp() {
  if (account.value == "" || password.value == "") {
    alert("請填入正確資訊");
  }
  let obj = {};
  obj.email = account.value;
  obj.password = password.value;
  obj.role = "notAdmin";
  if (obj.email == "1admin1@mail.com" && obj.password == "1234") {
    obj.role = "admin";
    axios
      .post("https://try-json-auth2.onrender.com/signup", obj)
      .then(function (response) {
        console.log(response.data);
        alert("恭喜帳號註冊成功");
        account.value = "";
        password.value = "";
      })
      .catch(function (error) {
        alert(error.response.data);
        alert("帳號註冊失敗，有可能有人使用你的帳號");
      });
  } else {
    axios
      .post("https://try-json-auth2.onrender.com/signup", obj)
      .then(function (response) {
        console.log(response.data);
        alert("恭喜帳號註冊成功");
        account.value = "";
        password.value = "";
      })
      .catch(function (error) {
        alert(error.response.data);
        alert("帳號註冊失敗，有可能有人使用你的帳號");
      });
  }
}
const userEmail = document.querySelector(".userEmail");
const userPassword = document.querySelector(".userPassword");

function login() {
  if (userEmail.value == "" || userPassword.value == "") {
    alert("請填入正確資訊");
  }
  let obj = {};
  obj.email = userEmail.value;
  obj.password = userPassword.value;
  axios
    .post("https://try-json-auth2.onrender.com/login", obj)
    .then(function (response) {
      console.log(response.data);
      //token可以拿去做修改
      token = JSON.stringify(response.data.accessToken);
      id = JSON.stringify(response.data.user.id);
      role = JSON.stringify(response.data.user.role);
      localStorage.setItem("userTestToken", token);
      localStorage.setItem("userTestId", id);
      localStorage.setItem("userTestRole", role);
      console.log(token);
      console.log(id);
      alert("登入成功");
      if(obj.email == "1admin1@mail.com" && obj.password == "1234"){
        window.location.href = "https://try-json-auth2.onrender.combackendList.html";
      }else{
        window.location.href = "https://try-json-auth2.onrender.comlist.html";
      }
      let getDataToken = localStorage.getItem("userTestToken");
      let getDataId = localStorage.getItem("userTestId");
      let getDataAry = {};
      getDataAry.token = JSON.parse(getDataToken);
      getDataAry.id = JSON.parse(getDataId);
      console.log(getDataAry);
    })
    .catch(function (error) {
      let errorMsg = error;
      alert("登入失敗");
    });
}
// 登出
function logOut() {
  alert("已登出!");
  localStorage.clear();
  location.href = "index.html";
}

