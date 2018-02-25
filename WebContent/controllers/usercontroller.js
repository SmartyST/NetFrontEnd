/**
 * 
 */

app.controller('UserController',function($scope,$rootScope,$location,UserService,$cookieStore){
	
	if($rootScope.loggedInUser!=undefined){
		UserService.getUser().then(function(response){
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
	
	
	$scope.login=function(user){
		UserService.login(user).then(function(response){
			$rootScope.loggedInUser=response.data
			$cookieStore.put('currentuser',response.data)
			$location.path('/home')
		  },function(response){
			  $scope.error=response.data
			  $location.path('/login')
			
		})	
	}
	
	if($rootScope.loggedInUser!=undefined){
	UserService.getUser().then(
			function(response){
				$scope.user=response.data
			},
			function(response){
				if(response.status==401)
					$location.path('/login')
				
			})
	}
	
	$scope.updateUser=function(user){
		UserService.updateUser(user).then(function(response){
			alert('User Profile Updated Sucessfully')
			$rootScope.loggedInUser=response.data
			$cookieStore.put('loggedInUser',response.data)
			$location.path('/home')
		},function(response){
			if(response.status==401)
				$location.path('/login')
			else
				$scope.error=response.data
		})
	}
})



















