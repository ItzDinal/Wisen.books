const books = [
  {
    id: 'b1',
    slug: 'the-silent-village',
    title: 'The Silent Village',
    author: 'John Imbock',
    originalPrice: 21.99,
    price: 14.99,
    image: '/images/the_silent_village.jpg',
    condition: 'Like New',
    stock: 12,
    description: 'A moody literary mystery with atmospheric storytelling.',
    details: 'Paperback, 320 pages, English',
    shipping: 'Ships within 1-2 business days'
  },
  {
    id: 'b2',
    slug: 'our-family-mystery',
    title: 'Our Family Mystery',
    author: 'Jason Peterson',
    originalPrice: 19.5,
    price: 12.9,
    image: '/images/family_mystery.jpg',
    condition: 'Very Good',
    stock: 9,
    description: 'A heartfelt journey through memory and truth.',
    details: 'Paperback, 280 pages, English',
    shipping: 'Ships within 1-2 business days'
  },
  {
    id: 'b3',
    slug: 'secrets-of-the-yellow-girl',
    title: 'Secrets of the Yellow Girl',
    author: 'Ernest Hemingway',
    originalPrice: 18.75,
    price: 11.4,
    image: '/images/family_mystery.jpg',
    condition: 'Good',
    stock: 6,
    description: 'Poetic and deeply human short fiction collection.',
    details: 'Hardcover, 240 pages, English',
    shipping: 'Ships within 2-3 business days'
  },
  {
    id: 'b4',
    slug: 'kaleidoscope-chronicles',
    title: 'Kaleidoscope Chronicles',
    author: 'Michael Crichton',
    originalPrice: 26.3,
    price: 16.2,
    image: '/images/the_silent_village.jpg',
    condition: 'Like New',
    stock: 4,
    description: 'Fast-paced speculative fiction with cinematic twists.',
    details: 'Paperback, 360 pages, English',
    shipping: 'Ships within 1-2 business days'
  },
  {
    id: 'b5',
    slug: 'after',
    title: 'After',
    author: 'Anna Todd',
    originalPrice: 24.99, // old price (for strike-through)
    price: 15.99,         // sale price
    image: '/images/After.jpg',
    featured: true,
    condition: 'Like New',
    stock: 10,
    description: 'A contemporary romance novel.',
    details: 'Paperback, 400 pages, English',
    shipping: 'Ships within 1-2 business days'
  }
];

const categories = [
  { id: 'c1', name: 'Fiction' },
  { id: 'c2', name: 'Business' },
  { id: 'c3', name: 'Biography' },
  { id: 'c4', name: 'Science' }
];

module.exports = { books, categories };
