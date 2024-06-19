import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './user/userReducer';
import { UserPageComponent } from './user/user-page/user-page.component';
import { MaterialExampleModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({user: userReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
