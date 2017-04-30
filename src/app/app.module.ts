import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { appRouting } from './app.routing'

import { AppComponent } from './app.component'
import { HomeComponent } from './components/000_Home/000_Home.component'
import { PricingCalculatorComponent } from './components/001_PricingCalculator/001_PricingCalculator.component'
import { CrazyButtonsComponent } from './components/002_CrazyButtons/002_CrazyButtons.component'
import { DharmaTimerComponent } from './components/003_DharmaTimer/003_DharmaTimer.component'
import { AccordionComponent } from './components/004_Accordion/004_Accordion.component'
import { ScrollProgressComponent } from './components/005_ScrollProgress/005_ScrollProgress.component'
import { FloatingInputComponent } from './components/006_FloatingInput/006_FloatingInput.component'
import { AnimeJsComponent } from './components/007_AnimeJS/007_AnimeJS.component'
import { CanvasComponent } from './components/008_CanvasDraw/008_CanvasDraw.component'

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/switchMap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingCalculatorComponent,
    CrazyButtonsComponent,
    DharmaTimerComponent,
    AccordionComponent,
    ScrollProgressComponent,
    FloatingInputComponent,
    AnimeJsComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
