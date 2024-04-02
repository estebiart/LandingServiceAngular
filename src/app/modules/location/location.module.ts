import { NgModule } from '@angular/core';
import { LocationComponent } from './location.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes =[
    {
        path:'',
        component: LocationComponent
    }
]


@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [],
    declarations: [LocationComponent],
    providers: [],
})
export class LocationModule { }
