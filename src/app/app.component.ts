import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  name = 'sebastian';
  age = 24;
  img01 = 'https://scontent.fbog3-2.fna.fbcdn.net/v/t1.6435-9/107689083_1389739827883077_4037055929251768992_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=yv-OZDxQw-AAX-M4p4a&_nc_ht=scontent.fbog3-2.fna&oh=b6f97cb791987d75f071e54ef1d21c4d&oe=61D695BC';
  btnDisabled = true; 
 

  person = {
    nombre: 'Anfres',
    edad: 20,
    avatar : 'https://scontent.fbog3-2.fna.fbcdn.net/v/t1.6435-9/107689083_1389739827883077_4037055929251768992_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=yv-OZDxQw-AAX-M4p4a&_nc_ht=scontent.fbog3-2.fna&oh=b6f97cb791987d75f071e54ef1d21c4d&oe=61D695BC',
  }
  rec01 = {
    alto: 10,
    ancho: 15,
    nombre: 'Juanillo',
  }
  names : String[] = ['Juan', 'Felipe', 'Pablo', 'Andres']
  Nname = ''
  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  ageMas(){
    this.person.edad += 1;

  }
  scrollOn(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }
  nameChange(event: Event){
    const nameC = event.target as HTMLInputElement;
    this.person.nombre = nameC.value;

  }
  cuadrado(event: Event){
    const valu01 = event.target as HTMLInputElement;
    this.rec01.nombre = valu01.value;
  }
  largC(event: Event) {
    const larg = event.target as HTMLInputElement
    this.rec01.alto = parseInt(larg.value)
    
  }
  addName(){
    this.names.push(this.Nname)
    this.Nname = ''
  }
  delName(i: number){
    this.names.splice(i, 1)

  }
  Albums = [
    {
      name : 'Los Malos Dias',
      year : 2021,
      image : 'https://scontent.fbog3-2.fna.fbcdn.net/v/t1.6435-9/107689083_1389739827883077_4037055929251768992_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=yv-OZDxQw-AAX-M4p4a&_nc_ht=scontent.fbog3-2.fna&oh=b6f97cb791987d75f071e54ef1d21c4d&oe=61D695BC'
    },
    {
      name : 'De La Dependencia Emocional y las Drogas',
      year : 2022,
      image: 'https://scontent.fbog3-2.fna.fbcdn.net/v/t31.18172-8/11705748_402103886646681_8327009262336144314_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=6ETjEfVrPFEAX-ddv1_&_nc_ht=scontent.fbog3-2.fna&oh=00_AT_LnXMABTiH4j1kqMY-1cll9Og4GZK73DcB8Korl9a9IQ&oe=61F0DEE3'
    },
    {
      name: 'Podro Deluxe',
      year : 2023,
      image : 'https://scontent.fbog3-1.fna.fbcdn.net/v/t1.18169-9/1970795_10203939991274054_2625286937887630368_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=19026a&_nc_ohc=HoNI4U4X_T8AX9PTmUO&_nc_ht=scontent.fbog3-1.fna&oh=00_AT8tWcs1a6QjoAeUHd1haIthLVFTdTnuDuJSi_Q4hDQ4ew&oe=61F2BB7B'
    }

  ]

}
