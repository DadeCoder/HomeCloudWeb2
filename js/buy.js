var buyApp = angular.module("buyApp",['ui.router','ui.bootstrap']); 

buyApp.controller('cdtCtrl',['$scope','$http','$state', '$sessionStorage', function($scope, $http, $state, $sessionStorage){

	// active li
	var info = document.getElementById("info");
	var buy = document.getElementById("buy");
	var sell = document.getElementById("sell");
	var rent = document.getElementById("rent");
	removeClass(info,"active");
	removeClass(rent,"active");
	removeClass(sell,"active");
	addClass( buy,"active" ); 

	$scope.condition = ["区域不限","售价不限","面积不限","房型不限","楼层不限"];

	var data = [];

	$scope.maxSize = 3; //可点击的页码个数 
    $scope.numPages = data.length; //总页码数
    $scope.itemSize = 3; //每页条目数
    $scope.bigTotalItems = data.length;

    $scope.hno = data.length;

    $scope.hlist = data.slice(0, $scope.itemSize);

    $scope.showItems = function() {
        $scope.hlist = data.slice(($scope.bigCurrentPage-1)*$scope.itemSize, ($scope.bigCurrentPage-1)*$scope.itemSize + $scope.itemSize)
    }


	$scope.gotCdt = function(event){
		remove(event.target.getAttribute("id"));
		console.log(event.target.getAttribute("value"));
		$scope.condition[0] = event.target.getAttribute("value");
	}

	function remove(eid){
		var d0 = document.getElementById("d0"); 
		var d1 = document.getElementById("d1"); 
		var d2 = document.getElementById("d2"); 
		var d3 = document.getElementById("d3"); 
		var d4 = document.getElementById("d4"); 
		var d5 = document.getElementById("d5"); 
		var d6 = document.getElementById("d6"); 
		var d7 = document.getElementById("d7"); 
		var d8 = document.getElementById("d8");
		var d9 = document.getElementById("d9");
		var d10 = document.getElementById("d10");
		var d11 = document.getElementById("d11");
		var d12 = document.getElementById("d12");

		removeClass(d0,"text-danger");
		removeClass(d1,"text-danger");
		removeClass(d2,"text-danger");
		removeClass(d3,"text-danger");
		removeClass(d4,"text-danger");
		removeClass(d5,"text-danger");
		removeClass(d6,"text-danger");
		removeClass(d7,"text-danger");
		removeClass(d8,"text-danger");
		removeClass(d9,"text-danger");
		removeClass(d10,"text-danger");
		removeClass(d11,"text-danger");
		removeClass(d12,"text-danger");

		var did = document.getElementById(eid);
		addClass( did,"text-danger" ); 
	}

	$scope.gotCdtP = function(event){
		removeP(event.target.getAttribute("id"));
		console.log(event.target.getAttribute("value"));
		$scope.condition[1] = event.target.getAttribute("value");
	}

	function removeP(eid){
		var p0 = document.getElementById("p0"); 
		var p1 = document.getElementById("p1"); 
		var p2 = document.getElementById("p2"); 
		var p3 = document.getElementById("p3"); 
		var p4 = document.getElementById("p4"); 
		var p5 = document.getElementById("p5"); 
		var p6 = document.getElementById("p6"); 
		var p7 = document.getElementById("p7"); 
		var p8 = document.getElementById("p8");

		removeClass(p0,"text-danger");
		removeClass(p1,"text-danger");
		removeClass(p2,"text-danger");
		removeClass(p3,"text-danger");
		removeClass(p4,"text-danger");
		removeClass(p5,"text-danger");
		removeClass(p6,"text-danger");
		removeClass(p7,"text-danger");
		removeClass(p8,"text-danger");

		var pid = document.getElementById(eid);
		addClass( pid,"text-danger" ); 
	}

	$scope.gotCdtS = function(event){
		removeS(event.target.getAttribute("id"));
		console.log(event.target.getAttribute("value"));
		$scope.condition[2] = event.target.getAttribute("value");
	}

	function removeS(eid){
		var p0 = document.getElementById("s0"); 
		var p1 = document.getElementById("s1"); 
		var p2 = document.getElementById("s2"); 
		var p3 = document.getElementById("s3"); 
		var p4 = document.getElementById("s4"); 
		var p5 = document.getElementById("s5"); 
		var p6 = document.getElementById("s6"); 
		var p7 = document.getElementById("s7"); 

		removeClass(p0,"text-danger");
		removeClass(p1,"text-danger");
		removeClass(p2,"text-danger");
		removeClass(p3,"text-danger");
		removeClass(p4,"text-danger");
		removeClass(p5,"text-danger");
		removeClass(p6,"text-danger");
		removeClass(p7,"text-danger");

		var pid = document.getElementById(eid);
		addClass( pid,"text-danger" ); 
	}

	$scope.gotCdtT = function(event){
		removeT(event.target.getAttribute("id"));
		console.log(event.target.getAttribute("value"));
		$scope.condition[3] = event.target.getAttribute("value");
	}

	function removeT(eid){
		var p0 = document.getElementById("t0"); 
		var p1 = document.getElementById("t1"); 
		var p2 = document.getElementById("t2"); 
		var p3 = document.getElementById("t3"); 
		var p4 = document.getElementById("t4"); 
		var p5 = document.getElementById("t5"); 
		var p6 = document.getElementById("t6"); 

		removeClass(p0,"text-danger");
		removeClass(p1,"text-danger");
		removeClass(p2,"text-danger");
		removeClass(p3,"text-danger");
		removeClass(p4,"text-danger");
		removeClass(p5,"text-danger");
		removeClass(p6,"text-danger");

		var pid = document.getElementById(eid);
		addClass( pid,"text-danger" ); 
	}

	$scope.gotCdtF = function(event){
		removeF(event.target.getAttribute("id"));
		console.log(event.target.getAttribute("value"));
		$scope.condition[4] = event.target.getAttribute("value");
	}

	function removeF(eid){
		var p0 = document.getElementById("f0"); 
		var p1 = document.getElementById("f1"); 
		var p2 = document.getElementById("f2"); 
		var p3 = document.getElementById("f3"); 

		removeClass(p0,"text-danger");
		removeClass(p1,"text-danger");
		removeClass(p2,"text-danger");
		removeClass(p3,"text-danger");

		var pid = document.getElementById(eid);
		addClass( pid,"text-danger" ); 
	}

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

	$scope.getSellHouse = function(houseId){
		console.log(houseId);
		$sessionStorage.put("buyHouseId",houseId);
		//$window.localStorage["buyHouseId"]=houseId;
		// $window.location.href='../buyHouse.html';
		setTimeout(go, 500);
		function go(){ 
			$state.go('buyHouse', {}, { reload: true });
		} 
	}


	$scope.confirm = function(){
		$http({
               url:'http://localhost:8090/api/house/search/',
               method: 'POST',  
               headers: {'Content-type': 'application/json;charset=UTF-8'},
               data: $scope.condition,
               withCredentials: true
              }).success(function(response){
               console.log("success!");
               console.log(response);

               data = response.res;

			    $scope.numPages = data.length; //总页码数
			    $scope.bigTotalItems = data.length;
			    $scope.hno = data.length;

			    $scope.hlist = data.slice(0, $scope.itemSize);

              // $window.localStorage["picUrl"]=response;

              }).error(function(response){
               console.log("error");
               console.log(response);
              });
	}

	$scope.confirm();

}]);

