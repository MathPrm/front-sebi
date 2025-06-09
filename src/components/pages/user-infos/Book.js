import'../../../assets/styles/pages/user-infos/book.css';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";

function Book() {
    
    const {isConnected} = useContext(AuthContext);
    const [images,setImages] = useState([]);

    useEffect(()=>{
        async function fetchImages() {
            try{
                const res = await fetch("http://localhost:5000/api/images");
                const data = await res.json();
                setImages(data.map(img=>img.image))
            }catch(err){
                console.error("Erreur lors du chargement des images :", err);
            }
        }
        if(isConnected){
            fetchImages();
        }
    },[isConnected])
    
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
            <div className="galerie">
                {images.map((src,index)=>(
                    <img className="image" key={index} src={src} alt={`jeu ${index}`}/>
                ))}
            </div>
        </div>
    )
}

export default Book;