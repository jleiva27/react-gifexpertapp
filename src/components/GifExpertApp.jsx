import { useState } from "react"
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";
import { ShowCategories } from "./ShowCategories";

export default function GifExpertApp() {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState([]);

    // const handleAdd = () =>{
    //     setCategories([...categories, 'HunterXHunter']);
    // }
    return (
        <div className="page-container">
            <div className="box1">
                <div className="titulo">
                    <h2 className="animate__animated animate__fadeInRightBig">GifExpertApp</h2>
                </div>
            </div>
            <AddCategory setCategories={setCategories} />
            <ShowCategories categories={categories} setCategories={setCategories}/>
            <li></li>
           

            <ol>
                {
                    categories.map(category => {
                        return (
                            <>
                                <GifGrid
                                    category={category} 
                                    />

                            </>
                        )
                    })
                }

            </ol>


        </div>
    )
}