function Info(n, e, a, am) {
    this.name = n;
    this.email = e;
    this.address = a;
    this.amount = am;
}
    let form = document.getElementById("form")
let submitInfo = (e) => {

    //form.innerText = null
    e.preventDefault();
    
    let user = JSON.parse(localStorage.getItem("user")) || [];

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let amount = document.getElementById("amount").value;

    let a1 = new Info(name, email, address, amount);

    user.push(a1);

    console.log(a1);
    
    localStorage.setItem("user",JSON.stringify(user));


}