buyApp.controller('rentCtrl',['$scope','$http','$state', '$sessionStorage', function($scope, $http, $state, $sessionStorage){

	// active li
	var info = document.getElementById("info");
	var buy = document.getElementById("buy");
	var sell = document.getElementById("sell");
	var rent = document.getElementById("rent");
	removeClass(info,"active");
	removeClass(buy,"active");
	removeClass(sell,"active");
	addClass( rent,"active" ); 

	$scope.condition = ["区域不限","售价不限","面积不限","房型不限","楼层不限"];

	var data = [];

	$scope.maxSize = 3; //可点击的页码个数
    $scope.numPages = data.length; //总页码数
    $scope.itemSize = 3; //每页条目数
    $scope.bigTotalItems = data.length;

    $scope.hno = data.length;

    $scope.hlist = data.slice(0, $scope.itemSize);

    $scope.showItems = function() {
        $scope.hlist = data.slice(($scope.bigCurrentPage-1)*$scope.itemSize, ($scope.bigCurrentPage-1)*$scope.itemSize + $scope.itemSize)
    }


	$scope.gotCdt = function(event){
		remove(event.target.getAttribute("id"));
		console.log(event.target.getAttribute("value"));
		$scope.condition[0] = event.target.getAttribute("value");
	}

	function remove(eid){
		var d0 = document.getElementById("d0"); 
		var d1 = document.getElementById("d1"); 
		var d2 = document.getElementById("d2"); 
		var d3 = document.getElementById("d3"); 
		var d4 = document.getElementById("d4"); 
		var d5 = document.getElementById("d5"); 
		var d6 = document.getElementById("d6"); 
		var d7 = document.getElementById("d7"); 
		var d8 = document.getElementById("d8");
		var d9 = document.getElementById("d9");
		var d10 = document.getElementById("d10");
		var d11 = document.getElementById("d11");
		var d12 = document.getElementById("d12");

		removeClass(d0,"text-danger");
		removeClass(d1,"text-danger");
		removeClass(d2,"text-danger");
		removeClass(d3,"text-danger");
		removeClass(d4,"text-danger");
		removeClass(d5,"text-danger");
		removeClass(d6,"text-danger");
		removeClass(d7,"text-danger");
		removeClass(d8,"text-danger");
		removeClass(d9,"text-danger");
		removeClass(d10,"text-danger");
		removeClass(d11,"text-danger");
		removeClass(d12,"text-danger");

		var did = document.getElementById(eid);
		addClass( did,"text-danger" ); 
	}

	$scope.gotCdtP = function(event){
		removeP(event.target.getAttribute("id"));
		console.log(event.target.getAttribute("value"));
		$scope.condition[1] = event.target.getAttribute("value");
	}

	function removeP(eid){
		var p0 = document.getElementById("p0"); 
		var p1 = document.getElementById("p1"); 
		var p2 = document.getElementById("p2"); 
		var p3 = document.getElementById("p3"); 
		var p4 = document.getElementById("p4"); 
		var p5 = document.getElementById("p5"); 
		var p6 = document.getElementById("p6"); 
		var p7 = document.getElementById("p7"); 
		var p8 = document.getElementById("p8");

		removeClass(p0,"text-danger");
		removeClass(p1,"text-danger");
		removeClass(p2,"text-danger");
		removeClass(p3,"text-danger");
		removeClass(p4,"text-danger");
		removeClass(p5,"text-danger");
		removeClass(p6,"text-danger");
		removeClass(p7,"text-danger");
		removeClass(p8,"text-danger");

		var pid = document.getElementById(eid);
		addClass( pid,"text-danger" ); 
	}

	$scope.gotCdtS = function(event){
		removeS(event.target.getAttribute("id"));
		console.log(event.target.getAttribute("value"));
		$scope.condition[2] = event.target.getAttribute("value");
	}

	function removeS(eid){
		var p0 = document.getElementById("s0"); 
		var p1 = document.getElementById("s1"); 
		var p2 = document.getElementById("s2"); 
		var p3 = document.getElementById("s3"); 
		var p4 = document.getElementById("s4"); 
		var p5 = document.getElementById("s5"); 
		var p6 = document.getElementById("s6"); 
		var p7 = document.getElementById("s7"); 

		removeClass(p0,"text-danger");
		removeClass(p1,"text-danger");
		removeClass(p2,"text-danger");
		removeClass(p3,"text-danger");
		removeClass(p4,"text-danger");
		removeClass(p5,"text-danger");
		removeClass(p6,"text-danger");
		removeClass(p7,"text-danger");

		var pid = document.getElementById(eid);
		addClass( pid,"text-danger" ); 
	}

	$scope.gotCdtT = function(event){
		removeT(event.target.getAttribute("id"));
		console.log(event.target.getAttribute("value"));
		$scope.condition[3] = event.target.getAttribute("value");
	}

	function removeT(eid){
		var p0 = document.getElementById("t0"); 
		var p1 = document.getElementById("t1"); 
		var p2 = document.getElementById("t2"); 
		var p3 = document.getElementById("t3"); 
		var p4 = document.getElementById("t4"); 
		var p5 = document.getElementById("t5"); 
		var p6 = document.getElementById("t6"); 

		removeClass(p0,"text-danger");
		removeClass(p1,"text-danger");
		removeClass(p2,"text-danger");
		removeClass(p3,"text-danger");
		removeClass(p4,"text-danger");
		removeClass(p5,"text-danger");
		removeClass(p6,"text-danger");

		var pid = document.getElementById(eid);
		addClass( pid,"text-danger" ); 
	}

	$scope.gotCdtF = function(event){
		removeF(event.target.getAttribute("id"));
		console.log(event.target.getAttribute("value"));
		$scope.condition[4] = event.target.getAttribute("value");
	}

	function removeF(eid){
		var p0 = document.getElementById("f0"); 
		var p1 = document.getElementById("f1"); 
		var p2 = document.getElementById("f2"); 
		var p3 = document.getElementById("f3"); 

		removeClass(p0,"text-danger");
		removeClass(p1,"text-danger");
		removeClass(p2,"text-danger");
		removeClass(p3,"text-danger");

		var pid = document.getElementById(eid);
		addClass( pid,"text-danger" ); 
	}

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

	$scope.getRentHouse = function(houseId){
		console.log(houseId);
		//$window.localStorage["rentHouseId"]=houseId;
		//$window.location.href='../rentHouse.html';

		$sessionStorage.put("rentHouseId",houseId);
		setTimeout(go, 500);
		function go(){ 
			$state.go('rentHouse', {}, { reload: true });
		} 
	}


	$scope.confirm = function(){
		$http({
               url:'http://localhost:8090/api/house/search_rent/',
               method: 'POST',  
               headers: {'Content-type': 'application/json;charset=UTF-8'},
               data: $scope.condition,
               withCredentials: true
              }).success(function(response){
               console.log("success!");
               console.log(response);

               data = response.res;

			    $scope.numPages = data.length; //总页码数
			    $scope.bigTotalItems = data.length;
			    $scope.hno = data.length;

			    $scope.hlist = data.slice(0, $scope.itemSize);

              // $window.localStorage["picUrl"]=response;

              }).error(function(response){
               console.log("error");
               console.log(response);
              });
	}

	$scope.confirm();

}]);

