
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  city = ['Delhi', 'Noida', 'Gurgaon', 'Lucknow', 'Kanpur', 'Varanasi'];
  hobbies = [
             {hobby : 'Playing Cricket',isChecked : false},
             {hobby : 'Watching Movies' ,isChecked : false},
             {hobby : 'Travelling' ,isChecked : false},
             {hobby : 'Reading Books' ,isChecked : false}
            ];
            
            details ={ name: '', age :'' , gender: '' , city: '' , hobbies:'', comments:''};

            hobby :any =[];



  constructor(private router: Router , private http : HttpClient) {
   
   }
  

  ngOnInit(): void {
    
     
  }

  onChange(){
    this.hobby = this.hobbies.filter(x=>x.isChecked==true).map(x=>x.hobby).join(' , ').toString();
    
  }

   
 
   submitForm(contact:NgForm){
    
    // console.log(contact);
    
     this.details.name = contact.controls.name.value;
     this.details.age = contact.controls.age.value;
     this.details.gender = contact.controls.gender.value;
     this.details.city = contact.controls.cityname.value;
     this.details.hobbies = this.hobby;
     this.details.comments = contact.controls.comment.value;
     
     
    //  console.log(this.details);
     
     if(contact.valid)
     {
       this.http.post("http://localhost:3000/users",this.details).subscribe((res)=>
       {
        this.router.navigate(['/success']);
         console.log(res);
       });
     }

  
    contact.resetForm();
  }


}


