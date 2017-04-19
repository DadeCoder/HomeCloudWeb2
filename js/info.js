var infoApp = angular.module("infoApp",['ui.router']); 

infoApp.controller('infoImgCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	// active li
	var info = document.getElementById("info");
	var buy = document.getElementById("buy");
	var sell = document.getElementById("sell");
	var rent = document.getElementById("rent");
	removeClass(sell,"active");
	removeClass(rent,"active");
	removeClass(buy,"active");
	addClass( info,"active" ); 

	function hasClass( elements,cName ){ 
		return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
		// ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断 
	}; 

	function addClass( elements,cName ){ 
		if( !hasClass( elements,cName ) ){ 
			elements.className += " " + cName; 
		}; 
	}; 

	function removeClass( elements,cName ){ 
		if( hasClass( elements,cName ) ){ 
		elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " );
		 // replace方法是替换 
		}; 
	}; 

	 $http.get('http://localhost:8090/api/purchaser/getImage/', {withCredentials: true}).then(function(response) {
        console.log(response.data);
        $scope.myVar = "http://127.0.0.1:8089/" + response.data;
    });

}]);	


infoApp.controller('indexAllCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	 getData = function(){
        $http({
         url:'http://localhost:8090/api/house/getPriceAll/',
         method: 'get',  
         withCredentials: true
        }).success(function(response){
         console.log("success!");
         console.log(response);
         $scope.ilist = response;
        }).error(function(response){
         console.log("error");
        });
    };

    getData();

    $scope.getRentHouse = function(houseId,type){
        console.log(houseId);
        console.log(type);
        if (type == 0) {
        	$sessionStorage.put("rentHouseId", houseId);
        	setTimeout(go, 500);
			function go(){ 
				$state.go('rentHouse', {}, { reload: true });
			} 
        }
        if (type == 1) {
        	$sessionStorage.put("buyHouseId", houseId);
        	setTimeout(go, 500);
			function go(){ 
				$state.go('buyHouse', {}, { reload: true });
			} 
        }
    }
}]);

infoApp.controller('indexUpCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	 getData = function(){
        $http({
         url:'http://localhost:8090/api/house/getPriceUp/',
         method: 'get',  
         withCredentials: true
        }).success(function(response){
         console.log("success!");
         console.log(response);
         $scope.ilist = response;
        }).error(function(response){
         console.log("error");
        });
    };

    getData();

    $scope.getRentHouse = function(houseId,type){
        console.log(houseId);
        console.log(type);
        if (type == 0) {
        	$sessionStorage.put("rentHouseId", houseId);
        	setTimeout(go, 500);
			function go(){ 
				$state.go('rentHouse', {}, { reload: true });
			} 
        }
        if (type == 1) {
        	$sessionStorage.put("buyHouseId", houseId);
        	setTimeout(go, 500);
			function go(){ 
				$state.go('buyHouse', {}, { reload: true });
			} 
        }
    }

}]);

infoApp.controller('indexDownCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){

	getData = function(){
        $http({
         url:'http://localhost:8090/api/house/getPriceDown/',
         method: 'get',  
         withCredentials: true
        }).success(function(response){
         console.log("success!");
         console.log(response);
         $scope.ilist = response;
        }).error(function(response){
         console.log("error");
        });
    };

    getData();

    $scope.getRentHouse = function(houseId,type){
        console.log(houseId);
        console.log(type);
        if (type == 0) {
        	$sessionStorage.put("rentHouseId", houseId);
        	setTimeout(go, 500);
			function go(){ 
				$state.go('rentHouse', {}, { reload: true });
			} 
        }
        if (type == 1) {
        	$sessionStorage.put("buyHouseId", houseId);
        	setTimeout(go, 500);
			function go(){ 
				$state.go('buyHouse', {}, { reload: true });
			} 
        }
    }

}]);	

infoApp.controller('scheduleCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	$http({
     url:'http://localhost:8090/api/house/getAfterOrder/',
     method: 'get',  
     withCredentials: true
    }).success(function(response){
     console.log("success!");
     console.log(response);
     $scope.list = response;
     $scope.scheduleNo = $scope.list.length;
    }).error(function(response){
     console.log("error");
    });

}]);

