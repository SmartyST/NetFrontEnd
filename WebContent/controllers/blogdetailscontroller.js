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
			
	BlogService.hasUserLikedBlog(id).then(
			function(response){
				if (response.data=='') 
					$scope.isLiked=false
					else 
						$scope.isLiked=true
						
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
	
	$scope.updateLikes=function(id){
		BlogService.updateLikes(id).then(function(response){
			$scope.blog=response.data
			$scope.isLiked=!$scope.isLiked
		},function(response){
			$rootScope.error=response.data
			if(response.status==401)
				$location.path('/login')
		})
	}
	
})
