import { Input, Button, Select, Tag, Space } from 'antd'
import React, { useState } from 'react'

import CommonPage from 'components/layout/Page'
import { Blog } from 'types/type'

import BlogCard from '../../components/blogpage/BlogCard'

const { Option } = Select

const BlogPage: React.FC = () => {
  const blogs: Blog[] = [
    {
      id: '1',
      title: 'Understanding Cloud Computing',
      category: 'Cloud Computing',
      date: 'January 2025',
      excerpt: 'An introduction to cloud computing technologies...',
      content:
        'This blog post covers various cloud computing technologies and how they are shaping industries around the world.',
      tags: ['Cloud Computing', 'Tech', 'Innovation'],
      imageUrl: '/assets/cloud-computing.jpg',
    },
    {
      id: '2',
      title: 'How AI is Shaping the Future of Tech',
      category: 'Artificial Intelligence',
      date: 'February 2025',
      excerpt: 'AI is revolutionizing industries like healthcare, finance...',
      content:
        'In this blog post, we explore the impact of artificial intelligence across multiple sectors and its future potential.',
      tags: ['AI', 'Technology', 'Future'],
      imageUrl: '/assets/ai-future.jpg',
    },
    {
      id: '3',
      title: 'The Basics of Cybersecurity',
      category: 'Cybersecurity',
      date: 'March 2025',
      excerpt: 'A guide to understanding basic cybersecurity concepts...',
      content:
        'This article discusses the fundamentals of cybersecurity, the risks involved, and how individuals and businesses can protect themselves.',
      tags: ['Cybersecurity', 'Safety', 'Tech'],
      imageUrl: '/assets/cybersecurity-basics.jpg',
    },
    {
      id: '4',
      title: 'Understanding Cloud Computing',
      category: 'Cloud Computing',
      date: 'January 2025',
      excerpt: 'An introduction to cloud computing technologies...',
      content:
        'This blog post covers various cloud computing technologies and how they are shaping industries around the world.',
      tags: ['Cloud Computing', 'Tech', 'Innovation'],
      imageUrl: '/assets/cloud-computing.jpg',
    },
    {
      id: '5',
      title: 'How AI is Shaping the Future of Tech',
      category: 'Artificial Intelligence',
      date: 'February 2025',
      excerpt: 'AI is revolutionizing industries like healthcare, finance...',
      content:
        'In this blog post, we explore the impact of artificial intelligence across multiple sectors and its future potential.',
      tags: ['AI', 'Technology', 'Future'],
      imageUrl: '/assets/ai-future.jpg',
    },
    {
      id: '6',
      title: 'The Basics of Cybersecurity',
      category: 'Cybersecurity',
      date: 'March 2025',
      excerpt: 'A guide to understanding basic cybersecurity concepts...',
      content:
        'This article discusses the fundamentals of cybersecurity, the risks involved, and how individuals and businesses can protect themselves.',
      tags: ['Cybersecurity', 'Safety', 'Tech'],
      imageUrl: '/assets/cybersecurity-basics.jpg',
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

  // Get unique tags from all blogs
  const allTags = Array.from(new Set(blogs.flatMap((blog) => blog.tags || [])))

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory !== 'All' ? blog.category === selectedCategory : true
    const matchesTags =
      selectedTags.length === 0 ||
      (blog.tags && selectedTags.every((tag) => blog?.tags?.includes(tag)))

    return matchesSearch && matchesCategory && matchesTags
  })

  const handleTagClick = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    )
  }

  return (
    <CommonPage title='Blog'>
      {/* Search & Category Filter in One Line */}
      <div className='mb-6 flex flex-wrap items-center gap-4'>
        <Input
          placeholder='Search blogs...'
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

      {/* Blog List */}
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </CommonPage>
  )
}

export default BlogPage
