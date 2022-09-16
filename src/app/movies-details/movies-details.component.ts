// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { MoviesService } from '../movies.service';

// @Component({
//   selector: 'app-movies-details',
//   templateUrl: './movies-details.component.html',
//   styleUrls: ['./movies-details.component.css']
// })
// export class MoviesDetailsComponent
// implements OnInit {
// singleMovie:any= {};
//   constructor(private moviesServe:MoviesService,private route:ActivatedRoute) { }

//   ngOnInit(): void {
// let id=Number(this.route.snapshot.paramMap.get('id'));
// console.log(id);
// this.moviesServe.getMovieById(id).subscribe({next:(movie)=>{this.singleMovie=movie;

// }})

//     // this.moviesServe.getMovieById()
//   }

// }
