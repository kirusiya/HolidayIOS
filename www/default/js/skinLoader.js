
/* JavaScript content from js/skinLoader.js in folder iphone */
/**
* @license
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

/*
 * Override this function to return skin names appropriate for your application. 
 * See examples below. 
 */
function getSkinName() {
	return "default";
}

//===================================== IOS EXAMPLE =========================================================

/*
 * Determines the skin according to the type of device. Useful for iOS devices with 
 * different screen resolution.
 */

/*function getSkinName() {
	var skinName = "default"; // The default is used for iPhone 3 and iPod Touch devices
	var platform = device.platform;
	if (platform.toLowerCase().indexOf("ipad") != -1) {
		skinName = "ipad"; 
	} 
	return skinName;
}
*/

//===================================== ANDROID EXAMPLE =====================================================

/*
 * Determines the skin according to operating system. Useful for Android devices that run different
 * operating system versions with different capabilities.
 */

/*function getSkinName() {
	var skinName = "default";
	if (device.version == "2.2" || device.version == "2.1") {
		skinName = "android.HTML5"; 
	}
	return skinName;
}
*/

// ===================================== BLACKBERRY EXAMPLE ==================================================

/*
 * Determines the skin according to screen resolution. Useful for BlackBerry devices 
 * with various screen resolutions
 */

/*function getSkinName() {
	var skinName = "default";
	var screenHeight = screen.height;
	var screenWidth = screen.width;
	if (isPlaybook()) {
		skinName = "blackberry.playBook";
	} else if (screenHeight <= 240 || screenWidth <= 320) {
		// BlackBerry Curve
		skinName = "blackberry.lowDensity"; 
	} else if (screenHeight >= 320 || screenWidth >= 360 ) {
		// BlackBerry Torch, Bold, and Tour
		skinName = "blackberry.highDensity";
	} 
	return skinName;
}

function isPlaybook () {
	return navigator.userAgent.indexOf("RIM Tablet OS") > -1;
} 
*/







