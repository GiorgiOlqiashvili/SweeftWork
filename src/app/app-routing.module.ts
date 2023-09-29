import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxInfiniteScrollComponent } from './components/ngx-infinite-scroll/ngx-infinite-scroll.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'ngx-infinite-scroll', component: NgxInfiniteScrollComponent}
];
 
@NgModule({
  imports:[
  CommonModule, 
  RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
