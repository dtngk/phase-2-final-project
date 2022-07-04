// src/components/Main.js
import React from "react";

const breakingbadURL = "https://en.wikipedia.org/wiki/Breaking_Bad";
const bettercallsaulURL = "https://en.wikipedia.org/wiki/Better_Call_Saul"
function Main() {

  return (
    <div className="main">
      <h1 className="series">Breaking Bad</h1>
      <p className="text">
        Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan. 
        Set and filmed in Albuquerque, New Mexico, it tells the story of Walter White, an underpaid, overqualified, 
        and dispirited high-school chemistry teacher who is struggling with a recent diagnosis of stage-three lung cancer. 
        Walter turns to a life of crime, partnering with his former student Jesse Pinkman, by producing and distributing crystal meth 
        to secure his family's financial future before he dies, while navigating the dangers of the criminal underworld. 
        According to Gilligan, the title is a Southern colloquialism meaning "to raise hell". 
      </p>
      <p className="text">
        The show aired on AMC from January 20, 2008, to September 29, 2013, consisting of five seasons for a total of 62 episodes.
      </p>

      <p className="source"> Source : <a href={breakingbadURL}>Breaking Bad</a> </p>

      <h1 className="series">Better Call Saul</h1>
      <p className="text">
        Better Call Saul is an American crime drama television series created by Vince Gilligan and Peter Gould. 
        It is a spin-off, prequel, and a sequel to Gilligan's previous series, Breaking Bad. 
        Set primarily in the early to middle part of the 2000s in Albuquerque, New Mexico, the series develops Jimmy McGill (Bob Odenkirk), 
        an earnest lawyer and former con artist, into an egocentric criminal defense attorney known as Saul Goodman. 
        Also shown is the moral decline of retired police officer Mike Ehrmantraut (Jonathan Banks), who becomes a career criminal to support 
        his granddaughter and her widowed mother. The show premiered on AMC on February 8, 2015. 
      </p>
      <p className="text">
        The sixth and final season consisting of 13 episodes premiered on April 18, 2022, and is set to conclude on August 15, 2022.
      </p>

      <p className="source">Source: <a href={bettercallsaulURL}>Better Call Saul</a> </p>

    </div>   
  )
}

export default Main;