//Given stored username and password and input username and password, Print if the user can login or not.
let reg_mail = "xyz@1234";
let reg_pass = "123456";
let user_mail = 'xyz@1234';
let user_pass = "123456";
if(reg_mail==user_mail){
  if(reg_pass==user_pass){
    console.log("Login Successfull");
  }
}else{
  console.log("Incorrect Login Credentials");
}