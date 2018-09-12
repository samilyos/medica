angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.360Video', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/360Video.html',
        controller: '360VideoCtrl'
      }
    }
  })

  .state('tabsController.virtualReality', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/virtualReality.html',
        controller: 'virtualRealityCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('chapter2', {
    url: '/page6',
    templateUrl: 'templates/chapter2.html',
    controller: 'chapter2Ctrl'
  })

  .state('chapter3', {
    url: '/page7',
    templateUrl: 'templates/chapter3.html',
    controller: 'chapter3Ctrl'
  })

  .state('chapter4', {
    url: '/page8',
    templateUrl: 'templates/chapter4.html',
    controller: 'chapter4Ctrl'
  })

  .state('tabsController.anatomyOfTheHeart2', {
    url: '/page10',
    views: {
      'tab4': {
        templateUrl: 'templates/anatomyOfTheHeart2.html',
        controller: 'anatomyOfTheHeart2Ctrl'
      }
    }
  })

  .state('tabsController.bloodVessels', {
    url: '/page12',
    views: {
      'tab4': {
        templateUrl: 'templates/bloodVessels.html',
        controller: 'bloodVesselsCtrl'
      }
    }
  })

  .state('heartValves', {
    url: '/page13',
    templateUrl: 'templates/heartValves.html',
    controller: 'heartValvesCtrl'
  })

  .state('rightSide', {
    url: '/page14',
    templateUrl: 'templates/rightSide.html',
    controller: 'rightSideCtrl'
  })

  .state('leftSide', {
    url: '/page15',
    templateUrl: 'templates/leftSide.html',
    controller: 'leftSideCtrl'
  })

$urlRouterProvider.otherwise('/page1/page10')


});