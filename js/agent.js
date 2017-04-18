var agentApp = angular.module("agentApp",['ui.router']); 

agentApp.controller('agentHeaderCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
    $scope.logout = function() {

        $sessionStorage.remove('user');
        $state.go('index', {}, { reload: true });

    };

    
    $scope.name=$sessionStorage.get('user').name;

}]);

agentApp.controller('agentIndexCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
    
    var user = $sessionStorage.get('user');

    $scope.agent = {
        name:user.name,
        phoneNumber:user.phoneNumber,
        url:"http://localhost:8089/"+user.imageHeaderUrl
    }

    // console.log()

    $http({
       url:'http://localhost:8090/api/general/message/getMes',
       method: 'get', 
       // params:{
       //            'userId':houseId,
       //         },
      }).success(function(response){
       console.log("getInfo success!", response);
       $scope.list = response;
      }).error(function(response){
       console.log("getInfo error");
      });


      $scope.deleteMes = function(id){
        console.log(id);
        $http({
           url:'http://localhost:8090/api/general/message/deleteMes',
           method: 'get', 
           params:{
                      'id':id,
                   },
          }).success(function(response){
           console.log("getInfo success!", response);
           $scope.list = response;
          }).error(function(response){
           console.log("getInfo error");
          });
      }


}]);


agentApp.controller('agentLoginCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	$scope.login = function() {

		var hash = hex_md5($scope.credentials.password);

		var h = {authorization : "Basic "
		+ btoa($scope.credentials.username + ":" + hash)
		};

		console.log(hash);
		console.log(h);

		$http.get('http://localhost:8090/agent_login/',{withCredentials: true,headers : h})
			.success(function(response) {
				console.log("agent_login", response);
                $sessionStorage.put('user',response);
                $state.go('agent-index', {}, { reload: true });
				
			})
			.error(function(response) {
				alert("Wrong account or password"); 
			});

	};

}]);

agentApp.controller('agentRentCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	var data = [];

    $scope.maxSize = 3; //可点击的页码个数
    $scope.numPages = data.length; //总页码数
    $scope.itemSize = 3; //每页条目数
    $scope.bigTotalItems = data.length;

    $scope.hno = data.length;

    $scope.list = data.slice(0, $scope.itemSize);

    $scope.showItems = function() {
        $scope.list = data.slice(($scope.bigCurrentPage-1)*$scope.itemSize, ($scope.bigCurrentPage-1)*$scope.itemSize + $scope.itemSize)
    }

    $http({
     url:'http://localhost:8090/api/agent/getRentAccess/',
     method: 'get',  
     withCredentials: true
    }).success(function(response){
     console.log("success!");
     console.log(response);
     $scope.list = response;

    data = response;

    $scope.numPages = data.length; //总页码数
    $scope.bigTotalItems = data.length;
    $scope.hno = data.length;
    $scope.list = data.slice(0, $scope.itemSize);

    }).error(function(response){
     console.log("getRentAccess error");
     console.log(response)
    });

    $scope.denyAccess = function(houseId){
		console.log(houseId);
		//$window.localStorage["denyAccess"]=houseId;
		//$window.location.href='./deny.html';
		$sessionStorage.put("denyAccess",houseId);
		setTimeout(go, 500);
		function go(){ 
			$state.go('agent-deny-access', {}, { reload: true });
		} 
	}

	$scope.passAccess = function(houseId){
		console.log(houseId);
		// $window.localStorage["passAccess"]=houseId;
		// $window.location.href='./passAccess.html';
		$sessionStorage.put("passAccess",houseId);
		setTimeout(go, 500);
		function go(){ 
			$state.go('agent-pass-access', {}, { reload: true });
		} 
	}

}]);

agentApp.controller('agentPassCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	
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

	$scope.pass = function(){
		console.log($scope.house);

		var houseId = $sessionStorage.get("passAccess");

		var data = {
			houseId : houseId,
			analyze : $scope.house.analyze,
			communityInfo : $scope.house.communityInfo
		}

		console.log(data);

		$http({
	     url:'http://localhost:8090/api/agent/pass/',
	     method: 'Post',  
	     data:data,
	     withCredentials: true
	    }).success(function(response){
	     console.log("success!");
	     // console.log(response);
	     toastr.success("已审核：通过");
	     // $window.location.href='./index.html';
	     setTimeout(go, 500);
		function go(){ 
			$state.go('agent-index', {}, { reload: true });
		}

	    }).error(function(response){
	     console.log("error");
	    });

	}
}]);

