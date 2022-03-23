import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos:any;
  constructor(private randomImage:UserDataService) {
    this.getRandomImages();
  }
   
   getRandomImages(){
    this.randomImage.randomPhotos().subscribe((data)=>{
      console.log(data);
      this.photos=data;
    })
   }

  ngOnInit(): void {
  }

}
