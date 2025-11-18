# 💼 Job Portal - Connecting Talent with Opportunity

<div align="center">

![Job Portal](https://img.shields.io/badge/Job-Portal-4F46E5?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

**A modern, full-stack job portal revolutionizing the hiring experience** 🚀

[Live Demo](https://your-demo-link.com) • [Report Bug](https://github.com/yourusername/job-portal/issues) • [Request Feature](https://github.com/yourusername/job-portal/issues)

</div>

---

## 📋 Table of Contents

- [Problem Statement](#-problem-statement)
- [Solution](#-solution)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Tools Used](#-tools-used)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Future Scope](#-future-scope)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Problem Statement

In today's job market, several critical challenges exist:

### For Job Seekers 😞
- **Information Overload** - Hundreds of irrelevant job postings make finding the right opportunity time-consuming
- **Complex Application Process** - Multiple platforms with different application procedures create friction
- **No Transparency** - Lack of visibility into application status leads to uncertainty and frustration
- **Profile Management** - Maintaining professional profiles across multiple platforms is tedious

### For Employers 🏢
- **Quality vs Quantity** - Receiving hundreds of unqualified applications while missing ideal candidates
- **Manual Screening** - Time-consuming manual review of resumes and applications
- **Poor Candidate Experience** - Slow response times and lack of communication damage employer brand
- **Limited Reach** - Difficulty in reaching the right talent pool efficiently

### Core Issues 🔴
- Fragmented hiring ecosystem with no centralized solution
- Inefficient matching between job seekers and opportunities
- Lack of real-time communication and updates
- Poor user experience on both sides of the hiring process

---

## ✨ Solution

**Job Portal** is a comprehensive, modern platform that bridges the gap between talent and opportunity through:

### 🎨 Intuitive User Experience
- Clean, modern interface built with React and Tailwind CSS
- Responsive design that works seamlessly across all devices
- Beautiful, accessible components powered by Shadcn UI

### ⚡ Real-Time Technology
- Instant job posting and application updates via Supabase
- Live notifications for both employers and job seekers
- Real-time application status tracking

### 🔐 Secure & Reliable
- Enterprise-grade authentication with Clerk
- Row-level security ensuring data privacy
- Secure file storage for resumes and documents

### 🎯 Smart Matching
- Advanced filtering and search capabilities
- Role-based access control (job seekers vs employers)
- Personalized job recommendations

### 📊 Data-Driven Insights
- Analytics dashboard for employers
- Application tracking for job seekers
- Performance metrics and hiring trends

---

## 🌟 Features

### For Job Seekers 👨‍💼

| Feature | Description |
|---------|-------------|
| 🔍 **Advanced Search** | Filter jobs by location, salary, type, experience level, and keywords |
| 📝 **One-Click Apply** | Apply to multiple jobs quickly with saved profiles |
| 📊 **Application Dashboard** | Track all your applications in one centralized location |
| 🔔 **Smart Notifications** | Get real-time alerts for new job matches and application updates |
| 💾 **Profile Management** | Create comprehensive professional profiles with resume uploads |
| ⭐ **Save Jobs** | Bookmark interesting positions to apply later |

### For Employers 🏢

| Feature | Description |
|---------|-------------|
| 📢 **Easy Job Posting** | Create detailed job listings with rich text formatting |
| 👥 **Applicant Management** | Review, shortlist, and manage candidates efficiently |
| 📈 **Analytics Dashboard** | Track views, applications, and hiring metrics |
| ✅ **Application Review** | Accept, reject, or request more information from candidates |
| 🏢 **Company Profiles** | Build attractive company pages with logos and descriptions |
| 📧 **Direct Communication** | Message candidates directly through the platform |

### General Features ⚙️

- 🔐 **Secure Authentication** - Protected routes and user sessions
- 🌐 **SEO Optimized** - Better visibility in search engines
- 📱 **Mobile Responsive** - Perfect experience on any device
- ⚡ **Lightning Fast** - Optimized performance and loading times
- 🎨 **Modern UI/UX** - Sleek, professional design
- ♿ **Accessible** - WCAG compliant for all users

---

## 💻 Tech Stack

### Frontend 🎨

```
React JS (v18+)        - Component-based UI architecture
Tailwind CSS (v3+)     - Utility-first styling framework
Shadcn UI              - Pre-built accessible components
React Router DOM       - Client-side routing and navigation
React Hook Form        - Efficient form handling and validation
Zod                    - Schema validation
Lucide React           - Beautiful, customizable icons
```

### Backend & Services ⚙️

```
Supabase               - Backend as a Service (BaaS)
  ├── PostgreSQL       - Relational database
  ├── Realtime         - WebSocket connections
  ├── Storage          - File uploads (resumes, logos)
  ├── Auth             - Row Level Security policies
  └── Edge Functions   - Serverless functions

Clerk                  - Authentication & user management
  ├── Social Login     - Google, GitHub, LinkedIn
  ├── Session Mgmt     - Secure token handling
  └── User Profiles    - Extended user metadata
```

### Development Tools 🛠️

```
Vite                   - Next-generation frontend tooling
ESLint                 - Code quality and consistency
Prettier               - Code formatting
PostCSS                - CSS processing
```

---

## 🛠️ Tools Used

| Category | Tools |
|----------|-------|
| **Design** | Figma, Excalidraw, Coolors |
| **Development** | VS Code, Git, GitHub |
| **Version Control** | Git, GitHub Desktop |
| **Database Design** | Supabase Studio, dbdiagram.io |
| **API Testing** | Thunder Client, Postman |
| **Deployment** | Vercel, Netlify |
| **Project Management** | Trello, Notion |
| **Documentation** | Markdown, README.so |
| **Performance** | Lighthouse, React DevTools |
| **Collaboration** | Slack, Discord |

---

## 🚀 Getting Started

### Prerequisites 📝

Ensure you have the following installed:

```bash
Node.js >= 16.x
npm >= 8.x or yarn >= 1.22.x
Git
```

### Installation Steps 📦

1️⃣ **Clone the repository**

```bash
git clone https://github.com/yourusername/job-portal.git
cd job-portal
```

2️⃣ **Install dependencies**

```bash
npm install
# or
yarn install
```

3️⃣ **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4️⃣ **Set up Supabase Database**

Run this SQL in your Supabase SQL Editor:

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  clerk_id TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  full_name TEXT,
  role TEXT CHECK (role IN ('job_seeker', 'employer')),
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create companies table
CREATE TABLE companies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  logo_url TEXT,
  website TEXT,
  location TEXT,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create jobs table
CREATE TABLE jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  location TEXT,
  salary_min INTEGER,
  salary_max INTEGER,
  job_type TEXT CHECK (job_type IN ('full-time', 'part-time', 'contract', 'freelance', 'internship')),
  experience_level TEXT CHECK (experience_level IN ('entry', 'mid', 'senior', 'lead')),
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  is_active BOOLEAN DEFAULT true,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create applications table
CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  resume_url TEXT,
  cover_letter TEXT,
  status TEXT CHECK (status IN ('pending', 'reviewed', 'shortlisted', 'accepted', 'rejected')) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(job_id, user_id)
);

-- Create saved_jobs table
CREATE TABLE saved_jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, job_id)
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_jobs ENABLE ROW LEVEL SECURITY;

-- Create storage bucket for resumes
INSERT INTO storage.buckets (id, name, public) VALUES ('resumes', 'resumes', false);
INSERT INTO storage.buckets (id, name, public) VALUES ('company-logos', 'company-logos', true);
```

5️⃣ **Configure Clerk**

- Go to [Clerk Dashboard](https://dashboard.clerk.com)
- Create a new application
- Enable Email, Google, LinkedIn authentication
- Copy your publishable key to `.env`

6️⃣ **Start the development server**

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` 🎉

---

## 📁 Project Structure

```
job-portal/
├── 📂 public/                  # Static assets
│   └── vite.svg
├── 📂 src/
│   ├── 📂 components/          # Reusable components
│   │   ├── 📂 ui/             # Shadcn UI components
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── dialog.jsx
│   │   │   └── ...
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── JobCard.jsx
│   │   ├── ApplicationCard.jsx
│   │   └── ProtectedRoute.jsx
│   ├── 📂 pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Jobs.jsx
│   │   ├── JobDetails.jsx
│   │   ├── PostJob.jsx
│   │   ├── MyApplications.jsx
│   │   ├── SavedJobs.jsx
│   │   ├── Dashboard.jsx
│   │   └── Profile.jsx
│   ├── 📂 hooks/              # Custom React hooks
│   │   ├── useJobs.js
│   │   ├── useApplications.js
│   │   └── useUser.js
│   ├── 📂 lib/                # Utilities and configs
│   │   ├── supabase.js
│   │   ├── utils.js
│   │   └── constants.js
│   ├── 📂 context/            # React context providers
│   │   └── AuthContext.jsx
│   ├── App.jsx                # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── 📄 .env                    # Environment variables
├── 📄 .gitignore
├── 📄 package.json
├── 📄 vite.config.js
├── 📄 tailwind.config.js
├── 📄 postcss.config.js
└── 📄 README.md
```

---

## 📸 Screenshots

<div align="center">

### 🏠 Home Page
<img width="1871" height="880" alt="image" src="https://github.com/user-attachments/assets/a1b7b47b-6978-480d-b379-9810e1f03563" />


### 💼 Job Listings
![Job Listings](https://via.placeholder.com/800x400/10B981/FFFFFF?text=Job+Listings)

### 📊 Dashboard
![Dashboard](https://via.placeholder.com/800x400/F59E0B/FFFFFF?text=Employer+Dashboard)

### 📱 Mobile View
![Mobile View](https://via.placeholder.com/400x600/EC4899/FFFFFF?text=Mobile+Responsive)

</div>

---

## 🔮 Future Scope

### Short Term (Next 3-6 months) 📅

- [ ] **AI-Powered Matching** 🤖
  - Implement ML algorithms for job recommendations
  - Smart resume parsing and skills extraction
  - Automated candidate-job compatibility scoring

- [ ] **Enhanced Communication** 💬
  - In-app messaging between employers and candidates
  - Video interview scheduling and integration
  - Email notification system for all actions

- [ ] **Advanced Analytics** 📊
  - Detailed hiring funnel metrics
  - Time-to-hire tracking
  - Candidate source analytics

- [ ] **Resume Builder** 📝
  - Built-in resume creation tool
  - Professional templates
  - ATS-friendly formatting

### Mid Term (6-12 months) 📆

- [ ] **Company Reviews & Ratings** ⭐
  - Glassdoor-style company reviews
  - Salary transparency
  - Employee testimonials

- [ ] **Skills Assessment** 🎯
  - Integrated coding challenges
  - Technical skill verification
  - Certification validation

- [ ] **Referral System** 🤝
  - Employee referral program
  - Bonus tracking
  - Referral leaderboards

- [ ] **Mobile Application** 📱
  - Native iOS and Android apps
  - Push notifications
  - Offline functionality

- [ ] **Premium Features** 💎
  - Featured job postings
  - Priority applications
  - Advanced search filters
  - Applicant tracking system (ATS)

### Long Term (1+ year) 🚀

- [ ] **Global Expansion** 🌍
  - Multi-language support
  - Region-specific job boards
  - International payment integration

- [ ] **AI Interview Assistant** 🎙️
  - Automated initial screening interviews
  - Video interview analysis
  - Sentiment analysis of responses

- [ ] **Learning Management System** 📚
  - Integrated skill development courses
  - Career path recommendations
  - Certification programs

- [ ] **Blockchain Integration** 🔗
  - Verified credentials and certificates
  - Immutable work history
  - Smart contract-based hiring agreements

- [ ] **Virtual Job Fairs** 🎪
  - Live streaming events
  - Virtual booths
  - Real-time networking

- [ ] **API Marketplace** 🔌
  - Public API for third-party integrations
  - Job posting syndication
  - Background check integrations

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create! Any contributions you make are **greatly appreciated**. ❤️

### How to Contribute 🌟

1. **Fork** the Project
2. **Create** your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the Branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Contribution Guidelines 📜

- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Be respectful and constructive

---

## 🐛 Bug Reports & Feature Requests

Found a bug? Have an idea for a new feature? 

👉 [Open an Issue](https://github.com/yourusername/job-portal/issues)

Please include:
- Clear description of the issue/feature
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots if applicable

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

```
MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 👨‍💻 Author

**Your Name**

- 🌐 Portfolio: [yourportfolio.com](https://yourportfolio.com)
- 💼 LinkedIn: [@yourlinkedin](https://linkedin.com/in/yourlinkedin)
- 🐦 Twitter: [@yourtwitter](https://twitter.com/yourtwitter)
- 📧 Email: your.email@example.com
- 💻 GitHub: [@yourusername](https://github.com/yourusername)

---

## 🙏 Acknowledgments

Special thanks to:

- [React Team](https://react.dev) for the amazing library
- [Tailwind Labs](https://tailwindcss.com) for Tailwind CSS
- [Shadcn](https://ui.shadcn.com) for beautiful UI components
- [Supabase Team](https://supabase.com) for the incredible backend platform
- [Clerk](https://clerk.com) for seamless authentication
- All [contributors](https://github.com/yourusername/job-portal/contributors) who helped improve this project


---


**Made with ❤️ and lots of ☕**


</div>


