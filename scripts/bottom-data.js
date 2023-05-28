$(document).ready(function(){
    const dress = `[
        {
          "ImageProduct":"Contrast Stitch Colorblock Shorts",
          "ProductName":"Contrast Stitch Colorblock Shorts",
          "Price":45,
          "Tags":"Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Drawstring Front Flare Leg Pants",
          "ProductName":"Drawstring Front Flare Leg Pants",
          "Price":30,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Grunge Punk Solid Belted Chain Cut-out Pants",
          "ProductName":"Grunge Punk Solid Belted Chain Cut-out Pants",
          "Price":30,
          "Tags":"#Dress #TopRated",
          "Ratings":4.5
      },{
          "ImageProduct":"High Waist Asymmetrical Hem PU Leather Bodycon Skirt",
          "ProductName":"High Waist Asymmetrical Hem PU Leather Bodycon Skirt",
          "Price":45,
          "Tags":"#Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"High Waist Wide Leg Jeans",
          "ProductName":"High Waist Wide Leg Jeans",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"High Waisted Flap Pocket Cargo Jeans ( Black )",
          "ProductName":"High Waisted Flap Pocket Cargo Jeans ( Black )",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Honeyspot Solid High Waist Slit Thigh Skirt ( Black )",
          "ProductName":"Honeyspot Solid High Waist Slit Thigh Skirt ( Black )",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Paisley Print Patchwork Print Boyfriend Jeans",
          "ProductName":"Paisley Print Patchwork Print Boyfriend Jeans",
          "Price":50,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Solid Button Front Shorts",
          "ProductName":"Solid Button Front Shorts",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Solid Grommet Eyelet Garter Shorts With Chain",
          "ProductName":"Solid Grommet Eyelet Garter Shorts With Chain",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Solid High Waist Flared Skirt ( Black )",
          "ProductName":"Solid High Waist Flared Skirt ( Black )",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Solid PU Leather Skater Skirt",
          "ProductName":"Solid PU Leather Skater Skirt",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Solid Ripped Raw Hem Shorts",
          "ProductName":"Solid Ripped Raw Hem Shorts",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Sweetness Lace Up Shorts",
          "ProductName":"Sweetness Lace Up Shorts",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Unity Floral Print Biker Shorts",
          "ProductName":"Unity Floral Print Biker Shorts",
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
                        <img src="Women Bottoms/`+json_dress[key].ImageProduct+`.png" alt="">
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
        window.localStorage.setItem("image", "women/Women Bottoms/"+json[b].ImageProduct);
        window.localStorage.setItem("name", json[b].ProductName);
        window.localStorage.setItem("price", json[b].Price);
        window.localStorage.setItem("tags", json[b].Tags);
        window.localStorage.setItem("ratings", json[b].Ratings);
    });
});