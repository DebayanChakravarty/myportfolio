import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ProjectsComponent } from './projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectCardComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProjectsComponent]
})
export class ProjectsModule {}
