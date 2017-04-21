import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

import { HomeComponent } from './components/000_Home/000_Home.component'
import { PricingCalculatorComponent } from './components/001_PricingCalculator/001_PricingCalculator.component'
import { CrazyButtonsComponent } from './components/002_CrazyButtons/002_CrazyButtons.component'


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '001', component: PricingCalculatorComponent },
  { path: '002', component: CrazyButtonsComponent }
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes)