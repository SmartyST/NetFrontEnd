/**
 * 
 */
app.factory('JobService', function($http){
	var jobService={}
	
	jobService.addJob=function(job){	
		return $http.post("http://localhost:8081/project2middleware/addjob",job)
	}
	
	/*jobService.getAllJobs=function()
		{	
		return $http.post("http://localhost:8081/project2middleware/alljobs")
	}*/
	
	
	
	return jobService;
	
})