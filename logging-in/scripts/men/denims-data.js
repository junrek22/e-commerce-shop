$(document).ready(function(){
    const dress = `[
        {
          "ImageProduct":"Avant Guys Lightning Print Ombre Flap Pocket Denim Jacket",
          "ProductName":"Avant Guys Lightning Print Ombre Flap Pocket Denim Jacket",
          "Price":45,
          "Tags":"Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Extended Sizes Men Drawstring Waist Slant Pocket Denim Shorts",
          "ProductName":"Extended Sizes Men Drawstring Waist Slant Pocket Denim Shorts",
          "Price":30,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Extended Sizes Men Flap Pocket Denim Jacket Without Hoodie",
          "ProductName":"Extended Sizes Men Flap Pocket Denim Jacket Without Hoodie",
          "Price":30,
          "Tags":"#Dress #TopRated",
          "Ratings":4.5
      },{
          "ImageProduct":"Men Contrast Topstitching Pocket Patched Jeans",
          "ProductName":"Men Contrast Topstitching Pocket Patched Jeans",
          "Price":45,
          "Tags":"#Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Flap Pocket Denim Jacket Without Tee",
          "ProductName":"Men Flap Pocket Denim Jacket Without Tee",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Flap Pocket Denim Shirt Without Tee ( Khaki )",
          "ProductName":"Men Flap Pocket Denim Shirt Without Tee ( Khaki )",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Flap Pocket Side Bermuda Denim Shorts",
          "ProductName":"Men Flap Pocket Side Bermuda Denim Shorts",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Floral Pattern Raw Hem Denim Shorts",
          "ProductName":"Men Floral Pattern Raw Hem Denim Shorts",
          "Price":50,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Letter Graphic Denim Jacket Without Tee",
          "ProductName":"Men Letter Graphic Denim Jacket Without Tee",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Ripped Frayed Raw Hem Bermuda Denim Shorts",
          "ProductName":"Men Ripped Frayed Raw Hem Bermuda Denim Shorts",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Slant Pockets Denim Jacket Without Tee",
          "ProductName":"Men Slant Pockets Denim Jacket Without Tee",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Solid Skinny Jeans",
          "ProductName":"Men Solid Skinny Jeans",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
        "ImageProduct":"Men Two Tone Ripped Skinny Jeans",
        "ProductName":"Men Two Tone Ripped Skinny Jeans",
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
                        <img src="Men Denims/`+json_dress[key].ImageProduct+`.png" alt="">
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
        window.localStorage.setItem("image", "men/Men Denims/"+json[b].ImageProduct);
        window.localStorage.setItem("name", json[b].ProductName);
        window.localStorage.setItem("price", json[b].Price);
        window.localStorage.setItem("tags", json[b].Tags);
        window.localStorage.setItem("ratings", json[b].Ratings);
    });
});