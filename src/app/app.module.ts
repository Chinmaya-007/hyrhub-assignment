import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { ApiService} from "./core/api.service";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule,NbCardModule, NbButtonModule, NbUserModule,NbActionsModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { AuthServiceConfig } from 'angularx-social-login';
import { SocialLoginModule, GoogleLoginProvider} from 'angularx-social-login';

const config = new AuthServiceConfig([
  {
  id:GoogleLoginProvider.PROVIDER_ID,
  provider: new GoogleLoginProvider('917806622535-vjd1gntaicv51b7lgrqmktgourau6bol.apps.googleusercontent.com')
  }
]);

export function provideConfig(){
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbButtonModule,
    NbActionsModule,
    NbEvaIconsModule,
    NbUserModule,
    NbCardModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ApiService,{
      
      provide: AuthServiceConfig,
      useFactory: provideConfig
        }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
