import { Component } from "@angular/core";

@Component(
    {
        selector:'mi-componente',
        templateUrl:'./mi-componente.components.html'

        
    }
)

export class MiComponente{
public titulo: string;
public comentario:string;
public year: number;

constructor()
{
    this.titulo="Hola Mundo";
    this.comentario="Este es mi primer componente";
    this.year=2022;
    console.log("Mi componente cargado");
}

}