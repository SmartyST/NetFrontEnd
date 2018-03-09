/**
 * 
 */
app.factory('NotificationService',function($http){
	var notificationService={}
	notificationService.getNotificationsNotViewed=function(){
		return $http.get("http://localhost:8081/project2middleware/getnotifications")
	}

	return notificationService;
})