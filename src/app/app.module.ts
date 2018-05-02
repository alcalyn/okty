// Modules
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

// Components
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {SetupComponent} from './components/setup/setup.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';

// Providers
import {ContainerService} from './services/container.service';
import {ContainerResolve} from './services/container.resolve';
import {ProjectService} from './services/project.service';
import {CacheService} from './services/cache.service';

// Pipes
import {FilterPipe} from './pipes/filter.pipe';

// Routes
import {routes} from './app.routes';
import {InputComponent} from './components/setup/form/input/input.component';
import {FormInputDirective} from './directives/form-input.directive';
import {PortComponent} from './components/setup/form/port/port.component';
import {VoidComponent} from './components/setup/form/void.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FilterPipe,
    SetupComponent,
    SidebarComponent,
    FormInputDirective,
    InputComponent,
    PortComponent,
    VoidComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ContainerService,
    ContainerResolve,
    ProjectService,
    CacheService,
  ],
  entryComponents: [
    InputComponent,
    PortComponent,
    VoidComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
