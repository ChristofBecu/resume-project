import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newline-to-br',
  standalone: true,
})
export class NewLineToBrPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\n/g, '<br>');
  }

}
