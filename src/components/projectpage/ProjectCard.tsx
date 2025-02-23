import { Card } from 'antd'

import { Project } from 'types/type'

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt={project.title}
          src={project.imageUrl}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Giới hạn kích thước ảnh
        />
      }
    >
      <Card.Meta title={project.title} description={project.description} />
    </Card>
  )
}

export default ProjectCard
