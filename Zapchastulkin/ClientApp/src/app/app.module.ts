import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './data-visualization/category-list.component';
import { UnitListComponent } from './data-visualization/unit-list.component';
import { AboutComponent } from './common-pages/about.component';
import { NotFoundComponent } from './common-pages/not-found.component';
import { DataService } from './data.service';
  
const appRoutes: Routes = [
    { path: '', component: CategoryListComponent },
    { path: 'categories', component: CategoryListComponent },
    { path: 'categories/:id', component: UnitListComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, CategoryListComponent, UnitListComponent, AboutComponent, NotFoundComponent],
    providers: [DataService], 
    bootstrap: [AppComponent]
})
export class AppModule { }