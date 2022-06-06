let user = JSON.parse(localStorage.getItem("purchase"));

let main = JSON.parse(localStorage.getItem("user"));

let amount = main.reduce(function (sum,el) {
    return sum + Number(el.amount);
}, 0);

wallet_balance.innerText = amount;

let data = document.getElementById("purchased_vouchers")


user.forEach(function(el){

    let div = document.createElement("div");
    div.setAttribute("class","voucher")

    let img = document.createElement("img");
    img.src = el.image;

    let name = document.createElement("p");
    name.innerText = el.name;

    let price = document.createElement("h3");
    price.innerText = el.price;

    div.append(img,name,price)

    data.append(div);

})

append()