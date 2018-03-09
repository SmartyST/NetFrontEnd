/**
 * 
 */
app.controller('NotificationCtrl',function($scope,$rootScope,NotificationService){
	function getNotificationsNotViewed(){
		NotificationService.getNotificationsNotViewed().then(
				function(response) {
					$rootScope.notifications=response.data
					$rootScope.notificationCoun=$rootScope.notifications.length
				},
				function(response) {
					$rootScope.error=response.data
					if(response.status==401)
						$location.path('/login')
				})
		}
	
	getNotificationsNotViewed()
})