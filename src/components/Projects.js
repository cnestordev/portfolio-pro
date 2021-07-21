import React, { useState } from 'react'

import { Container } from '../styles'
import MainProject from './MainProject'
import ProjectBox from './ProjectBox'

import { projects } from '../util/projects'
import { GradientText } from '../styles'
import { Section, Other, Svg } from '../styles/projects'

function Projects() {
  const [projectsSet] = useState(projects)

  const handleOpen = site => {
    window.open(site)
  }

  const projectsArr = projectsSet.map(project => {
    return <ProjectBox handleOpen={handleOpen} project={project} />
  })

  return (
    <Section id="projects">
      <Container>
        <h3 id="header">Projects</h3>
        <MainProject handleOpen={handleOpen} />
        <Other>
          <h2 id="other">
            <GradientText>Other</GradientText> Projects
          </h2>
          {projectsArr}
        </Other>
      </Container>
      <Svg viewBox="0 0 1440 320">
        <path
          fill="#fff7e4"
          fill-opacity="1"
          d="M0,288L48,282.7C96,277,192,267,288,261.3C384,256,480,256,576,261.3C672,267,768,277,864,288C960,299,1056,309,1152,309.3C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </Svg>
    </Section>
  )
}

export default Projects
