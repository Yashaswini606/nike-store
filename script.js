const wrapper=document.querySelector(".sliderWrapper");
const menuItems=documnent.querySelectorAll(".menuItems");

const products=[
    {
        id:1,
        title:"Air Force",
        price:119,
        colors:[
            {
                code:"black",
                img:"./img/air.png"
            },
            {
                code:"blue",
                img:"./img/airforce2.png",
            },
        ],
    },
{
    id:1,
    title:"Jordan",
    price:149,
    colors:[
        {
            code:"lightgray",
            img:"./img/jordan.png"
        },
        {
            code:"green",
            img:"./img/jordan2.png",

        },
    ],
},
{
   id:3,
   title:"Blazer",
   price:109,
   colors:[
    {
        code:"lightgray",
        img:"./img/blazer.png"
    },
    {
        code:"green",
        img:"./img/blazer2.png",
    },
   ] ,
},
{
    id:4,
    title:"Crater",
    price:129,
    colors:[
        {
            code:"black",
            img:"./img/crater.png"
        },
        {
            code:"lightgray",
            img:"./img/crater2.png",
        },
    ],
},
{
    id:5,
    title:"Hippie",
    price:99,
    colors:[
        {
            code:"gray",
            img:"./img/hippie.png"
        },
        {
            code:"black",
            img:"./img/hippie2.png",
        },
    ],
},
];
let chosenProduct=products[0];

const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductColor=document.querySelector(".color");
const currentProductSize=document.querySelector(".product");
const currentProductPrice=document.querySelector(".productTitle");

menuItems.forEach((item,index) => {   
    item.addEventListener("click", () => {
        wrapper.style.transform='translateX($(-100*index)vw)';
        chosenProduct=products[index];
        currentProductTitle.textContent=chosenProduct.title;
        currentProductPrice.textContent=chosenProduct.price;
        currentProductImg.src=chosenProduct.colors[0].img;


        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor=choosen

        });


    });


});
