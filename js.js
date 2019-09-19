const spreadsheetID = "19RQ1HujO4pLOfRv9LL4hKv0chG-7aiXRdqKIS6OSweo";

const endpoint =`https://spreadsheets.google.com/feeds/list/${spreadsheetID}/od6/public/values?alt=json`;




fetch(endpoint).then(res=>res.json()).then(showStuff);

function showStuff(data){
    const myArray = data.feed.entry;
    myArray.forEach(showBeer)   
}

function showBeer(beerData){
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    console.log(beerData.gsx$name.$t)
 copy.querySelector("div .name").textContent=beerData.gsx$name.$t;
    console.log(beerData.gsx$price.$t)
    copy.querySelector("div .price").textContent=beerData.gsx$price.$t;
    
console.log(beerData.gsx$shortdescription.$t)
    copy.querySelector("div .shortdescription").textContent=beerData.gsx$shortdescription.$t;
    

 document.querySelector("body").appendChild(copy)
}



/*
1. fetch cats
2. build sections
3. fetch products
4. assign each prod to its parent
*/
/*
const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
  modal.classList.add("hide");
});


fetch("http://kea-alt-del.dk/t5/api/categories")
  .then(res=>res.json())
  .then(function(data){
    data.forEach(buildCategory)
    getProducts();
})

function buildCategory(data){
  const section = document.createElement("section");
  const header = document.createElement("h1");
  header.textContent=data;
  section.setAttribute("id", data)
  section.appendChild(header);
  document.querySelector("main").appendChild(section);

  const link = document.createElement("a");
  link.href="#"+data;
  link.textContent=data;
  document.querySelector("nav").appendChild(link)
}

function getProducts(){
  fetch("https://kea-alt-del.dk/t5/api/productlist")
    .then(function(response){
      return response.json()
  }).then(function(data){
    data.forEach(showDish)
  })
}
function showDish(dish){

  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".data_name").textContent=dish.name;
  copy.querySelector(".data_price").textContent=dish.price;
  if(dish.discount){
    copy.querySelector(".data_price").classList.add("discount");
    //calculate the new price, because theres a discount
    copy.querySelector(".data_discount").textContent=
      Math.round(dish.price - dish.discount / 100 * dish.price)
  } else {
    copy.querySelector(".data_discount").remove();
  }

  if(!dish.soldout){

    copy.querySelector("article").classList.remove("soldOut");
  }

  copy.querySelector("button").addEventListener("click", () => {
    fetch(`https://kea-alt-del.dk/t5/api/product?id=${dish.id}`)
      .then(res => res.json())
      .then(showDetails);
  });

  //"#"+dish.category === `#${dish.category}`
  document.querySelector("#"+dish.category).appendChild(copy);
}


function showDetails(data){
  console.log(data)
  modal.querySelector(".modal-name").textContent = data.name;
  modal.querySelector(".modal-description").textContent = data.longdescription;

  modal.classList.remove("hide");
}

*/
