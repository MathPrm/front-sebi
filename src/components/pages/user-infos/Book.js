//import '../assets/styles/book.css';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";

function Book() {
    
    const {isConnected} = useContext(AuthContext);
    const [images,setImages] = useState([]);


    /*useEffect(()=>{
        if(isConnected){
            setImages([
                "../../../assets/images/james.webp",
                "../../../assets/images/logo.png",
                "../../../assets/images/sebi.webp"
            ])
        }
    },[isConnected])*/
    
    async function generationImage() {
        const res = await fetch("http://localhost:5000/api/generate-image", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        if (data.imageUrl) {
            setImages(prev => [...prev, data.imageUrl]);
        }
    }


    if(!isConnected){
        return(
            <p>veuillez vous connectez</p>
        )
    }

    return (
        <div className='book'>
            <h1>'Ma galerie d'images'</h1>
            <button onClick={generationImage}>generer une image</button>
            <div>
                {images.map((src,index)=>(
                    <img key={index} src={src} alt={`jeu ${index}`}/>
                ))}
            </div>
        </div>
    )
}

export default Book;