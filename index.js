const username = document.getElementById("Username");
const Email= document.getElementById("Email");
const phone = document.getElementById("Phone");
const Password =document.getElementById("Password");
const ConfirmPassword = document.getElementById("confirmPassword");
const para = document.getElementById("User_error");
const email = document.getElementById("Email_error");
const Phone_e =document.getElementById("Phone_error");
const Password_e = document.getElementById("Password_errror");
const ConfirmPassword_e = document.getElementById("ConfPassword_error");

const genderMale = document.getElementById("gender_Male");
const genderFemale = document.getElementById("gender_Female");
const Genderpara = document.getElementById("Gender_para");



let Check_Username = false;
let Check_Email = false;
let Check_Phone = false;
let Check_Password = false;
let Check_ConfPassword = false;
let Check_gender=false;

function checkUsername(){
  if(username.value.length===0){
    para.innerHTML="Enter the username";
    username.style.border = "1px solid red";
  }
  else{
    Check_Username = true;
    para.innerHTML="";
  }
}

function checkEmail(){
    if(Email.value.length === 0){
      email.innerHTML= "Enter the Email";
      Email.style.border = "1px solid red";
    }
    else{
      
      Check_Email=  true;
      email.innerHTML="";
      Email.style.border = "1px solid black";
    }
}

function checkPhone(){
    if(phone.value.length === 0){
      Phone_e.innerHTML= "Enter the PhoneNo";
      phone.style.border = "1px solid red";
    }
    else{
      let c=0;
      if(phone.value.length===10){
        for(let i=0;i<phone.value.length;i++){
          if(phone.value[i]>=0 && phone.value[i]<=9){
            c+=1;
          }
        }
        if(c==phone.value.length){
          Check_Phone= true;
          Phone_e.innerHTML="";
          phone.style.border = "1px solid black";
        }
        else{
          Phone_e.innerHTML= "Please Enter Numbers Only";
          phone.style.border = "1px solid red";
        }

      }
      else{
        Phone_e.innerHTML= "Enter a 10digit PhoneNumber";
        phone.style.border = "1px solid red";
      }

    }
}

function checkPassword(){
    if(Password.value.length === 0){
      Password_e.innerHTML= "Enter the Password";
      Password.style.border = "1px solid red";

    }
    else{

      const numbers = "0123456789"
      const lower_case = "abcdefghijklmnopqrstuvwxyz"
      const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      const special_characters = "!@#$%^&*()-+"
      let c_ele = 0;
      let s_ele = 0;
      let d_ele = 0;
      let sp_ele = 0;
      const pass = Password.value;
      for(let i=0;i<pass.length;i++){
        if(upper_case.indexOf(pass[i])>-1){
          c_ele+=1;
        }
        else if(lower_case.indexOf(pass[i])>-1){
          s_ele+=1;
        }
        else if(numbers.indexOf(pass[i])>-1){
          d_ele+=1;
        }
        else{
          sp_ele+=1
        }
      }
      if(pass.length>=8){
        if(c_ele>0 && s_ele>0 && d_ele>0 && sp_ele>0){
          Check_Password=true;
          Password_e.innerHTML= "";
          Password.style.border = "1px solid black";
        }
        else {
          Password_e.innerHTML= "Password must Contain a Upper,Lower,Symbol,Number";
          Password.style.border = "1px solid red";
        }
      }
      else{
        Password_e.innerHTML= "Password must Contain a Upper,Lower,Symbol,Number";
        Password.style.border = "1px solid red";
      }
    }
}

function checkConfPassword(){
    if(ConfirmPassword.value.length === 0){
      ConfirmPassword_e.innerHTML= "Renter the password";
      ConfirmPassword.style.border = "1px solid red";
    }
    else{

      if(Password.value === ConfirmPassword.value){
        Check_ConfPassword=true;
        ConfirmPassword_e.innerHTML= "";
        ConfirmPassword.style.border = "1px solid black";
      }
      else{
        ConfirmPassword_e.innerHTML= "Renter the Correct Password";
        ConfirmPassword.style.border = "1px solid red";
      }
    }
}

function checked(){
  if(genderMale.checked || genderFemale.checked){
    Check_gender=true;
    document.getElementById("Gender_para").innerHTML="";
  }
  else{
    // console.log(genderMale);
    document.getElementById("Gender_para").innerHTML="Check a button";
    document.getElementById("Gender_para").style.color="red";
  }
}

function register(){
  checkUsername();
  checkEmail();
  checkPhone();
  checkPassword();
  checkConfPassword();
  checked();
  if(Check_Username===true && Check_Email===true && Check_Phone===true && Check_Password===true && Check_ConfPassword===true && Check_gender===true){
    alert("You have Sucessfully registered");
    username.value="";
    Email.value="";
    phone.value="";
    Password.value="";
    ConfirmPassword.value="";
    Check_Email=false;
    Check_Username=false;
    Check_Phone=false;
    Check_Password=false;
    Check_ConfPassword=false;
    Check_gender=false;
    genderMale.checked=false;
    genderFemale.checked=false;
  }
  else{
    if(Check_Username===true){
      para.innerHTML="";
      username.style.border = "1px solid black";
      Check_Username=false;
    }
    if(Check_Email===true){
      email.innerHTML="";
      Email.style.border = "1px solid black";
      Check_Email=false;
    }
    if(Check_Phone===true){
      Phone_e.innerHTML="";
      phone.style.border = "1px solid black";
      Check_Phone = false;
    }
    if(Check_Password===true){
      Password_e.innerHTML="";
      Password.style.border= "1px solid black";
      Check_Password = false;
    }
    if(Check_ConfPassword===true){
      ConfirmPassword_e.innerHTML="";
      ConfirmPassword.style.border="1px solid black";
      Check_ConfPassword= false;
    }
    if(Check_gender===true){
      Genderpara.innerHTML="";
      Check_gender=false;
    }
  }
}
