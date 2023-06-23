$(document).ready(function(){
    const dress = `[
        {
          "ImageProduct":"Men Buckle Decor Sandals, Fashionable Casual Sandals For Summer",
          "ProductName":"Men Buckle Decor Sandals, Fashionable Casual Sandals For Summer",
          "Price":45,
          "Tags":"Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Buckle Decor Slides, Fashion Outdoor EVA Slides ( Black )",
          "ProductName":"Men Buckle Decor Slides, Fashion Outdoor EVA Slides ( Black )",
          "Price":30,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Camo Graphic Basketball Shoes, Lace-up Front Sporty Sneakers",
          "ProductName":"Men Camo Graphic Basketball Shoes, Lace-up Front Sporty Sneakers",
          "Price":30,
          "Tags":"#Dress #TopRated",
          "Ratings":4.5
      },{
          "ImageProduct":"Men Camo Print Thermal Lined Snow Boots",
          "ProductName":"Men Camo Print Thermal Lined Snow Boots",
          "Price":45,
          "Tags":"#Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Chevron Pattern Lace-up Front Soccer Shoes, Sporty Outdoor Sneakers",
          "ProductName":"Men Chevron Pattern Lace-up Front Soccer Shoes, Sporty Outdoor Sneakers",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Colorblock Lace-up Front Running Shoes, Fabric Sporty Sneakers",
          "ProductName":"Men Colorblock Lace-up Front Running Shoes, Fabric Sporty Sneakers",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Graphic High Top Sneakers Fashion Skate Shoes",
          "ProductName":"Men Graphic High Top Sneakers Fashion Skate Shoes",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Lace Up Design Slip-On Chunky Sneakers",
          "ProductName":"Men Lace Up Design Slip-On Chunky Sneakers",
          "Price":50,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Lace Up Number _ Letter Graphic Boots, Fashionable Outdoor Black Hiking Boots",
          "ProductName":"Men Lace Up Number _ Letter Graphic Boots, Fashionable Outdoor Black Hiking Boots",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Letter _ Figure Graphic Lace Up Sneakers, Sporty Outdoor Basketball Shoes",
          "ProductName":"Men Letter _ Figure Graphic Lace Up Sneakers, Sporty Outdoor Basketball Shoes",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Letter Graphic Zipper Decor Lace-up Front Sneakers, Sporty Fabric Running Shoes For Outdoor ( Black )",
          "ProductName":"Men Letter Graphic Zipper Decor Lace-up Front Sneakers, Sporty Fabric Running Shoes For Outdoor ( Black )",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Minimalist Oxford Shoes, Lace-up Front Fashion Dress Shoes Black",
          "ProductName":"Men Minimalist Oxford Shoes, Lace-up Front Fashion Dress Shoes Black",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
        "ImageProduct":"Men Ombre Lace-Up Front Sneakers Basketball Shoes",
        "ProductName":"Men Ombre Lace-Up Front Sneakers Basketball Shoes",
        "Price":40,
        "Tags":"#Dress",
        "Ratings":4.9
    },{
        "ImageProduct":"Men Stitch Detail Loafers, Leisure Black Casual Loafers For Outdoor",
        "ProductName":"Men Stitch Detail Loafers, Leisure Black Casual Loafers For Outdoor",
        "Price":40,
        "Tags":"#Dress",
        "Ratings":4.9
    },{
        "ImageProduct":"Men Wave _ Letter Graphic Lace Up Sneakers, Sporty Mesh Skate Shoes For Outdoor",
        "ProductName":"Men Wave _ Letter Graphic Lace Up Sneakers, Sporty Mesh Skate Shoes For Outdoor",
        "Price":40,
        "Tags":"#Dress",
        "Ratings":4.9
    },{
        "ImageProduct":"Sporty Chunky Sneakers For Men, Letter Graphic Lace-up Front Sneakers",
        "ProductName":"Sporty Chunky Sneakers For Men, Letter Graphic Lace-up Front Sneakers",
        "Price":40,
        "Tags":"#Dress",
        "Ratings":4.9
    },{
        "ImageProduct":"Sporty Skate Shoes For Men, Colorblock Stitch Detail Lace Up Sneakers",
        "ProductName":"Sporty Skate Shoes For Men, Colorblock Stitch Detail Lace Up Sneakers",
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
                        <img src="Men Shoes/`+json_dress[key].ImageProduct+`.png" alt="">
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
        window.localStorage.setItem("image", "men/Men Shoes/"+json[b].ImageProduct);
        window.localStorage.setItem("name", json[b].ProductName);
        window.localStorage.setItem("price", json[b].Price);
        window.localStorage.setItem("tags", json[b].Tags);
        window.localStorage.setItem("ratings", json[b].Ratings);
    });
});