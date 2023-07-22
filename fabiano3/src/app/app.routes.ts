import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CategoriesComponent } from "./categories/categories.component";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";

export const ROUTES: Routes = [
   {path: '', component: HomeComponent},
   {path: 'sobre', component: AboutComponent},
   {path: 'categorias', component: CategoriesComponent},
   {path: 'lista', component: ListComponent}
];