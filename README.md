# LocalServices1 - Professional Electrician Services in Austin, TX

![App Preview](https://imgix.cosmicjs.com/48a58b30-7971-11f1-a959-df6e945f2fa2-autopilot-photo-1544005313-94ddf0286df2-1783366288153.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive company website for a professional electrical services company based in Austin, Texas. Built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com), this application showcases services, team members, case studies, and client testimonials with a polished, conversion-focused design.

## Features

- ⚡ **Services Showcase** — Full catalog of electrical services with icons, descriptions, and starting prices
- 👷 **Team Members** — Meet the licensed electricians with photos, bios, experience, and certifications
- 📋 **Case Studies** — Detailed project portfolio with image galleries and related services
- ⭐ **Client Testimonials** — Star-rated reviews from satisfied Austin customers
- 📱 **Fully Responsive** — Beautiful on mobile, tablet, and desktop
- 🎨 **Modern UI** — Clean, professional design with smooth transitions and thoughtful typography
- 🚀 **Fast & SEO-Friendly** — Server-rendered pages with optimized images via imgix

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a4c021b67f2f6a3f8050239&clone_repository=6a4c036067f2f6a3f805028a)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
>
> User instructions: A company website with services, team members, case studies, and testimonials for an electrician in Austin Texas"

### Code Generation Prompt

> Build a Next.js application for a company website called "LocalServices1". The content is managed in Cosmic CMS with the following object types: services, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type. A company website with services, team members, case studies, and testimonials for an electrician in Austin Texas

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** — App Router, Server Components
- **React 19** — Latest React features
- **TypeScript** — Strict type safety
- **Tailwind CSS** — Utility-first styling
- **Cosmic** — Headless CMS for content management
- **imgix** — Image optimization

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with your bucket set up

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up environment variables (these are provided automatically when cloning via Cosmic):

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single case study with related service
const { object: caseStudy } = await cosmic.objects
  .findOne({ type: 'case-studies', slug: 'my-project' })
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with your Cosmic bucket using the following object types:

- **services** — `service_name`, `icon`, `short_description`, `full_description`, `featured_image`, `starting_price`
- **team-members** — `name`, `role`, `photo`, `bio`, `years_experience`, `certifications`
- **case-studies** — `project_title`, `summary`, `full_description`, `location`, `gallery`, `related_service`
- **testimonials** — `client_name`, `location`, `rating`, `quote`, `related_service`

All content is fetched server-side using the [Cosmic SDK](https://www.cosmicjs.com/docs) with the `depth` parameter to resolve connected objects. See the [Cosmic docs](https://www.cosmicjs.com/docs) for more details.

## Deployment Options

### Vercel (Recommended)

1. Push your code to a Git repository
2. Import the project in [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to a Git repository
2. Import the project in [Netlify](https://netlify.com)
3. Add your environment variables
4. Deploy!

For production, set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your hosting platform's environment variable settings.
<!-- README_END -->