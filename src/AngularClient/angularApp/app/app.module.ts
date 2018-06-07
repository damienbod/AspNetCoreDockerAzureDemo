import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './app.constants';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';

import { SharedModule } from './shared/shared.module';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutes,
        SharedModule,
        HttpClientModule
    ],

    declarations: [
        AppComponent
    ],

    providers: [
        Configuration
    ],

    bootstrap: [AppComponent],
})

export class AppModule { }