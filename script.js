function scramble(element, start=0, end=element.innerText.length) {
const str = element.innerText
const letters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"

let result = ""
for (let i = 0; i < str.length; i++) {
    if (i < start || i >= end) {
    result += str.at(i)
    } else {
    result += letters[Math.floor(Math.random() * 38)]
    }
}
return result;
}

const para = document.querySelector("b")

interval = setInterval(() => {
para.innerText = scramble(para)
}, 50);