infoApp.controller('focusBuyCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	getData = function(){
        $http({
         url:'http://localhost:8090/api/house/getFocusSell/',
         method: 'get',  
         withCredentials: true
        }).success(function(response){
         console.log("success!");
         // console.log(response);
         $scope.hlist = response;
        }).error(function(response){
         console.log("error");
        });
    };

    getData();

    $scope.getSellHouse = function(houseId){
        console.log(houseId);
        //$window.localStorage["rentHouseId"]=houseId;
        //$window.location.href='../buyHouse.html';
        $sessionStorage.put("buyHouseId", houseId);
        	setTimeout(go, 500);
			function go(){ 
				$state.go('buyHouse', {}, { reload: true });
			} 
    }

    $scope.cancel = function(houseId){
        console.log("cancel ID:", houseId);
        $http({
             url:'http://localhost:8090/api/house/cancel_focus/',
             method: 'get',  
             params:{
                  'houseId':houseId,
               },
             withCredentials: true
            }).success(function(response){
             console.log("cancel_focus success!");
             $state.go('info-focus-buy', {}, { reload: true });
            }).error(function(response){
             console.log("cancel_focus error");
            });
        
    }

}]);

infoApp.controller('focusRentCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	getData = function(){
        $http({
         url:'http://localhost:8090/api/house/getFocusRent/',
         method: 'get',  
         withCredentials: true
        }).success(function(response){
         console.log("success!");
         // console.log(response);
         $scope.hlist = response;
        }).error(function(response){
         console.log("error");
        });
    };

    getData();

    $scope.getRentHouse = function(houseId){
        console.log(houseId);
        //$window.localStorage["rentHouseId"]=houseId;
        //$window.location.href='../rentHouse.html';
        $sessionStorage.put("rentHouseId", houseId);
        	setTimeout(go, 500);
			function go(){ 
				$state.go('rentHouse', {}, { reload: true });
			} 
    }

}]);

infoApp.controller('focusSellCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	getData = function(){
        $http({
         url:'http://localhost:8090/api/purchaser/getAllSell/',
         method: 'get',  
         withCredentials: true
        }).success(function(response){
         console.log("focusSellCtrl success!");
        //console.log(response);
         $scope.hlist = response;
        }).error(function(response){
         console.log("error");
        });
    };

    $scope.access = false;
    getData();

    

    $scope.getSellHouse = function(houseId){
        console.log(houseId);
        //$window.localStorage["rentHouseId"]=houseId;
        //$window.location.href='../buyHouse.html';
        $sessionStorage.put("buyHouseId", houseId);
            setTimeout(go, 500);
            function go(){ 
                $state.go('buyHouse', {}, { reload: true });
            } 
    }

}]);

infoApp.controller('focusRentOutCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	getData = function(){
        $http({
         url:'http://localhost:8090/api/purchaser/getAllRent/',
         method: 'get',  
         withCredentials: true
        }).success(function(response){
         console.log("success!");
         // console.log(response);
         $scope.hlist = response;
        }).error(function(response){
         console.log("error");
        });
    };

    getData();

    $scope.getRentOutHouse = function(houseId){
        console.log(houseId);
        //$window.localStorage["rentHouseId"]=houseId;
        //$window.location.href='../buyHouse.html';
        $sessionStorage.put("rentHouseId", houseId);
            setTimeout(go, 500);
            function go(){ 
                $state.go('rentHouse', {}, { reload: true });
            } 
    }

}]);

infoApp.controller('BookListCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){

	$http({
     url:'http://localhost:8090/api/house/getBeforeOrder/',
     method: 'get',  
     withCredentials: true
    }).success(function(response){
     console.log("success!");
     console.log(response);
     $scope.list = response;
     $scope.scheduleNo = $scope.list.length;
    }).error(function(response){
     console.log("error");
    });

}]);

infoApp.controller('dataPwdCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	$scope.user = {
            oldPwd:'',
        }

      $scope.newPwd = function(){

            var oldhash = hex_md5($scope.user.oldPwd);
            var newhash = hex_md5($scope.password);

            console.log($scope.user.oldPwd);
            console.log($scope.password);

            $http({
             url:'http://localhost:8090/api/purchaser/newPwd/',
             method: 'get',  
             params:{
                  'oldhash':oldhash,
                  'newhash':newhash
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");

            if (response == 'false') {
                alert("旧密码不正确");
            }
            else{
                $window.location.href='../../login.html';
            }

             // $scope.user = {
             //        oldPwd : '',
             //        newPwd : ''
             //     }

            }).error(function(response){
             console.log("error");
            });
        }

}]);

