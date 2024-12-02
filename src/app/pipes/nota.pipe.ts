import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nota'
})
export class NotaPipe implements PipeTransform {
  transform(value: number): string {

    const roundedValue = value.toFixed(1);
    return `${roundedValue} / 10`;
  }
}
