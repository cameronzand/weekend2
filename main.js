
// Question 1

var getPrices = function(item){
	return item.price;
}

var answer1 = document.getElementById("answer1");
var price = items.map(getPrices)

var averagePrice = function (avgPriceArr){
var total = 0;
for(var i = 0; i < avgPriceArr.length; i++) {
    total += avgPriceArr[i];
    // total = total + avgPriceArr[i]; <-- Same as +=
}
	//return total / avgPriceArr.length;
	var ans = total / avgPriceArr.length;

	answer1.innerHTML = ans;
};

averagePrice(price);



// Question 2



var priceRange = items.filter(function (x) { 
	return (x.price > 14 && x.price < 18)
} )
 

var answer2 = document.getElementById("answer2");

// answer2.innerHTML += priceRange[0].title;
// answer2.innerHTML += priceRange[1].title;
// answer2.innerHTML += priceRange[2].title;

var p = document.createElement("p");
p.innerHTML = priceRange[0].title;
answer2.appendChild(p);

var p = document.createElement("p");
p.innerHTML = priceRange[1].title;
answer2.appendChild(p);

var p = document.createElement("p");
p.innerHTML = priceRange[2].title;
answer2.appendChild(p);


// Question 3






var currencyCode = items.filter(function (x) {
	return (x.currency_code === "GBP")
} )

var answer3 = document.getElementById("answer3");

answer3.innerHTML += currencyCode[0].title;
answer3.innerHTML += currencyCode[0].price;






























