import React from "react";

import Movie from "./Movie";

function Movies()
{
    let title='Money Heist' , title1='Lift', title2='Run', title3='Heeramandi';
    
    return(
        <div className="movieSection">          
            <Movie tit= {title}/>                  
            <Movie tit= {title1}/>
            <Movie tit= {title2}/>
            <Movie tit= {title3}/>
        </div>
    )
}
export default Movies;
