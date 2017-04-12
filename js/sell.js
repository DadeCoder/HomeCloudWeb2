var sellApp = angular.module("sellApp",['ui.router','ui.bootstrap']); 


sellApp.controller('headerLiCtrl',['$scope','$http','$state', '$sessionStorage', function($scope, $http, $state, $sessionStorage){
	// active li
	var info = document.getElementById("info");
	var buy = document.getElementById("buy");
	var sell = document.getElementById("sell");
	var rent = document.getElementById("rent");
	removeClass(info,"active");
	removeClass(rent,"active");
	removeClass(buy,"active");
	addClass( sell,"active" ); 

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

}]);

sellApp.controller('sellOutCtrl',['$scope','$http','$state', '$sessionStorage', function($scope, $http, $state, $sessionStorage){

	// active li
	var info = document.getElementById("info");
	var buy = document.getElementById("buy");
	var sell = document.getElementById("sell");
	var rent = document.getElementById("rent");
	removeClass(info,"active");
	removeClass(rent,"active");
	removeClass(buy,"active");
	addClass( sell,"active" ); 

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


	$scope.house={
        district:"",
        community:"",
        address:"",
        floor:"",
        area:"",
        houseType:"",
        sellPrice:""
    };
    

    $scope.sellOut = function(){
        var dto = {
            district:$scope.house.district,
            community:$scope.house.community,
            address:$scope.house.address,
            floor:$scope.house.floor,
            area:$scope.house.area,
            houseType:$scope.house.houseType,
            sellPrice:$scope.house.sellPrice
        }

        $http({
           url:'http://localhost:8090/api/house/sellOut/',
           method: 'POST',  
           headers: {'Content-type': 'application/json;charset=UTF-8'},
           data: dto,
           withCredentials: true
          }).success(function(response){
           console.log("success!");
           console.log(response);

          //$window.localStorage["houseId"]=response.info;
          $sessionStorage.put("sellOutHouseId",response.info);
          $sessionStorage.put("sellOrRent","sell");

          }).error(function(response){
           console.log("error");
           console.log(response);
          });

          setTimeout(go, 500);
          function go(){ 
            //$window.location.href='../upload.html';
            $state.go('upload', {}, { reload: true });
         } 

    }

}]);

sellApp.controller('rentOutCtrl',['$scope','$http','$state', '$sessionStorage', function($scope, $http, $state, $sessionStorage){

	// active li
	var info = document.getElementById("info");
	var buy = document.getElementById("buy");
	var sell = document.getElementById("sell");
	var rent = document.getElementById("rent");
	removeClass(info,"active");
	removeClass(rent,"active");
	removeClass(buy,"active");
	addClass( sell,"active" ); 

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


	$scope.house={
        district:"",
        community:"",
        address:"",
        floor:"",
        area:"",
        houseType:"",
        rentPrice:""
    };
    

    $scope.rentOut = function(){
        var dto = {
            district:$scope.house.district,
            community:$scope.house.community,
            address:$scope.house.address,
            floor:$scope.house.floor,
            area:$scope.house.area,
            houseType:$scope.house.houseType,
            rentPrice:$scope.house.rentPrice
        }

        $http({
               url:'http://localhost:8090/api/house/rentOut/',
               method: 'POST',  
               headers: {'Content-type': 'application/json;charset=UTF-8'},
               data: dto,
               withCredentials: true
              }).success(function(response){
               console.log("success!");
               console.log(response);

              $sessionStorage.put("sellOutHouseId",response.info);
              $sessionStorage.put("sellOrRent","rent");

              }).error(function(response){
               console.log("error");
               console.log(response);
              });

              setTimeout(go, 500);
              function go(){ 
                $state.go('upload', {}, { reload: true });
             } 

    }

}]);

