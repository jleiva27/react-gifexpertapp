import { useState } from "react"
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export default function GifExpertApp (){

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () =>{
    //     setCategories([...categories, 'HunterXHunter']);
    // }
    return(
        <div>
            <h2 className="animate__animated animate__fadeInRightBig">GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category => (
                       <GifGrid 
                            key = {category}
                            category = {category
                        }/>
                    ))
                }
            </ol>


        </div>
    )
}