$(document).ready(function(){
    const dress = `[
        {
          "ImageProduct":"Men 3pcs Allover Print Boxer Brief",
          "ProductName":"Men 3pcs Allover Print Boxer Brief",
          "Price":45,
          "Tags":"Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Men 3pcs Letter Tape Waist Brief",
          "ProductName":"Men 3pcs Letter Tape Waist Brief",
          "Price":30,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men 4pcs Camo _ Tie Dye Print Boxer Brief",
          "ProductName":"Men 4pcs Camo _ Tie Dye Print Boxer Brief",
          "Price":30,
          "Tags":"#Dress #TopRated",
          "Ratings":4.5
      },{
          "ImageProduct":"Men 5pcs Letter Graphic Boxer Brief",
          "ProductName":"Men 5pcs Letter Graphic Boxer Brief",
          "Price":45,
          "Tags":"#Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Men 5pcs Letter Graphic Contrast Binding Boxer Briefs",
          "ProductName":"Men 5pcs Letter Graphic Contrast Binding Boxer Briefs",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men 5pcs Letter Graphic Contrast Tape Boxer Brief",
          "ProductName":"Men 5pcs Letter Graphic Contrast Tape Boxer Brief",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men 5pcs Tape-waist Boxer Brief",
          "ProductName":"Men 5pcs Tape-waist Boxer Brief",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Plaid Print Boxer Brief",
          "ProductName":"Men Plaid Print Boxer Brief",
          "Price":50,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Ribbed Knit Panel Boxer Brief",
          "ProductName":"Men Ribbed Knit Panel Boxer Brief",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Solid Thong",
          "ProductName":"Men Solid Thong",
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
                        <img src="Men Underwear/`+json_dress[key].ImageProduct+`.png" alt="">
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
        window.localStorage.setItem("image", "men/Men Underwear/"+json[b].ImageProduct);
        window.localStorage.setItem("name", json[b].ProductName);
        window.localStorage.setItem("price", json[b].Price);
        window.localStorage.setItem("tags", json[b].Tags);
        window.localStorage.setItem("ratings", json[b].Ratings);
    });
});