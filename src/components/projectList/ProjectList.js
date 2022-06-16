import './projectList.css'

import React from 'react'

export default function ProjectList({ projects }) {
  return (
    <div>
{projects.length === 0 && <p> There are no projects yet!</p>}
{projects.map(project => (
<div key={project.id}>{project.name}</div>
))}
    </div>
  )
}
