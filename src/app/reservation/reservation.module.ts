import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { CheckTeacherScheduleComponent } from './check-teacher-schedule/check-teacher-schedule.component';
import { CheckScheduleSearchFormComponent } from './check-teacher-schedule/check-schedule-search-form/check-schedule-search-form.component';
import { CheckTableComponent } from './check-teacher-schedule/check-table/check-table.component';

import { RegisterBookingComponent } from './register-booking/register-booking.component';
import { SearchCustomerComponent } from './register-booking/search-customer/search-customer.component';

import { SearchBookingComponent } from './search-booking/search-booking.component';
import { CancellationBookingComponent } from './search-booking/cancellation-booking/cancellation-booking.component';
import { SearchFormComponent } from './search-booking/search-form/search-form.component';
import { SearchTableComponent } from './search-booking/search-table/search-table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [
        CheckTeacherScheduleComponent,
        CheckScheduleSearchFormComponent,
        CheckTableComponent,
        RegisterBookingComponent,
        SearchCustomerComponent,
        SearchBookingComponent,
        CancellationBookingComponent,
        SearchFormComponent,
        SearchTableComponent
    ],
    exports: [
        CheckTeacherScheduleComponent,
        CheckScheduleSearchFormComponent,
        CheckTableComponent,
        RegisterBookingComponent,
        SearchCustomerComponent,
        SearchBookingComponent,
        CancellationBookingComponent,
        SearchFormComponent,
        SearchTableComponent
    ]
})
export class ReservationModule { }
