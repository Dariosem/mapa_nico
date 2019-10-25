import { Component } from '@angular/core';
import { User} from './models/user';
import { UserService} from './services/user.service';
import { GLOBAL} from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  public title = 'Gestión de Loteos';
  public user: User;
  public user_register: User;
  public identity;
  public token;
  public errorMessage;
  public alertRegister;
  public url: string;

  constructor( 
    private _userService: UserService
  ){
    this.user = new User('','','','','','ROLE-USER','');
    this.user_register = new User('','','','','','ROLE-USER','');
    this.url = GLOBAL.url;
  }

  ngOnInit(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

    console.log(this.identity);
    console.log(this.token);
 
  }
  public onSubmit(){

    //Conseguir los datos del usuario logueado
    this._userService.singUp(this.user).subscribe(
      resul => {
        let identity = resul[0].user;
        this.identity = identity;
        
        if (this.identity._id) {
          //Generar localstore para almacenar los datos del usuario logueado
          localStorage.setItem('identity', JSON.stringify(identity));
        
          //Obtener los datos del token
          this._userService.singUp(this.user, 'true').subscribe(
            resul => {
              let token = resul.token;
              this.token = token;
              
              if (this.token != null) {
                //Generar localstore para almacenar el token
                localStorage.setItem('token', token);
                this.user = new User('','','','','','user','');

              } else {
                alert('El token no fue generado correctamente');

              }
            },
            error => {
              var errorMessage = <any>error;
      
              if (errorMessage != null) {
      
                this.errorMessage = error.error.message;
                console.log(error);
              }
            }
          );
        } else {
          alert('El usuario no se ha logueado correctamente');
        }
        //console.log(response);
      },
      error => {
        var errorMessage = <any>error;

        if (errorMessage != null) {

          this.errorMessage = error.error.message;
          console.log(error);
        }
      }
    );
  }

  logout(){
      localStorage.removeItem('identity');
      localStorage.removeItem('token');
      localStorage.clear();
      this.identity = null;
      this.token = null;
      this.alertRegister = null;
  }


  onSubmitRegister(){
    //console.log(this.user_register);

    this._userService.register(this.user_register).subscribe(
      response => {
        let user = response.user;
        this.user_register = user;

        if (!user._id) {
          this.alertRegister = 'Error al registrarse';
        } else {
          this.alertRegister = 'Usuario registrado correctamente. Identificate con ' + this.user_register.email;
          this.user_register = new User('','','','','','user','');
        }
        
      },
      error => {
        var errorMessage = <any>error;

        if (errorMessage != null) {
          var body = JSON.parse(error.error);
          this.alertRegister = body.message;
          console.log(error);
        }
      }
    );
  }
}
