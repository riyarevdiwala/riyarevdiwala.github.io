import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import accountingImg from '@/../public/images/accounting.jpg';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'NASA (Sciglob Instruments), GSFC Greenbelt, MD',
    location: 'Software Engineer',
    description: 'Led software development for the Pandonia Global Network (PGN), a joint NASA-ESA initiative, overseeing data acquisition for 300+ Pandora spectrometers across 40+ countries using Python, C++, and multithreading for high-throughput processing. Designed a cloud-native data pipeline leveraging AWS Lambda, S3, and DynamoDB for real-time ingestion and synchronization of atmospheric data, reducing latency by 30% and optimizing global data availability. Implemented multi-threaded communication protocols for distributed control of spectrometers, motors, and filters, enhancing command execution speeds by 25% across international monitoring stations. Developed a real-time log reporting system using Flask, AWS SNS, and CloudWatch, automating error alerts and diagnostics for 50+ network operators and PIs, improving incident response time by 40%. Currently building a web-based monitoring dashboard with React, Flask, and WebSockets to deliver live status updates and geospatial visualization for all deployed Pandora devices, improving operational visibility.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: '05/2024 - Present',
  },
  {
    title: 'Cyberpack Ventures, Columbia, MD',
    location: 'Software Engineer- Intern',
    description: 'Conducted information retrieval and malware analysis for a research project, leveraging Python (Pandas, NumPy, Scikit-Learn) and statistical modeling to extract insights from large datasets. Designed and implemented data analysis pipelines to process malware indicators, utilizing Matplotlib, Seaborn, and Plotly for visual representation of threat patterns and anomaly detection. Applied problem-solving techniques to navigate technical challenges, optimizing data extraction, feature engineering, and model training in dynamic research environments. Collaborated with cross-functional teams, gaining hands-on experience in research methodologies, agile project management, and interdisciplinary teamwork to deliver data-driven solutions.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: '06/2023 - 05/2024',
  },
  {
    title: 'ZS Associates, India',
    location: 'Software Engineer',
    description: 'Developed high-performance financial applications in Python, C, and C++, optimizing exchange API integrations and enhancing data processing speeds for real-time market analytics. Designed new features with Object-Oriented Design (OOD) and managed version control using Git, executing CI/CD pipelines for seamless software deployment. Built and optimized database schemas in MySQL and MongoDB, enhancing query performance and supporting scalable data management.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: '08/2021 - 05/2022',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Audit Master',
    description: `Audit Master is a platform that streamlines the process of obtaining legal expertise and resources. It automates tasks like GAP Analysis, GAP Reporting, Due Diligence & more.`,
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'SCRUM Methodology'],
    imageUrl: auditMasterImg,
    link: 'https://auditmaster.ai/',
  },
  {
    title: 'Demo Automation of accounting documents processing',
    description:
      'Upload any receipt or invoice (even a crumpled one from your pocket) and watch our AI accurately extract its data.',
    tags: ['TypeScript', 'React', 'Docker', 'Next.js', 'GraphQL', 'Tailwind'],
    imageUrl: accountingImg,
    link: 'https://demo.grantonai.cz/',
  },
  {
    title: 'FileDrive',
    description:
      'A platform for decentralized file storage with robust user management.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Convex',
      'Clerk',
      'Shadcn',
      'Tailwind',
    ],
    imageUrl: filedriveImg,
    link: 'https://github.com/bbyc4kes/file-drive',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/bbyc4kes/portfolio',
  },

  {
    title: 'Surge',
    description:
      'Service that allows users to build and manage their own websites with integrated payment processing.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'MySQL',
      'Clerk',
      'Stripe Connect',
      'Shadcn',
      'Tailwind',
    ],
    imageUrl: surgeImg,
    link: 'https://github.com/bbyc4kes/surge',
  },
] as const;

export const skillsData = [
  ['Python (Flask, Django)', '/svgs/python.svg'],
  ['C', '/svgs/c.svg'],
  ['C++', '/svgs/cpp.svg'],
  ['Java', '/svgs/java.svg'],
  ['SQL', '/svgs/sql.svg'],
  ['JavaScript', '/svgs/javascript.svg'],
  ['TypeScript', '/svgs/typescript.svg'],
  ['React', '/svgs/react.svg'],
  ['Flask', '/svgs/flask.svg'],
  ['WebSockets', '/svgs/websockets.svg'],
  ['AWS (Lambda, S3, SNS, CloudWatch, DynamoDB)', '/svgs/aws.svg'],
  ['Docker', '/svgs/docker.svg'],
  ['Kubernetes', '/svgs/kubernetes.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitLab CI/CD', '/svgs/gitlab.svg'],
  ['MySQL', '/svgs/mysql.svg'],
  ['MongoDB', '/svgs/mongodb.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['DynamoDB', '/svgs/dynamodb.svg'],
  ['NoSQL Databases', '/svgs/nosql.svg'],
  ['Multithreading', '/svgs/multithreading.svg'],
  ['Concurrency', '/svgs/concurrency.svg'],
  ['Low-latency Systems', '/svgs/lowlatency.svg'],
  ['Multi-threaded Communication Protocols', '/svgs/protocols.svg'],
  ['PyQt', '/svgs/pyqt.svg'],
  ['Tkinter', '/svgs/tkinter.svg'],
  ['Multi-threaded GUI Applications', '/svgs/gui.svg'],
  ['Matplotlib', '/svgs/matplotlib.svg'],
  ['Seaborn', '/svgs/seaborn.svg'],
  ['Plotly', '/svgs/plotly.svg'],
  ['Spectral Data Rendering', '/svgs/spectral.svg'],
  ['Scientific Computing', '/svgs/scientific.svg'],
  ['AWS CloudWatch', '/svgs/cloudwatch.svg'],
  ['Real-time Log Reporting Systems', '/svgs/logging.svg'],
  ['Error Diagnostics', '/svgs/diagnostics.svg'],
  ['Agile Development', '/svgs/agile.svg'],
  ['Test-Driven Development (TDD)', '/svgs/tdd.svg'],
  ['Behavior-Driven Development (BDD)', '/svgs/bdd.svg'],
  ['Code Reviews', '/svgs/codereview.svg'],
  ['Data Pipelines', '/svgs/pipeline.svg'],
  ['Real-time Data Ingestion', '/svgs/ingestion.svg'],
  ['Data Synchronization', '/svgs/sync.svg'],
] as const;
