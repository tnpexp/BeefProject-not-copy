import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './../authen/login/login.component';
import { RegisterComponent} from './../authen/register/register.component';
import { DashboardComponent} from './../pages/dashboard/dashboard.component';
import { GradingComponent} from './../pages/grading/grading.component';
import { GradedComponent} from './../pages/grading/graded/graded.component';
import { AboutcattleComponent} from './../pages/aboutcattle/aboutcattle.component';
import { HistoryComponent} from './../pages/history/history.component';
import { ReportComponent} from './../pages/report/report.component';
import { SumgradeComponent} from './../pages/grading/sumgrade/sumgrade.component';
import { SummarredComponent} from './../pages/grading/sumgrade/summarred/summarred.component';
import { SumshowComponent} from './../pages/grading/sumgrade/sumshow/sumshow.component';
import { AddcattleComponent} from './../adddata/addcattle/addcattle.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'grading', component: GradingComponent },
  { path: 'graded', component: GradedComponent },
  { path: 'aboutcattle', component: AboutcattleComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'report', component: ReportComponent },
  { path: 'sumgrade', component: SumgradeComponent },
  { path: 'summarred', component: SummarredComponent },
  { path: 'sumshow', component: SumshowComponent },
  { path: 'addcattle', component: AddcattleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
