import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { ModalModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { GradingComponent } from './pages/grading/grading.component';
import { AboutcattleComponent } from './pages/aboutcattle/aboutcattle.component';
import { GradedComponent } from './pages/grading/graded/graded.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule} from '@angular/forms';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { LoginComponent } from './authen/login/login.component';
import { RegisterComponent } from './authen/register/register.component';

import { UploadFileService } from './upload/upload-file.service';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { HistoryComponent } from './pages/history/history.component';
import { ReportComponent } from './pages/report/report.component';
import { ReadycutComponent } from './pages/aboutcattle/readycut/readycut.component';
import { SumgradeComponent } from './pages/grading/sumgrade/sumgrade.component';
import { SummarredComponent } from './pages/grading/sumgrade/summarred/summarred.component';
import { SumshowComponent } from './pages/grading/sumgrade/sumshow/sumshow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddcattleComponent } from './adddata/addcattle/addcattle.component';


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
  { path: 'readycut', component: ReadycutComponent },
  { path: 'sumgrade', component: SumgradeComponent },
  { path: 'summarred', component: SummarredComponent },
  { path: 'sumshow', component: SumshowComponent },
  { path: 'addcattle', component: AddcattleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GradingComponent,
    AboutcattleComponent,
    DashboardComponent,
    GradedComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    LoginComponent,
    RegisterComponent,
    HistoryComponent,
    ReportComponent,
    ReadycutComponent,
    SumgradeComponent,
    SummarredComponent,
    SumshowComponent,
    AddcattleComponent
  ],
  imports: [
    ModalModule.forRoot(),
    MatButtonModule,
    MatCheckboxModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    UiModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, RouterModule],
  providers: [UploadFileService],
  bootstrap: [AppComponent]
})

export class AppModule { }

