import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: '/assets/icons/knowledge/html5.svg',
      alt: 'ícone de HTML5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'ícone de CSS3'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'ícone de Javascript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'ícone de Angular'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'ícone de SASS'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'ícone de NodeJS'
    },
  ])
}
