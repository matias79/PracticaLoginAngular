import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar) { 
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
    }else{
      //muestra mensaje de error que esta en un metodo
      this.error();
    }
  }

  error(){
    this._snackBar.open('algo esta mal!', '',{
      duration:3000,
      horizontalPosition:'center',
      verticalPosition:'bottom'

    }) 
  }

}
