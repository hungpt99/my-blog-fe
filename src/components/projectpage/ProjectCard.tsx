import { Card } from 'antd'
import React from 'react'

import { Project } from 'types/type'

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card hoverable cover={<img alt={project.title} src={project.imageUrl} />}>
      <Card.Meta title={project.title} description={project.description} />
    </Card>
  )
}

export default ProjectCard
