import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
@Input() parentd:string
@Output() output:EventEmitter<string> = new EventEmitter()

constructor(private http:HttpClient) { 
 
} 
send(){
  this.output.emit("hello from child")
} 
 
mydata:any = []
saveflag = true
updateflag = false  
editObject = {id:'',ename:'',eaddress:'',ecity:''}

myurl = "https://angularws.000webhostapp.com/employees.php"

ngOnInit(): void {  
  alert(this.parentd)
   this.fetch()
 }

//select all record at the beginning of page load
 fetch(){  
   this.http.get(this.myurl).subscribe(data=>{
     this.mydata = data   
  })  
}

//insert or update 
 save(formData:NgForm){ 
   
  //insert 
 if (formData.value.id == "" || formData.value.id == null) {  
 
    const payload = new HttpParams()
    .set('ename', formData.value.ename)
    .set('eaddress', formData.value.eaddress)    
    .set('ecity', formData.value.ecity)
    .set('method', 'insert');

    this.http.post(this.myurl,payload).subscribe(data=>{ 
      this.fetch()       
      alert(data['msg'])    
    },err=>{
      alert("error" + err)  
    })   
    
    formData.reset()

  }else{
  //update   
 
  const payload = new HttpParams()
  .set('id', formData.value.id)
  .set('ename', formData.value.ename)
  .set('eaddress', formData.value.eaddress)
  .set('ecity', formData.value.ecity)
  .set('method', 'update');

  this.http.post(this.myurl,payload).subscribe(data=>{   
       this.fetch()   
       alert(data['msg'])
      }, error => {
        alert(error.message);
    })

    this.updateflag=false
    this.saveflag=true

    formData.reset()
  }
 }

 //delete record
 delete(id){ 

const payload = new HttpParams().set('id', id).set('method', 'delete')

 var result = confirm("Want to delete?");

  if (result) { 

  this.http.post(this.myurl,payload).subscribe(data=>{ 
      this.fetch() 
      alert(data['msg'])
  },err=>{
    console.log(err);
  })

  } 
 }

 //set data to html text box on edit button click
 showEditData(data){   
   this.updateflag=true
   this.saveflag=false 
   this.editObject = data    
 }

 //cancel button state / like insert/update
 cancel(){
  this.updateflag=false
  this.saveflag=true      
 }

 public saveFile(fileName: string): void {
  console.log(fileName);  
}

public handleDenial(): void {
    console.log("denial")
}

public handleDismiss(dismissMethod: string): void { 
  console.log(dismissMethod);  
}

simpleAlert(){
  Swal.fire('Hello world!');
}

alertWithSuccess(){
  Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
}

confirmBox(){
  Swal.fire({
    title: 'Are you sure want to remove?',
    text: 'You will not be able to recover this file!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Deleted!',
        'Your imaginary file has been deleted.',
        'success'
      )
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
}

  
}