const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let oneEl = document.getElementById("pwd1");
let twoEl = document.getElementById("pwd2");


function start(){
    generate()
}
function generate(){
    let pl = 15;
    let pwdOne = ""
    let pwdTwo = ""
    for(let i=0;i<pl;i++){
        let wrd = Math.floor(Math.random()*characters.length);
        pwdOne+= characters[wrd];
    }
    for(let j=0;j<pl;j++){
        let wrd = Math.floor(Math.random()*characters.length);
        pwdTwo+= characters[wrd];
    }
    oneEl.textContent=pwdOne
    twoEl.textContent=pwdTwo
}

