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
		return $http.put("http://localhost:8081/project2middleware/logout")
	}
	
	userService.getUser=function(){
		return $http.get("http://localhost:8081/project2middleware/getuser")
	}
	
	userService.updateUser=function(user){
		return $http.put("http://localhost:8081/project2middleware/updateuser",user)
	}
	
	return userService;
})