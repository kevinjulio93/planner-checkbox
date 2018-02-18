import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PlannerCheckboxComponent } from './planner-checkbox/planner-checkbox';
@NgModule({
	declarations: [PlannerCheckboxComponent],
	imports: [IonicModule.forRoot(PlannerCheckboxComponent)],
	exports: [PlannerCheckboxComponent]
})
export class ComponentsModule {}
