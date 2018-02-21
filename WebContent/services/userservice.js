/**
 * 
 */
app.factory('UserService', function($http){
	var userService={}
	
	userService.registerUser=function(user){
		
		console.log('in userservice ' + user)
		return $http.post("http://localhost:8081/project2middleware/registeruser",user)
	}
	
	userService.login=function(user){
		console.log('Userservice login function')
		console.log(user)
		return $http.post("http://localhost:8081/project2middleware/login",user)
	}
	
	userService.logout=function(){
		console.log('logout function')
		return $http.put("http://localhost:8081/project2middleware/logout")
	}
	
	return userService;
})