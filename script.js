const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item,idx)=>{
    item.addEventListener('click',()=>{
        hideAllContents()
        hideAllitems()
        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})
function hideAllContents(){
contents.forEach(item=>{
    item.classList.remove('show')
})
}

function hideAllitems(){
    listItems.forEach(item=>{
        item.classList.remove('active')
    })
    }