
function decode(){

    let crypt = new Crypt()

    crypt.setKey(30)
    let title = crypt.decode(crypt.getKeys().title)

    alert(title)
}