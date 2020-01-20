function borderMaker(size) {
    let divs = document.querySelectorAll('div')
    divs.forEach(div => div.style.border = `${size}px solid`)
}
module.exports.borderMaker = borderMaker