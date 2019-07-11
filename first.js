// что заказал клиент

cola = 2;
pizza = 2;
soop = 3;

// стоимость 

cola_price = 12.50;
pizza_price = 58.90;
soop_price = 36.80;
 
//общая стоимость

total_cost = cola*cola_price 
+ pizza * pizza_price
+ soop * soop_price;
console.log(total_cost + " lei");
//бесплатная доставка
console.log( "Бесплатная доставка " + (total_cost >=200));
