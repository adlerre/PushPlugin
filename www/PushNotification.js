/*
 * 
 * Copyright 2013 René Adler
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var argscheck = require('cordova/argscheck'), exec = require('cordova/exec');

var PushNotification = function() {

    /**
     * Call this to register for push notifications. Content of [options]
     * depends on whether we are working with APNS (iOS) or GCM (Android)
     * 
     * @param {Function}
     *                successCallback
     * @param {Function}
     *                errorCallback
     * @param {Object}
     *                options
     *                
     * @return 
     *		Object.deviceToken {String}: the device token 
     * 		Object.pushAlert {String}: if alert enabled or disabled by user 
     * 		Object.pushBadge {String}: if badge enabled or disabled by user
     * 		Object.pushSound {String}: if sound enabled or disabled by user
     */
    this.register = function(successCallback, errorCallback, options) {
	argscheck.checkArgs('fF', 'PushPlugin.register', arguments);
	cordova.exec(successCallback, errorCallback, "PushPlugin", "register", [ options ]);
    };

    /**
     * Call this to unregister for push notifications
     * 
     * @param {Function}
     *                successCallback
     * @param {Function}
     *                errorCallback
     */
    this.unregister = function(successCallback, errorCallback) {
	argscheck.checkArgs('fF', 'PushPlugin.unregister', arguments);
	cordova.exec(successCallback, errorCallback, "PushPlugin", "unregister", []);
    };

    /**
     * Call this to set the application icon badge
     * 
     * @param {Function}
     *                successCallback
     * @param {Function}
     *                errorCallback
     * @param {Object}
     *                badge
     */
    this.setApplicationIconBadgeNumber = function(successCallback, errorCallback, badge) {
	argscheck.checkArgs('fF', 'PushPlugin.setApplicationIconBadgeNumber', arguments);
	cordova.exec(successCallback, errorCallback, "PushPlugin", "setApplicationIconBadgeNumber", [ {
	    badge : badge
	} ]);
    };
};

module.exports = new PushNotification();