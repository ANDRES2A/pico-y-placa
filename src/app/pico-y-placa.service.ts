import { Injectable } from '@angular/core';

@Injectable()
export class PicoYPlacaService {

  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  schedule = [[1,2],[3,4],[5,6],[7,8],[9,0]];
  constructor() { }

  ableToDrive(licensePlate: string, dateToDrive: string, timeToDrive: string) {
    if(licensePlate && dateToDrive && timeToDrive)
    {
      let patt = /^[a-zA-z]{3}-[0-9]{4}$/;
      if(patt.test(licensePlate)) {
        timeToDrive = timeToDrive.split(':').join('');
          if(parseInt(timeToDrive)>= 700 && parseInt(timeToDrive)<= 930 || parseInt(timeToDrive)>= 1600 && parseInt(timeToDrive)<= 1930) {
            let completeDate = new Date(dateToDrive);
            let dayName= this.days[completeDate.getDay()];
            if(dayName != 'Saturday' && dayName != 'Sunday'){
              if( this.schedule[completeDate.getDay()-1].includes(parseInt(licensePlate.slice(licensePlate.length-1, licensePlate.length))))
                return 'You can not drive right now!!';
            } 
          }
      } else
      return 'License Plate Error';
    } else {
      return 'Not null inputs';
    }
    return 'Free to drive!!';
  }

}
