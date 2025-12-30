# Ecommerce Clothing App

A production-ready ecommerce application built for **clothing and apparel selling**, covering the complete customer journey and full operational control via an admin panel.

This system reflects real-world ecommerce workflows: catalog, variants, cart, payments, shipping, orders, and post-purchase management.

---

## Overview

The application consists of two major parts:

- **Client (Customer-facing store)**
- **Admin Panel (Back-office operations)**

Both are independently structured but tightly integrated.

---

## Client Features (Customer Flow)

### 1. Product Discovery

- Product listing page (PLP)
- Category-wise browsing (Men, Women, T-Shirts, etc.)
- Attribute-based filtering:
  - Size
  - Color
  - Price range
  - Availability
- Sorting:
  - Price (Low → High, High → Low)
  - New arrivals

### 2. Product Details

- Detailed product page (PDP)
- Multiple product images
- Variant selection (size, color)
- Real-time stock validation

### 3. Cart

- Add / remove items
- Quantity management
- Variant-aware cart handling
- Dynamic price calculation

### 4. Wishlist

- Save products for later
- Move items from wishlist to cart

### 5. Checkout

- Address selection or new address creation
- Order summary
- **Online payment integration using Razorpay**
- Secure order placement

### 6. User Profile

- Profile management
- Saved addresses
- Order history
- View order details
- Order status tracking:
  - Placed
  - Processing
  - Shipped
  - Delivered
  - Cancelled

### 7. Reviews & Ratings

- Customers can submit product reviews
- Star-based rating system
- Reviews visible on product pages

---

## Admin Panel Features

### 1. Product Management

- Add / edit / delete products
- Upload and manage multiple images
- Product variants (size, color)
- Inventory and stock control
- Activate / deactivate products

### 2. Category Management

- Create and manage categories
- Sub-category support
- Category-based product mapping

### 3. Attribute Management

- Manage attributes such as:
  - Sizes
  - Colors
  - Fabric / material
- Attribute assignment to products

### 4. Order Management

- View all customer orders
- Detailed order view
- Update order status
- Customer address and contact management

### 5. Courier & Shipping Integration

- Integrated courier services:
  - Delhivery
  - Bigship
  - Shiprocket
- Shipment creation and management
- Admin-controlled shipping workflow

### 6. Admin Order Placement

- Orders can be shipped directly using integrated courier services

---

## Target Use Case

- Clothing brands
- Apparel retailers
- D2C fashion startups
- Small to medium ecommerce businesses

---

## Core System Design

- Category-driven product architecture
- Variant-based inventory management
- Real-world cart and checkout logic
- Integrated payment and shipping workflow
- Clear separation between client and admin responsibilities

---

## Project Structure (High Level)

> /client → Customer-facing ecommerce application

> /admin → Admin dashboard and management system

---

## Future Enhancements

- Real-time order tracking (architecture in place, needs refinement)
- Role-Based Access Control (RBAC) for admin users
- Analytics dashboard (sales, users, orders, revenue)

---

## License

This project is proprietary. Unauthorized use, modification, redistribution, or commercial usage is not permitted without explicit permission.
