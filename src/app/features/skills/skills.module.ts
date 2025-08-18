import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SkillsComponent } from './skills.component';

@NgModule({
  declarations: [SkillsComponent],
  imports: [CommonModule, SharedModule],
  exports: [SkillsComponent]
})
export class SkillsModule {}
