// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Image / file metafield shape
export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Services
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    icon?: string;
    short_description?: string;
    full_description?: string;
    featured_image?: CosmicImage;
    starting_price?: string;
  };
}

// Team Members
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    role?: string;
    photo?: CosmicImage;
    bio?: string;
    years_experience?: number;
    certifications?: string;
  };
}

// Case Studies
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_title?: string;
    summary?: string;
    full_description?: string;
    location?: string;
    gallery?: CosmicImage[];
    related_service?: Service;
  };
}

// Testimonials
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    location?: string;
    rating?: number;
    quote?: string;
    related_service?: Service;
  };
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

export function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type === 'case-studies';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}