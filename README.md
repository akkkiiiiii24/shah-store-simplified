
# Shah Kirana - Local Grocery Store Web Application

This is a fully functional web application for Shah Kirana, a local grocery store. It includes both a customer-facing storefront and an admin dashboard for store management.

## Features

### Customer-Facing Features
- **Homepage**: Store information, working hours, featured products
- **Product Catalog**: Browse products by category with search and filter functionality
- **Shopping Cart**: Add/remove products, manage quantities, see the cart total
- **Contact Page**: Store location, contact form, business hours

### Admin Features
- **Admin Dashboard**: Secure login for store management
- **Product Management**: Add, edit, and delete products
- **Order Management**: View and manage customer orders (placeholder)

### Multilingual Support
- Language toggle between English and Hindi

## Tech Stack
- **Frontend**: React, TailwindCSS, shadcn/ui components
- **State Management**: React Context API for cart and language
- **Routing**: React Router
- **UI/UX**: Responsive design for all screen sizes
- **Backend**: Ready for Supabase integration

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
```sh
git clone https://github.com/your-username/shah-kirana.git
cd shah-kirana
```

2. Install dependencies
```sh
npm install
```

3. Start the development server
```sh
npm run dev
```

4. Open your browser and visit `http://localhost:8080`

## Supabase Integration

To fully implement backend functionality:
1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Set up the following tables:
   - `products` - for store inventory
   - `categories` - for product categories
   - `orders` - for customer orders
   - `order_items` - for items within each order
4. Configure authentication for admin access
5. Update API connection details in the application

## Deployment

This application is ready to deploy with Vercel:

1. Push the code to a GitHub repository
2. Connect the repository to Vercel
3. Configure environment variables for Supabase
4. Deploy!

## Future Enhancements

- Customer accounts and order history
- Online payment integration
- Real-time inventory updates
- AI-powered chatbot for product recommendations
- Delivery scheduling and tracking

## License

This project is licensed under the MIT License - see the LICENSE file for details.
