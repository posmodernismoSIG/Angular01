import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  name = 'sebastian';
  age = 24;
  img01 = 'https://scontent.fbog3-1.fna.fbcdn.net/v/t1.6435-9/118534100_1427317170792009_4245589456307821532_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=_VnRkxeK_6UAX8fVEo9&_nc_ht=scontent.fbog3-1.fna&oh=00_AT82nF0MxOBqKRSzV47ClUzAv-fci9WGOMM2s1JWH9etPg&oe=62125992';
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
  albums = [{
    name:'Los Malos Dias',
    age: 2020,
    genere:'Blues Rock',
    image: 'https://scontent.fbog3-2.fna.fbcdn.net/v/t1.6435-9/107689083_1389739827883077_4037055929251768992_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=LyAd9Oi4hQIAX83cuTa&_nc_ht=scontent.fbog3-2.fna&oh=00_AT8QVPiyBuSROFCtuwLoEWD5Z0k1s4IUc6rS27GFX50zmg&oe=61FE22BC'
  },
{
  name:'Aversion',
  age:2015,
  genere:'Alternative Rock',
  image: 'https://scontent.fbog3-1.fna.fbcdn.net/v/t31.18172-8/12031400_10206652902655143_3281259116167983040_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=19026a&_nc_ohc=hvilTD6t9agAX8wIiQi&_nc_ht=scontent.fbog3-1.fna&oh=00_AT97ZQG_bc-CbRZ3k8u8rcJudUa9L6er0i33cUmT9Qsq2g&oe=61FAA5D3'
},{
  name:'Sonus Fostering',
  age:2012,
  genere:'Rock',
  image: 'https://scontent.fbog3-1.fna.fbcdn.net/v/t1.18169-9/1970795_10203939991274054_2625286937887630368_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=19026a&_nc_ohc=MmDl4_jrJO4AX-MyRUV&_nc_ht=scontent.fbog3-1.fna&oh=00_AT8yPlKjRtG7mnnugMNN_bJalVq9noj6SyTQ6_3OEdcqnA&oe=61FAA47B'
}]
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
