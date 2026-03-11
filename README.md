# Interior Design Studio Website

A premium, bespoke interior design studio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The site features editorial design principles, sophisticated animations, and a carefully curated portfolio of interior design projects.

## Features

- **Premium Editorial Design**: Asymmetrical layouts, generous whitespace, and large immersive photography
- **Smooth Animations**: Subtle fade-in, zoom, and scroll effects using Framer Motion
- **Responsive Design**: Beautiful adaptations for desktop, tablet, and mobile
- **Project Portfolio**: Detailed project pages with before/after transformations
- **Dynamic Routing**: Project detail pages with next project navigation
- **Before/After Slider**: Interactive transformation slider for renovation projects
- **Optimized Images**: Next.js Image component with quality optimization
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Playfair Display (headings), Inter (body)
- **Package Manager**: npm

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with navigation & footer
│   ├── globals.css             # Global styles and Tailwind imports
│   ├── page.tsx                # Home page
│   ├── projects/
│   │   ├── page.tsx            # All projects page
│   │   └── [id]/
│   │       └── page.tsx        # Individual project detail page
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── studio/
│   │   └── page.tsx            # Studio/about page
│   └── contact/
│       └── page.tsx            # Contact form page
├── components/
│   ├── Navigation.tsx          # Header with navigation
│   ├── Footer.tsx              # Footer
│   ├── HeroSection.tsx         # Full-screen hero with CTA
│   ├── FeaturedProjects.tsx    # Editorial project showcase
│   ├── StudioIntroduction.tsx  # Two-column studio info
│   ├── BeforeAfterSlider.tsx   # Interactive transformation slider
│   ├── DesignProcess.tsx       # Multi-step process flow
│   ├── Services.tsx            # Services overview
│   ├── Testimonial.tsx         # Client testimonial
│   └── FinalCTA.tsx            # Final call-to-action
├── data/
│   └── projects.ts             # Project data and types
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
└── postcss.config.mjs          # PostCSS configuration

```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Pages

### Home (`/`)
- Full-screen hero with headline and CTA buttons
- Editorial project showcase
- Studio introduction with stats
- Before/after transformation slider
- Multi-step design process
- Services overview
- Client testimonial
- Final call-to-action

### Projects (`/projects`)
- Grid of all projects with images
- Project cards with title, location, and description
- Hover effects with image zoom

### Project Detail (`/projects/[id]`)
- Full-screen hero image
- Project information (location, year, category)
- Long description
- Image gallery with varied layout
- Before/after comparison slider
- Materials and finishes list
- Credits (architect, photographer, builder)
- Next project navigation

### Services (`/services`)
- Detailed service descriptions
- Service-specific points and offerings
- Call-to-action section

### Studio (`/studio`)
- About page with studio philosophy
- Process overview with four phases
- Contact information
- Studio hours and location

### Contact (`/contact`)
- Contact information section
- Contact form with project type selection
- Form submission handling (logs to console, ready for backend integration)

## Colors & Typography

### Color Palette

- **Background**: Cream (#FAFAF8)
- **Accent**: Beige (#E8E3D8)
- **Light Gray**: #D4D0C8
- **Neutral Gray**: #9B9792
- **Dark Gray/Text**: #2C2C2C

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## Design Principles

1. **Editorial & Refined**: Bespoke layouts that feel designed, not templated
2. **Asymmetrical**: Varied grid compositions and unique project showcase
3. **Whitespace**: Generous breathing room throughout
4. **Material Honesty**: Premium imagery and authentic design
5. **Calm & Confident**: Quiet, refined aesthetic without marketing clichés
6. **No Templates**: Every section is custom-designed to avoid generic layouts

## Animations

All animations are subtle and purposeful:

- **Fade-in**: Elements appear smoothly on scroll
- **Image Zoom**: Subtle scale on hover (1.05x)
- **Staggered Children**: Items appear sequentially
- **Scroll Indicators**: Animated scroll arrow on hero
- **Before/After**: Smooth slider interactions

## Customization

### Update Projects

Edit `data/projects.ts` to add or modify projects:

```typescript
{
  id: 'project-id',
  title: 'Project Title',
  location: 'Location, Country',
  year: 2024,
  category: 'residential',
  description: 'Short description',
  longDescription: 'Detailed description',
  images: ['image-url-1', 'image-url-2'],
  beforeImage: 'before-image-url',
  afterImage: 'after-image-url',
  materials: ['Material 1', 'Material 2'],
  credits: {
    architect: 'Name',
    photographer: 'Name',
    builder: 'Name',
  },
}
```

### Update Branding

- Modify the logo text in `Navigation.tsx`
- Update contact information in the footer (`Footer.tsx`) and contact page (`app/contact/page.tsx`)
- Change the studio name throughout the site
- Update colors in `tailwind.config.ts`

### Add Custom Fonts

Fonts are already imported from Google Fonts in `app/globals.css`. To change:

1. Update the `@import` URL in `app/globals.css`
2. Update font names in `tailwind.config.ts`

## Building for Production

```bash
npm run build
npm start
```

## Deployment

The site is ready to deploy to Vercel, Netlify, or any Next.js-compatible hosting:

- **Vercel**: `vercel --prod`
- **Netlify**: Connect your repo and deploy
- **Docker**: Create a Dockerfile for containerized deployment

## Performance Optimizations

- Image optimization using Next.js Image component
- Code splitting and lazy loading
- CSS-in-JS optimization via Tailwind
- Smooth scroll for better UX
- Viewport-triggered animations to reduce repaints

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS 12+, Android 8+

## Future Enhancements

- Blog section for case studies
- Testimonials slider
- Image gallery with lightbox
- Case study downloads
- Integration with CMS (Sanity, Contentful, etc.)
- Backend form submission
- Analytics and SEO optimization
- Multi-language support

## License

This project is provided as-is for your interior design studio. Customize freely to match your brand.

## Support

For questions or issues, refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
