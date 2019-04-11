import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'home', component: homeComponet },
    { path: 'about-us', component:aboutUsComponent },
    {}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ] 
})
export class AppRoutingModule { }
