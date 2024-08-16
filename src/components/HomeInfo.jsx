import React from 'react'
import {Link} from 'react-router-dom'

const InfoBox = ({text,link, btnText})=>{
  return(
    <div className="info-box">
    <p className='font-medium sm:text-xl text-center'>
    {text}
    </p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
    </Link>
  </div>
  )
}

const renderContent = {
  1: (
    <h1 className='sm:text sm:loading-snug
    text-center neo-brutalism-blue py-4 px-8
    text-white mx-5'>
      Hi, I am <span className='font-semibold'>
        Fenar Khan👋
      </span>
      <br />
      A Webdeveloper | UI UX Designer | Graphic Designer
    </h1>
  ),
  2: (
    <InfoBox
      text="worked with many comapnies and picked up many skills
      along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects ro success over the years
      .Curious about the impact?"
      link="/Projects"
      btnText="Checkout Projects"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev?
      I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo
