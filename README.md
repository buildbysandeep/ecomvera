# Ecomvera

Ecomvera is a full-stack ecommerce platform for clothing and apparel, built with Next.js for both the customer storefront and the admin dashboard. The project covers the complete online shopping workflow, including product browsing, cart management, checkout, payments, order tracking, and administrative operations.

---

## Project Overview

This repository contains two main apps:

- Client app: customer-facing storefront
- Admin app: back-office management panel

Both apps are connected and designed to work together as a complete commerce solution.

---

## Key Features

### Customer Storefront

- Product listing and category-based browsing
- Product detail pages with image galleries and variants
- Cart and wishlist functionality
- Address management and checkout flow
- Online payments via Razorpay
- User profile and order history
- Product reviews and ratings

### Admin Panel

- Product management (create, edit, delete)
- Category and sub-category management
- Attribute management for sizes, colors, and other product properties
- Order management and status updates
- Shipping and courier integration
- Inventory and product visibility control

---

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Prisma + MongoDB
- Zustand for state management
- Razorpay and PayU integration
- TypeScript

---

## Project Structure

- /client → Customer-facing ecommerce application
- /admin → Admin dashboard and management system
- /prisma → Prisma schema and database setup

---

## Admin Panel Demo

Live admin panel: https://ecomvera-admin.vercel.app

Dummy admin credentials:

- Username: ecomvera
- Password: G2uado3zg

---

## Local Development

### Client app

```bash
cd client
pnpm install
pnpm dev
```

### Admin app

```bash
cd admin
pnpm install
pnpm dev
```

---

## License

This project is proprietary. Unauthorized use, modification, redistribution, or commercial usage is not permitted without explicit permission.
