$(document).ready(function(){
    let dress = `[
  {
    "ImageProduct":"Dress1",
    "ProductName":"Square Neck Puff Sleeve Ruffle Hem Dress",
    "Price":45,
    "Tags":"Dress #TopRated",
    "Ratings":4.9
},{
    "ImageProduct":"Dress2",
    "ProductName":"Rib-knit Bodycon Dress",
    "Price":30,
    "Tags":"#Dress",
    "Ratings":4.9
},{
    "ImageProduct":"Dress3",
    "ProductName":"Halter Neck Dress",
    "Price":30,
    "Tags":"#Dress #TopRated",
    "Ratings":4.5
},{
    "ImageProduct":"Dress4",
    "ProductName":"Solid Shirred Waist Fold Pleated Shirt Dress",
    "Price":45,
    "Tags":"#Dress #TopRated",
    "Ratings":4.9
},{
    "ImageProduct":"Dress5",
    "ProductName":"Flower Dotted Dress",
    "Price":40,
    "Tags":"#Dress",
    "Ratings":4.9
},{
    "ImageProduct":"Dress6",
    "ProductName":"Drawstring Halter Dress",
    "Price":40,
    "Tags":"#Dress",
    "Ratings":4.9
},{
    "ImageProduct":"Dress7",
    "ProductName":"Contrast Mesh Flounce Sleeve Tie Neck Cut Out Front Dress",
    "Price":40,
    "Tags":"#Dress",
    "Ratings":4.9
},{
    "ImageProduct":"Dress8",
    "ProductName":"Breasted Bow Overall Dress",
    "Price":50,
    "Tags":"#Dress",
    "Ratings":4.9
}
] `
    window.localStorage.clear();
    var dom_women = document.getElementsByClassName("market-list");
    let json_dress = JSON.parse(dress)
    let item = []
    for (const key in json_dress) {
        item[key] = "item"+key;
       dom_women[0].innerHTML += `
       <a href="../buy.html" class="shop-select" id="item`+key+`">
                <div class="shop-card">
                    <div class="image-product">
                        <img src="Women Dress/`+json_dress[key].ImageProduct+`.png" alt="">
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

    $(".shop-select").click(function(){
        let a = $(this).attr("id");
        let b = a.substring(4);
        window.localStorage.clear();
        window.localStorage.setItem("image", "women/Women Dress/"+json_dress[b].ImageProduct);
        window.localStorage.setItem("name", json_dress[b].ProductName);
        window.localStorage.setItem("price", json_dress[b].Price);
        window.localStorage.setItem("tags", json_dress[b].Tags);
        window.localStorage.setItem("ratings", json_dress[b].Ratings);
    });
});