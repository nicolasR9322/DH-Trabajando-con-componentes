import React from "react";
import { TableHeader } from "./TableHeader";
import { TableRows } from "./TableRows";

export const Table = () => {
  let headers = ["Titulo", "Duracion", "Rating", "Genero", "Premios"];
  let data = [
    {titulo:"Billy Elliot", 
    duracion:123,
    rating:5,
    Genero:["drama","comedia"],
    premios:2
    }, 
    {titulo:"Alicia en el pais de las maravillas", 
    duracion:142,
    rating:4.8,
    Genero:["drama","accion","Comedia"],
    premios:3
    }, ];
  return (
    <div className="table-responsive">
      <table className="table table-warning">
        <TableHeader headers={headers} />
        
        {data.map((datas, i) => {
        return <TableRows {...datas} key={i + datas.titulo}/>
        })}
        <TableHeader headers={headers} />
      </table>
    </div>
  );
};
