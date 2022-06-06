//https://masai-vouchers-api.herokuapp.com/api/vouchers

let data = async () => {
    const url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;

    try {
        let res = await fetch(url);

        let result = await res.json();

        append(result[0].vouchers);
        console.log(result[0].vouchers)


    } catch (err) {
        console.log(err)

    }

}

data();

let user = JSON.parse(localStorage.getItem("purchase")) || [];
let main = JSON.parse(localStorage.getItem("user")) || [];
let amount = main.reduce(function (sum, el) {
    return sum + Number(el.amount);
}, 0);

wallet_balance.innerText = amount;
console.log(amount)



let container = document.getElementById("voucher_list");
function append(data) {
    data.forEach(function (el) {


        let div = document.createElement("div");
        div.setAttribute("class", "voucher")

        let img = document.createElement("img");
        img.src = el.image;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("h3");
        price.innerText = el.price;

        let buy = document.createElement("button");
        buy.innerText = "Buy";
        buy.setAttribute("id", "buy_voucher");
        buy.addEventListener("click", function () {
            purchase(el,price);
        })


        div.append(img, name, price, buy);

        container.append(div)
    })
}


let purchase = (el,price) => {
    // console.log(el);
    console.log(wallet_balance,price)
    if (wallet_balance >= price) {
        user.push(el);
        localStorage.setItem("purchase", JSON.stringify(user));
        localStorage.setItem("user",JSON.stringify(main));
        alert("Hurray! purchase successful");
    }
    else{
        alert("Sorry! insufficient balance");
    }

}
