import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean, ...args: unknown[]): 'Vuela' | 'No vuela' {
    return value ? 'Vuela' : 'No vuela';
  }
}
