$(document).ready(function(){
    const dress = `[
        {
          "ImageProduct":"Men Drop Shoulder Polo Shirt",
          "ProductName":"Men Drop Shoulder Polo Shirt",
          "Price":45,
          "Tags":"Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Letter Patched Detail Tank Top ( White )",
          "ProductName":"Men Letter Patched Detail Tank Top ( White )",
          "Price":30,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Mock Neck Drop Shoulder Tee ( Black )",
          "ProductName":"Men Mock Neck Drop Shoulder Tee ( Black )",
          "Price":30,
          "Tags":"#Dress #TopRated",
          "Ratings":4.5
      },{
          "ImageProduct":"Men Notched Neck Drop Shoulder Waffle Knit Tee",
          "ProductName":"Men Notched Neck Drop Shoulder Waffle Knit Tee",
          "Price":45,
          "Tags":"#Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Quarter Zip Polo Shirt",
          "ProductName":"Men Quarter Zip Polo Shirt",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Solid Drop Shoulder Asymmetrical Hem Tee",
          "ProductName":"Men Solid Drop Shoulder Asymmetrical Hem Tee",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Solid Drop Shoulder Shirt Without Tie ( Black )",
          "ProductName":"Men Solid Drop Shoulder Shirt Without Tie ( Black )",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Solid Mesh Tank Top",
          "ProductName":"Men Solid Mesh Tank Top",
          "Price":50,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Solid Shoulder Pad Tank Top",
          "ProductName":"Men Solid Shoulder Pad Tank Top",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Solid Waffle Knit Tee ( Black )",
          "ProductName":"Men Solid Waffle Knit Tee ( Black )",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Striped Print Shirt",
          "ProductName":"Men Striped Print Shirt",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      }
  ]`
  var dom_women = document.getElementsByClassName("market-list");
  const json_dress = JSON.parse(dress);
    let item = []
    for (const key in json_dress) {
        item[key] = "item"+key;
       dom_women[0].innerHTML += `
       <a href="../buy.html" class="shop-select" id="item`+key+`">
                <div class="shop-card">
                    <div class="image-product">
                        <img src="Men Tops/`+json_dress[key].ImageProduct+`.png" alt="">
                    </div>
                    <div class="product-info">
                        <h3>`+json_dress[key].ProductName+`</h3>
                        <p>$ `+json_dress[key].Price+`</p>
                        <p>`+json_dress[key].Tags+`</p>
                        <div class="ratings">
                            <span>`+json_dress[key].Ratings+`</span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="favorites"><button><i class="fa-regular fa-heart"></i></button></span>
                        </div>  
                    </div>
                </div>
            </a>
       `;
    }
    let json = JSON.parse(dress)
    $(".shop-select").click(function(){
        let a = $(this).attr("id");
        let b = a.substring(4);
        window.localStorage.clear();
        window.localStorage.setItem("image", "men/Men Tops/"+json[b].ImageProduct);
        window.localStorage.setItem("name", json[b].ProductName);
        window.localStorage.setItem("price", json[b].Price);
        window.localStorage.setItem("tags", json[b].Tags);
        window.localStorage.setItem("ratings", json[b].Ratings);
    });
});