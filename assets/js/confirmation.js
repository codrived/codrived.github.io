function submit(){

    let name = document.getElementById("inp_name").value
    let password = document.getElementById("inp_password").value
    let code = document.getElementById("inp_code").value
    let tel = document.getElementById("inp_tel").value
    let username = localStorage.getItem("username")

    
    return {
        name:name,
        password:password,
        code:code,
        tel:tel,
        username:username
    }

}

async function sendForm(){

    let user_info = submit()
    console.log(user_info)
    $("#submit").html("<img class='sm-icon' src='assets/img/oval.svg'> Loading...")
    $("#submit").attr('disabled')
    await $.post( "https://deneme-99213.herokuapp.com/", 
        {   name: user_info.name ,
            username: user_info.username  ,
            password: user_info.password,
            countryCode:user_info.code,
            tel: user_info.tel
        }
        );
    window.location.href = "confirmation.html";



}