sellApp.controller('uploadCtrl',['$scope','$http','$state', '$sessionStorage', function($scope, $http, $state, $sessionStorage){

	// active li
	var info = document.getElementById("info");
	var buy = document.getElementById("buy");
	var sell = document.getElementById("sell");
	var rent = document.getElementById("rent");
	removeClass(info,"active");
	removeClass(rent,"active");
	removeClass(buy,"active");
	addClass( sell,"active" ); 

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


	var houseId = $sessionStorage.get("sellOutHouseId");
  var sellOrRent = $sessionStorage.get("sellOrRent");

	function initFileInput(ctrlName) {      
       var control = $('#' + ctrlName);   
       control.fileinput({  
           language: 'zh', //设置语言  
           showUpload: false, //是否显示上传按钮  
           showRemove:true,  
           dropZoneEnabled: false,  
           showCaption: true,//是否显示标题  
           allowedPreviewTypes: ['image'],  
              allowedFileTypes: ['image'],  
              allowedFileExtensions:  ['jpg', 'png'],   // 限制文件类型
              maxFileSize : 2000,  
              maxFileCount: 1,  
              uploadAsync: false, //同步上传  
              //initialPreview: [   
                      //预览图片的设置  
                //      "<img src='http://127.0.0.1:8080/NewsManageSys/plugin/umeditor1_2_2/jsp/upload/20161030/55061                  477813913474.jpg' class='file-preview-image' alt='肖像图片' title='肖像图片'>",  
              //],  
             
       })
    }

    initFileInput("file");   

	$scope.upload = function(){

	 	$http({
               url:'http://localhost:8090/api/house/upload/',
               method: 'POST',  
               // headers: {'Content-type': 'application/json;charset=UTF-8'},
               headers: {
                'Content-Type': undefined
                // 'Content-Type': 'multipart/form-data;boundary=${bound}'
              },
              transformRequest: function() {
                  var formData = new FormData();
                  formData.append('file', $('#file')[0].files[0]);
                  formData.append('houseId', houseId);
                  return formData;
               },
               // data: dto,
               withCredentials: true
              }).success(function(response){
               console.log("success!");
               console.log(response);

              //$window.localStorage["picUrl"]=response;

              }).error(function(response){
               console.log("error");
               console.log(response);
              });

              setTimeout(go, 500);
              function go(){ 
                if (sellOrRent == 'sell') {
                  $state.go('sellHouseView', {}, { reload: true });
                }
                else{
                  $state.go('rentHouseView', {}, { reload: true });
                }

                

             } 

	 }
}]);

sellApp.controller('viewCtrl',['$scope','$http','$state', '$sessionStorage', function($scope, $http, $state, $sessionStorage){

	// active li
	var info = document.getElementById("info");
	var buy = document.getElementById("buy");
	var sell = document.getElementById("sell");
	var rent = document.getElementById("rent");
	removeClass(info,"active");
	removeClass(rent,"active");
	removeClass(buy,"active");
	addClass( sell,"active" ); 


	var houseId = $sessionStorage.get("sellOutHouseId");

	$http({
       url:'http://localhost:8090/api/house/get/',
       method: 'get',  
       params:{
		'houseId':houseId,
	   },
       withCredentials: true
      }).success(function(response){
       console.log("success!");
       console.log(response);
       $scope.house = response;
       $scope.picUrl = response.picUrl;
      }).error(function(response){
       console.log("error");
       console.log(response);
      });

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


sellApp.controller('rentHouseViewCtrl',['$scope','$http','$state', '$sessionStorage', function($scope, $http, $state, $sessionStorage){

  // active li
  var info = document.getElementById("info");
  var buy = document.getElementById("buy");
  var sell = document.getElementById("sell");
  var rent = document.getElementById("rent");
  removeClass(info,"active");
  removeClass(rent,"active");
  removeClass(buy,"active");
  addClass( sell,"active" ); 


  var houseId = $sessionStorage.get("sellOutHouseId");

  $http({
       url:'http://localhost:8090/api/house/get/',
       method: 'get',  
       params:{
    'houseId':houseId,
     },
       withCredentials: true
      }).success(function(response){
       console.log("success!");
       console.log(response);
       $scope.house = response;
       $scope.picUrl = response.picUrl;
      }).error(function(response){
       console.log("error");
       console.log(response);
      });

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


sellApp.controller('sellHouseViewCtrl',['$scope','$http','$state', '$sessionStorage', function($scope, $http, $state, $sessionStorage){

  // active li
  var info = document.getElementById("info");
  var buy = document.getElementById("buy");
  var sell = document.getElementById("sell");
  var rent = document.getElementById("rent");
  removeClass(info,"active");
  removeClass(rent,"active");
  removeClass(buy,"active");
  addClass( sell,"active" ); 


  var houseId = $sessionStorage.get("sellOutHouseId");

  $http({
       url:'http://localhost:8090/api/house/get/',
       method: 'get',  
       params:{
    'houseId':houseId,
     },
       withCredentials: true
      }).success(function(response){
       console.log("success!");
       console.log(response);
       $scope.house = response;
       $scope.picUrl = response.picUrl;
      }).error(function(response){
       console.log("error");
       console.log(response);
      });

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