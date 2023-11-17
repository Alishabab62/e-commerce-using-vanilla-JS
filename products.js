const mainContainer = document.getElementById("main-container");


function ratingColor(rating) {
    if(rating > 4){
      return "green"
    }
    else if(rating > 3){
      return "orange";
    }
    else{
      return "red";
    }
}

async function renderProduct() {
  await fetch("https://fakestoreapi.com/products")
    .then((data) => {
      return data.json();
    })
    .then((data2) => {
        console.log(data2)
        mainContainer.innerHTML = "";
      for (let item of data2) {
        const product = document.createElement("div");
        product.innerHTML = `
        <div class="product-container">
        <img src="${item.image}" alt="">
        <div>
            <h2 style="height:55px; overflow:hidden">${item.title}</h2>
            <p style="height:55px; overflow:hidden; margin:5px 0px">${item.description}</p>
            <div style="display:flex; background-color:${ratingColor(item.rating.rate)}; width:fit-content; color:white; padding:10px; border-radius:5px"><h5>${item.rating.rate} <i class="fa-regular fa-star" style="margin-right:5px"></i></h5><h5>${item.rating.count} Total Rating</h5></div>
            
        </div>
    </div>`;
        mainContainer.appendChild(product);
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

window.addEventListener('load', renderProduct)
