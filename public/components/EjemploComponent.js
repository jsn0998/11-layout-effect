import React from 'react'
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

export const EjemploComponent = () => {

    const [mostrar, setMostrar] = useState(false);
    const caja = useRef();
    const boton = useRef();

    useEffect(()=>{
        console.log('Componente cargado o cambiado !!');
        console.log(boton.current.innerHTML);

        if(caja.current == null) return;

        const { bottom } = boton.current.getBoundingClientRect();

        // setTimeout(()=>{
            caja.current.style.top = `${bottom + 45}px`;
            caja.current.style.left = `${bottom + 45}px`;
        // }, 1000);
    },[mostrar]);


    useLayoutEffect(()=>{
        console.log('Componente cargado o cambiado !!');
        console.log(boton.current.innerHTML);

        if(caja.current == null) return;

        const { bottom } = boton.current.getBoundingClientRect();

        // setTimeout(()=>{
            caja.current.style.top = `${bottom + 45}px`;
            caja.current.style.left = `${bottom + 45}px`;
        // }, 1000);
    },[]);



  return (
    <div>
        <h1>Ejemplo de useEffect y useLayoutEffect</h1>
        <button
            ref={boton}
            onClick={
                ()=>{
                    return setMostrar(prev=>{
                        console.log(!prev);
                        return !prev;
                    });
                }
            }
        >
        Mostrar Mensaje
        </button>

        {
            mostrar && (
                <div id="caja" ref={caja}>
                    Hola, soy un Mensaje {mostrar}
                </div>
            )
        }
    </div>
  )
}
