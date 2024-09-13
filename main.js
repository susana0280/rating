const rating=document.querySelector(".rating")
let currentValue=0
const limit=9

const html=Array.from(Array(limit)).map((_,i)=>{


    return `<div class="item item-${i}" data-pos=${i}></div>`
})

rating.innerHTML=html.join("")


document.querySelectorAll(".item").forEach(item=>{
     item.addEventListener("mouseover",e=>{
        let stars=[]
        let positionElement=item.getAttribute("data-pos")
        stars=document.querySelectorAll(".item")

         stars.forEach(star=>{
            if(star.getAttribute("data-pos")<=positionElement){
                    star.classList.add("item-full")
                    }
            else {
                star.classList.remove("item-full")
              }
         })
        })
       })



