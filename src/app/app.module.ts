import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; // 削除予定
// HttpClientModuleに移行して行く
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// global import for Observable.map
import 'rxjs/add/operator/map';

import { MomentService } from './services/moment.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { RegisterTeachersComponent } from './teacher-information/register-teachers/register-teachers.component';
import { TeacherScheduleComponent } from './teacher-information/teacher-schedule/teacher-schedule.component';
import { OperationsComponent } from './teacher-information/teacher-schedule/operations/operations.component';
import { StudentInformationComponent } from './student-information/student-information/student-information.component';
import { RegisterBookingComponent } from './reservation/register-booking/register-booking.component';
import { SearchBookingComponent } from './reservation/search-booking/search-booking.component';
import { CheckTeacherScheduleComponent } from './reservation/check-teacher-schedule/check-teacher-schedule.component';
import { SchoolInformationComponent } from './administration/school-information/school-information.component';
import { RegisterAdministratorsComponent } from './administration/register-administrators/register-administrators.component';
import { SettingAuthorityComponent } from './administration/setting-authority/setting-authority.component';
import { PullDownMenuComponent } from './system-setting/pull-down-menu/pull-down-menu.component';
import { TimeLimitComponent } from './system-setting/time-limit/time-limit.component';
import { TimeZoneComponent } from './system-setting/time-zone/time-zone.component';
import { PaypalComponent } from './system-setting/paypal/paypal.component';
import { TeacherFormsComponent } from './teacher-information/register-teachers/teacher-forms/teacher-forms.component';
import { ScheduleTableComponent } from './teacher-information/teacher-schedule/schedule-table/schedule-table.component';
import { SearchCustomerComponent } from './reservation/register-booking/search-customer/search-customer.component';
import { RegisterTableComponent } from './reservation/register-booking/register-table/register-table.component';
import { SearchFormComponent } from './reservation/search-booking/search-form/search-form.component';
import { SearchTableComponent } from './reservation/search-booking/search-table/search-table.component';
import { CancellationBookingComponent } from './reservation/search-booking/cancellation-booking/cancellation-booking.component';
import { CheckTableComponent } from './reservation/check-teacher-schedule/check-table/check-table.component';
import {
    CheckScheduleSearchFormComponent
} from './reservation/check-teacher-schedule/check-schedule-search-form/check-schedule-search-form.component';
import {
    InformationSearchFormComponent
} from './student-information/student-information/information-search-form/information-search-form.component';
import { InformationTableComponent } from './student-information/student-information/information-table/information-table.component';
import { OverviewComponent } from './student-information/overview/overview.component';
import { CreditInformationComponent } from './student-information/credit-information/credit-information.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TopMenuComponent,
        RegisterTeachersComponent,
        TeacherScheduleComponent,
        OperationsComponent,
        StudentInformationComponent,
        RegisterBookingComponent,
        SearchBookingComponent,
        CheckTeacherScheduleComponent,
        SchoolInformationComponent,
        RegisterAdministratorsComponent,
        SettingAuthorityComponent,
        PullDownMenuComponent,
        TimeLimitComponent,
        TimeZoneComponent,
        PaypalComponent,
        TeacherFormsComponent,
        ScheduleTableComponent,
        SearchCustomerComponent,
        RegisterTableComponent,
        SearchFormComponent,
        SearchTableComponent,
        CancellationBookingComponent,
        CheckTableComponent,
        CheckScheduleSearchFormComponent,
        InformationSearchFormComponent,
        InformationTableComponent,
        OverviewComponent,
        CreditInformationComponent
    ],
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        HttpModule, // 削除予定
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [
        MomentService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
