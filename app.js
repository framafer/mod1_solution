(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)
  LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.listtextbox="";
  $scope.salida = "";

  $scope.displayIfToMuch = function(){
    var entrada_usuario = $scope.listtextbox;
    $scope.salida = calculaElMensaje(entrada_usuario);
  };
};
function calculaElMensaje(string){
  var arrayOfStrings = string.split(',');
  var numeroElementos = arrayOfStrings.length;
  var elmensaje = "";
  var cadena = string.trim();
  if (cadena != ''){
    if (numeroElementos > 3) {
      elmensaje ="Too much!";
    } else {
      elmensaje ="Enjoy!";
    }
  } else {
    elmensaje = "Please enter data first"
  }
  return elmensaje;
};


})();