agentApp.controller('agentDenyCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	
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

        $scope.deny = function(){
		console.log($scope.house);

		// var houseId = $window.localStorage["denyAccess"];
		var houseId = $sessionStorage.get("denyAccess");

		var data = {
			houseId : houseId,
			denyInfo : $scope.house.denyInfo
		}

		console.log(data);

		$http({
	     url:'http://localhost:8090/api/agent/deny/',
	     method: 'Post',  
	     data:data,
	     withCredentials: true
	    }).success(function(response){
	     console.log("success!");
	     // console.log(response);
	     toastr.success("已审核：不通过");
	     // $window.location.href='./index.html';
	     setTimeout(go, 500);
		function go(){ 
			$state.go('agent-index', {}, { reload: true });
		}

	    }).error(function(response){
	     console.log("error");
	    });

	}

}]);

agentApp.controller('agentSellCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	
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

        var data = [];

	    $scope.maxSize = 3; //可点击的页码个数
	    $scope.numPages = data.length; //总页码数
	    $scope.itemSize = 3; //每页条目数
	    $scope.bigTotalItems = data.length;

	    $scope.hno = data.length;

	    $scope.list = data.slice(0, $scope.itemSize);

	    $scope.showItems = function() {
	        $scope.list = data.slice(($scope.bigCurrentPage-1)*$scope.itemSize, ($scope.bigCurrentPage-1)*$scope.itemSize + $scope.itemSize)
	    }

	    $http({
	     url:'http://localhost:8090/api/agent/getSellAccess/',
	     method: 'get',  
	     withCredentials: true
	    }).success(function(response){
	     console.log("success!");
	     console.log(response);
	     $scope.list = response;

	    data = response;

	    $scope.numPages = data.length; //总页码数
	    $scope.bigTotalItems = data.length;
	    $scope.hno = data.length;
	    $scope.list = data.slice(0, $scope.itemSize);

	    }).error(function(response){
	     console.log("error");
	    });

	    $scope.denyAccess = function(houseId){
			console.log(houseId);
			// $window.localStorage["denyAccess"]=houseId;
			// $window.location.href='./deny.html';
			$sessionStorage.put("denyAccess",houseId);
			setTimeout(go, 500);
			function go(){ 
				$state.go('agent-deny-access', {}, { reload: true });
			} 
		}

		$scope.passAccess = function(houseId){
			console.log(houseId);
			//$window.localStorage["passAccess"]=houseId;
			//$window.location.href='./passAccess.html';
			$sessionStorage.put("passAccess",houseId);
			setTimeout(go, 500);
			function go(){ 
				$state.go('agent-pass-access', {}, { reload: true });
			} 
		}
}]);


agentApp.controller('agentUserCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	
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

        var data = [];

    $scope.maxSize = 3; //可点击的页码个数
    $scope.numPages = data.length; //总页码数
    $scope.itemSize = 3; //每页条目数
    $scope.bigTotalItems = data.length;

    $scope.hno = data.length;

    $scope.list = data.slice(0, $scope.itemSize);

    $scope.showItems = function() {
        $scope.list = data.slice(($scope.bigCurrentPage-1)*$scope.itemSize, ($scope.bigCurrentPage-1)*$scope.itemSize + $scope.itemSize)
    }

    $http({
     url:'http://localhost:8090/api/agent/getAllUsers/',
     method: 'get',  
     withCredentials: true
    }).success(function(response){
     console.log("success!");

     // $scope.myVar = "http://127.0.0.1:8089/" + response.data;

     for(var i=0;i<response.length;i++){
        var url = response[i].imageHeaderUrl;
        response[i].imageHeaderUrl = "http://127.0.0.1:8089/" + url;
    }

    $scope.list = response;

    console.log($scope.list);

    data = response;

    $scope.numPages = data.length; //总页码数
    $scope.bigTotalItems = data.length;
    $scope.hno = data.length;
    $scope.list = data.slice(0, $scope.itemSize);

    }).error(function(response){
     console.log("error");
    });

    $scope.delete = function(houseId){
        console.log(houseId);
        $http({
         url:'http://localhost:8090/api/agent/delete/',
         method: 'get',
         params:{
                  'userId':houseId,
               },
         withCredentials: true
        }).success(function(response){
         console.log("success!");

        toastr.success("删除成功");

        }).error(function(response){
         console.log("error");
        });
    }

    $scope.clean = function(houseId){
        console.log(houseId);
        $http({
         url:'http://localhost:8090/api/agent/clean/',
         method: 'get',
         params:{
                  'userId':houseId,
               },
         withCredentials: true
        }).success(function(response){
         console.log("success!");
         toastr.success("还原成功");
        }).error(function(response){
         console.log("error");
        });
    }

}]);

