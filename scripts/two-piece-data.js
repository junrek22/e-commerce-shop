$(document).ready(function(){
    const dress = `[
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
    let json = JSON.parse(dress)
    $(".shop-select").click(function(){
        let a = $(this).attr("id");
        let b = a.substring(4);
        window.localStorage.clear();
        window.localStorage.setItem("image", json[b].ImageProduct);
        window.localStorage.setItem("name", json[b].ProductName);
        window.localStorage.setItem("price", json[b].Price);
        window.localStorage.setItem("tags", json[b].Tags);
        window.localStorage.setItem("ratings", json[b].Ratings);
    });
});