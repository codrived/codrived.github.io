function setKey(){

    let url_string = window.location.href;
    let url = new URL(url_string);
    let key =  url.searchParams.get("key");

    if(key===undefined || key==='undefined'||key==null ){
        localStorage.setItem("key",13)
    }else{
        localStorage.setItem("key",key)
    }
    
}



function getKey(){
    return localStorage.getItem("key")
}
