import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MoviesService } from '../movies.service';
import { IMovie } from './movie';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit{
[x: string]: any;
 private SearchValue:any='';
  pageSize:number=20;
  length:number=
702212;
currentPage:number=1;
   moviesData:any[]=[];

   filterMovies=this.moviesData;
   get searchValue():string{
      return this.SearchValue;
   }
   set searchValue(val:string){
       this.SearchValue =val;
      this.performSearch(val)
   }

// performSearch(value:string):IMovie[]{
// return this.moviesData.filter((movie)=>
// movie.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
// }
arr:any[]=[]
  performSearch(value:string){
      this.service.getSearchedMovies(value).subscribe({
        next:(data)=>{
         console.log(data);
          //  this.arr.push(data) ;

           this.filterMovies = data.results;
      }})
     }

toggleDate(movieId:number):void{
   this.moviesData.filter(function(movie){
     if(movie.id==movieId){
       movie.isVisiable=!movie.isVisiable;
     }
   })
   // this.singleMovie.isVisiable=!this.singleMovie.isVisiable;
 }

constructor(private service:MoviesService){}
  ngOnInit(): void {
   this.service.getAllMovies().subscribe({
      next:(movies)=>{
      console.log(movies.results);
this.moviesData=movies.results;
      this.filterMovies=movies.results;
   }})


  }
  onPageChange(pageData:PageEvent){
 this.currentPage=pageData.pageIndex+1;
 this.service.getAllMovies(this.currentPage).subscribe({
      next:(movies)=>{
      console.log(movies.results);
this.moviesData=movies.results;
      this.filterMovies=movies.results;
   }})


  }
}
