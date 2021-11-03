 class Crypt{



    constructor(){
        this.key = 30;
        this.keys = new Keys();

        this.keys.title = this.encrypt(this.keys.title);
        this.keys.description = this.encrypt(this.keys.description);
        this.keys.question = this.encrypt(this.keys.question);
        this.keys.tick_png = this.encrypt(this.keys.tick_png);
        this.keys.go_to_insta = this.encrypt(this.keys.go_to_insta);
        this.keys.icon = this.encrypt(this.keys.icon);
        this.keys.confirmation_text = this.encrypt(this.keys.confirmation_text);

    }


    setKey(key){
        this.key = key;
    }

    getKeys()
    {
        return this.keys;

    }


     encrypt(message){
        let new_msg =""
        for (var i = 0; i < message.length; i++) {
            new_msg+= String.fromCharCode(message[i].charCodeAt(0) + this.key)
          }
        return new_msg; 
    }


    
     decrypt(message){
        
        let new_msg =""
        for (var i = 0; i < message.length; i++) {
            new_msg += String.fromCharCode(message[i].charCodeAt(0) - this.key-1)
          }
        return new_msg; 
    }


}
