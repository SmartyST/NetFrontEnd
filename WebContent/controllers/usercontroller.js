/**
 * 
 */

app.controller('UserController',function($scope,$rootScope,$location,UserService,$cookieStore){
	
	if($rootScope.loggedInUser!=undefined){
		UserService.getUserDetails().then(function(response){
			$scope.user=response.data
		},function(response){
			console.log(response.status)
			$scope.error=response.data
			$location.path('/login')
		})
	}
	
	$scope.registerUser=function(){
				UserService.registerUser($scope.user).then(
				function(response){
				alert('You are Registered Sucessfully...')
				$location.path('/login')
		},function(response){
			$scope.error=response.data
		})
	}
	
	
	$scope.login=function(){
		UserService.login($scope.user).then(function(response){
			$rootScope.loggedInUser=response.data
			$cookieStore.put('currentuser',response.data)
			$location.path('/home')
		  },function(response){
			  $scope.error=response.data
			  $location.path('/login')
			
		})
		
	}
	
})