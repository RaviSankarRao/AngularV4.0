import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { InfoAlertComponent } from './shared/info-alert/info-alert.component';
import { DangerAlertComponent } from './shared/danger-alert/danger-alert.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { IfElseComponent } from './if-else/if-else.component';
import { StyleDirectiveComponent } from './style-directive/style-directive.component';
import { WarningAlertComponent } from './shared/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './shared/success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    InfoAlertComponent,
    DangerAlertComponent,
    DataBindingComponent,
    IfElseComponent,
    StyleDirectiveComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
