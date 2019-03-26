import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['HTML/CSS','Javascript','Typescript','angular'];
  topicHasError=true;
userModel= new User('somya','somi@gmail.com',8449104551,'','morning',true)
validateTopic(value){
  if(value=='default'){
    this.topicHasError=true;
  }
  else{
    this.topicHasError=false;
  }
}
  title = 'tdf-form';
}
