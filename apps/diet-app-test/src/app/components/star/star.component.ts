import { Component, Input} from '@angular/core';


@Component({
  selector: 'diet-app-test-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent {
  @Input()
  star: number = 0;
}
