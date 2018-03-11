/**
 * 
 */
app.factory('NotificationService',function($http){
	var notificationService={}
	notificationService.getNotificationsNotViewed=function(){
		return $http.get("http://localhost:8081/project2middleware/getnotifications")
	}
	
	notificationService.getNotification=function(id){
		return $http.get("http://localhost:8081/project2middleware/getnotification/"+id)
	}
	
	notificationService.updateNotification=function(id){
		return $http.put("http://localhost:8081/project2middleware/updatenotification/"+id)
	}

	return notificationService;
})