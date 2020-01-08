import { Component, OnInit } from '@angular/core';
import { FetchFlagsService } from '../fetch-flags.service';
@Component({
  selector: 'app-worldcountries',
  templateUrl: './worldcountries.component.html',
  styleUrls: ['./worldcountries.component.css']
})
export class WorldcountriesComponent implements OnInit {
  flags={};
  tmp;
  constructor(private data:FetchFlagsService) { }
  ngOnInit() {
    this.data.getFlags().subscribe(d=>{
      this.flags=d;
      this.tmp=d[0]
      this.flags[0]=this.flags[104]
      this.flags[104]=this.tmp;

    });
  }

}
