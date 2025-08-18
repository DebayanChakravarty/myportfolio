import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ExperienceComponent } from './experience.component';

@NgModule({
  declarations: [ExperienceComponent],
  imports: [CommonModule, SharedModule],
  exports: [ExperienceComponent]
})
export class ExperienceModule {}
