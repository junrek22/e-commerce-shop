$(document).ready(function(){
    const dress = `[
        {
          "ImageProduct":"Bikini Set U-Wired Bandeau Bra Top _ Bikini Bottom _ Beach Pants 3 Piece Swimsuit",
          "ProductName":"Bikini Set U-Wired Bandeau Bra Top _ Bikini Bottom _ Beach Pants 3 Piece Swimsuit",
          "Price":45,
          "Tags":"Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Chain Linked Halter Triangle Bikini Swimsuit",
          "ProductName":"Chain Linked Halter Triangle Bikini Swimsuit",
          "Price":30,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Colorblock Push Up Bikini Swimsuit",
          "ProductName":"Colorblock Push Up Bikini Swimsuit",
          "Price":30,
          "Tags":"#Dress #TopRated",
          "Ratings":4.5
      },{
          "ImageProduct":"Colorblock Zip Up Bikini Swimsuit With Long Sleeve",
          "ProductName":"Colorblock Zip Up Bikini Swimsuit With Long Sleeve",
          "Price":45,
          "Tags":"#Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Colorblock Zip Up Shorts Bikini Swimsuit",
          "ProductName":"Colorblock Zip Up Shorts Bikini Swimsuit",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Cut-out High Cut Bikini Swimsuit",
          "ProductName":"Cut-out High Cut Bikini Swimsuit",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Hollow Out Bikini Shorts",
          "ProductName":"Hollow Out Bikini Shorts",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Hollow Out Drawstring Side Cover Up ( Black )",
          "ProductName":"Hollow Out Drawstring Side Cover Up ( Black )",
          "Price":50,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Letter Graphic Zip Front One Piece Swimsuit",
          "ProductName":"Letter Graphic Zip Front One Piece Swimsuit",
          "Price":50,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Rainbow Striped Fringe Trim Beach Shawl Without Belt",
          "ProductName":"Rainbow Striped Fringe Trim Beach Shawl Without Belt",
          "Price":50,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Solid Beach Blanket",
          "ProductName":"Solid Beach Blanket",
          "Price":50,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Solid Drawstring Side Bandeau Bikini Swimsuit",
          "ProductName":"Solid Drawstring Side Bandeau Bikini Swimsuit",
          "Price":50,
          "Tags":"#Dress",
          "Ratings":4.9
      }
  ] `
  var dom_women = document.getElementsByClassName("market-list");
  const json_dress = JSON.parse(dress);
    let item = []
    for (const key in json_dress) {
        item[key] = "item"+key;
       dom_women[0].innerHTML += `
       <a href="../buy.html" class="shop-select" id="item`+key+`">
                <div class="shop-card">
                    <div class="image-product">
                        <img src="Women Swimwear/`+json_dress[key].ImageProduct+`.png" alt="">
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
        window.localStorage.setItem("image", "women/Women Swimwear/"+json[b].ImageProduct);
        window.localStorage.setItem("name", json[b].ProductName);
        window.localStorage.setItem("price", json[b].Price);
        window.localStorage.setItem("tags", json[b].Tags);
        window.localStorage.setItem("ratings", json[b].Ratings);
    });
});