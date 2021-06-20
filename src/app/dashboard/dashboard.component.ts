import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  marker: { lat: number; lng: number; Name: string; Address: string; Max: number; }[];

  constructor(private router: Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.marker = [{
      lat : 21.17096603796363,
      lng : 72.89497375488277,
      Name : "BBQ",
      Address : "BTM layout,Bangalore 560065",
      Max : 300
  },
  {
      lat : 21.22494163248252,
      lng : 72.89062990297239,
      Name : "Big mart",
      Address : "BTM layout,Bangalore 560065",
      Max : 400
  },
  {
      lat : 21.22076951307446,
      lng : 72.89228026312382,
      Name : "RNR smith",
      Address : "BTM layout,Bangalore 560065",
      Max : 500
  },
  {
      lat : 21.22077110974723,
      lng : 72.88871802239238,
      Name : "Woolsworth",
      Address : "BTM layout,Bangalore 560065",
      Max : 200
  }]
  }

  addProperty(){
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  details(){
    this.router.navigate(['details'], { relativeTo: this.route });
  }

}
