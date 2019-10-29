var app = angular.module("myModule", [])
				.controller("myController", function($scope){
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "Nakles Gold", p_image: "images/jpic7.png", p_price: 28990},
					{p_id: "2", p_name: "Diamond chain", p_image: "images/jpic9.png", p_price: 60138},
					{p_id: "3", p_name: "Golden mala", p_image: "images/jpic10.png", p_price: 1519000},
					{p_id: "4", p_name: "ALIENWARE ", p_image: "images/jpic.png", p_price: 75187},
					{p_id: "5", p_name: "Nakles", p_image: "images/c.png", p_price: 50115000},
					{p_id: "6", p_name: "Showcase of cloths", p_image: "images/fpic.png", p_price: 9013},
					{p_id: "7", p_name: "Juwelary", p_image: "images/jpic8.png", p_price: 9013},
					{p_id: "6", p_name: "Jaamdani sharee", p_image: "images/pic9.png", p_price: 9013},
					{p_id: "6", p_name: "Katan sharee", p_image: "images/pic7.png", p_price: 9013},
					{p_id: "6", p_name: "Banaroshi ", p_image: "images/pic5.png", p_price: 9013},
					{p_id: "6", p_name: "Pakija ", p_image: "images/pic6.png", p_price: 9013},
					{p_id: "6", p_name: "Jorizet ", p_image: "images/pic11.png", p_price: 9013},
					{p_id: "6", p_name: "Katan shari", p_image: "images/pic10.png", p_price: 9013}
					//{p_id: "6", p_name: "Motorola Moto G4 16GB", p_image: "images/6.png", p_price: 9013},
					//{p_id: "6", p_name: "Motorola Moto G4 16GB", p_image: "images/6.png", p_price: 9013}
					
				];
				
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
					}	
				}
						
					
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}
	});