
let shop = document.getElementById("shop")

let shopItemsData = [{
    id: "123456",
    name:"Клетчатка сибирская Правильное Похудение 2.0 с пребиотиками",
    price:50,
    desc:"Плавное снижение и эффективное удержание оптимального веса с заботой о своём здоровье.",
    img:"images/img1.jpg",
    },
    {
        id: "123457",
        name:"Сибирская клетчатка «Витаминная»",
        price:55,
        desc:"Комплексный продукт из клетчатки и ягод для поддержания внутренних резервов организма в осеннее, весеннее время и в период восстановления после заболеваний.",
        img:"images/img1.jpg",
    
    },
    {
        id: "123458",
    name:"Сибирская клетчатка «Ржаная с фруктами»",
    price:45,
    desc:"Процесс снижение веса пойдет быстрее и эффективнее, если добавить в пищу клетчатку, которая поможет уменьшить аппетит, избежать случайных перекусов и снизить общую калорийность рациона питания.",
    img:"images/img1.jpg",
    },
    {
        id: "123459",
    name:"Сибирская клетчатка «Здоровые суставы»",
    price:60,
    desc:"Наш продукт способствует снижению веса, выведению токсинов, шлаков и лишней жидкости из организма, что оказывает полезное действие при комплексном лечении и профилактике заболеваний суставов.",
    img:"images/img4.jpg",
    },
    {
        id: "123460",
    name:"Сибирская клетчатка «Здоровая Печень» ФОРТЕ",
    price:45,
    desc:"Облегчает работу печени за счет своевременного выведения пищевых и бактериальных токсинов, канцерогенов из организма.",
    img:"images/img5.jpg",
    }]

console.log(shop);

let basket = [];

let generateShop =()=>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id,name,price,desc,img} = x;
        
        return `
      <div id=product-id-${id} class="item">
          <img width="220" src=${img} alt="">
          <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
              <h2>$ ${price} </h2>
              <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">0</div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        </div>
      `;
      }).join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  update(selectedItem);
  
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem);
  basket = basket.filter((x) => x.item !== 0);
  // console.log(basket);

};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  
};