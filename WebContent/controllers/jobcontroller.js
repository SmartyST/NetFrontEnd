/**
 * 
 */
app.controller('JobController',function($scope,$rootScope,$location,$http,$cookieStore,JobService){
	
	$scope.addJob=function(){
		JobService.addJob($scope.user).then(
		function(response){
			console.log(response.status)
			alert('Job Details added sucessfully')
			$location.path('/addjob')	
		},function(response){
			$scope.error=response.data
		})
	}
})