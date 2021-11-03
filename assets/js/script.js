
function getUsername(){

    let url_string = window.location.href;
    let url = new URL(url_string);
    let username =  url.searchParams.get("username");

    return username;
}




async function getProfilePicture(username){

    let url = `https://pp-getter.herokuapp.com?username=${username}`;
    let profileImg 

    await $.get( url, function( data ) {
        profileImg = data.img_url
      }, "json" );

      return  profileImg
}


function setProfilePicture(url){

    document.getElementById("user-avatar").setAttribute('src',url)

}

function setUsername(username){
    document.getElementById("user-username").innerHTML="@"+username;
}


function msg_encode(message){


}

function msg_decode(message){


}


function displayPanel(){
    let panel =document.getElementById("main-panel")
    let spinner = document.getElementById("loading-spinner")
    
    panel.classList.remove("d-none")
    panel.classList.add("d-block")
    spinner.classList.remove("d-block")
    spinner.classList.add("d-none")
}




var username = getUsername()

var profileImgUrl




getProfilePicture(username).then(response=>
  profileImgUrl = response
).then(()=>{

    setUsername(username)
    
    
    $(document).ready(()=>{

        let username = getUsername();
    
        let imgUrl;

        localStorage.setItem("profile_img",profileImgUrl)
        localStorage.setItem("profile_uname",username)
        localStorage.setItem("username",username)
        setProfilePicture(profileImgUrl)
        displayPanel()
    })
    $("#butonamca").on("click",()=>{
        let username = getUsername()
        window.location.href="verified.html?username="+username;
        })

})









