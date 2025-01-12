import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

  hoveredImage: { src: string; name: string } | null = null;

  onHover(image: { src: string; name: string } | null): void {
    if (image?.name === 'Growth mindset') {
      this.hoveredImage = image;
    } else {
      this.hoveredImage = null;
    }
  }



  skillImages: { src: string, name: string }[] = [
    { src: '/img/skillset/angular.svg', name: 'Angular' },
    { src: '/img/skillset/typescript.svg', name: 'Typescript' },
    { src: '/img/skillset/javascript.svg', name: 'Javascript' },
    { src: '/img/skillset/html.svg', name: 'HTML' },
    { src: '/img/skillset/firebase.svg', name: 'Firebase' },
    { src: '/img/skillset/git.svg', name: 'GIT' },
    { src: '/img/skillset/css.svg', name: 'CSS' },
    { src: '/img/skillset/api.svg', name: 'Rest-Api' },
    { src: '/img/skillset/scrum.svg', name: 'Scrum' },
    { src: '/img/skillset/material-design.svg', name: 'Material design' },
    { src: '/img/skillset/mindset.svg', name: 'Growth mindset' }
  ];

}
