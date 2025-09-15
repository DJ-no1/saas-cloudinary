# 🎬 CloudVid Pro

**AI-Powered Video Compression & Social Media Content Creator**

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Media_Cloud-blue?style=flat-square&logo=cloudinary)](https://cloudinary.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.18.0-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)

CloudVid Pro is a modern, full-stack SaaS application that provides AI-powered video compression and social media content creation tools. Built with cutting-edge technologies, it offers seamless video optimization and intelligent image formatting for various social media platforms.

---

## 🌟 Features

### 🎥 **Video Processing**

- **AI-Powered Compression**: Reduce video file sizes up to 70MB with intelligent algorithms
- **Quality Optimization**: Maintain high visual quality while significantly reducing file size
- **Format Conversion**: Automatic MP4 conversion with optimized settings
- **Real-time Preview**: Watch compression previews before download
- **Batch Processing**: Handle multiple videos efficiently

### 📱 **Social Media Creator**

- **Multi-Platform Support**: Instagram, Twitter, Facebook format optimization
- **Smart Cropping**: AI-powered intelligent cropping and gravity detection
- **Format Presets**:
  - Instagram Square (1:1)
  - Instagram Portrait (4:5)
  - Twitter Post (16:9)
  - Twitter Header (3:1)
  - Facebook Cover (205:78)
- **Real-time Transformation**: Live preview of format changes

### 🎨 **Modern UI/UX**

- **Dark Theme**: Sleek, professional dark mode interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Interactive Components**: Smooth animations and transitions
- **Loading States**: Clear feedback during processing
- **Error Handling**: Comprehensive error management with user-friendly messages

### 🔐 **Authentication & Security**

- **Clerk Integration**: Secure user authentication and management
- **Protected Routes**: Middleware-based route protection
- **Session Management**: Persistent user sessions
- **Role-based Access**: Secure API endpoints

---

## 🛠️ Technology Stack

### **Frontend**

- **[Next.js 14.2.5](https://nextjs.org/)** - React framework with App Router
- **[TypeScript 5.5.4](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Utility-first CSS framework
- **[DaisyUI 4.12.10](https://daisyui.com/)** - Tailwind CSS components
- **[Lucide React](https://lucide.dev/)** - Modern icon library
- **[React 18](https://reactjs.org/)** - User interface library

### **Backend & API**

- **[Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)** - Serverless API endpoints
- **[Prisma 5.18.0](https://www.prisma.io/)** - Modern database toolkit
- **[PostgreSQL](https://www.postgresql.org/)** - Production database
- **[Cloudinary](https://cloudinary.com/)** - Media processing and storage

### **Authentication & Security**

- **[Clerk 5.3.0](https://clerk.com/)** - Complete authentication solution
- **Custom Middleware** - Route protection and authorization

### **Development Tools**

- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS transformation
- **[Turbo](https://turbo.build/)** - High-performance build system

### **Additional Libraries**

- **[Axios 1.7.4](https://axios-http.com/)** - HTTP client
- **[Day.js 1.11.12](https://day.js.org/)** - Date manipulation
- **[Filesize 10.1.4](https://filesizejs.com/)** - File size formatting
- **[clsx](https://github.com/lukeed/clsx)** - Conditional class names
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Tailwind class merging

---

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **PostgreSQL** database
- **Cloudinary** account
- **Clerk** account for authentication

---

## 🚀 Quick Start

### 1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/cloudvid-pro.git
cd cloudvid-pro
```

### 2. **Install Dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. **Environment Setup**

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/cloudvidpro"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/home
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/home

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. **Database Setup**

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# (Optional) Open Prisma Studio
npx prisma studio
```

### 5. **Run Development Server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📖 Project Structure

```
cloudvid-pro/
├── app/                          # Next.js 14 App Router
│   ├── (app)/                   # Protected app routes
│   │   ├── layout.tsx           # App layout with sidebar
│   │   ├── home/                # Dashboard/home page
│   │   ├── video-upload/        # Video upload interface
│   │   ├── social-share/        # Social media creator
│   │   └── doc/                 # Documentation page
│   ├── (auth)/                  # Authentication routes
│   │   ├── sign-in/            # Sign in page
│   │   └── sign-up/            # Sign up page
│   ├── api/                     # API routes
│   │   ├── video-upload/        # Video processing endpoint
│   │   ├── image-upload/        # Image upload endpoint
│   │   └── videos/              # Video retrieval endpoint
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Landing page
├── components/                   # Reusable React components
│   └── VideoCard.tsx            # Video display component
├── lib/                         # Utility libraries
│   └── utils.ts                 # Helper functions
├── prisma/                      # Database schema and migrations
│   ├── schema.prisma            # Database schema
│   └── migrations/              # Migration files
├── types/                       # TypeScript type definitions
│   └── index.ts                 # Global types
├── public/                      # Static assets
├── middleware.ts                # Route protection middleware
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

---

## 🔄 API Endpoints

### **Video Management**

#### `POST /api/video-upload`

Upload and compress videos with AI optimization.

**Request:**

```typescript
FormData {
  file: File,           // Video file (max 70MB)
  title: string,        // Video title
  description?: string, // Optional description
  originalSize: string  // Original file size
}
```

**Response:**

```typescript
{
  id: string,
  title: string,
  description: string | null,
  publicId: string,
  originalSize: string,
  compressedSize: string,
  duration: number,
  createdAt: Date,
  updatedAt: Date
}
```

#### `GET /api/videos`

Retrieve all uploaded videos for the authenticated user.

**Response:**

```typescript
Video[] // Array of video objects
```

### **Image Processing**

#### `POST /api/image-upload`

Upload images for social media format optimization.

**Request:**

```typescript
FormData {
  file: File // Image file
}
```

**Response:**

```typescript
{
  publicId: string; // Cloudinary public ID
}
```

---

## 🎯 Core Features Explained

### **Video Compression Workflow**

1. **Upload**: Users select video files up to 70MB
2. **Validation**: File type and size validation
3. **Processing**: Cloudinary applies AI-powered compression
4. **Storage**: Compressed video stored with metadata in PostgreSQL
5. **Download**: Users can download optimized videos

### **Social Media Creator Workflow**

1. **Upload**: Users upload source images
2. **Format Selection**: Choose target social media platform
3. **AI Processing**: Cloudinary applies intelligent cropping and resizing
4. **Preview**: Real-time preview of formatted image
5. **Download**: Download platform-optimized image

### **Authentication Flow**

1. **Landing Page**: Public access to marketing content
2. **Sign Up/In**: Clerk handles secure authentication
3. **Protected Routes**: Middleware redirects unauthenticated users
4. **Session Management**: Persistent sessions with automatic refresh

---

## 🔧 Configuration Details

### **Database Schema**

The application uses a single `Video` model:

```prisma
model Video {
  id             String   @id @default(cuid())
  title          String
  description    String?
  publicId       String   // Cloudinary public ID
  originalSize   String   // Original file size
  compressedSize String   // Compressed file size
  duration       Float    // Video duration in seconds
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}
```

### **Cloudinary Configuration**

Videos are processed with:

- **Resource Type**: Video
- **Folder**: `video-uploads`
- **Quality**: Auto optimization
- **Format**: MP4 conversion

Images are processed with:

- **Folder**: `next-cloudinary-uploads`
- **Transformations**: Platform-specific cropping and resizing

### **Tailwind & DaisyUI Setup**

- **Dark Mode**: Forced dark theme
- **Custom Colors**: CSS custom properties for consistent theming
- **Responsive Design**: Mobile-first approach
- **Components**: DaisyUI for pre-built components

---

## 🚦 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbo

# Production
npm run build        # Build for production
npm start           # Start production server

# Database
npx prisma generate # Generate Prisma client
npx prisma db push  # Push schema to database
npx prisma studio   # Open database browser

# Code Quality
npm run lint        # Run ESLint
```

---

## 📱 Pages & Features

### **🏠 Landing Page (`/`)**

- Hero section with compelling value proposition
- Feature showcase with icons and descriptions
- Statistics section highlighting benefits
- Call-to-action buttons for sign-up and video upload
- Professional footer with branding

### **🎬 Dashboard (`/home`)**

- Video gallery with grid layout
- Upload statistics and compression information
- Search and filtering capabilities
- Real-time video previews on hover
- Download functionality for optimized videos

### **📤 Video Upload (`/video-upload`)**

- Drag-and-drop file upload interface
- Real-time file validation and size checking
- Progress indicators during upload
- Form fields for title and description
- File format and size information display

### **📱 Social Creator (`/social-share`)**

- Image upload with preview
- Platform format selection dropdown
- Real-time image transformation preview
- Download optimized images
- Format specifications display

### **📚 Documentation (`/doc`)**

- Comprehensive feature explanations
- Getting started guide
- Best practices and tips
- Platform format specifications
- Troubleshooting and support information

---

## 🎨 Design System

### **Color Palette**

- **Primary**: Blue gradient (`#3B82F6` to `#8B5CF6`)
- **Secondary**: Purple accent (`#8B5CF6`)
- **Background**: Dark gradients (`#111827` to `#000000`)
- **Text**: High contrast whites and grays
- **Accents**: Green, Yellow, Red for status indicators

### **Typography**

- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable text with proper contrast
- **UI Elements**: Medium weight for buttons and labels

### **Components**

- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean inputs with proper validation states
- **Navigation**: Sidebar with active state indicators
- **Modals**: Backdrop blur with slide animations

---

## 🔐 Security Features

### **Authentication**

- **Clerk Integration**: Industry-standard OAuth and email authentication
- **Session Management**: Secure JWT tokens with automatic refresh
- **Password Security**: Bcrypt hashing and secure storage
- **Social Login**: Support for Google, GitHub, and other providers

### **API Security**

- **Route Protection**: Middleware-based authentication checks
- **CORS Configuration**: Proper cross-origin request handling
- **Input Validation**: Server-side validation for all endpoints
- **Error Handling**: Sanitized error messages without sensitive data

### **File Upload Security**

- **File Type Validation**: Strict MIME type checking
- **Size Limitations**: 70MB maximum file size
- **Virus Scanning**: Cloudinary's built-in security scanning
- **Content Moderation**: Automatic content analysis

---

## 🚀 Deployment

### **Vercel (Recommended)**

1. **Connect Repository**:

   - Import project to Vercel
   - Connect GitHub repository

2. **Environment Variables**:

   - Add all `.env.local` variables to Vercel
   - Configure production database URL

3. **Build Settings**:
   ```bash
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

### **Database Deployment**

1. **PostgreSQL Options**:

   - **Vercel Postgres**: Integrated solution
   - **Supabase**: Free tier available
   - **Railway**: Simple deployment
   - **PlanetScale**: Serverless MySQL alternative

2. **Migration**:
   ```bash
   npx prisma db push
   npx prisma generate
   ```

---

## 🐛 Troubleshooting

### **Common Issues**

#### **Database Connection**

```bash
# Check connection
npx prisma db push

# Reset database
npx prisma migrate reset
```

#### **Cloudinary Setup**

- Verify environment variables
- Check API key permissions
- Ensure upload presets are configured

#### **Authentication Issues**

- Verify Clerk webhook URLs
- Check environment variable spelling
- Ensure domain configuration in Clerk dashboard

#### **Build Errors**

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the Repository**
2. **Create Feature Branch**: `git checkout -b feature/amazing-feature`
3. **Commit Changes**: `git commit -m 'Add amazing feature'`
4. **Push to Branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### **Development Guidelines**

- **Code Style**: Follow ESLint configuration
- **Commit Messages**: Use conventional commit format
- **Testing**: Add tests for new features
- **Documentation**: Update README for new features

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 💬 Support

### **Documentation**

- **In-App Help**: `/doc` page with comprehensive guides
- **API Reference**: Detailed endpoint documentation
- **Video Tutorials**: Step-by-step usage guides

### **Community**

- **GitHub Issues**: Bug reports and feature requests
- **Discussions**: Community help and questions
- **Discord**: Real-time community support

### **Professional Support**

- **Email**: support@cloudvidpro.com
- **Priority Support**: Available for enterprise users
- **Custom Development**: Tailored solutions available

---

## 🏆 Acknowledgments

- **Next.js Team**: For the amazing React framework
- **Cloudinary**: For powerful media processing APIs
- **Clerk**: For seamless authentication solutions
- **Tailwind CSS**: For the utility-first CSS framework
- **Prisma**: For the modern database toolkit
- **Vercel**: For excellent deployment platform

---

## 📊 Project Stats

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + DaisyUI
- **Database**: PostgreSQL with Prisma
- **Authentication**: Clerk
- **Media Processing**: Cloudinary
- **Deployment**: Vercel-ready

---

**Built with ❤️ by the CloudVid Pro Team**

_Transform your videos effortlessly with AI-powered compression and social media optimization._
