
			var pizza = {
				'size' :   ['Personal','Medium','Large','Extra Large'],
				'crust' :  ['Plain Crust', 'Garlic Butter Crust','Cheese Stuffed Crust','Spicy Crust','House Special Crust'],
				'sauce' :  ['Marinara Sauce','White Sauce','Barbecue Sauce','No Sauce'],
				'cheese' : ['Regular','Extra Cheese','No Cheese'],
				'meat' :   ['Pepperoni','Sausage','Canadian Bacon','Ground Beef','Anchovies','Chicken'],
				'veggie' : ['Tomatoes','Onions', 'Olives','Green Peppers','Mushrooms','Pineapple','Spinach','Jalapeño']
			};
			function pizzaOrder() {
				var customerPizza = {
					'size'   : [],
					'crust'  : [],
					'sauce'  : [],
					'cheese' : [],
					'meat'   : [],
					'veggie' : [],
					'cost'   : 0,
				};
				var i = 0;
				
				// Pizza Size
				var size = document.getElementsByName('size');
				for (i = 0; i < size.length; i++) {
					if (size[i].checked == true) {
						customerPizza.size = pizza.size[i];
						if (i == 0) {
							customerPizza.cost = customerPizza.cost + 6;
							document.getElementById('sizePrice').innerHTML = "Size Price: $6.00";
						}
						else if (i == 1) {
							customerPizza.cost = customerPizza.cost + 10;
							document.getElementById('sizePrice').innerHTML = "Size Price: $10.00";
						}
						else if (i == 2) {
							customerPizza.cost = customerPizza.cost + 14;
							document.getElementById('sizePrice').innerHTML = "Size Price: $14.00";
						}
						else if (i == 3) {
							customerPizza.cost = customerPizza.cost + 16;
							document.getElementById('sizePrice').innerHTML = "Size Price: $16.00";
						};
					};
				};
				document.getElementById('size').innerHTML = "Pizza Size: " + customerPizza.size;
				
				// Pizza Crust
				var crust = document.getElementsByName('crust');
				for (i = 0; i < crust.length; i++) {
					if (crust[i].checked == true) {
						customerPizza.crust = pizza.crust[i];
						if (i == 2) {
							customerPizza.cost = customerPizza.cost + 3;
							document.getElementById('crustPrice').innerHTML = "Stuffed Crust:  + $3.00";
						}
						else {
							document.getElementById('crustPrice').innerHTML = "";
						};
					};
				};
				document.getElementById('crust').innerHTML = customerPizza.crust;
				
				// Pizza Sauce
				var sauce = document.getElementsByName('sauce');
				for (i = 0; i < sauce.length; i++) {
					if (sauce[i].checked == true) {
						customerPizza.sauce = pizza.sauce[i];
					};
				};
				document.getElementById('saucePrice').innerHTML = ""
				document.getElementById('sauce').innerHTML = customerPizza.sauce;
				
				// cheese options if xtra cheese selected add $3.00
				var cheese = document.getElementsByName('cheese');
				for (i = 0; i < cheese.length; i++) {
					if (cheese[i].checked == true) {
						customerPizza.cheese = pizza.cheese[i];
						if (i == 1) {
							customerPizza.cost = customerPizza.cost + 3;
							document.getElementById('cheesePrice').innerHTML = "Extra Cheese: + $3.00";
						}
						else {
							document.getElementById('cheesePrice').innerHTML = "";
						};
					};
				};
				document.getElementById('cheese').innerHTML = customerPizza.cheese;
				
				// meat options if meat is > 1 , each additional meat is $1.00
				var meat = document.getElementsByName('meat');
				for (i = 0; i < meat.length; i++) {
					if (meat[i].checked == true) {
						customerPizza.meat[customerPizza.meat.length] = pizza.meat[i];
					};
				};
				if (customerPizza.meat.length > 1) {
					customerPizza.cost = customerPizza.cost + (customerPizza.meat.length - 1);
					document.getElementById('meatPrice').innerHTML = "Extra Meat: + $" + (customerPizza.meat.length - 1) + ".00";
				}
				else {
					document.getElementById('meatPrice').innerHTML = "";
				};
				document.getElementById('meat').innerHTML = customerPizza.meat;
				
				//veggie options if veggie is > 1 , each additional meat is $1.00
				var veggie = document.getElementsByName('veggie');
				for (i = 0; i < veggie.length; i++) {
					if (veggie[i].checked == true) {
						customerPizza.veggie[customerPizza.veggie.length] = pizza.veggie[i];
					};
				};
				if (customerPizza.veggie.length > 1) {
					customerPizza.cost = customerPizza.cost + (customerPizza.veggie.length - 1);
					document.getElementById('veggiePrice').innerHTML = "Extra Veggies: + $" + (customerPizza.veggie.length - 1) + ".00";
				}
				else {
					document.getElementById('veggiePrice').innerHTML = "";
				};
				document.getElementById('veggie').innerHTML = customerPizza.veggie;
				
				document.getElementById('pizzaTotal').innerHTML = "Total: $" + customerPizza.cost + ".00";
			};
		