import React from 'react';
import './App.css'; 
import { useState } from 'react';



const Usuario = ({ nombre, edad, ubicacion, descripcion, seguidores, seguidos, publicaciones, initialFollowing }) => {
    var [isFollowing, setIsFollowing] = useState(initialFollowing)
    
    console.log(isFollowing);
    const text= isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName =isFollowing 
    ? 'tw-followCard-button--following' 
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
      }
  
  
    return (
    <div>
      <header>
        <div className="encabezado-perfil">
          <h1 className="nombre">{nombre}</h1>
          <img src="foto.jpeg" alt="Imagen de perfil" className="foto" /> 
          

        </div>
      </header>
      <button className={buttonClassName} onClick={handleClick}>{text}</button>
      <main>
        <section className="caja-informacion">
          <h2>Información Personal</h2>
          <div>
            
            <p><b>Nombre:</b> {nombre}</p>
            <p><b>Edad:</b> {edad}</p>
            <p><b>Ubicación:</b> {ubicacion}</p>
            <p><b>Descripción:</b> {descripcion}</p>
          </div>
        </section>
        <section className="caja-usuario">
          <h2>Estadísticas</h2>
          <div className="contenido-estadisticas">
            <div className="estadistica">Seguidores: {seguidores}</div>
            <div className="estadistica">Seguidos: {seguidos}</div>
            <div className="estadistica">Publicaciones: {publicaciones}</div>
          </div>
        </section>
        <section className="caja-multimedia">
          <h2>Multimedia</h2>
          <div className="contenido-estadisticas">
            <div>
              <audio controls>
                <source src="audio1.mp3" type="audio/mp3" codecs="mp3" />
                
              </audio>
            </div>
            <div>
              <video controls width="500px" height="250px">
                <source src="video1.mp4" type="video/mp4" />
                
              </video>
            </div>
            <div>
              <img src="imagen1.png" alt="Imagen1" width="500px" height="250px" /> 
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="contacto">
          <p>Información de contacto: cristian@gmail.com</p>
          <div className="enlaces">
            <a href="https://www.facebook.com/public/Cristian" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com/crpandemonium?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/nodal/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
      <a href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style={{display: 'inline-block'}}>
        CC BY-NC 4.0
        <img style={{height: '22px!important', marginLeft: '3px', verticalAlign: 'text-bottom'}} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="CC" />
        <img style={{height: '22px!important', marginLeft: '3px', verticalAlign: 'text-bottom'}} src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt="BY" />
        <img style={{height: '22px!important', marginLeft: '3px', verticalAlign: 'text-bottom'}} src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt="NC" />
      </a>
    </div>
  );
}

export default Usuario;
