import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {

  @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.2 });

    this.projectCards.forEach(card => {
      observer.observe(card.nativeElement);
    });
  }
}