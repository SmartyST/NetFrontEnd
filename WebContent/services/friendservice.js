/**
 * 
 */
app.factory('FriendService',function($http){
	var friendService={}
	friendService.getAllSuggestedUsers=function(){
		return $http.get("http://localhost:8081/project2middleware/suggestedusers")
	}
	
	friendService.addFriend=function(toId){
		return $http.post("http://localhost:8081/project2middleware/addfriend",toId);
	}
	
	friendService.getPendingRequests=function(){
		return $http.get("http://localhost:8081/project2middleware/pendingrequests")
	}
	
	friendService.acceptRequest=function(request){
		return $http.put("http://localhost:8081/project2middleware/acceptrequest",request);
	}
	
	friendService.deleteRequest=function(request){
		return $http.put("http://localhost:8081/project2middleware/deleterequest",request);
	}
	
	return friendService;
})