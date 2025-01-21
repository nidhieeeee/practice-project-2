import React from "react";
import "./LandingPage.css"
function LandingPage() {
    return (
        <div className="LpageContainer top">
            <h1>Shout-out of the day</h1>
            <div className="users top ">
                <div className="user">
                    <p className="quotes bottom">"Will you still love me when I'm no longer young and beautiful?" ~ Lana Del Rey</p>
                    <div className="image">
                        <p>Lana del Rey</p>
                        <img src="https://www.pngall.com/wp-content/uploads/8/Lana-Del-Rey-PNG.png" alt="photo" />
                    </div>
                </div>
                <div className="user">

                    <div className="image">
                        <p>Taylor Swift</p>
                        <img src="https://freepngimg.com/save/17253-taylor-swift-png-hd/1092x1365" alt="photo" />
                    </div>
                    <p className="quotes top">"The rest of the world was black and white, but we were in screaming color." ~Taylor Swift</p>
                </div>
                <div className="user">
                    <p className="quotes bottom">"Let me show you how proud I am to be yours
                        Leave this dress a mess on the floor" ~Selena gomez</p>
                    <div className="image">
                        <p>Selena Gomez</p>
                        <img src="https://freepngimg.com/save/21808-selena-gomez-transparent-background/774x1032" alt="photo" />
                    </div>
                </div>
                <div className="user">

                    <div className="image">
                        <p>Ariana Grande</p>
                        <img src="https://freepngimg.com/save/21458-ariana-grande-transparent-image/805x992" alt="photo" />
                    </div>
                    <p className="quotes top">
                        "One taught me love / One taught me patience / And one taught me pain." ~ Ariana Grande
                    </p>
                </div>
            </div>

<div className="about top">
    <h1>About</h1>
<p className="top">This is the website that shows you quotes or hardest lines of others. You can add yours bu filling form</p>
<button className="top bottom">Click here to get started</button>
</div>

        </div>
    );
}
export default LandingPage;