import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { currencyconvertorComponent } from './currencyconvertor/currencyconvertor.component';


const routes: Routes = [
  {path:'Calculator',component:CalculatorComponent},
  {path:'Convertor',component:currencyconvertorComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
