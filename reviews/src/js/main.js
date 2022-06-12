import reviews from "./review_data.js"

//select items
const img = document.getElementById("img")
const name = document.getElementById("name-tag")
const title = document.getElementById("title-tag")
const text = document.getElementById("text")

//select buttons
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const randomBtn = document.getElementById("random")

//set starting item
let currentItem = 1
const getReviews=(currentItem)=>{
  const item = reviews[currentItem]
  img.src = item.img
  name.textContent = item.name
  title.textContent = item.job
  text.textContent = item.text
}

window.addEventListener('DOMContentLoaded', function () {
  getReviews(currentItem)
})

prev.addEventListener('click',()=>{
  currentItem--
  if(currentItem < 0){
    currentItem=reviews.length-1
  }
  getReviews(currentItem)
})
next.addEventListener('click',()=>{
  currentItem++
  if(currentItem>reviews.length-1){
    currentItem=0
  }
  getReviews(currentItem)
})
randomBtn.addEventListener('click',()=>{
  currentItem= Math.floor(Math.random()*reviews.length)
  getReviews(currentItem)
})