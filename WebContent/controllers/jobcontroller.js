/**
 * 
 */
app.controller('JobCtrl',function($scope,$rootScope,$location,JobService,$routeParams){
	
	var id=$routeParams.id
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
	
	JobService.getAllJobs().then(function(response){
		$scope.jobs=response.data
	},function(response){
		$rootScope.error=response.data
		if(response.status==401)
			$location.path('/login')
	})
	
	if(id!=undefined){
	JobService.getJob(id).then(function(response){
		$scope.job=response.data
	},function(response){
		$rootScope.error=response.data
		if(response.status==401)
			$location.path('/login')
			
	})
	}
})