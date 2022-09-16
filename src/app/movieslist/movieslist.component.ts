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

  private SearchValue:any='';
   moviesData:IMovie[]=[


      {
      "id":766507,
      "overview":"When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",

      "poster_path":"/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
      "release_date":"2022-08-02",
      "title":"Prey",
      rating:3.5,
      isVisiable:false
   },
   {


      "id":610150,
      "overview":"The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",

      "poster_path":"/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
      "release_date":"2022-06-11",
      "title":"Dragon Ball Super: Super Hero",
      rating:2.75,
      isVisiable:false
   },
   {

      "id":616037,
      "overview":"After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Relatively Mighty Girl Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",

      "poster_path":"/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      "release_date":"2022-07-06",
      "title":"Thor: Love and Thunder",
      rating:3.25,
      isVisiable:false
   },
   {

      "id":507086,
      "overview":"Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",

      "poster_path":"/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
      "release_date":"2022-06-01",
      "title":"Jurassic World Dominion",
      rating:2,
      isVisiable:false
   },
   {

      "id":438148,
      "overview":"A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",

      "poster_path":"/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
      "release_date":"2022-06-29",
      "title":"Minions: The Rise of Gru",
      rating:2.7,
      isVisiable:false
   },  {
      "id":766507,
      "overview":"When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",

      "poster_path":"/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
      "release_date":"2022-08-02",
      "title":"Prey",
      rating:3.5,
      isVisiable:false
   },
   {


      "id":610150,
      "overview":"The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",

      "poster_path":"/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
      "release_date":"2022-06-11",
      "title":"Dragon Ball Super: Super Hero",
      rating:4,
      isVisiable:false
   },
   {

      "id":616037,
      "overview":"After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Relatively Mighty Girl Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",

      "poster_path":"/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      "release_date":"2022-07-06",
      "title":"Thor: Love and Thunder",
      rating:4.5,
      isVisiable:false
   },
   {

      "id":507086,
      "overview":"Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",

      "poster_path":"/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
      "release_date":"2022-06-01",
      "title":"Jurassic World Dominion",
      rating:2,
      isVisiable:false
   },
   {

      "id":438148,
      "overview":"A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",

      "poster_path":"/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
      "release_date":"2022-06-29",
      "title":"Minions: The Rise of Gru",
      rating:2.7,
      isVisiable:false
   },  {
      "id":766507,
      "overview":"When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",

      "poster_path":"/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
      "release_date":"2022-08-02",
      "title":"Prey",
      rating:3.5,
      isVisiable:false
   },
   {


      "id":610150,
      "overview":"The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",

      "poster_path":"/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
      "release_date":"2022-06-11",
      "title":"Dragon Ball Super: Super Hero",
      rating:4,
      isVisiable:false
   },
   {

      "id":616037,
      "overview":"After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Relatively Mighty Girl Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",

      "poster_path":"/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      "release_date":"2022-07-06",
      "title":"Thor: Love and Thunder",
      rating:4.5,
      isVisiable:false
   },
   {

      "id":507086,
      "overview":"Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",

      "poster_path":"/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
      "release_date":"2022-06-01",
      "title":"Jurassic World Dominion",
      rating:2,
      isVisiable:false
   },
   {

      "id":438148,
      "overview":"A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",

      "poster_path":"/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
      "release_date":"2022-06-29",
      "title":"Minions: The Rise of Gru",
      rating:2.7,
      isVisiable:false
   }
   ]
   filterMovies=this.moviesData;
   get searchValue():number{
      return this.SearchValue;
   }
   set searchValue(val:number){
       this.SearchValue =val;
      this.performSearch(val)
   }

