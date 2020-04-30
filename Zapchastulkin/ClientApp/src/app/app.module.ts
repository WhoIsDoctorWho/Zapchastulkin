import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './data-visualization/category-list.component';
 
import { CategoryCreateComponent } from './data-manipulations/create/category-create.component';
import { CategoryFormComponent } from './data-manipulations/forms/category-form.component';
 
import { UnitCreateComponent } from './data-manipulations/create/unit-create.component';
import { UnitFormComponent } from './data-manipulations/forms/unit-form.component';
 
import { ProductCreateComponent } from './data-manipulations/create/product-create.component';
import { ProductFormComponent } from './data-manipulations/forms/product-form.component';

import { UnitListComponent } from './data-visualization/unit-list.component';
import { ProductListComponent } from './data-visualization/product-list.component';
import { ProductDetailComponent } from './data-visualization/product-detail.component';
import { AboutComponent } from './common-pages/about.component';
import { NotFoundComponent } from './common-pages/not-found.component';
import { DataService } from './data.service';
  
const appRoutes: Routes = [
    { path: '', component: CategoryListComponent },
    { path: 'categories', component: CategoryListComponent },
    { path: 'categories/create', component: CategoryCreateComponent },
    { path: 'categories/:id', component: UnitListComponent },
    { path: 'units/create', component: UnitCreateComponent }, 
    { path: 'units/:id', component: ProductListComponent },
    { path: 'products/create', component: ProductCreateComponent }, 
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent,
        CategoryListComponent, CategoryCreateComponent, CategoryFormComponent,
        UnitListComponent, UnitCreateComponent, UnitFormComponent,        
        ProductListComponent, ProductDetailComponent, ProductCreateComponent, ProductFormComponent,
        AboutComponent, NotFoundComponent],
    providers: [DataService], 
    bootstrap: [AppComponent]
})
export class AppModule { }