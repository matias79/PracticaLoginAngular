import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private rotuer: Router) { 
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == 'jose' && password == 'admin'){
      //redirecciona a algo
      this.fakeLoading();
    }else{
      //muestra mensaje de error que esta en un metodo
      this.error();
      this.form.reset;
    }
  }

  error(){
    this._snackBar.open('algo esta mal!', '',{
      duration:3000,
      horizontalPosition:'center',
      verticalPosition:'bottom'

    }) 
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(()=>{
      this.rotuer.navigate(['dashboard']);
    },1500);
  }

}
