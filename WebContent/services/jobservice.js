/**
 * 
 */
app.factory('JobService', function($http){
	var jobService={}
	
	jobService.addjob=function(job){
		
		console.log('in jobservice' + job)
		return $http.post("http://localhost:8081/project2middleware/addjob",job)
	}
	
	return jobService;
	
})