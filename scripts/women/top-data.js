$(document).ready(function(){
    let dress = `[
        {
          "ImageProduct":"top1",
          "ProductName":"Contrast Collar Button Front Puff Sleeve Shirt",
          "Price":45,
          "Tags":"Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"top2",
          "ProductName":"Floral And Striped Print Button Up Shirt ( Blue )",
          "Price":30,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"top3",
          "ProductName":"Heart Embroidery Contrast Trim Polo Neck Tee",
          "Price":30,
          "Tags":"#Dress #TopRated",
          "Ratings":4.5
      },{
          "ImageProduct":"top4",
          "ProductName":"O-ring Zipper Cold Shoulder Blouse",
          "Price":45,
          "Tags":"#Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"top5",
          "ProductName":"Patch Pocket Colorblock Crop Blouse",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"top6",
          "ProductName":"Plaid Pattern 2 In 1 Asymmetrical Hem Crop Blouse",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"top7",
          "ProductName":"Single Breasted Lapel Neck Tee(Black)",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"top8",
          "ProductName":"Solid Keyhole Back Sleeveless Blouse ( Black )",
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
                        <img src="Women Top/`+json_dress[key].ImageProduct+`.png" alt="">
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
        window.localStorage.setItem("image", "women/Women Top/"+json[b].ImageProduct);
        window.localStorage.setItem("name", json[b].ProductName);
        window.localStorage.setItem("price", json[b].Price);
        window.localStorage.setItem("tags", json[b].Tags);
        window.localStorage.setItem("ratings", json[b].Ratings);
    });
});