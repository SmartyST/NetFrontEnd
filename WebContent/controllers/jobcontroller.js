/**
 * 
 */
app.controller('JobCtrl',function($scope,$rootScope,$location,JobService){
	
	$scope.addJob=function(job){
		JobService.addJob(job).then(
		function(response){
			alert('Job Details added sucessfully')
			$location.path('/home')	
		},function(response){
			$rootScope.error=response.data
			if(response.status==401)
				$location.path('/login')
				
		})
	}
})