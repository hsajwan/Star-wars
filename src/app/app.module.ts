import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { SrollableContainerComponent } from './components/srollable-container/srollable-container.component';
import { CheckNumberPipe } from './pipes/check-number.pipe';
import { Authguard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    SrollableContainerComponent,
    CheckNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [Authguard],
  bootstrap: [AppComponent]
})
export class AppModule { }
