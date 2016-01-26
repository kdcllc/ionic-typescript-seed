module kdc.blocks {
    'use strict';

    export interface IApiEndpointConfig {
        baseUrl: string;
    }

    export interface IApIEndpointProvider {
        configure(baseUrl: string): void;
    }

    export class ApiEndpointProvider implements ng.IServiceProvider, IApIEndpointProvider {
        config: IApiEndpointConfig;
        public static ID = kdc.constants.blocks + '.ApiEndpoint';
        public static Name = kdc.constants.blocks + '.ApiEndpointProvider';
        
        configure(baseUrl: string): void {
            this.config = {
                baseUrl: baseUrl
            };
        }
        
        //ng.IServiceProvider
        $get(): IApiEndpointConfig {
            return this.config;
        }
    }

    angular
        .module(kdc.constants.blocks)
        .provider(ApiEndpointProvider.ID, ApiEndpointProvider);
}