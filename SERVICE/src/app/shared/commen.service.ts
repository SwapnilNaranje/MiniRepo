import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class CommenService {

  constructor() { }

  emp:Employee[]=[
    {
      eid:101,
      ename:"swapnil",
      eaddr:"wardha"
    },
    {
      eid:102,
      ename:"Anuj",
      eaddr:"pune"
    },
    {
      eid:103,
      ename:"kunal",
      eaddr:"mumbai"
    }
  ]
}
