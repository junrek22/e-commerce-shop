$(document).ready(function(){
    const dress = `[
        {
          "ImageProduct":"Men Coconut Tree _ Bird Print Drawstring Waist Swim Trunks ( Black )",
          "ProductName":"Men Coconut Tree _ Bird Print Drawstring Waist Swim Trunks ( Black )",
          "Price":45,
          "Tags":"Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Colorblock Drawstring Waist Square Leg Swim Trunks",
          "ProductName":"Men Colorblock Drawstring Waist Square Leg Swim Trunks",
          "Price":30,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Colorblock Drawstring Waist Swim Briefs",
          "ProductName":"Men Colorblock Drawstring Waist Swim Briefs",
          "Price":30,
          "Tags":"#Dress #TopRated",
          "Ratings":4.5
      },{
          "ImageProduct":"Men Contrast Trim Drawstring Waist Swim Trunks",
          "ProductName":"Men Contrast Trim Drawstring Waist Swim Trunks",
          "Price":45,
          "Tags":"#Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Graphic Print One Piece Swimsuit",
          "ProductName":"Men Graphic Print One Piece Swimsuit",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Letter Graphic Drawstring Waist Swim Trunks ( Black )",
          "ProductName":"Men Letter Graphic Drawstring Waist Swim Trunks ( Black )",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Ombre Print One Piece Swimsuit",
          "ProductName":"Men Ombre Print One Piece Swimsuit",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Ombre Tropical Print Drawstring Swim Trunks",
          "ProductName":"Men Ombre Tropical Print Drawstring Swim Trunks",
          "Price":50,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Patched Striped Drawstring Waist Swim Trunks",
          "ProductName":"Men Patched Striped Drawstring Waist Swim Trunks",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Striped Ombre Drawstring Waist Swim Trunks",
          "ProductName":"Men Striped Ombre Drawstring Waist Swim Trunks",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Striped Print Drawstring Waist Swim Trunks",
          "ProductName":"Men Striped Print Drawstring Waist Swim Trunks",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Top-stitching Swim Trunks",
          "ProductName":"Men Top-stitching Swim Trunks",
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
                        <img src="Men Swimwear/`+json_dress[key].ImageProduct+`.png" alt="">
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
        window.localStorage.setItem("image", "men/Men Swimwear/"+json[b].ImageProduct);
        window.localStorage.setItem("name", json[b].ProductName);
        window.localStorage.setItem("price", json[b].Price);
        window.localStorage.setItem("tags", json[b].Tags);
        window.localStorage.setItem("ratings", json[b].Ratings);
    });
});