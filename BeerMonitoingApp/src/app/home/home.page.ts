import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
import { StorageService } from '../services/storage.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  procesos:any = [
    // {
    //   id:"mace",
    //   name:"Maceración",
    //   icon:"../../assets/img/iconosMenu/cilindro1.png"
    // },
    {
      id:"cocc",
      name:"Cocción",
      icon:"../../assets/img/iconosMenu/maceta.png"
    },
    // {
    //   id:"herv",
    //   name:"Hervido",
    //   icon:"../../assets/img/iconosMenu/fuego1.png"
    // },
    {
      id:"ferm",
      name:"Fermentación",
      icon:"../../assets/img/iconosMenu/cerveza-roja.png"
    },
    {
      id:"clar",
      name:"Clarificación",
      icon:"../../assets/img/iconosMenu/claro.png"
    },
    {
      id:"alm",
      name:"Almacenamiento",
      icon:"../../assets/img/iconosMenu/comprar.png"
    }  
  ];

  Device:any;
  credentialForm: FormGroup;
  @ViewChild('passwordEyeRegister', { read: ElementRef }) passwordEye: ElementRef;
  passwordTypeInput  =  'password';
  iconpassword  =  'eye-off';

  constructor(private fb: FormBuilder,
              private router: Router,
              private alertController: AlertController,
              private loadingController: LoadingController,
              private firebaseService : FirebaseService,
              private storage : StorageService,
              private menu: MenuController,
              private apiService : ApiService
  ) {}
  // constructor(private menu: MenuController,
  //             private router : Router,
  //             private firebasse : FirebaseService) { }
  ngOnInit() {
    this.credentialForm = this.fb.group({
      email: "camiloedg23@gmail.com",
      password: "camilo1234"
    });
  }
  ionViewWillEnter(){
    this.signIn();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


  itemMenuSelect(fase){
    console.log('fase1',fase);
  }

  itemCardSelect(fase){
    this.routerLinkPage(fase["id"]);
  }

  routerLinkPage(menuId){
    console.log('menuId',menuId);
    this.router.navigate([`/${menuId}`]);
  }

  async signIn() {
    console.log('this.credentialForm',this.credentialForm);
    await this.firebaseService.signIn(this.credentialForm.value).then(
      async (res) => {
        
          console.log('res.user',res.user);
          await this.storage.saveIdUser(res.user.uid);
          await this.storage.saveTokenUser(res.user.getIdToken())
    });
    this.getData()
  }
 
  // Easy access for form fields
  get email() {
    return this.credentialForm.get('email');
  }
  
  get password() {
    return this.credentialForm.get('password');
  }

  async getData(){
    let result  = await this.apiService.getArduinoData()
    console.log('result',result);
  }


}
