import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
singleMovie:any;

  constructor(private moviesServe:MoviesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
 let id=Number(this.route.snapshot.paramMap.get('id'))
 console.log(id);
 this.moviesServe.getTVById(id).subscribe({next:(tv)=>{
  this.singleMovie=tv;
 }})

  }

}
