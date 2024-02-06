import { Component, Input } from '@angular/core';
import { Card } from '../../models/Card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {
  @Input() bigCard!: Card

}
