import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discipline'
})
export class DisciplinePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value){
      case 'physics' : return 'device_thermostat';
      case 'math' : return 'balance'
    }
     return 'storm';
  }

}
