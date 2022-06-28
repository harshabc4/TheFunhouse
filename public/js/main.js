const deleteText = document.querySelectorAll('.fa-trash')
const thumbText = document.querySelectorAll('.fa-thumbs-up')


const menuBtn = document.querySelector('.menu-btn');
const navOptions = document.querySelector('.nav-options')
const main = document.querySelector('.main')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        navOptions.classList.remove('hidden')
        navOptions.classList.add('fade-in')
        main.classList.add('repositioned')
        // main.classList.add('ease-in')

        menuOpen = true;
    }else {
        menuBtn.classList.remove('open');
        navOptions.classList.add('hidden')
        main.classList.remove('repositioned')
        menuOpen = false;
    }
})

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteMaterial)
})

Array.from(thumbText).forEach((element)=>{
    element.addEventListener('click', addLike)
})

async function deleteMaterial(){
    const brand = this.parentNode.childNodes[1].innerText
    const product = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteMaterial', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'brand': brand,
              'product': product
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function addLike(){
    const brand = this.parentNode.childNodes[1].innerText
    const product = this.parentNode.childNodes[3].innerText
    const likes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const response = await fetch('addOneLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'brand': brand,
              'product': product,
              'likes': likes
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}
