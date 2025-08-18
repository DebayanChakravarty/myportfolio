import { Component, Input } from '@angular/core';

export interface Project {
  title: string;
  summary: string;
  emoji: string;
  bannerClass: string;
  tags: { label: string; colorClass: string; }[];
  demoUrl?: string;
  codeUrl?: string;
}

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent { @Input() project!: Project; }