// performSearch(value:string):IMovie[]{
// return this.moviesData.filter((movie)=>
// movie.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
// }
arr:any[]=[]
  performSearch(value:number){
      this.service.getSearchedMovies(value).subscribe({
        next:(data)=>{
         console.log(data);
           this.arr.push(data) ;

           this.filterMovies = this.arr
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
      next:(data)=>{
      console.log(data);

      this.filterMovies=data;
   }})


  }
// [x: string]: any;
//  private SearchValue:any='';
//   pageSize:number=20;
//   length:number=
// 702212;
// currentPage:number=1;
//    moviesData:any[]=[];

//    filterMovies=this.moviesData;
//    get searchValue():string{
//       return this.SearchValue;
//    }
//    set searchValue(val:string){
//        this.SearchValue =val;
//       this.performSearch(val)
//    }

// // performSearch(value:string):IMovie[]{
// // return this.moviesData.filter((movie)=>
// // movie.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
// // }
// arr:any[]=[]
//   performSearch(value:string){
//       this.service.getSearchedMovies(value).subscribe({
//         next:(data)=>{
//          console.log(data);
//           //  this.arr.push(data) ;

//            this.filterMovies = data.results;
//       }})
//      }

// toggleDate(movieId:number):void{
//    this.moviesData.filter(function(movie){
//      if(movie.id==movieId){
//        movie.isVisiable=!movie.isVisiable;
//      }
//    })
//    // this.singleMovie.isVisiable=!this.singleMovie.isVisiable;
//  }

// constructor(private service:MoviesService){}
//   ngOnInit(): void {
//    this.service.getAllMovies().subscribe({
//       next:(movies)=>{
//       console.log(movies.results);
// this.moviesData=movies.results;
//       this.filterMovies=movies.results;
//    }})


//   }
//   onPageChange(pageData:PageEvent){
//  this.currentPage=pageData.pageIndex+1;
//  this.service.getAllMovies(this.currentPage).subscribe({
//       next:(movies)=>{
//       console.log(movies.results);
// this.moviesData=movies.results;
//       this.filterMovies=movies.results;
//    }})


//   }
// }





// isDisabled:boolean=true
// childmsg:string='';
// private SearchValue:any='';
//    moviesData:IMovie[]=[


//       {
//       "id":766507,
//       "overview":"When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",

//       "poster_path":"/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
//       "release_date":"2022-08-02",
//       "title":"Prey",
//       rating:3.5,
//       isVisiable:false
//    },
//    {


//       "id":610150,
//       "overview":"The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",

//       "poster_path":"/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
//       "release_date":"2022-06-11",
//       "title":"Dragon Ball Super: Super Hero",
//       rating:2.75,
//       isVisiable:false
//    },
//    {

//       "id":616037,
//       "overview":"After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Relatively Mighty Girl Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",

//       "poster_path":"/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
//       "release_date":"2022-07-06",
//       "title":"Thor: Love and Thunder",
//       rating:3.25,
//       isVisiable:false
//    },
//    {

//       "id":507086,
//       "overview":"Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",

//       "poster_path":"/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
//       "release_date":"2022-06-01",
//       "title":"Jurassic World Dominion",
//       rating:2,
//       isVisiable:false
//    },
//    {

//       "id":438148,
//       "overview":"A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",

//       "poster_path":"/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
//       "release_date":"2022-06-29",
//       "title":"Minions: The Rise of Gru",
//       rating:2.7,
//       isVisiable:false
//    },  {
//       "id":766507,
//       "overview":"When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",

//       "poster_path":"/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
//       "release_date":"2022-08-02",
//       "title":"Prey",
//       rating:3.5,
//       isVisiable:false
//    },
//    {


//       "id":610150,
//       "overview":"The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",

//       "poster_path":"/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
//       "release_date":"2022-06-11",
//       "title":"Dragon Ball Super: Super Hero",
//       rating:4,
//       isVisiable:false
//    },
//    {

//       "id":616037,
//       "overview":"After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Relatively Mighty Girl Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",

//       "poster_path":"/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
//       "release_date":"2022-07-06",
//       "title":"Thor: Love and Thunder",
//       rating:4.5,
//       isVisiable:false
//    },
//    {

//       "id":507086,
//       "overview":"Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",

//       "poster_path":"/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
//       "release_date":"2022-06-01",
//       "title":"Jurassic World Dominion",
//       rating:2,
//       isVisiable:false
//    },
//    {

//       "id":438148,
//       "overview":"A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",

//       "poster_path":"/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
//       "release_date":"2022-06-29",
//       "title":"Minions: The Rise of Gru",
//       rating:2.7,
//       isVisiable:false
//    },  {
//       "id":766507,
//       "overview":"When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",

//       "poster_path":"/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
//       "release_date":"2022-08-02",
//       "title":"Prey",
//       rating:3.5,
//       isVisiable:false
//    },
//    {


//       "id":610150,
//       "overview":"The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",

//       "poster_path":"/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
//       "release_date":"2022-06-11",
//       "title":"Dragon Ball Super: Super Hero",
//       rating:4,
//       isVisiable:false
//    },
//    {

//       "id":616037,
//       "overview":"After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Relatively Mighty Girl Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",

//       "poster_path":"/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
//       "release_date":"2022-07-06",
//       "title":"Thor: Love and Thunder",
//       rating:4.5,
//       isVisiable:false
//    },
//    {

//       "id":507086,
//       "overview":"Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",

//       "poster_path":"/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
//       "release_date":"2022-06-01",
//       "title":"Jurassic World Dominion",
//       rating:2,
//       isVisiable:false
//    },
//    {

//       "id":438148,
//       "overview":"A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",

//       "poster_path":"/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
//       "release_date":"2022-06-29",
//       "title":"Minions: The Rise of Gru",
//       rating:2.7,
//       isVisiable:false
//    }
//    ]
//    filterMovies=this.moviesData;
//    get searchValue():number{
//       return this.SearchValue;
//    }
//    set searchValue(val:number){
//        this.SearchValue =val;
//       this.performSearch(val)
//    }
//    arr:any[]=[]
//   performSearch(value:number){
//       this.service.getSearchedMovies(value).subscribe({
//         next:(data: any)=>{
//          console.log(data);
//            this.arr.push(data) ;

//            this.filterMovies = this.arr
//       }})
//      }

// toggleDate(movieId:number):void{
//    this.moviesData.filter(function(movie){
//      if(movie.id==movieId){
//        movie.isVisiable=!movie.isVisiable;
//      }
//    })
//    // this.singleMovie.isVisiable=!this.singleMovie.isVisiable;
//  }

// constructor(private service:MoviesService){}
//   ngOnInit(): void {
//    this.service.getAllMovies().subscribe({
//       next:(data)=>{
//       console.log(data);

//       this.filterMovies=data;
//    }})


//   }}

// performSearch(value:string):IMovie[]{
// return this.moviesData.filter((movie)=>
// movie.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
// }
}
