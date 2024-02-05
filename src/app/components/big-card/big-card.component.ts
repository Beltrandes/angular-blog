import { Component, Input } from '@angular/core';
import { BigCard } from '../../models/BigCard';

@Component({
  selector: 'big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {
  @Input() bigCard!: BigCard

}
