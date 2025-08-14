import { Component } from '@angular/core';

type Highlight = { emoji: string; label: string; };
type Skill = { name: string; level: number }; // level = 0..100
type Section = { title: string; accent: string; skills: Skill[] };

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  highlights: Highlight[] = [
    { emoji: '⚛️', label: 'React' },
    { emoji: '🅰️', label: 'Angular' },
    { emoji: '🧰', label: 'TypeScript' },
    { emoji: '🎯', label: 'RxJS' },
    { emoji: '🎨', label: 'Tailwind' },
    { emoji: '🧪', label: 'Jest/Cypress' }
  ];

  sections: Section[] = [
    {
      title: 'Frontend',
      accent: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'Angular', level: 85 },
        { name: 'React', level: 82 },
        { name: 'TypeScript', level: 88 },
        { name: 'RxJS', level: 78 },
        { name: 'Tailwind CSS', level: 84 }
      ]
    },
    {
      title: 'Backend & APIs',
      accent: 'from-emerald-500 to-teal-600',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express/Nest', level: 68 },
        { name: 'REST/GraphQL', level: 72 }
      ]
    },
    {
      title: 'Data & State',
      accent: 'from-indigo-500 to-sky-600',
      skills: [
        { name: 'NgRx/Signals', level: 70 },
        { name: 'Redux/Zustand', level: 68 },
        { name: 'MongoDB', level: 65 },
        { name: 'PostgreSQL', level: 58 }
      ]
    },
    {
      title: 'DevOps & Quality',
      accent: 'from-pink-500 to-rose-600',
      skills: [
        { name: 'CI/CD', level: 66 },
        { name: 'Docker', level: 60 },
        { name: 'AWS', level: 55 },
        { name: 'Testing (Jest/Cypress)', level: 72 }
      ]
    }
  ];
}
