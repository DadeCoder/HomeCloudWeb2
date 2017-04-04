var indexApp = angular.module("indexApp",['ui.router','loginApp','swxSessionStorage','buyApp','sellApp']); 

indexApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

indexApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/index');
    $stateProvider
      .state('index', {
            url: '/index',
            templateUrl: 'tpls/index.html'
        })
      .state('login', {
          url: '/login',
          templateUrl: 'tpls/login.html'
      })
      .state('register', {
          url: '/register',
          templateUrl: 'tpls/register.html'
      })
      .state('config', {
          url: '/config',
          templateUrl: 'tpls/config.html'
      })
      .state('buy', {
            url: '/buy',
            views: { 
                '': {
                    templateUrl: 'tpls/buy.html'
                },
                'header@buy': {
                    templateUrl: 'tpls/header.html'
                },
                'footer@buy': {
                    templateUrl: 'tpls/footer.html'
                }
            }
        })
      .state('rent', {
            url: '/rent',
            views: { 
                '': {
                    templateUrl: 'tpls/rent.html'
                },
                'header@rent': {
                    templateUrl: 'tpls/header.html'
                },
                'footer@rent': {
                    templateUrl: 'tpls/footer.html'
                }
            }
        })
      .state('buyHouse', {
            url: '/buyHouse',
            views: { 
                '': {
                    templateUrl: 'tpls/buyHouse.html'
                },
                'header@buyHouse': {
                    templateUrl: 'tpls/header.html'
                },
                'footer@buyHouse': {
                    templateUrl: 'tpls/footer.html'
                }
            }
        })
      .state('rentHouse', {
            url: '/rentHouse',
            views: { 
                '': {
                    templateUrl: 'tpls/rentHouse.html'
                },
                'header@rentHouse': {
                    templateUrl: 'tpls/header.html'
                },
                'footer@rentHouse': {
                    templateUrl: 'tpls/footer.html'
                }
            }
        })
      .state('sell', {
            url: '/sell',
            views: { 
                '': {
                    templateUrl: 'tpls/sell.html'
                },
                'header@sell': {
                    templateUrl: 'tpls/header_zero.html'
                },
                'content@sell': {
                    templateUrl: 'tpls/sellOut.html'
                },
                'footer@sell': {
                    templateUrl: 'tpls/footer.html'
                }
            }
        })
      .state('rentOut', {
            url: '/rentOut',
            views: { 
                '': {
                    templateUrl: 'tpls/sell.html'
                },
                'header@rentOut': {
                    templateUrl: 'tpls/header_zero.html'
                },
                'content@rentOut': {
                    templateUrl: 'tpls/rentOut.html'
                },
                'footer@rentOut': {
                    templateUrl: 'tpls/footer.html'
                }
            }
        })
      .state('upload', {
            url: '/upload',
            views: { 
                '': {
                    templateUrl: 'tpls/upload.html'
                },
                'header@upload': {
                    templateUrl: 'tpls/header.html'
                },
                'footer@upload': {
                    templateUrl: 'tpls/footer.html'
                }
            }
        })
      .state('house', {
            url: '/house',
            views: { 
                '': {
                    templateUrl: 'tpls/house.html'
                },
                'header@house': {
                    templateUrl: 'tpls/header.html'
                },
                'footer@house': {
                    templateUrl: 'tpls/footer.html'
                }
            }
        })
      
      
});


indexApp.controller('topCtrl', function($rootScope, $http, $location, $scope, $sessionStorage) {


      // $scope.data = {           
      //       doneCases:'',
      //       rentHouses:'',
      //       sellHouses:'',
      //       users:''
      // }

      $scope.auth = false;

      var user = $sessionStorage.get('user');

      console.log(user);

      if (typeof(user)=="undefined") {
            console.log("undefined");
            $scope.auth = false;
      }
      else{
            $scope.username = user.name;
            $scope.auth = true;
      }

	$http({
       url:'http://localhost:8090/api/general/getInfo/',
       method: 'get', 
      }).success(function(response){
       console.log("getInfo success!");
       console.log(response);
       $scope.data = response;
      }).error(function(response){
       console.log("getInfo error");
      });
});


indexApp.controller('headerCtrl', function($rootScope, $http, $location, $scope, $sessionStorage) {

      $scope.auth = false;

      var user = $sessionStorage.get('user');

      if (typeof(user)=="undefined") {
            console.log("undefined");
            $scope.auth = false;
      }
      else{
            $scope.username = user.name;
            $scope.auth = true;
      }


});