infoApp.controller('dataNickCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	$scope.user = {
            old:'',
            nick:''
        }

        getData = function(){
            $http({
             url:'http://localhost:8090/api/purchaser/getNick/',
             method: 'get',  
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             // console.log(response);
             $scope.user = {
                old : response
             }
             var user = $sessionStorage.get('user');
             // console.log(user);
             user.name = response;
             // console.log(user);
             $sessionStorage.put('user', user);

            }).error(function(response){
             console.log("error");
            });
        };

        getData();

      $scope.newNick = function(){

            $http({
             url:'http://localhost:8090/api/purchaser/newNick/',
             method: 'get',  
             params:{
                  'nick':$scope.user.nick
               },
             withCredentials: true
            }).success(function(response){
             console.log("newNick success!", response);
             if (response == 'true') {
                 getData();

            }else{
                // console.log("该名称已存在！")
                alert("该名称已存在！");
            }
            var temp = $scope.user.old;
             $scope.user = {
                    nick : '',
                    old : temp
                 }
            window.location.reload();
            }).error(function(response){
             console.log("error");
            });

      }

}]);


infoApp.controller('dataBuyCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
    $scope.new = {
            price:''
        }

        getData = function(){
            $http({
             url:'http://localhost:8090/api/purchaser/getBuy/',
             method: 'get',  
             withCredentials: true
            }).success(function(response){
             console.log("getBuy success!", response);
             $scope.hlist = response;
            }).error(function(response){
             console.log("error");
            });
        };

        getData();
      
}]);

infoApp.controller('dataRentedCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
    $scope.new = {
            price:''
        }

        getData = function(){
            $http({
             url:'http://localhost:8090/api/purchaser/getRented/',
             method: 'get',  
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             $scope.hlist = response;
            }).error(function(response){
             console.log("error");
            });
        };

        getData();
      
}]);

infoApp.controller('dataSellCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	$scope.new = {
            price:''
        }

        getData = function(){
            $http({
             url:'http://localhost:8090/api/purchaser/getSell/',
             method: 'get',  
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             $scope.hlist = response;
            }).error(function(response){
             console.log("error");
            });
        };

        getData();

        function hasClass( elements,cName ){ 
            return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
            // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断 
      }; 

      function addClass( elements,cName ){ 
            if( !hasClass( elements,cName ) ){ 
                  elements.className += " " + cName; 
            }; 
      }; 

      $scope.stopSell = function(houseId){

            $http({
             url:'http://localhost:8090/api/house/stopSell/',
             method: 'get',  
             params:{
                  'houseId':houseId,
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
                var pid = document.getElementById("stopBtn");
                addClass( pid,"disabled" ); 
            }).error(function(response){
             console.log("error");
            });
      }

      $scope.newBtn = function(houseId){

            console.log($scope.new.price);

            $http({
             url:'http://localhost:8090/api/house/changePrice/',
             method: 'get',  
             params:{
                  'houseId':houseId,
                  'price':$scope.new.price
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             $scope.new = {
                price : ''
             }
             getData();
            }).error(function(response){
             console.log("error");
            });

      }
}]);

infoApp.controller('dataRentCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	$scope.new = {
            price:''
        }

        getData = function(){
            $http({
             url:'http://localhost:8090/api/purchaser/getRent/',
             method: 'get',  
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             $scope.hlist = response;
            }).error(function(response){
             console.log("error");
            });
        };

        getData();

        function hasClass( elements,cName ){ 
            return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
            // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断 
      }; 

      function addClass( elements,cName ){ 
            if( !hasClass( elements,cName ) ){ 
                  elements.className += " " + cName; 
            }; 
      }; 

      $scope.stopRent = function(houseId){

            $http({
             url:'http://localhost:8090/api/house/stopRent/',
             method: 'get',  
             params:{
                  'houseId':houseId,
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
                var pid = document.getElementById("stopBtn");
                addClass( pid,"disabled" ); 
            }).error(function(response){
             console.log("error");
            });
      }

      $scope.newBtn = function(houseId){

            console.log($scope.new.price);

            $http({
             url:'http://localhost:8090/api/house/changePrice/',
             method: 'get',  
             params:{
                  'houseId':houseId,
                  'price':$scope.new.price
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             $scope.new = {
                price : ''
             }
             getData();
            }).error(function(response){
             console.log("error");
            });

      }

}]);


