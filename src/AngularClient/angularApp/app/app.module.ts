import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './app.constants';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { SharedModule } from './modules/shared/shared.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutes,
        SharedModule.forRoot(),
		HomeModule,
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
