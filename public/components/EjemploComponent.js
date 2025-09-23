import React from 'react'
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

export const EjemploComponent = () => {

    const [mostrar, setMostrar] = useState(false);
    const caja = useRef();
    const boton = useRef();

    // useEffect(()=>{
    //     console.log(boton.current.innerHtml);

    //     if(caja.current == null) return;

    //     const { boton } = boton.current.getBoundingClientReact();

    //     // setTimeout(()=>{
    //         caja.current.style.top = `${boton + 45}px`;
    //         caja.current.style.left = `${boton + 45}px`;
    //     // }, 1000);
    // },[mostrar]);


    useLayoutEffect(()=>{
        console.log(boton.current.innerHtml);

        if(caja.current == null) return;

        const { boton } = boton.current.getBoundingClientReact();

        // setTimeout(()=>{
            caja.current.style.top = `${boton + 45}px`;
            caja.current.style.left = `${boton + 45}px`;
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
    </div>
  )
}
