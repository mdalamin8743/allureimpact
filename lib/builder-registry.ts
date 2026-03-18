import type { RegisteredComponent } from '@builder.io/sdk-react';
import dynamic from 'next/dynamic';

export const customComponents: RegisteredComponent[] = [
  {
    component: dynamic(() => import('@/components/blocks/HeroBlock')),
    name: 'Hero',
    inputs: [
      { name: 'eyebrow', type: 'string', defaultValue: 'Welcome' },
      { name: 'title', type: 'string', defaultValue: 'Your Big Headline Here' },
      { name: 'titleAccent', type: 'string', defaultValue: 'Accent Line' },
      { name: 'description', type: 'longText', defaultValue: 'Your description here.' },
      { name: 'primaryButtonText', type: 'string', defaultValue: 'Get Started' },
      { name: 'primaryButtonLink', type: 'string', defaultValue: '/contact' },
      { name: 'secondaryButtonText', type: 'string', defaultValue: 'Learn More' },
      { name: 'secondaryButtonLink', type: 'string', defaultValue: '/about' },
      { name: 'showScrollIndicator', type: 'boolean', defaultValue: true },
    ],
  },
  {
    component: dynamic(() => import('@/components/blocks/StatsBlock')),
    name: 'Stats Bar',
    inputs: [
      {
        name: 'stats',
        type: 'list',
        subFields: [
          { name: 'number', type: 'string' },
          { name: 'label', type: 'string' },
        ],
        defaultValue: [
          { number: '10+', label: 'Years of Excellence' },
          { number: '200+', label: 'Clients Worldwide' },
          { number: '98%', label: 'Client Satisfaction' },
          { number: '50+', label: 'Industry Awards' },
        ],
      },
    ],
  },
  {
    component: dynamic(() => import('@/components/blocks/ServicesBlock')),
    name: 'Services List',
    inputs: [
      { name: 'eyebrow', type: 'string', defaultValue: 'What We Do' },
      { name: 'title', type: 'string', defaultValue: 'Our Services' },
      { name: 'ctaText', type: 'string', defaultValue: 'View All Services' },
      { name: 'ctaLink', type: 'string', defaultValue: '/services' },
      {
        name: 'services',
        type: 'list',
        subFields: [
          { name: 'number', type: 'string' },
          { name: 'title', type: 'string' },
          { name: 'description', type: 'longText' },
          { name: 'link', type: 'string' },
        ],
        defaultValue: [
          { number: '01', title: 'Brand Strategy', description: 'Lorem ipsum dolor sit amet.', link: '/services' },
          { number: '02', title: 'Marketing Consulting', description: 'Lorem ipsum dolor sit amet.', link: '/services' },
          { number: '03', title: 'Business Development', description: 'Lorem ipsum dolor sit amet.', link: '/services' },
        ],
      },
    ],
  },
  {
    component: dynamic(() => import('@/components/blocks/TwoColumnBlock')),
    name: 'Two Column Content',
    inputs: [
      { name: 'eyebrow', type: 'string', defaultValue: 'Who We Are' },
      { name: 'title', type: 'string', defaultValue: 'Section Title' },
      { name: 'titleAccent', type: 'string', defaultValue: 'Accent Words' },
      { name: 'description1', type: 'longText', defaultValue: 'First paragraph.' },
      { name: 'description2', type: 'longText', defaultValue: 'Second paragraph.' },
      { name: 'buttonText', type: 'string', defaultValue: 'Learn More' },
      { name: 'buttonLink', type: 'string', defaultValue: '/about' },
      { name: 'statNumber', type: 'string', defaultValue: '10+' },
      { name: 'statLabel', type: 'string', defaultValue: 'Years of Excellence' },
      { name: 'quote', type: 'string', defaultValue: 'Your quote here.' },
      { name: 'imagePosition', type: 'enum', enum: ['left', 'right'], defaultValue: 'right' },
      { name: 'backgroundColor', type: 'enum', enum: ['dark', 'darker'], defaultValue: 'darker' },
    ],
  },
  {
    component: dynamic(() => import('@/components/blocks/TextBlock')),
    name: 'Text Block',
    inputs: [
      { name: 'eyebrow', type: 'string' },
      { name: 'title', type: 'string', defaultValue: 'Section Title' },
      { name: 'body', type: 'richText' },
      { name: 'alignment', type: 'enum', enum: ['left', 'center', 'right'], defaultValue: 'center' },
      { name: 'backgroundColor', type: 'enum', enum: ['dark', 'darker'], defaultValue: 'dark' },
    ],
  },
  {
    component: dynamic(() => import('@/components/blocks/CTABlock')),
    name: 'CTA Banner',
    inputs: [
      { name: 'eyebrow', type: 'string', defaultValue: 'Ready to start?' },
      { name: 'title', type: 'string', defaultValue: 'Ready to Elevate Your Brand?' },
      { name: 'description', type: 'string', defaultValue: 'Get in touch today.' },
      { name: 'buttonText', type: 'string', defaultValue: 'Get In Touch' },
      { name: 'buttonLink', type: 'string', defaultValue: '/contact' },
      { name: 'style', type: 'enum', enum: ['gold', 'outline', 'dark'], defaultValue: 'gold' },
    ],
  },
  {
    component: dynamic(() => import('@/components/blocks/ContactBlock')),
    name: 'Contact Form',
    inputs: [
      { name: 'eyebrow', type: 'string', defaultValue: 'Get In Touch' },
      { name: 'title', type: 'string', defaultValue: "Let's Talk" },
      { name: 'description', type: 'string', defaultValue: 'We respond within 24 hours.' },
      { name: 'email', type: 'string', defaultValue: 'admin@allureimpact.ca' },
      { name: 'location', type: 'string', defaultValue: 'Canada' },
      { name: 'phone', type: 'string', defaultValue: '' },
      { name: 'successMessage', type: 'string', defaultValue: 'Message sent! We will be in touch soon.' },
    ],
  },
  {
    component: dynamic(() => import('@/components/blocks/PageHeroBlock')),
    name: 'Page Hero',
    inputs: [
      { name: 'eyebrow', type: 'string', defaultValue: 'Page Label' },
      { name: 'title', type: 'string', defaultValue: 'Page Title' },
      { name: 'description', type: 'string', defaultValue: 'Page description here.' },
    ],
  },
  {
    component: dynamic(() => import('@/components/blocks/TeamBlock')),
    name: 'Team Grid',
    inputs: [
      { name: 'eyebrow', type: 'string', defaultValue: 'Our Team' },
      { name: 'title', type: 'string', defaultValue: 'Meet the Team' },
      {
        name: 'members',
        type: 'list',
        subFields: [
          { name: 'name', type: 'string' },
          { name: 'role', type: 'string' },
          { name: 'bio', type: 'longText' },
        ],
        defaultValue: [
          { name: 'Jane Doe', role: 'CEO & Founder', bio: 'Lorem ipsum dolor sit amet.' },
          { name: 'John Smith', role: 'Creative Director', bio: 'Lorem ipsum dolor sit amet.' },
        ],
      },
    ],
  },
  {
    component: dynamic(() => import('@/components/blocks/DividerBlock')),
    name: 'Divider',
    inputs: [
      { name: 'style', type: 'enum', enum: ['line', 'gold-line', 'blank'], defaultValue: 'gold-line' },
      { name: 'spacing', type: 'enum', enum: ['small', 'medium', 'large'], defaultValue: 'medium' },
    ],
  },
];
