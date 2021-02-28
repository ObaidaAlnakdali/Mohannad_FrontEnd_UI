 import { Injectable } from '@angular/core';

 @Injectable()
 export class CommonService {
   public APIUrl = 'http://localhost:5000/api/Data';
   public ticket = '';
   constructor() { }

   ShowMessage(message: string, d: number = 1000) {
     alert(message);
       console.log(message)
   }

   Handle_Exception(msg) {
     if ((msg != null) && (msg !== '')) {
       this.ShowMessage(msg , 3000);
    }
   }
 }




