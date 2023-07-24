import {  Component } from '@angular/core';
import { PriceService } from './price.service';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // standalone: true,
  // imports: [MatFormFieldModule, MatSelectModule],
})
export class AppComponent {
  title = 'בורסהנט - לוי';
  Currentsymbol: any = null;
  Current_Stock_Price = 0;
  Latest: any = null;
  selected: any = "";
  datasource: any;

  constructor(private service:PriceService){} 

  // getname(){
  //   this.service.getname().subscribe(data => {
  //     this.CurrentName = data.name;
  //   });
  // }
  async getProps(){
    await this.service.getprice(this.selected).subscribe(data => {
      if(data != null){
        console.log('data-->', data);
        this.Current_Stock_Price = data['05. price'];
        this.Currentsymbol = data['01. symbol'];
        this.Latest = data['07. latest trading day'];
        // this.datasource = data; //JSON.stringify(data);

      }
    });
  }
  }
/*01. symbol': 'SQ',
'02. open': '79.1500',
'03. high': '80.6000',
'04. low': '78.1100',
'05. price': '78.1900',
'06. volume': '8320687',
'07. latest trading day': '2023-07-19',
'08. previous close': '79.0300',
'09. change': '-0.8400',
'10. change percent': '-1.0629%'*/
  
