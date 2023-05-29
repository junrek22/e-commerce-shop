$(document).ready(function(){
    const dress = `[
        {
          "ImageProduct":"Grunge Punk Guys Tartan Flap Pocket Side Cargo Pants",
          "ProductName":"Grunge Punk Guys Tartan Flap Pocket Side Cargo Pants",
          "Price":45,
          "Tags":[
            "fruits",
            "food",
            "veggies",
          ],
          "Ratings":4.9
      },{
          "ImageProduct":"Men Buckled Detail Slant Pocket Suit Pants ( Black )",
          "ProductName":"Men Buckled Detail Slant Pocket Suit Pants ( Black )",
          "Price":30,
          "Tags":[
            "fruits",
            "food",
            "veggies",
          ],
          "Ratings":4.9
      },{
          "ImageProduct":"Men Drawstring Waist Wide Leg Shorts ( Black )",
          "ProductName":"Men Drawstring Waist Wide Leg Shorts ( Black )",
          "Price":30,
          "Tags":[
            "fruits",
            "food",
            "veggies",
          ],
          "Ratings":4.5
      },{
          "ImageProduct":"Men Flap Pocket Buckle Detail Drawstring Waist Cargo Pants",
          "ProductName":"Men Flap Pocket Buckle Detail Drawstring Waist Cargo Pants",
          "Price":45,
          "Tags":[
            "fruits",
            "food",
            "veggies",
          ],
          "Ratings":4.9
      },{
          "ImageProduct":"Men Flap Pocket Drawstring Waist Cargo Shorts",
          "ProductName":"Men Flap Pocket Drawstring Waist Cargo Shorts",
          "Price":40,
          "Tags":[
            "fruits",
            "food",
            "veggies",
          ],
          "Ratings":4.9
      },{
          "ImageProduct":"Men Flap Pocket Side Drawstring Waist Pants",
          "ProductName":"Men Flap Pocket Side Drawstring Waist Pants",
          "Price":40,
          "Tags":[
            "fruits",
            "food",
            "veggies",
          ],
          "Ratings":4.9
      },{
          "ImageProduct":"Men Flap Pocket Solid Overall Shorts Without Tee",
          "ProductName":"Men Flap Pocket Solid Overall Shorts Without Tee",
          "Price":40,
          "Tags":[
            "fruits",
            "food",
            "veggies",
          ],
          "Ratings":4.9
      },{
          "ImageProduct":"Men Fold Pleated Detail Bermuda Shorts",
          "ProductName":"Men Fold Pleated Detail Bermuda Shorts",
          "Price":50,
          "Tags":[
            "fruits",
            "food",
            "veggies",
          ],
          "Ratings":4.9
      },{
          "ImageProduct":"Men Fold Pleated Detail Slant Pocket Pants",
          "ProductName":"Men Fold Pleated Detail Slant Pocket Pants",
          "Price":40,
          "Tags":[
            "fruits",
            "food",
            "veggies",
          ],
          "Ratings":4.9
      },{
          "ImageProduct":"Men Fold Pleated Slant Pocket Suit Pants ( Black )",
          "ProductName":"Men Fold Pleated Slant Pocket Suit Pants ( Black )",
          "Price":40,
          "Tags":[
            "fruits",
            "food",
            "veggies",
          ],
          "Ratings":4.9
      },{
          "ImageProduct":"Men Gingham Print Drawstring Waist Wide Leg Pants",
          "ProductName":"Men Gingham Print Drawstring Waist Wide Leg Pants",
          "Price":40,
          "Tags":[
            "fruits",
            "food",
            "veggies",
          ],
          "Ratings":4.9
      },{
          "ImageProduct":"Men Letter _ Expression Print Flap Pocket Drawstring Waist Cargo Pants ( Black )",
          "ProductName":"Men Letter _ Expression Print Flap Pocket Drawstring Waist Cargo Pants ( Black )",
          "Price":40,
          "Tags":[
            "fruits",
            "food",
            "veggies",
          ],
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
                        <img src="Men Bottom/`+json_dress[key].Tags[0]+`.png" alt="">
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
        window.localStorage.setItem("image", "men/Men Bottom/"+json[b].ImageProduct);
        window.localStorage.setItem("name", json[b].ProductName);
        window.localStorage.setItem("price", json[b].Price);
        window.localStorage.setItem("tags", json[b].Tags);
        window.localStorage.setItem("ratings", json[b].Ratings);
    });
});