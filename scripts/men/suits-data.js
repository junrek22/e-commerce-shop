$(document).ready(function(){
    const dress = `[
        {
          "ImageProduct":"Men Button Front Blazer _ Vest _ Pants Suits",
          "ProductName":"Men Button Front Blazer _ Vest _ Pants Suits",
          "Price":45,
          "Tags":"Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Contrast Trim Single Button Blazer _ Tailored Pants",
          "ProductName":"Men Contrast Trim Single Button Blazer _ Tailored Pants",
          "Price":30,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Double Breasted Velvet Blazer _ Pants Set",
          "ProductName":"Men Double Breasted Velvet Blazer _ Pants Set",
          "Price":30,
          "Tags":"#Dress #TopRated",
          "Ratings":4.5
      },{
          "ImageProduct":"Men Double Breasted Waistcoat _ 1pc Suit Pants Set",
          "ProductName":"Men Double Breasted Waistcoat _ 1pc Suit Pants Set",
          "Price":45,
          "Tags":"#Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Lapel Neck Belted Blazer _ Suit Pants Set",
          "ProductName":"Men Lapel Neck Belted Blazer _ Suit Pants Set",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Slant Pocket Suspender Suit Pants",
          "ProductName":"Men Slant Pocket Suspender Suit Pants",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Solid Blazer _ Pants Suit Set",
          "ProductName":"Men Solid Blazer _ Pants Suit Set",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Solid Knot Side Wrap Blazer",
          "ProductName":"Men Solid Knot Side Wrap Blazer",
          "Price":50,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Solid Lapel Neck Blazer _ Shorts",
          "ProductName":"Men Solid Lapel Neck Blazer _ Shorts",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Solid Waistcoat _ Suit Pants ( Black )",
          "ProductName":"Men Solid Waistcoat _ Suit Pants ( Black )",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Men Waterfall Collar Double Breasted Blazer",
          "ProductName":"Men Waterfall Collar Double Breasted Blazer",
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
                        <img src="Men Suits _ Separates/`+json_dress[key].ImageProduct+`.png" alt="">
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
        window.localStorage.setItem("image", "men/Men Suits _ Separates/"+json[b].ImageProduct);
        window.localStorage.setItem("name", json[b].ProductName);
        window.localStorage.setItem("price", json[b].Price);
        window.localStorage.setItem("tags", json[b].Tags);
        window.localStorage.setItem("ratings", json[b].Ratings);
    });
});