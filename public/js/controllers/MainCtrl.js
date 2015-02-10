// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainCtrl', function($scope, $filter, $timeout, ngTableParams) {
	var vm = this;
	vm.something = 'whatever';
	vm.nameFilter = null;

	// vm.addVisit = function(patient){
	// 	patient.visits = patient.visits + 1;
	// };

	// vm.addPatient = function(){
	// 	vm.nameFilter = null;
	// 	data.push({name: '', day: '', visits:0});
	// 	data[data.length-1].$edit = true;
	// 	vm.tableParams.data.push(data[data.length-1]);
	// };

	// vm.delPatient = function(patient, index){
	// 	for(var i = 0; i < data.length; i++){
	// 		if(data[i].$$hashKey === patient.$$hashKey){
	// 			data.splice(i,1);
	// 			vm.tableParams.data.splice(index, 1);
	// 		}
	// 	}
	// };

	// vm.tableParams = new ngTableParams({
	// 	page: 1,
	// 	count: 100,
	// 	sorting: {
	// 		name: 'asc'
	// 	}
	// }, {
	// 	total: dath.length,
	// 	getData: function($defer, params){
	// 		var orderedData = params.sorting() ?
	// 							$filter('orderBy')(data, params.orderBy()) :
	// 							data;

	// 		$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
	// 	}
	// });
});