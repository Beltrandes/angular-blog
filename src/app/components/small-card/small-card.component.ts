import { Component, Input } from '@angular/core';
import { Card } from '../../models/Card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent {
  @Input() smallCard!: Card
}
