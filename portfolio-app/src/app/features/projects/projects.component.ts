import { Component } from '@angular/core';
import { Project } from './project-card/project-card.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      summary: 'Full-stack e-commerce with React, Node.js, MongoDB. Auth, payments, admin dashboard.',
      emoji: '🚀',
      bannerClass: 'from-blue-500 to-purple-600',
      tags: [
        { label: 'React',   colorClass: 'bg-blue-500/30 text-blue-300' },
        { label: 'Node.js', colorClass: 'bg-green-500/30 text-green-300' },
        { label: 'MongoDB', colorClass: 'bg-purple-500/30 text-purple-300' },
      ],
      demoUrl: '#', codeUrl: '#'
    },
    {
      title: 'Data Visualization Dashboard',
      summary: 'Interactive D3 + React dashboard for real-time analytics and insights.',
      emoji: '📊',
      bannerClass: 'from-green-500 to-teal-600',
      tags: [
        { label: 'D3.js', colorClass: 'bg-green-500/30 text-green-300' },
        { label: 'React', colorClass: 'bg-blue-500/30 text-blue-300' }
      ],
      demoUrl: '#', codeUrl: '#'
    },
    {
      title: 'AI Chat Assistant',
      summary: 'NLP chatbot in Python/TensorFlow, deployed on AWS with scalable infra.',
      emoji: '🤖',
      bannerClass: 'from-purple-500 to-pink-600',
      tags: [
        { label: 'Python',      colorClass: 'bg-yellow-500/30 text-yellow-300' },
        { label: 'TensorFlow',  colorClass: 'bg-orange-500/30 text-orange-300' },
        { label: 'AWS',         colorClass: 'bg-blue-500/30 text-blue-300' }
      ],
      demoUrl: '#', codeUrl: '#'
    }
  ];
}
