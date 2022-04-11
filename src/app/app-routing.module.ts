import { ListOrgComponent } from './modules/org/list-org/list-org.component';
import { CadastroScheduleComponent } from './modules/schedule/cadastro-schedule/cadastro-schedule.component';
import { CadastroOrgComponent } from './modules/org/cadastro-org/cadastro-org.component';
import { ContentComponent } from './modules/content/content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListScheduleComponent } from './modules/schedule/list-schedule/list-schedule.component';

const routes: Routes = [
{path: '', component: ContentComponent},
{path: 'org', component: CadastroOrgComponent},
{path: 'org-list', component: ListOrgComponent},
{path: 'schedule', component: CadastroScheduleComponent},
{path: 'schedule-list', component: ListScheduleComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
