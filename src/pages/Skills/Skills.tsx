import './Skills.scss';
import React from 'react'
import images from '../../utils/images';

interface iSkill {
  title: string;
  imgSource: string;
}

const skills: iSkill[] = [
  {
    title: "GIT",
    imgSource: images.git
  },
  {
    title: "React",
    imgSource: images.react
  },
  {
    title: "Redux",
    imgSource: images.redux
  },
  {
    title: "NodeJS",
    imgSource: images.node
  },
  {
    title: "Typescript",
    imgSource: images.typescript
  },
  {
    title: "Javascript",
    imgSource: images.javascript
  },
  {
    title: "HTML",
    imgSource: images.html
  },
  {
    title: "SASS",
    imgSource: images.sass
  },
  {
    title: "Firebase",
    imgSource: images.firebase
  },
  {
    title: "Figma",
    imgSource: images.figma
  },
  {
    title: "CSS",
    imgSource: images.css
  },
  {
    title: "PHOTOSHOP",
    imgSource: images.photoshop
  },
  {
    title: "Illustrator",
    imgSource: images.illustrator
  },
]

const Skills: React.FC = () => {

  return (
    <div id='skills' className='app__skills app__flex app__pad-hor'>
      <h1 className='head-text app__skills--title app__underline-anim'><span>.skills();</span></h1>


      <p className='app__skills--text'>Here are some of the technologies that I have been working with:</p>
      <div className='skill__cards'>
        {skills.map((item, index) => (
          <div key={index} className='skill__card--item app__hover-with-shadow'>
            <img src={item.imgSource} alt={""} />
            <p className='skill__card--item-text'>{item.title}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Skills