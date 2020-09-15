import React from 'react';
import '../components/tiendacomidas.css';
import '../components/card.css';
import Tiendacomidas from '../components/tiendacomidas';
import Card from '../components/card';
import Header from '../components/header';
import '../components/header.css';



function pagina1() {
  return (
    <div >
      < Header />
      <Tiendacomidas />
      <Card />
      
    </div>
  );
}

export default pagina1;
