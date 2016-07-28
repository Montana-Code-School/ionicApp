angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.searched = false;
  $scope.things = [{
    id: 1,
    name: "Jack Johnson",
    album: "In Between Dreams",
    img: "https://upload.wikimedia.org/wikipedia/en/7/74/InBetweenDreams.jpg"
  },{
    id: 4,
    name: "Arctic Monkeys",
    album: "AM",
    img: "http://cdn3.pitchfork.com/albums/19581/7c04bbb3.jpg"
  },{
    id: [1,2,3,4],
    name: "Bob Schneider",
    album: "A Perfect Day",
    img: "http://covers.discorder.com/fullsize/front/0186535005328.jpg"
  },{
    id: 3,
    name: "Nirvana",
    album: "In Utero",
    img: "https://upload.wikimedia.org/wikipedia/en/e/e5/In_Utero_(Nirvana)_album_cover.jpg"
  },];
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Chill', id: 1 },
    { title: 'Hip Hop', id: 2 },
    { title: 'Alternative Rock', id: 3 },
    { title: 'Indie', id: 4 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  var things = [{
    id: 1,
    name: "Jack Johnson",
    album: "In Between Dreams",
    img: "https://upload.wikimedia.org/wikipedia/en/7/74/InBetweenDreams.jpg"
  },{
    id: 4,
    name: "Arctic Monkeys",
    album: "AM",
    img: "http://cdn3.pitchfork.com/albums/19581/7c04bbb3.jpg"
  },{
    id: [1,2,3,4],
    name: "Bob Schneider",
    album: "A Perfect Day",
    img: "http://covers.discorder.com/fullsize/front/0186535005328.jpg"
  },{
    id: 3,
    name: "Nirvana",
    album: "In Utero",
    img: "https://upload.wikimedia.org/wikipedia/en/e/e5/In_Utero_(Nirvana)_album_cover.jpg"
  },];
  $scope.otherthings = [];
  for (var i = 0; i < things.length; i++){
    if($stateParams.playlistId == things[i].id || things[i].name == "Bob Schneider") {
      $scope.otherthings.push(things[i]);
    }
  }

}).controller('BandCtrl', function($scope, $stateParams) {
  var things = [{
    id: 1,
    name: "Jack Johnson",
    album: "In Between Dreams",
    img: "https://upload.wikimedia.org/wikipedia/en/7/74/InBetweenDreams.jpg"
  },{
    id: 4,
    name: "Arctic Monkeys",
    album: "AM",
    img: "http://cdn3.pitchfork.com/albums/19581/7c04bbb3.jpg"
  },{
    id: [1,2,3,4],
    name: "Bob Schneider",
    album: "A Perfect Day",
    img: "http://covers.discorder.com/fullsize/front/0186535005328.jpg"
  },{
    id: 3,
    name: "Nirvana",
    album: "In Utero",
    img: "https://upload.wikimedia.org/wikipedia/en/e/e5/In_Utero_(Nirvana)_album_cover.jpg"
  },];

  $scope.band = {};
  for (var i = 0; i < things.length; i++){
    if($stateParams.bandName == things[i].name) {
      $scope.band = things[i];
    }
  }

});
