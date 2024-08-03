import React from "react";

export default function Movie(props)
{
   
    return(
        <div className="movieDetails">
            <img src="https://occ-0-3216-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbSN-WGLksBL4b_TAbDd2ozrGPEMR10SFTZnvRnX8Ji6JErSMnNxxOLgnrLeG8bndxwbe98NSME9an0VVOaOt2vfznnm96MjRMMQFdTUNRT_cSdp1p_jlviswEj_alUylj6l.jpg?r=a50" alt="img"/>
            <h3>{props.tit}</h3>

        </div>
    )
}
