const genBtn = document.querySelector('.gen-btn')
const result = document.querySelector('.result')
const title = document.querySelector('.title')

const randomHex = () => {
    const hex = Math.floor(Math.random() * 16777215).toString(16)
    return `#` + hex
}

const changeDegree = () => {
    const degArr = ['top', 'bottom', 'left', 'right']
    const randomNumber = Math.floor(Math.random() * 4)
    return degArr[randomNumber]
}

const changeBodyColor = () => {
    const hex1 = randomHex(),
        hex2 = randomHex(),
        way = changeDegree()
    document.body.style.backgroundImage = `linear-gradient(to ${way}, ${hex1}, ${hex2})`
    result.innerHTML = `background: linear-gradient(to ${way}, ${hex1}, ${hex2});`
}

genBtn.addEventListener('click', changeBodyColor)

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
wait(0)
    .then(() => {
        title.style.color = '#ccc'
        result.style.color = '#ccc'
        return wait(1000)
    })
    .then(() => {
        title.style.color = '#fff'
        result.style.color = '#fff'
        return wait(1000)
    })
    .then(() => {
        title.style.color = '#ccc'
        result.style.color = '#ccc'
        return wait(1000)
    })
    .then(() => {
        title.style.color = '#000'
        result.style.color = '#000'
        return wait(1000)
    })

setInterval(() => {
    wait(0)
        .then(() => {
            title.style.color = '#ccc'
            result.style.color = '#ccc'
            return wait(1000)
        })
        .then(() => {
            title.style.color = '#fff'
            result.style.color = '#fff'
            return wait(1000)
        })
        .then(() => {
            title.style.color = '#ccc'
            result.style.color = '#ccc'
            return wait(1000)
        })
        .then(() => {
            title.style.color = '#000'
            result.style.color = '#000'
            return wait(1000)
        })
}, 5000)