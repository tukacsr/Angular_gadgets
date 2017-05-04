import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

import { HomeComponent } from './components/000_Home/000_Home.component'
import { PricingCalculatorComponent } from './components/001_PricingCalculator/001_PricingCalculator.component'
import { CrazyButtonsComponent } from './components/002_CrazyButtons/002_CrazyButtons.component'
import { DharmaTimerComponent } from './components/003_DharmaTimer/003_DharmaTimer.component'
import { AccordionComponent } from './components/004_Accordion/004_Accordion.component'
import { ScrollProgressComponent } from './components/005_ScrollProgress/005_ScrollProgress.component'
import { FloatingInputComponent } from './components/006_FloatingInput/006_FloatingInput.component'
import { AnimeJsComponent } from './components/007_AnimeJS/007_AnimeJS.component'
import { CanvasComponent } from './components/008_CanvasDraw/008_CanvasDraw.component'
import { AnimatedButtonsComponent } from './components/009_AnimatedButtons/009_AnimatedButtons.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '001', component: PricingCalculatorComponent },
  { path: '002', component: CrazyButtonsComponent },
  { path: '003', component: DharmaTimerComponent },
  { path: '004', component: AccordionComponent },
  { path: '005', component: ScrollProgressComponent },
  { path: '006', component: FloatingInputComponent },
  { path: '007', component: AnimeJsComponent },
  { path: '008', component: CanvasComponent },
  { path: '009', component: AnimatedButtonsComponent }
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes)