import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullComponent } from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NameUserPipe } from './pipes/name-user.pipe';
import { AuthService } from './services/auth.service';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ListProductsService } from './services/list-products.service';
import { ProductRecordComponent } from './components/product-record/product-record.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    ContentComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    NameUserPipe,
    ProductlistComponent,
    ProductRecordComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, ListProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
