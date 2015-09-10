/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./index'], function(app) {
    'use strict';
    return app.config(function($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise("/home");

        $stateProvider.state('home',{
            url: '/home',
            views: {
                "header": { templateUrl: 'modules/header/templates/index.html'},
                "main": { templateUrl: 'modules/home/templates/index.html', controller:'MyCtrl1' },
                "footer": { templateUrl: 'modules/footer/templates/index.html'}
            }
        })
        .state('settings',{
            url: '/settings',
            views: {
                "header": { templateUrl: 'modules/header/templates/index.html'},
                "main": { templateUrl: 'modules/settings/templates/index.html', controller:'SettingsCtrl1' },
                "footer": { templateUrl: 'modules/footer/templates/index.html'}
            }
        });
    })
});