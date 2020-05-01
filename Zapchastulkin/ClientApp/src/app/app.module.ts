import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';  
 
import { CategoryListComponent } from './category/read/category-list.component';
import { CategoryCreateComponent } from './category/create/category-create.component';
import { CategoryUpdateComponent } from './category/update/category-update.component';
import { CategoryFormComponent } from './category/create/category-form.component';
  
import { UnitListComponent } from './unit/read/unit-list.component'; 
import { UnitCreateComponent } from './unit/create/unit-create.component';
import { UnitUpdateComponent } from './unit/update/unit-update.component';
import { UnitFormComponent } from './unit/create/unit-form.component';

import { ProductListComponent } from './product/read/product-list.component';
import { ProductDetailComponent } from './product/read/product-detail.component';
import { ProductCreateComponent } from './product/create/product-create.component';
import { ProductUpdateComponent } from './product/update/product-update.component';
import { ProductFormComponent } from './product/create/product-form.component';

import { GetImageComponent } from './common-modules/get-image.component'
import { AboutComponent } from './common-pages/about.component';
import { NotFoundComponent } from './common-pages/not-found.component';

import { CategoryService } from './services/category.service';
import { UnitService } from './services/unit.service';
import { ProductService } from './services/product.service';
import { FileService } from './services/file.service';
  
const appRoutes: Routes = [
    { path: '', component: CategoryListComponent },
    { path: 'categories', component: CategoryListComponent },
    { path: 'categories/create', component: CategoryCreateComponent },
    { path: 'categories/update/:id', component: CategoryUpdateComponent },
    { path: 'categories/:id', component: UnitListComponent },
    { path: 'units/create', component: UnitCreateComponent }, 
    { path: 'units/update/:id', component: UnitUpdateComponent },
    { path: 'units/:id', component: ProductListComponent },
    { path: 'products/create', component: ProductCreateComponent }, 
    { path: 'products/update/:id', component: ProductUpdateComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NotFoundComponent }
]; 

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent,
        CategoryListComponent, CategoryCreateComponent, CategoryUpdateComponent, CategoryFormComponent,
        UnitListComponent, UnitCreateComponent, UnitUpdateComponent, UnitFormComponent,        
        ProductListComponent, ProductDetailComponent, ProductCreateComponent, ProductUpdateComponent, ProductFormComponent,
        GetImageComponent, AboutComponent, NotFoundComponent],
    providers: [CategoryService, UnitService, ProductService, FileService], 
    bootstrap: [AppComponent]
})
export class AppModule { }