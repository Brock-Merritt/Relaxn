import React from "react";
import cute from '../../assets/sad.jpg';
import hug from '../../assets/hug.png';

const Sad = () => {
    return(
        <>
        <div className="top-row">
            <div className="card">
                <div className="card-img-top">
                    <img  src={cute} alt="Cute puppy and kitten" className="sad-img"></img>
                </div>
            </div>
            <div className="card">
                <div className="quote">"Be strong now because things will get better. It might be stormy now, but it can't rain forever."</div>
            </div>
            <div className="card">
                <div className="card-img-top">
                    <img  src={hug} alt="Hugging cartoon" className="hug-img"></img>
                </div>
            </div>
        </div>
        <div className="bottom-row">
            <div className="card">
                <iframe className="enough" src="https://giphy.com/embed/xT77XOVcx7KPcNVihi" width="500" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/creativemornings-you-are-awesome-kitty-lo-xT77XOVcx7KPcNVihi"></a>
            </div>
            <div className="card">
                <iframe width="500" height="315" src="https://www.youtube.com/embed/ihUF8pbphbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="bottom-vid"></iframe>
            </div>
        </div>
        </>
    )
}

export default Sad;