agentApp.controller('agentRentRecordCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	
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

        
    var data = [];

    $scope.maxSize = 3; //可点击的页码个数
    $scope.numPages = data.length; //总页码数
    $scope.itemSize = 3; //每页条目数
    $scope.bigTotalItems = data.length;

    $scope.hno = data.length;

    $scope.list = data.slice(0, $scope.itemSize);

    $scope.showItems = function() {
        $scope.list = data.slice(($scope.bigCurrentPage-1)*$scope.itemSize, ($scope.bigCurrentPage-1)*$scope.itemSize + $scope.itemSize)
    }

    $http({
     url:'http://localhost:8090/api/agent/getRent/',
     method: 'get', 
     withCredentials: true
    }).success(function(response){
     console.log("success!");


    $scope.list = response;

    console.log($scope.list);

    data = response;

    $scope.numPages = data.length; //总页码数
    $scope.bigTotalItems = data.length;
    $scope.hno = data.length;
    $scope.list = data.slice(0, $scope.itemSize);

    }).error(function(response){
     console.log("error");
    });

    $scope.setDate = function(houseId){
        console.log(houseId);
        // console.log($scope.h.date);
        var result1 = $("#calendar1").val();  
        // console.log(result1);
        $http({
         url:'http://localhost:8090/api/agent/setDate/',
         method: 'get',
         params:{
                  'houseId':houseId,
                  'date':result1,
               },
         withCredentials: true
        }).success(function(response){
         console.log("success!");

         $("#calendar1").val("");
        toastr.success("添加成功");

        }).error(function(response){
         console.log("error");
        });
    }

}]);

agentApp.controller('agentSellRecordCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	
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

    	var data = [];

    $scope.maxSize = 3; //可点击的页码个数
    $scope.numPages = data.length; //总页码数
    $scope.itemSize = 3; //每页条目数
    $scope.bigTotalItems = data.length;

    $scope.hno = data.length;

    $scope.list = data.slice(0, $scope.itemSize);

    $scope.showItems = function() {
        $scope.list = data.slice(($scope.bigCurrentPage-1)*$scope.itemSize, ($scope.bigCurrentPage-1)*$scope.itemSize + $scope.itemSize)
    }

    $http({
     url:'http://localhost:8090/api/agent/getSell/',
     method: 'get', 
     withCredentials: true
    }).success(function(response){
     console.log("success!");


    $scope.list = response;

    console.log($scope.list);

    data = response;

    $scope.numPages = data.length; //总页码数
    $scope.bigTotalItems = data.length;
    $scope.hno = data.length;
    $scope.list = data.slice(0, $scope.itemSize);

    }).error(function(response){
     console.log("error");
    });

    $scope.setDate = function(house){
        console.log(house);
        var houseId = house.id;
        // console.log($scope.h.date);
        // var result1 = $("#checkDate").val(); 
        var result1 = house.checkDate;  
        console.log("date: ",house.checkDate);
        $http({
         url:'http://localhost:8090/api/agent/setDate/',
         method: 'get',
         params:{
                  'houseId':houseId,
                  'date':result1,
               },
         withCredentials: true
        }).success(function(response){
         console.log("success!");
         house.checkDate = '';
        toastr.success("添加成功");

        }).error(function(response){
         console.log("error");
        });
    }

}]);


agentApp.controller('agentDataCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	

    var data = [];

    $scope.maxSize = 3; //可点击的页码个数
    $scope.numPages = data.length; //总页码数
    $scope.itemSize = 5; //每页条目数
    $scope.bigTotalItems = data.length;

    $scope.list = data.slice(0, $scope.itemSize);

    $scope.showItems = function() {
        $scope.list = data.slice(($scope.bigCurrentPage-1)*$scope.itemSize, ($scope.bigCurrentPage-1)*$scope.itemSize + $scope.itemSize)
    }


    $http({
     url:'http://localhost:8090/api/agent/getDataInfo/',
     method: 'get', 
     withCredentials: true
    }).success(function(response){
     console.log("success!");

     // $scope.list = response;

    data = response;

    $scope.numPages = data.length; //总页码数
    $scope.bigTotalItems = data.length;

    $scope.list = data.slice(0, $scope.itemSize);

    console.log(response);

    }).error(function(response){
     console.log("error");
    });

}]);

agentApp.controller('agentRegiCtrl',['$scope','$http','$state','$sessionStorage', function($scope, $http, $state, $sessionStorage){
	
	$scope.user={
			username:"",
			password:"",
			phoneNumber:""
		};


		// $scope.init();
		console.log("$scope.user : ")
		console.log($scope.user);


		$scope.regi = function(){

			var hash = hex_md5($scope.user.password);

			var dto = {
				username:$scope.user.username,
				password:hash,
				phoneNumber:$scope.user.phoneNumber
			}

			console.log("dto: ");
			console.log(dto);

			 $http({
			   url:'http://localhost:8090/api/sys/register/',
			   method: 'POST',  
			   headers: {'Content-type': 'application/json;charset=UTF-8'},
			   data: dto  
			  }).success(function(response){
			   console.log("success!");
			   console.log(response);
			  }).error(function(response){
			   console.log("error");
			   console.log(response);
			  });

			  setTimeout(go, 500);
			  function go(){ 
				$state.go('agent-index', {}, { reload: true });
			 } 
	}


}]);

