
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







// Question 4

var wood = items.filter(function (x) {
	return (x.materials.includes("wood"))
})


var answer4 = document.getElementById("answer4");

answer4.innerHTML += wood[0].title;
answer4.innerHTML += wood[1].title;
answer4.innerHTML += wood[2].title;
answer4.innerHTML += wood[3].title;
answer4.innerHTML += wood[4].title;




// Question 5



 var mat = items.filter(function (x) {
 	return (x.materials.length > 8  )
 })

var answer5 = document.getElementById("answer5");

answer5.innerHTML += mat[0].title;
// make page break
answer5.innerHTML += mat[0].materials;
// make page break
answer5.innerHTML += mat[1].title;
// make page break
answer5.innerHTML += mat[1].materials;



// Question 6

var made = items.filter(function (x) {
	return (x.who_made === "i_did");
	
})

var answer6 = document.getElementById("answer6");
answer6.innerHTML = made.length;

























