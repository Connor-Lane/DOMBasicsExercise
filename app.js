// 1
const xMen = document.getElementById(`x-men`);
console.dir(xMen);

console.log(`===================`);

// 2
const centered = document.getElementsByClassName(`center`)
console.dir(centered);

console.log(`===================`);

// 3
const batman = document.querySelector(`#batman`);
console.dir(batman);

console.log(`===================`);

// 4
const h3s = document.querySelectorAll(`h3`);
console.dir(h3s);

console.log(`===================`);

// 5a
const h1 = document.querySelector(`h1`);
// 5b
h1.innerText = `The Best Animated Superhero TV Shows Ever!`;
console.dir(h1);

console.log(`===================`);

// 6a
const honorableMentions = document.getElementById(`honorable-mentions`);
// 6b
honorableMentions.innerHTML = `<p>OTHER GREAT SHOWS</p>`
console.dir(honorableMentions);

console.log(`===================`);

// 7a
const aTag = document.querySelector(`a`);
// 7b
aTag.href = `https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/`;
console.log(aTag);
console.log(aTag.href);

console.log(`===================`);

// 8
h1.classList.add(`background`, `text-color`);
console.log(h1.classList);

console.log(`===================`);

// 9
h1.classList.remove(`background`);
console.log(h1.classList);

console.log(`===================`);

// 10a
const h4 = document.createElement(`h4`);
// 10b
h4.innerText = `Is Avatar: The Last Airbender A Superhero Show?`;
// 10c
const body = document.querySelector(`body`);
body.prepend(h4);
console.dir(h4);

console.log(`===================`);

// 11a
const h5 = document.createElement(`h5`);
// 11b
h5.innerText = `Heroes in a half shell Turtle Power!`;
// 11c
aTag.insertAdjacentElement(`afterend`, h5);
console.dir(h5);

console.log(`===================`);

// 12
const superman = document.querySelector(`li`);
superman.remove();
console.dir(superman);

console.log(`===================`);

// BONUS
// 13a
const divs = document.querySelectorAll(`div`);
// 13b
for (item of divs) {
    item.classList.toggle(`background`);
}
console.dir(divs);

console.log(`===================`);

// 14a
const avengers = [`Forever`, `Fight`, `As`, `One`, `AVENGERS`, `ASSEMBLE!`];
console.log(avengers);

console.log(`===================`);

// 14b
let span;
for (s of avengers) {
    span = document.createElement(`span`);
    span.innerText = s + ` `;
    body.append(span);
    console.dir(span);
    console.log(span);
}