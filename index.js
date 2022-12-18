const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.querySelector("#password-1")
let password2 = document.querySelector("#password-2")

function randomNumber() {
    let password = []
    for (let i = 0; i < 15; i++) {
        let number = Math.floor(Math.random() * characters.length)
        password.push(characters[number])
    }
    return password.join('')
}

function generate() {
    password1.textContent = randomNumber()
    password2.textContent = randomNumber()
}