/**
 * Created by schanx on 4/1/17.
 */
(function () {
    angular
        .module("BookHubMaker")
        .controller("sellerController", sellerController);
    function sellerController($scope){
        var vm=this;
        vm.show=show;

        function show() {
            alert(vm.event.location);
        }

        $scope.$on('$viewContentLoaded', function(){


            var imported = document.createElement('script');
            imported.src = '../../../js/maps.js';
            document.head.appendChild(imported);

            var imported = document.createElement('script');
            imported.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBhLoBYnRtlTL2wIDcZ_5u3SEm-dDN6hgI&libraries=places&callback=initAutocomplete';
            imported.defer="";
            imported.async="";
            document.head.appendChild(imported);

        });


    }
})();