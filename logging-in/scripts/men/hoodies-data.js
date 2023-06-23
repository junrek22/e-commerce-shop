$(document).ready(function(){
    const dress = `[
        {
          "ImageProduct":"Guys Cartoon Graphic Zip Up Two Tone Drawstring Hoodie Without Tee",
          "ProductName":"Guys Cartoon GrapMen Colorblock Kangaroo Pocket Drop Shoulder Hoodiehic Zip Up Two Tone Drawstring Hoodie Without Tee",
          "Price":45,
          "Tags":"Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Colorblock Kangaroo Pocket Drop Shoulder Hoodie",
          "ProductName":"Men Colorblock Kangaroo Pocket Drop Shoulder Hoodie",
          "Price":30,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Deer Embroidery Quarter Zipper Drawstring Hoodie ( Black )",
          "ProductName":"Men Deer Embroidery Quarter Zipper Drawstring Hoodie ( Black )",
          "Price":30,
          "Tags":"#Dress #TopRated",
          "Ratings":4.5
      },{
          "ImageProduct":"Men Drawstring Sleeveless Hoodie",
          "ProductName":"Men Drawstring Sleeveless Hoodie",
          "Price":45,
          "Tags":"#Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Drop Shoulder Teddy Hoodie",
          "ProductName":"Men Drop Shoulder Teddy Hoodie",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Drop Shoulder Zip Up Hoodie",
          "ProductName":"Men Drop Shoulder Zip Up Hoodie",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Expression Print Zip Up Hoodie",
          "ProductName":"Men Expression Print Zip Up Hoodie",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Fishnet Insert Drawstring Crop Hoodie",
          "ProductName":"Men Fishnet Insert Drawstring Crop Hoodie",
          "Price":50,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Kangaroo Pocket Drop Shoulder Drawstring Teddy Hoodie",
          "ProductName":"Men Kangaroo Pocket Drop Shoulder Drawstring Teddy Hoodie",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Letter Embroidery Quarter Zip Coral Fleece Hoodie",
          "ProductName":"Men Letter Embroidery Quarter Zip Coral Fleece Hoodie",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Picture And Slogan Graphic Kangaroo Pocket Drawstring Hoodie ( Black )",
          "ProductName":"Men Picture And Slogan Graphic Kangaroo Pocket Drawstring Hoodie ( Black )",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Slogan Graphic Drawstring Hoodie",
          "ProductName":"Men Slogan Graphic Drawstring Hoodie",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
        "ImageProduct":"Men Two Tone Raglan Sleeve Drawstring Hoodie ( Black )",
        "ProductName":"Men Two Tone Raglan Sleeve Drawstring Hoodie ( Black )",
        "Price":40,
        "Tags":"#Dress",
        "Ratings":4.9
    },{
        "ImageProduct":"Men Wing _ Letter Graphic Two Tone Drawstring Hoodie",
        "ProductName":"Men Wing _ Letter Graphic Two Tone Drawstring Hoodie",
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
                        <img src="Men Hoodies/`+json_dress[key].ImageProduct+`.png" alt="">
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
        window.localStorage.setItem("image", "men/Men Hoodies/"+json[b].ImageProduct);
        window.localStorage.setItem("name", json[b].ProductName);
        window.localStorage.setItem("price", json[b].Price);
        window.localStorage.setItem("tags", json[b].Tags);
        window.localStorage.setItem("ratings", json[b].Ratings);
    });
});