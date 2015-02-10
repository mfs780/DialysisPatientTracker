// public/js/services/NerdService.js
angular.module('PatientService', []).factory('Patient', ['$http', function($http) {

    return {
        // call to get all patients
        get: function() {
            return $http.get('/api/patients');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create: function(patientData) {
            return $http.post('/api/patients', patientData);
        },

        // call to DELETE a nerd
        delete: function(id) {
            return $http.delete('/api/patients/' + id);
        }
    }

}]);
