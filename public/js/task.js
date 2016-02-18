angular.module('todoApp', [])
    .controller('TodoListController', function($scope, $http) {

        $scope.taskData = {};

    $http.get('/api/tasks')
        .success(function(data) {
            $scope.tasks = data;
            console.log(data)
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createTask = function() {
        $http.post('/api/tasks', $scope.taskData)
            .success(function(data) {
                $scope.taskData = {};
                $scope.tasks.push(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
        $scope.deleteTask = function(id,index) {
            $http.delete('/api/tasks/'+id)
                .success(function() {
                    $scope.tasks.splice(index,1);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };

});

