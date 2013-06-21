/* global define */

define(
    [
        'angular'
    ],
    function ProfilesServices(angular) {
        'use strict';

        return angular.module(
                'ProfilesServices',
                [
                    'ngResource'
                ]
            ).factory(
            'ProfilesDataService',
            function ($resource) {
                return $resource(
                    'svc/profiles/data.json',
                    {},
                    {
                        query: {
                            method: 'GET',
                            isArray: true
                        }
                    }
                );
            }).factory(
            'ProfilesWrapperService',
            function ($resource) {
                return $resource(
                    'svc/profiles/wrapper.json',
                    {},
                    {
                        query: {
                            method: 'GET'
                        }
                    }
                );
            }
        );
    }
);

/* EOF */