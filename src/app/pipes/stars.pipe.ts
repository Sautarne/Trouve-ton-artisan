import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars',
  standalone: true
})
export class StarsPipe implements PipeTransform {
  transform(note: number): string {
    if (note === undefined || note === null || isNaN(note)) {
      return '';
    }
    return '⭐'.repeat(note);
  }
}