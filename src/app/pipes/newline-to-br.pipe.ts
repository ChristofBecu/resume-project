import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'newline-to-br',
  standalone: true,
})

@Injectable({
  providedIn: 'root'
})

export class NewLineToBrPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\n/g, '<br>');
  }

}
