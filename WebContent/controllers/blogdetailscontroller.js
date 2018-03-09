/**
 * 
 */
app.controller('BlogDetailCtrl',function($scope,$location,$rootScope,BlogService,$sce,$routeParams){
	var id=$routeParams.id;
	$scope.rejectionTxt=false;
	BlogService.getBlog(id).then(
			function(response){
				console.log(response.data)
				$scope.blog=response.data
				$scope.content=$sce.trustAsHtml($scope.blog.blog_content)
			},function(response){
				$rootScope.error=response.data
				if(response.status==401)
					$location.path('/login')
				
			})
			
	$scope.approve=function(blog){
		BlogService.approve(blog).then(function(response){
			$location.path('/blogsnotapproved')
		},function(response){
			$rootScope.error=response.data
			if(response.status==401)
				$location.path('/login')
		})
	}
	
	$scope.reject=function(blog){
		BlogService.reject(blog,$scope.rejectionReason).then(function(response){
			$location.path('/blogsnotapproved')
		},function(response){
			$rootScope.error=response.data
			if(response.status==401)
				$location.path('/login')
		})
	}
	
	$scope.showRejectionTxt=function(){
		$scope.rejectionTxt=true;
	}
	
})