buyApp.controller('buyHouseCtrl',['$scope','$http','$state', '$sessionStorage', function($scope, $http, $state, $sessionStorage){

	// active li
	var info = document.getElementById("info");
	var buy = document.getElementById("buy");
	var sell = document.getElementById("sell");
	var rent = document.getElementById("rent");
	removeClass(info,"active");
	removeClass(rent,"active");
	removeClass(sell,"active");
	addClass( buy,"active" ); 

	toastr.options = {
        "closeButton": false, //是否显示关闭按钮
        "debug": false, //是否使用debug模式
        "positionClass": "toast-top-center",//弹出窗的位置
        "showDuration": "300",//显示的动画时间
        "hideDuration": "1000",//消失的动画时间
        "timeOut": "2000", //展现时间
        "extendedTimeOut": "1000",//加长展示时间
        "showEasing": "swing",//显示时的动画缓冲方式
        "hideEasing": "linear",//消失时的动画缓冲方式
        "showMethod": "fadeIn",//显示时的动画方式
        "hideMethod": "fadeOut" //消失时的动画方式
        };

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


	var houseId = $sessionStorage.get("buyHouseId");
	// var picUrl = $window.localStorage["picUrl"];

	// $scope.picUrl = picUrl;

	console.log(houseId);


	$http({
       url:'http://localhost:8090/api/house/getRentHouse/',
       method: 'get',  
       params:{
		'houseId':houseId,
		// 'picUrl':picUrl
	   },
       withCredentials: true
      }).success(function(response){
       console.log("success!");
       console.log(response);
       $scope.house = response;
      }).error(function(response){
       console.log("error");
       console.log(response);
      });

      $scope.buy = function(){
            console.log(houseId);
            $http({
             url:'http://localhost:8090/api/house/buy/',
             method: 'get',  
             params:{
                  'houseId':houseId,
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             toastr.success("购买成功！");
             // alert("购买成功！"); 
             var pid = document.getElementById("buyBtn");
             addClass( pid,"disabled" ); 

             setTimeout(go, 1000);
             function go(){
             	$state.go('info-data-buy', {}, { reload: true });
             }


            }).error(function(response){
             console.log("error");
            });
      }

      $http({
       url:'http://localhost:8090/api/house/isFocus/',
       method: 'get',  
       params:{
            'houseId':houseId,
      },
       withCredentials: true
      }).success(function(response){
       console.log("success!");
       console.log(response);
       // alert(response);
       // alert(response=='true');
       if (response == 'true') {
            // console("test");
            var pid = document.getElementById("focusBtn");
            addClass( pid,"disabled" ); 
       }
      }).error(function(response){
       console.log("error");
      });

      $scope.focus = function(){
            console.log(houseId);

            $http({
             url:'http://localhost:8090/api/house/focus/',
             method: 'get',  
             params:{
                  'houseId':houseId,
                  // 'picUrl':picUrl
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             // console.log(response);
             // $scope.house = response;
             var pid = document.getElementById("focusBtn");
            addClass( pid,"disabled" ); 
            }).error(function(response){
             console.log("error");
             // console.log(response);
            });

      }

      $http({
       url:'http://localhost:8090/api/house/isOrder/',
       method: 'get',  
       params:{
            'houseId':houseId,
      },
       withCredentials: true
      }).success(function(response){
       console.log("success!");
       console.log(response);
       if (response == 'false') {
            var pid = document.getElementById("orderBtn");
            addClass( pid,"disabled" ); 
       }
      }).error(function(response){
       console.log("error");
      });

      $scope.order = function(){
            console.log(houseId);

            $http({
             url:'http://localhost:8090/api/house/order/',
             method: 'get',  
             params:{
                  'houseId':houseId,
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             var pid = document.getElementById("orderBtn");
            addClass( pid,"disabled" ); 
            }).error(function(response){
             console.log("error");
            });

      }


      $scope._scrollTo = function(id){
      	var _id = document.getElementById(id);
　　　　window.scrollTo(0,_id.offsetTop);

		var introli = document.getElementById("introli");
		var conli = document.getElementById("conli");
		var recli = document.getElementById("recli");
		removeClass(introli,"active");
		removeClass(conli,"active");
		removeClass(recli,"active");
		addClass( _id,"active" ); 

      }
}]);


buyApp.controller('rentHouseCtrl',['$scope','$http','$state', '$sessionStorage', function($scope, $http, $state, $sessionStorage){

	// active li
	var info = document.getElementById("info");
	var buy = document.getElementById("buy");
	var sell = document.getElementById("sell");
	var rent = document.getElementById("rent");
	removeClass(info,"active");
	removeClass(buy,"active");
	removeClass(sell,"active");
	addClass( rent,"active" ); 

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


	var houseId = $sessionStorage.get("rentHouseId");
	// var picUrl = $window.localStorage["picUrl"];

	// $scope.picUrl = picUrl;

	console.log(houseId);


	$http({
       url:'http://localhost:8090/api/house/getRentHouse/',
       method: 'get',  
       params:{
		'houseId':houseId,
		// 'picUrl':picUrl
	   },
       withCredentials: true
      }).success(function(response){
       console.log("success!");
       console.log(response);
       $scope.house = response;
      }).error(function(response){
       console.log("error");
       console.log(response);
      });


      toastr.options = {
        "closeButton": false, //是否显示关闭按钮
        "debug": false, //是否使用debug模式
        "positionClass": "toast-top-center",//弹出窗的位置
        "showDuration": "300",//显示的动画时间
        "hideDuration": "1000",//消失的动画时间
        "timeOut": "2000", //展现时间
        "extendedTimeOut": "1000",//加长展示时间
        "showEasing": "swing",//显示时的动画缓冲方式
        "hideEasing": "linear",//消失时的动画缓冲方式
        "showMethod": "fadeIn",//显示时的动画方式
        "hideMethod": "fadeOut" //消失时的动画方式
        };

      $scope.rent = function(){
            console.log(houseId);
            $http({
             url:'http://localhost:8090/api/house/rent/',
             method: 'get',  
             params:{
                  'houseId':houseId,
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             // alert("租赁成功！");
              toastr.success("租赁成功！");
                  var pid = document.getElementById("rentBtn");
                  addClass( pid,"disabled" ); 

                  setTimeout(go, 1000);
	             function go(){
	             	$state.go('info-data-rented', {}, { reload: true });
	             }
                  
            }).error(function(response){
             console.log("error");
            });
      }

      $http({
       url:'http://localhost:8090/api/house/isFocus/',
       method: 'get',  
       params:{
            'houseId':houseId,
      },
       withCredentials: true
      }).success(function(response){
       console.log("success!");
       console.log(response);
       if (response == 'true') {
            var pid = document.getElementById("focusBtn");
            addClass( pid,"disabled" ); 
       }
      }).error(function(response){
       console.log("error");
      });

      $scope.focus = function(){
            console.log(houseId);

            $http({
             url:'http://localhost:8090/api/house/focus/',
             method: 'get',  
             params:{
                  'houseId':houseId,
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             var pid = document.getElementById("focusBtn");
            addClass( pid,"disabled" ); 
            }).error(function(response){
             console.log("error");
            });

      }

      $http({
       url:'http://localhost:8090/api/house/isOrder/',
       method: 'get',  
       params:{
            'houseId':houseId,
      },
       withCredentials: true
      }).success(function(response){
       console.log("success!");
       console.log(response);
       if (response == 'false') {
            var pid = document.getElementById("orderBtn");
            addClass( pid,"disabled" ); 
       }
      }).error(function(response){
       console.log("error");
      });

      $scope.order = function(){
            console.log(houseId);

            $http({
             url:'http://localhost:8090/api/house/order/',
             method: 'get',  
             params:{
                  'houseId':houseId,
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             var pid = document.getElementById("orderBtn");
            addClass( pid,"disabled" ); 
            }).error(function(response){
             console.log("error");
            });
      }

      $scope._scrollTo = function(id){
      	var _id = document.getElementById(id);
　　　　window.scrollTo(0,_id.offsetTop);

		var introli = document.getElementById("introli");
		var conli = document.getElementById("conli");
		var recli = document.getElementById("recli");
		removeClass(introli,"active");
		removeClass(conli,"active");
		removeClass(recli,"active");
		addClass( _id,"active" ); 

      }


}]);
