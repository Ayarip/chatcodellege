import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {AngularFirestore} from '@angular/fire/firestore'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public mensajes: Array<any>=[]
  constructor(private auth:AuthService, private af:AngularFirestore) {
    this.auth.userProfile$.subscribe(data=>{
      console.log(data);
      
      let usuario={
        user:data.name,
        picture:data.picture,
        email:data.email
      }
      localStorage.setItem('user',JSON.stringify(usuario))
    })
    this.af.collection('chats', ref=>ref.orderBy('fecha','asc')).valueChanges().subscribe(chats=>this.mensajes=chats)
   }

  ngOnInit() {
  }

  sendmessage(mensaje){
    if (mensaje=="")return
    let user = JSON.parse(localStorage.getItem('user'))
    let item={
      mensaje,
      usuario: user.user,
      fecha: Date.now()

    }
    console.log(mensaje)
    this.af.collection('chats').add(item);
  }

}
