import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductRecordComponent } from './components/product-record/product-record.component';
import { MyGuardGuard } from './security/my-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: FullComponent, canActivate:[MyGuardGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {path:'product', component: ProductlistComponent},
      {path:'conta', component: ProductRecordComponent}
    ],
  },
  {
    path: '',
    component: ContentComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
