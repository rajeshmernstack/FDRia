import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Jack & Jones Paul Flake AKM 543 Pants',
      slug: 'Jack-&-Jones Paul-Flake-AKM-543-Pants',
      category: 'Pants',
      image: '/images/p1.jpg',
      price: 60,
      countInStock: 10,
      brand: 'Ksubi',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shorts',
    },

    {
      name: 'Levi´s® 511™ Slim Jeans',
      slug: 'Levi´s®-511™-Slim-Jeans',
      category: 'Pants',
      image: '/images/p2.jpg',
      price: 179,
      countInStock: 0,
      brand: '9Incher',
      rating: 4.2,
      numReviews: 15,
      description: 'high quality shorts',
    },
    {
      name: 'adidas originals Trefoil Fleece',
      slug: ' adidas-originals-Trefoil-Fleece',
      category: 'Hoodie',
      image: '/images/p3.jpg',
      price: 89,
      countInStock: 20,
      brand: 'Garden City',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: ' Nike Sportswear Club Hoodie',
      slug: ' Nike-Sportswear-Club-Hoodie',
      category: 'Hoodie',
      image: '/images/p4.jpg',
      price: 89,
      countInStock: 12,
      brand: 'Garden City',
      rating: 4.7,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};

export default data;
