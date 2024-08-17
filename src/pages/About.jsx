import React from 'react'

import  {skills}  from '../constants';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text
         font-semibold drop-shadow'>
          Fenar Khan
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        As a multifaceted professional deeply passionate about the convergence of design and technology, I am Fenar Khan , fervently pursuing excellence in web development, UI/UX design, and graphic artistry.

With a robust foundation in these domains, I navigate the dynamic landscapes of digital creation, harnessing my skills to craft immersive user experiences and visually captivating interfaces. My journey has seen me contribute as a freelance professional, collaborating with clients to actualize their visions.

Driven by a fervor for innovation, I've also honed my craft through part-time roles, gaining invaluable experience within diverse work environments. This fusion of academia and practical exposure fuels my commitment to staying at the forefront of design trends and technological advancements.

Eager to continue this enriching journey, I seek opportunities to merge my creative prowess and technical acumen, contributing meaningfully to transformative projects and ventures that challenge the status quo.

Let's connect and explore the realms where design meets functionality, creating impactful solutions together!
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center
              items-center'>
                <img src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
          <h3 className='subhead-text'>
            Work Experience
          </h3>

          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        As a multifaceted professional deeply passionate about the convergence of design and technology, I am Fenar Khan , fervently pursuing excellence in web development, UI/UX design, and graphic artistry.

        With a robust foundation in these domains, I navigate the dynamic landscapes of digital creation, harnessing my skills to craft immersive user experiences and visually captivating interfaces. My journey has seen me contribute as a freelance professional, collaborating with clients to actualize their visions.

        Driven by a fervor for innovation, I've also honed my craft through part-time roles, gaining invaluable experience within diverse work environments. This fusion of academia and practical exposure fuels my commitment to staying at the forefront of design trends and technological advancements.

        Eager to continue this enriching journey, I seek opportunities to merge my creative prowess and technical acumen, contributing meaningfully to transformative projects and ventures that challenge the status quo.

        Let's connect and explore the realms where design meets functionality, creating impactful solutions together!
        </p>
      </div>
      </div>
    </section>
  )
}

export default About
