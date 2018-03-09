/**
 * 
 */

var app=angular.module('app',['ngRoute','ngCookies'])
app.config(function($routeProvider)
{
	$routeProvider
	.when('/register',{
		templateUrl:'views/registerform.html',
		controller: 'UserController'
		
	})
	
	.when('/login',{
		templateUrl:'views/login.html',
		controller: 'UserController'
	})
	
	.when('/edituserprofile',{
		templateUrl:'views/edituserprofile.html',
		controller: 'UserController'
	})
	
	.when('/addjob',{
		templateUrl:'views/jobform.html',
		controller: 'JobCtrl'
	})
	
	.when('/alljobs',{
		templateUrl:'views/jobslist.html',
		controller: 'JobCtrl'
	})
	
	.when('/getjob/:id',{
		templateUrl:'views/jobdetail.html',
		controller: 'JobCtrl'
	})
	
	.when('/addblog',{
		templateUrl:'views/blogform.html',
		controller: 'BlogCtrl'
	})
	
	.when('/blogsnotapproved',{
		templateUrl:'views/blogsnotapproved.html',
		controller: 'BlogCtrl'
	})
	
	.when('/blogsapproved',{
		templateUrl:'views/blogsapproved.html',
		controller: 'BlogCtrl'
	})
	
	.when('/getblog/:id',{
		templateUrl:'views/blogdetails.html',
		controller: 'BlogDetailCtrl'
	})
	
	.when('/getblognotapproved/:id',{
		templateUrl:'views/blogapprovalform.html',
		controller: 'BlogDetailCtrl'
	})
	
	.when('/home',{
		templateUrl:'views/home.html',
		controller: 'NotificationCtrl'
	})
	
	
	.otherwise({
		templateUrl:'views/home.html'
	})
})

app.run(function($location,$rootScope,$cookieStore,UserService){
	if($rootScope.loggedInUser==undefined)
		$rootScope.loggedInUser=$cookieStore.get('currentuser')
		
		$rootScope.logout=function(){
		console.log('entering logout')
		UserService.logout().then(
			function(response){
				delete $rootScope.loggedInUser;
				$cookieStore.remove('currentuser')
				$rootScope.message="Sucessfully Logout..."
				$location.path('/login')
			},function(response)
			{
				$rootScope.error=response.data
				if(response.status==401)
					$location.path('/login')
			})
		}
})