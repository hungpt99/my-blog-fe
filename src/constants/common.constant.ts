// src/constants/constants.ts

// Website Branding Information
export const WEBSITE_NAME = 'LowkeyDev Blog'
export const WEBSITE_URL = 'https://www.lowkeydev.com' // Your website URL
export const WEBSITE_DESCRIPTION =
  'The best blog for web development, technology, design, and more.'
export const WEBSITE_KEYWORDS = 'web development, technology, design, blog'
export const WEBSITE_FOOTER_TEXT = '© 2025 LowkeyDev. All rights reserved.'

// Social Media Links
export const SOCIAL_LINKS = [
  { platform: 'Twitter', url: 'https://twitter.com/yourusername' },
  { platform: 'Facebook', url: 'https://facebook.com/yourusername' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
  { platform: 'GitHub', url: 'https://github.com/yourusername' },
]

// Blog-related Constants
export const BLOG_API_ENDPOINT = '/api/blogs'
export const BLOG_LIST_LIMIT = 10
export const BLOG_CATEGORIES = [
  { id: 'technology', label: 'Technology' },
  { id: 'design', label: 'Design' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'business', label: 'Business' },
]

// Navigation items for the header or sidebar
export const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'project', label: 'Project', href: '/project' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'faq', label: 'FAQ', href: '/comming-soon' },
]

// Placeholder text for blog post
export const PLACEHOLDER_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

// SEO Meta Tags
export const SEO = {
  title: WEBSITE_NAME,
  description: WEBSITE_DESCRIPTION,
  keywords: WEBSITE_KEYWORDS,
  image: `${WEBSITE_URL}/assets/images/logo.svg`, // Path to image for social sharing
}

export const socialLinks = [
  {
    name: 'facebook',
    image: '/assets/icons/template/facebook.svg',
    url: 'https://www.facebook.com/profile.php?id=100077713239619',
  },
  { name: 'twitter', image: '/assets/icons/template/twitter.svg', url: 'https://twitter.com' },
  {
    name: 'instagram',
    image: '/assets/icons/template/instagram.svg',
    url: 'https://instagram.com',
  },
]
