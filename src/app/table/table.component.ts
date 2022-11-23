import { Component } from '@angular/core';
import {Seller} from "../models";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent  {
  columns = {
    table: {
      cols: [
        { prop: 'id' },
        { prop: 'name' },
        { prop: 'company' },
        { prop: 'department' },
      ],
    },
  };

  sellers: Array<Seller> = new Array(1).fill({
    id: 1,
    name: 'John Doe',
    company: 'Google',
    department: 'Sales'
  })

  ds = this.sellers

}
