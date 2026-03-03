import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pw3-hello-world');
  frases: any = [
    "Marion", "da", "MB", "Marion da MB !!!"
  ];
  mensagem = this.frases;
  imagem = "biscoito.png";
  fechado: boolean = true;
  div: boolean = true;

  abrir (){
    if(this.fechado){
      this.fechado = false;
      this.imagem = "quebrado.png"
      this.mensagem = this.frases[Math.floor(Math.random() * this.frases.length)];
      this.div = false
    }

  }
  limpar(){
    if(!this.fechado){
      this.fechado = true
      this.imagem = "biscoito.png"
      this.div = true
    }
  }



}
