/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'angular',
    'uiRouter',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (ng) {
    'use strict';

    return ng.module('hwcApp', [
        'hwcApp.services',
        'hwcApp.controllers',
        'hwcApp.filters',
        'hwcApp.directives',
        'ui.router'
    ]);
});
