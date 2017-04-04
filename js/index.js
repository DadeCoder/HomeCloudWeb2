var indexApp = angular.module("indexApp",['ui.router','loginApp','swxSessionStorage','buyApp']); 

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
      
});


indexApp.controller('topCtrl', function($rootScope, $http, $location, $scope, $sessionStorage) {


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
       //console.log("success!");
       //console.log(response);
       $scope.data = response;
      }).error(function(response){
       //console.log("error");
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
