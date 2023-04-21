let teslaImage = $('.tesla__img')
let colorButtonsArr = $('.tesla__color')
let teslaLink = "https://mc-astro.github.io/tesla-roadster-colors/img/" //add .jpg
let teslaColorName = $('.tesla__colors--name')
$.ajax({
    url: 'https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json',
    method: "GET",
    dataType: "JSON",
    success: res =>{
        renderColors(res)
    }, 
    error: err => {
        console.log(err)
    } 
})


function renderColors(data){
    colorButtonsArr.each((i, el) => {
        $(el).css(`background-color`, `${data[i].color}`)
        $(el).on('click', () => {
            teslaImage[0].src = `${teslaLink}${data[i].img}.jpg`
            teslaColorName[0].innerText = `${data[i].title}`
        })
    })
}