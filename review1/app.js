const reviews = [
  {
    id:1,
    name:"susan smith",
    job:"web developer",
    img:"images/t2.jpg",
    text:"hey! world, im susan smith and im web developer",

  },
  {
    id:2,
    name:"adama traore",
    job:"web designer",
    img:"images/t3.jpg",
    text:"hey! world, im adam traore and im web designer"

  },
  {
    id:3,
    name:"anna johnson",
    job:"web designer",
    img:"images/t1.jpeg",
    text:"hey! world, im anna johnson and im web designer"

  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let value = 0;

window.addEventListener("DOMContentLoaded", function(){
  showPerson();
});

function showPerson(){
  const item = reviews[value];
  img.src = item.img; 
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent= item.text;
};

nextBtn.addEventListener("click", function(){
  value++;
  if(value > reviews.length - 1){
    value = 0;
  }
  showPerson();
});

prevBtn.addEventListener("click", function(){
  value--;
  if(value < 0){
    value = reviews.length-1;
  }
  showPerson();
});

randomBtn.addEventListener("click", function(){
  value = Math.floor(Math.random()* reviews.length);
  console.log(value);
  showPerson();
});