import { Input, Button, Select, Tag, Space } from 'antd'
import React, { useState } from 'react'

import CommonPage from 'components/layout/Page'
import { Project } from 'types/type'

import ProjectCard from '../../components/projectpage/ProjectCard'

const { Option } = Select

const ProjectPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Building Scalable Web Applications',
      category: 'Web Development',
      date: 'January 2025',
      description: 'An introduction to building scalable web applications...',
      content:
        'This project demonstrates best practices for building scalable, high-performance web applications.',
      tags: ['Web Development', 'Scalability', 'Performance'],
      imageUrl: '/assets/web-app.jpg',
    },
    {
      id: '2',
      title: 'AI-Powered Chatbot Development',
      category: 'Artificial Intelligence',
      date: 'February 2025',
      description: 'A deep dive into developing AI-powered chatbots...',
      content:
        'This project explores the process of creating intelligent chatbots for customer service using AI technologies.',
      tags: ['AI', 'Chatbot', 'Automation'],
      imageUrl: '/assets/ai-chatbot.jpg',
    },
    {
      id: '3',
      title: 'Cloud Infrastructure for Startups',
      category: 'Cloud Computing',
      date: 'March 2025',
      description: 'Best practices for building a cloud infrastructure...',
      content:
        'This project focuses on setting up cloud infrastructure for startups and optimizing costs.',
      tags: ['Cloud', 'Startup', 'Infrastructure'],
      imageUrl: '/assets/cloud-infrastructure.jpg',
    },
  ]

  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const categories = [
    'All',
    'Web Development',
    'Artificial Intelligence',
    'Cloud Computing',
    'Cybersecurity',
  ]

  // Get unique tags from all projects
  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags || [])))

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory !== 'All' ? project.category === selectedCategory : true
    const matchesTags =
      selectedTags.length === 0 ||
      (project.tags && selectedTags.every((tag) => project.tags.includes(tag)))

    return matchesSearch && matchesCategory && matchesTags
  })

  const handleTagClick = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    )
  }

  return (
    <CommonPage title='Project'>
      {/* Search & Category Filter in One Line */}
      <div className='mb-6 flex flex-wrap items-center gap-4'>
        <Input
          placeholder='Search projects...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: '100%', maxWidth: 300 }}
        />
        <Select
          style={{ width: '100%', maxWidth: 250 }}
          value={selectedCategory}
          onChange={(value) => setSelectedCategory(value)}
          placeholder='Select Category'
        >
          {categories.map((category, index) => (
            <Option key={index} value={category}>
              {category}
            </Option>
          ))}
        </Select>
        <Button
          type='primary'
          onClick={() =>
            console.log(`Searching for: ${searchQuery} in category: ${selectedCategory}`)
          }
        >
          Search
        </Button>
      </div>

      {/* Tags Filter */}
      <div className='mb-6'>
        <p className='mb-2 font-semibold'>Filter by Tags:</p>
        <Space wrap>
          {allTags.map((tag) => (
            <Tag
              key={tag}
              color={selectedTags.includes(tag) ? 'blue' : 'default'}
              onClick={() => handleTagClick(tag)}
              style={{ cursor: 'pointer' }}
            >
              {tag}
            </Tag>
          ))}
        </Space>
      </div>

      {/* Project List */}
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </CommonPage>
  )
}

export default ProjectPage
