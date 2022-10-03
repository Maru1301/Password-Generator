const characters = ["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-",
"+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let password1 = document.getElementById("pass1")
let password2 = document.getElementById("pass2")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")
let NumberofChar = 15
let Numberon = true
let Symbolon = true
let copyText = ""

function generate() {
    password1.textContent = ""
    password2.textContent = ""
    for(let i = 0; i < NumberofChar; i++) {
        password1.textContent += characters[Math.floor(Math.random() * characters.length)]
        password2.textContent += characters[Math.floor(Math.random() * characters.length)]
    }
}

function changeNumberOfChar(num) {
    NumberofChar = num
}

function numberSwitch() {
    if(Numberon){
        numbers.classList.remove("on")
        numbers.classList.add("off")
        numbers.textContent = "numbers(off)"
        if(characters[52] == 0) {
            characters.splice(52, 10)
        } else {
            characters.splice(81, 10)
        }
        Numberon = false
        console.log(characters)
    } else {
        numbers.classList.remove("off")
        numbers.classList.add("on")
        numbers.textContent = "numbers(on)"
        characters.splice(52, 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
        Numberon = true
        console.log(characters)
    }
}

function symbolsSwitch() {
    if(Symbolon){
        symbols.classList.remove("on")
        symbols.classList.add("off")
        symbols.textContent = "symbols(off)"
        if(characters[62] === "~") {
            characters.splice(62,29)
        } else {
            characters.splice(52,29)
        }
        Symbolon = false
        console.log(characters)
    } else {
        symbols.classList.remove("off")
        symbols.classList.add("on")
        symbols.textContent = "symbols(on)"
        characters.splice(52, 0, "~","`","!","@","#","$","%","^","&","*","(",")","_","-",
        "+","=","{","[","}","]",",","|",":",";","<",">",".","?","/")
        Symbolon = true
        console.log(characters)
    }
}

function copy(num) {
    if(num === 1) {
        copytext = password1
        navigator.clipboard.writeText(copytext.textContent)
    } else {
        copytext = password2
        navigator.clipboard.writeText(copytext.textContent)
    }
    alert("Password copied")
}
