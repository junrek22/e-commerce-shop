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