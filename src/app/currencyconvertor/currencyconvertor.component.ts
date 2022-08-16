import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl} from '@angular/forms';
import { currencylist } from '../Models/currencyList.model';
import { PostService } from '../post.service';


 
@Component({
  selector: 'ng-currencyconvertor',
  templateUrl: './currencyconvertor.component.html',
	
})
export class currencyconvertorComponent implements OnInit{
  public data: any;
 
//   Currencyist: any[] = ['AED',
// 'AFN',
// 'ALL',
// 'AMD',
// 'ANG',
// 'AOA',
// 'ARS',
// 'AUD',
// 'AWG',
// 'AZN',
// 'BAM',
// 'BBD',
// 'BDT',
// 'BGN',
// 'BHD',
// 'BIF',
// 'BMD',
// 'BND',
// 'BOB',
// 'BRL',
// 'BSD',
// 'BTC',
// 'BTN',
// 'BWP',
// 'BYN',
// 'BYR',
// 'BZD',
// 'CAD',
// 'CDF',
// 'CHF',
// 'CLF',
// 'CLP',
// 'CNY',
// 'COP',
// 'CRC',
// 'CUC',
// 'CUP',
// 'CVE',
// 'CZK',
// 'DJF',
// 'DKK',
// 'DOP',
// 'DZD',
// 'EGP',
// 'ERN',
// 'ETB',
// 'EUR',
// 'FJD',
// 'FKP',
// 'GBP',
// 'GEL',
// 'GGP',
// 'GHS',
// 'GIP',
// 'GMD',
// 'GNF',
// 'GTQ',
// 'GYD',
// 'HKD',
// 'HNL',
// 'HRK',
// 'HTG',
// 'HUF',
// 'IDR',
// 'ILS',
// 'IMP',
// 'INR',
// 'IQD',
// 'IRR',
// 'ISK',
// 'JEP',
// 'JMD',
// 'JOD',
// 'JPY',
// 'KES',
// 'KGS',
// 'KHR',
// 'KMF',
// 'KPW',
// 'KRW',
// 'KWD',
// 'KYD',
// 'KZT',
// 'LAK',
// 'LBP',
// 'LKR',
// 'LRD',
// 'LSL',
// 'LTL',
// 'LVL',
// 'LYD',
// 'MAD',
// 'MDL',
// 'MGA',
// 'MKD',
// 'MMK',
// 'MNT',
// 'MOP',
// 'MRO',
// 'MUR',
// 'MVR',
// 'MWK',
// 'MXN',
// 'MYR',
// 'MZN',
// 'NAD',
// 'NGN',
// 'NIO',
// 'NOK',
// 'NPR',
// 'NZD',
// 'OMR',
// 'PAB',
// 'PEN',
// 'PGK',
// 'PHP',
// 'PKR',
// 'PLN',
// 'PYG',
// 'QAR',
// 'RON',
// 'RSD',
// 'RUB',
// 'RWF',
// 'SAR',
// 'SBD',
// 'SCR',
// 'SDG',
// 'SEK',
// 'SGD',
// 'SHP',
// 'SLL',
// 'SOS',
// 'SRD',
// 'STD',
// 'SVC',
// 'SYP',
// 'SZL',
// 'THB',
// 'TJS',
// 'TMT',
// 'TND',
// 'TOP',
// 'TRY',
// 'TTD',
// 'TWD',
// 'TZS',
// 'UAH',
// 'UGX',
// 'USD',
// 'UYU',
// 'UZS',
// 'VEF',
// 'VND',
// 'VUV',
// 'WST',
// 'XAF',
// 'XAG',
// 'XAU',
// 'XCD',
// 'XDR',
// 'XOF',
// 'XPF',
// 'YER',
// 'ZAR',
// 'ZMK',
// 'ZMW',
// 'ZWL'];
  public currencyListfordropdown:any=[];
 public convertorForm: FormGroup= new FormGroup({
to:new FormControl(),
from:new FormControl(),
currency:new FormControl(),
convertedValue:new FormControl()
 });

  constructor(public formGroup:FormBuilder, public postService:PostService){}
 ngOnInit(): void {
  

  this.postService.getdropdowns().subscribe((results: any)=>{
    
    this.currencyListfordropdown= this.transformdata(results.symbols);
    console.log( this.currencyListfordropdown)

    console.log("Dropdowns  Data", this.currencyListfordropdown)
    
     })


  }

  onChange(event: any){
    console.log(event.value);
  }

 GetConvertedData(){
 
  let values= this.convertorForm.value;

  let to = values.to;
  let form = values.from;
  let currency = values.currency;

  this.postService.getPost(to,form,currency).subscribe((results: any)=>{
    console.log("result",results)
    
    this.convertorForm.controls['convertedValue'].setValue(results.result);
    this.data=results
     })

     

 }

 transformdata(object:any, args?: any): any {
  debugger;
  let keys = [];
      for (let key in object) {
        keys.push({key: key, value: object[key]});
      }
      return keys;
}
 
} 
