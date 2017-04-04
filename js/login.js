var loginApp = angular.module("loginApp",['ui.router']); 

loginApp.config(function($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
});


loginApp.controller('loginCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){

	console.log("loginCtrl");

	$scope.login = function() {

		var hash = hex_md5($scope.credentials.password);

		var h = {authorization : "Basic "
		+ btoa($scope.credentials.username + ":" + hash)
		};

		console.log(hash);
		console.log(h);

		$http.get('http://localhost:8090/login/',{withCredentials: true,headers : h})
			.success(function(response) {
				//console.log(response); 
				$sessionStorage.put('user', response,1);
				setTimeout(go, 500);
				function go(){ 
					$state.go('index', {}, { reload: true });
				} 
				
			})
			.error(function(response) {
				alert("Wrong account or password"); 
			});

	};


}]);

loginApp.controller('RegiCtrl',['$scope','$http','$state', function($scope, $http, $state){

	$scope.user={
		username:"",
		password:"",
		phoneNumber:""
	};

	$scope.regi = function(){
		var hash = hex_md5($scope.user.password);

		console.log(hash);

		var dto = {
			username:$scope.user.username,
			password:hash,
			phoneNumber:$scope.user.phoneNumber
		}

		console.log("dto: ");
		console.log(dto);

		 $http({
		   url:'http://localhost:8090/api/general/register/',
		   method: 'POST',  
		   headers: {'Content-type': 'application/json;charset=UTF-8'},
		   data: dto  
		  }).success(function(response){
		   //console.log("success!");
		   //console.log(response.data);
		  }).error(function(response){
		   //console.log("error");
		   //console.log(response);
		  });

		  setTimeout(go, 500);
		  function go(){ 
			$state.go('login');
		 } 
			  

		}

}]);

loginApp.controller('imgCtrl',['$scope','$http','$state', function($scope, $http, $state){

	$http.get('http://localhost:8090/api/purchaser/getImage/', {withCredentials: true}).then(function(response) {
		console.log(response.data);
		$scope.myVar = "http://127.0.0.1:8089/" + response.data;
	});

}]);

loginApp.controller('logOutCtrl',['$scope','$http','$state', '$sessionStorage', function($scope, $http, $state, $sessionStorage){

	$scope.logOut = function(){
		$sessionStorage.remove('user');
	}

}]);




