import { Card } from 'antd'
import Image from 'next/image'
import React from 'react'

import { Blog } from 'types/type'

interface BlogCardProps {
  blog: Blog
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const imageUrl = blog.imageUrl || '/assets/default-image.jpg'

  return (
    <Card
      hoverable
      cover={
        <Image
          src={imageUrl}
          alt={blog.title}
          width={350}
          height={200}
          className='w-full rounded-lg'
        />
      }
    >
      <Card.Meta
        title={blog.title}
        description={
          <>
            <p className='text-sm text-gray-500'>{blog.date}</p>
            <div className='mt-2'>
              {(blog.tags ?? []).map((tag, index) => (
                <span
                  key={index}
                  className='mr-2 inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800'
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className='mt-4'>{blog.excerpt}</p>
          </>
        }
      />
    </Card>
  )
}

export default BlogCard
