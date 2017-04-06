var indexApp = angular.module("indexApp",['ui.router','loginApp','swxSessionStorage','buyApp','sellApp','infoApp','agentApp']); 

indexApp.run(function($rootScope, $state, $stateParams, $sessionStorage,$location) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.$on('$stateChangeStart', 
      function (event, toState, toParams, fromState, fromParams) {          
            var user = $sessionStorage.get('user');
            console.log('user',user);
            if (typeof(user) == 'undefined' && !(toState.name == "index" || toState.name == "login" || toState.name == "agent-login")) {
                  // console.log(toState.name);
                  // console.log(typeof(toState.name));
                  // $state.go('login');
                  $location.path('/login');
            }
    });
    

});

// indexApp.factory("httpInterceptor", ["$rootScope", "$location", function($rootScope, $location) {
//         return {
//             "responseError": function(response) {
//                   console.log("interceptors", response);
//                   $location.path('/login');
//              }
//         };
//     }]);

indexApp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

      //$httpProvider.interceptors.push("httpInterceptor");

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
      .state('info', {
            url: '/info',
            views: { 
                '': {
                    templateUrl: 'tpls/info.html'
                },
                'header@info': {
                    templateUrl: 'tpls/header.html'
                },
                'left@info': {
                    templateUrl: 'tpls/left.html'
                },
                'right@info': {
                    templateUrl: 'tpls/info-index.html'
                }
            }
        })
      .state('info-index-up', {
            url: '/info-index-up',
            views: { 
                '': {
                    templateUrl: 'tpls/info.html'
                },
                'header@info-index-up': {
                    templateUrl: 'tpls/header.html'
                },
                'left@info-index-up': {
                    templateUrl: 'tpls/left.html'
                },
                'right@info-index-up': {
                    templateUrl: 'tpls/info-index-up.html'
                }
            }
        })
      .state('info-index-down', {
            url: '/info-index-down',
            views: { 
                '': {
                    templateUrl: 'tpls/info.html'
                },
                'header@info-index-down': {
                    templateUrl: 'tpls/header.html'
                },
                'left@info-index-down': {
                    templateUrl: 'tpls/left.html'
                },
                'right@info-index-down': {
                    templateUrl: 'tpls/info-index-down.html'
                }
            }
        })
      .state('info-schedule', {
            url: '/info-schedule',
            views: { 
                '': {
                    templateUrl: 'tpls/info.html'
                },
                'header@info-schedule': {
                    templateUrl: 'tpls/header.html'
                },
                'left@info-schedule': {
                    templateUrl: 'tpls/left.html'
                },
                'right@info-schedule': {
                    templateUrl: 'tpls/info-schedule.html'
                }
            }
        })
      .state('info-focus-buy', {
            url: '/info-focus-buy',
            views: { 
                '': {
                    templateUrl: 'tpls/info.html'
                },
                'header@info-focus-buy': {
                    templateUrl: 'tpls/header.html'
                },
                'left@info-focus-buy': {
                    templateUrl: 'tpls/left.html'
                },
                'right@info-focus-buy': {
                    templateUrl: 'tpls/info-focus-buy.html'
                }
            }
        })
      .state('info-focus-rentOut', {
            url: '/info-focus-rentOut',
            views: { 
                '': {
                    templateUrl: 'tpls/info.html'
                },
                'header@info-focus-rentOut': {
                    templateUrl: 'tpls/header.html'
                },
                'left@info-focus-rentOut': {
                    templateUrl: 'tpls/left.html'
                },
                'right@info-focus-rentOut': {
                    templateUrl: 'tpls/info-focus-rentOut.html'
                }
            }
        })
      .state('info-focus-rent', {
            url: '/info-focus-rent',
            views: { 
                '': {
                    templateUrl: 'tpls/info.html'
                },
                'header@info-focus-rent': {
                    templateUrl: 'tpls/header.html'
                },
                'left@info-focus-rent': {
                    templateUrl: 'tpls/left.html'
                },
                'right@info-focus-rent': {
                    templateUrl: 'tpls/info-focus-rent.html'
                }
            }
        })
      .state('info-focus-sell', {
            url: '/info-focus-sell',
            views: { 
                '': {
                    templateUrl: 'tpls/info.html'
                },
                'header@info-focus-sell': {
                    templateUrl: 'tpls/header.html'
                },
                'left@info-focus-sell': {
                    templateUrl: 'tpls/left.html'
                },
                'right@info-focus-sell': {
                    templateUrl: 'tpls/info-focus-sell.html'
                }
            }
        })
      .state('info-record', {
            url: '/info-record',
            views: { 
                '': {
                    templateUrl: 'tpls/info.html'
                },
                'header@info-record': {
                    templateUrl: 'tpls/header.html'
                },
                'left@info-record': {
                    templateUrl: 'tpls/left.html'
                },
                'right@info-record': {
                    templateUrl: 'tpls/info-record.html'
                }
            }
        })
      .state('info-data-rent', {
            url: '/info-data-rent',
            views: { 
                '': {
                    templateUrl: 'tpls/info.html'
                },
                'header@info-data-rent': {
                    templateUrl: 'tpls/header.html'
                },
                'left@info-data-rent': {
                    templateUrl: 'tpls/left.html'
                },
                'right@info-data-rent': {
                    templateUrl: 'tpls/info-data-rent.html'
                }
            }
        })
      .state('info-data-sell', {
            url: '/info-data-sell',
            views: { 
                '': {
                    templateUrl: 'tpls/info.html'
                },
                'header@info-data-sell': {
                    templateUrl: 'tpls/header.html'
                },
                'left@info-data-sell': {
                    templateUrl: 'tpls/left.html'
                },
                'right@info-data-sell': {
                    templateUrl: 'tpls/info-data-sell.html'
                }
            }
        })
      .state('info-data-buy', {
            url: '/info-data-buy',
            views: { 
                '': {
                    templateUrl: 'tpls/info.html'
                },
                'header@info-data-buy': {
                    templateUrl: 'tpls/header.html'
                },
                'left@info-data-buy': {
                    templateUrl: 'tpls/left.html'
                },
                'right@info-data-buy': {
                    templateUrl: 'tpls/info-data-buy.html'
                }
            }
        })
      .state('info-data-rented', {
            url: '/info-data-rented',
            views: { 
                '': {
                    templateUrl: 'tpls/info.html'
                },
                'header@info-data-rented': {
                    templateUrl: 'tpls/header.html'
                },
                'left@info-data-rented': {
                    templateUrl: 'tpls/left.html'
                },
                'right@info-data-rented': {
                    templateUrl: 'tpls/info-data-rented.html'
                }
            }
        })
      .state('info-data-nick', {
            url: '/info-data-nick',
            views: { 
                '': {
                    templateUrl: 'tpls/info.html'
                },
                'header@info-data-nick': {
                    templateUrl: 'tpls/header.html'
                },
                'left@info-data-nick': {
                    templateUrl: 'tpls/left.html'
                },
                'right@info-data-nick': {
                    templateUrl: 'tpls/info-data-nick.html'
                }
            }
        })
      .state('info-data-pwd', {
            url: '/info-data-pwd',
            views: { 
                '': {
                    templateUrl: 'tpls/info.html'
                },
                'header@info-data-pwd': {
                    templateUrl: 'tpls/header.html'
                },
                'left@info-data-pwd': {
                    templateUrl: 'tpls/left.html'
                },
                'right@info-data-pwd': {
                    templateUrl: 'tpls/info-data-password.html'
                }
            }
        })
      .state('agent-login', {
            url: '/agent-login',
          templateUrl: 'tpls/agent-login.html'
        })
      .state('agent-index', {
            url: '/agent-index',
            views: { 
                '': {
                    templateUrl: 'tpls/agent.html'
                },
                'header@agent-index': {
                    templateUrl: 'tpls/agent-header.html'
                },
                'left@agent-index': {
                    templateUrl: 'tpls/agent-left.html'
                },
                'right@agent-index': {
                    templateUrl: 'tpls/agent-index.html'
                }
            }
        })
      .state('agent-rent-access', {
            url: '/agent-rent-access',
            views: { 
                '': {
                    templateUrl: 'tpls/agent.html'
                },
                'header@agent-rent-access': {
                    templateUrl: 'tpls/agent-header.html'
                },
                'left@agent-rent-access': {
                    templateUrl: 'tpls/agent-left.html'
                },
                'right@agent-rent-access': {
                    templateUrl: 'tpls/agent-rent-access.html'
                }
            }
        })
      .state('agent-sell-access', {
            url: '/agent-sell-access',
            views: { 
                '': {
                    templateUrl: 'tpls/agent.html'
                },
                'header@agent-sell-access': {
                    templateUrl: 'tpls/agent-header.html'
                },
                'left@agent-sell-access': {
                    templateUrl: 'tpls/agent-left.html'
                },
                'right@agent-sell-access': {
                    templateUrl: 'tpls/agent-sell-access.html'
                }
            }
        })
      .state('agent-pass-access', {
            url: '/agent-pass-access',
            views: { 
                '': {
                    templateUrl: 'tpls/agent.html'
                },
                'header@agent-pass-access': {
                    templateUrl: 'tpls/agent-header.html'
                },
                'left@agent-pass-access': {
                    templateUrl: 'tpls/agent-left.html'
                },
                'right@agent-pass-access': {
                    templateUrl: 'tpls/agent-pass-access.html'
                }
            }
        })
      .state('agent-deny-access', {
            url: '/agent-deny-access',
            views: { 
                '': {
                    templateUrl: 'tpls/agent.html'
                },
                'header@agent-deny-access': {
                    templateUrl: 'tpls/agent-header.html'
                },
                'left@agent-deny-access': {
                    templateUrl: 'tpls/agent-left.html'
                },
                'right@agent-deny-access': {
                    templateUrl: 'tpls/agent-deny-access.html'
                }
            }
        })
      .state('agent-users', {
            url: '/agent-users',
            views: { 
                '': {
                    templateUrl: 'tpls/agent.html'
                },
                'header@agent-users': {
                    templateUrl: 'tpls/agent-header.html'
                },
                'left@agent-users': {
                    templateUrl: 'tpls/agent-left.html'
                },
                'right@agent-users': {
                    templateUrl: 'tpls/agent-users.html'
                }
            }
        })
      .state('agent-rent-record', {
            url: '/agent-rent-record',
            views: { 
                '': {
                    templateUrl: 'tpls/agent.html'
                },
                'header@agent-rent-record': {
                    templateUrl: 'tpls/agent-header.html'
                },
                'left@agent-rent-record': {
                    templateUrl: 'tpls/agent-left.html'
                },
                'right@agent-rent-record': {
                    templateUrl: 'tpls/agent-rent-record.html'
                }
            }
        })
      .state('agent-sell-record', {
            url: '/agent-sell-record',
            views: { 
                '': {
                    templateUrl: 'tpls/agent.html'
                },
                'header@agent-sell-record': {
                    templateUrl: 'tpls/agent-header.html'
                },
                'left@agent-sell-record': {
                    templateUrl: 'tpls/agent-left.html'
                },
                'right@agent-sell-record': {
                    templateUrl: 'tpls/agent-sell-record.html'
                }
            }
        })
      .state('agent-data', {
            url: '/agent-data',
            views: { 
                '': {
                    templateUrl: 'tpls/agent.html'
                },
                'header@agent-data': {
                    templateUrl: 'tpls/agent-header.html'
                },
                'left@agent-data': {
                    templateUrl: 'tpls/agent-left.html'
                },
                'right@agent-data': {
                    templateUrl: 'tpls/agent-data.html'
                }
            }
        })
      .state('agent-register', {
            url: '/agent-register',
            views: { 
                '': {
                    templateUrl: 'tpls/agent.html'
                },
                'header@agent-register': {
                    templateUrl: 'tpls/agent-header.html'
                },
                'left@agent-register': {
                    templateUrl: 'tpls/agent-left.html'
                },
                'right@agent-register': {
                    templateUrl: 'tpls/agent-register.html'
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
