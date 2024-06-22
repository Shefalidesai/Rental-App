import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-silder',
  templateUrl: './silder.component.html',
  styleUrls: ['./silder.component.css']
})
export class SilderComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initializeSlider();
  }

  initializeSlider(): void {
    const script = document.createElement('script');
    script.src = 'assets/app.js';
    script.onload = () => {
      // Ensure the functions and events are available
    };
    document.body.appendChild(script);
  }
}
