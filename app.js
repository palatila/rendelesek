const orders = [

    {
        id: 1,
        pizza: "Hawai",
        extra: "Kukoica",
        ital: "Pepsi zero",
        ar: 1500,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        id: 2,
        pizza: "Songoku",
        extra: "Peperóni",
        ital: "Fanta",
        ar: 1900,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        id: 3,
        pizza: "4Sajtos",
        extra: "Sonka",
        ital: "CocaCola",
        ar: 1200,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        id: 4,
        pizza: "Magyaros",
        extra: "Kukorica",
        ital: "Sprite",
        ar: 1900,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        id: 5,
        pizza: "Húsos",
        extra: "Parmezán",
        ital: "Redbull",
        ar: 1600,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        id: 6,
        pizza: "Vegán",
        extra: "Tofú",
        ital: "Szentkirályi viz",
        ar: 3000,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
       
]
const result = document.querySelector(".result");

let output = "";
orders.map((order)=>{

    output += `
    
        <div class='order'>
        
            <div>
                <img src='${order.kep}' alt='pizza' />
            </div>    
        <h3>${order.pizza}</h3>
        <hr>
        <h4>Ár: ${order.ar}</h4>
        <p>Extra: ${order.extra}</p>
        <p>Ital: ${order.ital}</p>
         
        </div>
    
    `;


})

result.innerHTML = output;