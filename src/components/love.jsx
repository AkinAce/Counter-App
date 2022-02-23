import React, { Component } from 'react';
import Image from "../images/Goodbyes stink.jpg"
import ImageA from "../images/A.jpg"
import ImageB from "../images/B.jpg"
import ImageC from "../images/C.jpg"

class love extends React.Component {
    render() { 
        return <div style={{ backgroundImage: `url(${ImageC})`, backgroundAttachment: 'fixed', backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}className='container p-3 bg-warning'>
            <div  className='container p-3 mt-2 rounded-3 bg-light'>
            <div>
           <h1 style={{fontFamily:"Ace" }} className='mt-2 '>Dear Adebimpe,</h1>
           <p style={{fontFamily:"Bash", fontStyle:"italic" }}className='mt-2'>My big baby, words don't do justice to how I feel about you, every day with you is a blessing and I pray this is just the beginning.
            </p>
           <p style={{fontFamily:"Bash", fontStyle:"italic" }}className='mt-2'>
           You make me smile, you make me happy, you motivate and support me, it's an understatement to say I value your presence in my life. I'm more than grateful for all you do and I hope to continue being the man that makes you happy as well.
            </p>
           <p style={{fontFamily:"Bash", fontStyle:"italic" }}className='mt-2'>
           I love you beyond words can explain and I can't wait to see what the future holds for us. I look forward to creating and sharing more beautiful memories with you far into the future.
            </p>
           <p style={{fontFamily:"Bash", fontStyle:"italic" }}className='mt-2'>
            I know distance could make things a bit tricky but I'm sure we'll get through this phase and come out even stronger. I want you to be rest assured that I'll always have you in the forefront of my mind and nothing would change that.
            </p>
           <p style={{fontFamily:"Bash", fontStyle:"italic" }}className='mt-2'>
            I love you so much my baby, I hope to unlock more levels of expressiveness to always let you know how much you mean to me. </p>
           <p style={{fontFamily:"Bash", fontStyle:"italic" }}className='mt-2'>
            I hope this makes you smile. </p>
           <p style={{fontFamily:"Bash", fontStyle:"italic", textAlign:"right"  }}className='mt-2'>
            --Your Baby. </p>
            <p style={{fontFamily:"Bash", fontStyle:"italic" }}className='mt-2'> 
               PS: <a href="https://www.youtube.com/watch?v=An5K1LcDTTg">Click Me</a>
                </p>
            </div>
            <div className='mt-2'>
           <img src={ImageA} class="img-fluid rounded-3  " alt="..."></img>   
           <img src={ImageB} class="img-fluid rounded-3  " alt="..."></img>   
            </div>
           
           </div> 



    
           </div>;
    }
}
 
export default love;