import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SelectionTableComponent} from './selection-table/selection-table.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    declarations: [
        AppComponent,
        SelectionTableComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
