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
    ""
  ];
  imagem = "biscoito.png";
  fechado: boolean = true;

  abrir (){
    if( this.fechado){
      this.fechado = false;
      this.imagem = "quebrado.png"

    }
    
  }
  limpar(){
    if(!this.fechado){
      this.fechado = true
      this.imagem = "biscoito.png"
    }
  }

}
