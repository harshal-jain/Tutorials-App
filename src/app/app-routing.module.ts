import { importExpr } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { CoursesModule } from './courses/courses.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
