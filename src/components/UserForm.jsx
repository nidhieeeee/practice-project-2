import React from "react";
import "./UserForm.css";
 function UserForm(){
    return(
        <div className="formContainer">
        <form>
            <div className="name">
                <label htmlFor="name">What is your Name:
                </label>
                <input type="text" id="name" placeholder="Nidhi" />
            </div>

            <div className="artistName">
                <label htmlFor="name">What is your Artist Name:
                </label>
                <input type="text" id="name" placeholder="Noah" />
            </div>

            <div className="email">
                <label htmlFor="email">
                    How can I contact you:
                </label>
                <input type="email" id="email" placeholder="email" />
            </div>

            <div className="favouriteSong">
                <label htmlFor="favouriteSong">Wanna know your music teast:</label>
                <input id="favouriteSong" type="text" placeholder="one of the girls tonight by weekend" />
               </div>
             
             <div className="favouriteLyrics">
                <label htmlFor="favouriteLyrics">
The song line got you:
                </label>
                <input type="text" id="favouriteLyrics" placeholder="I am unstopable" />
             </div>

<div className="ownLyrics">
    <label htmlFor="ownLyrics">If your life is a song....:</label>
    <textarea id="ownLyrics" placeholder="Yeah you can write anything....."  />
</div>
<button type="submit" >Submit</button>
        </form>
        </div>
    );
 }
 export default UserForm;