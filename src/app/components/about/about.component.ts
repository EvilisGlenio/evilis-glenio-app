// about.component.ts
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {

  @ViewChild('resumo') resumo!: ElementRef;
  @ViewChild('habilidades') habilidades!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.2 });

    if (this.resumo) {
      observer.observe(this.resumo.nativeElement);
    }
    if (this.habilidades) {
      observer.observe(this.habilidades.nativeElement);
    }
  }
}