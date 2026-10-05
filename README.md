# Heartland General Trading LLC — Website

Official website for **Heartland General Trading Co LLC**, a premier importer and distributor of authentic Sri Lankan food products, groceries, and staples in Dubai and across the UAE.

Built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [AWS Setup for Contact Form](#aws-setup-for-contact-form)
  - [How It Works](#how-it-works)
  - [1. Amazon SES (Email Service)](#1-amazon-ses-email-service)
  - [2. AWS Lambda (Email Processor)](#2-aws-lambda-email-processor)
  - [3. Amazon API Gateway (Endpoint)](#3-amazon-api-gateway-endpoint)
  - [4. Connect API Gateway to Next.js](#4-connect-api-gateway-to-nextjs)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)

---

## 🌾 Overview

Heartland General Trading Co LLC specializes in importing authentic Sri Lankan food products to Dubai and distributing them across the United Arab Emirates. Products include premium Ceylon spices, traditional rice varieties, noodles, coconut items, teas, and everyday grocery essentials.

This web application includes:
- Company overview and import operations
- Product categories and item catalog
- Dynamic sitemap & SEO metadata
- Direct contact inquiry form integrated with AWS serverless services

---

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI & Styling:** React, Tailwind CSS, Framer Motion
- **Icons:** Lucide React, Iconify, React Icons
- **Backend / Integrations:** Next.js Route Handlers (`/api/contact`), Amazon API Gateway, AWS Lambda, Amazon SES

---

## 📦 Prerequisites

Before getting started, make sure you have:
- **Node.js**: `v18.18.0` or higher (LTS `v20.x` or `v22.x` recommended)
- **npm** (included with Node.js), **yarn**, or **pnpm**
- **Git**

---

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Buwendra/heart-land.git
   cd heart-land
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up local environment variables:**
   Create a `.env.local` file in the project root:
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

Configure these variables inside your `.env.local` file:

| Variable | Description | Required? |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Base canonical URL (e.g. `https://heartlandtrdng.com` or `http://localhost:3000`). Used for SEO, OpenGraph metadata, sitemaps, and robots.txt. | Yes |
| `AWS_API_GATEWAY_CONTACT_URL` | Full URL of your Amazon API Gateway endpoint (e.g. `https://xxxxxx.execute-api.us-east-1.amazonaws.com/prod/contact`). | Optional for local dev (Runs in mock mode if unset) |
| `AWS_API_GATEWAY_KEY` | Optional API Key header (`x-api-key`) if your API Gateway stage requires key verification. | Optional |

> 💡 **Development Note:** If `AWS_API_GATEWAY_CONTACT_URL` is empty or unset, the contact form automatically operates in mock mode, logging inquiry submissions to the local terminal without errors.

---

## ☁️ AWS Setup for Contact Form

When a visitor submits the contact form, the Next.js API route (`/api/contact`) forwards the submission to an Amazon API Gateway endpoint, which triggers an AWS Lambda function to send an email notification using Amazon SES.

### How It Works

```
Visitor submits form ──▶ Next.js (/api/contact) ──▶ Amazon API Gateway ──▶ AWS Lambda ──▶ Amazon SES ──▶ Inquiries Inbox
```

---

### 1. Amazon SES (Email Service)

1. Open the **Amazon SES** console in your desired AWS Region (e.g., `us-east-1` or `eu-west-1`).
2. Navigate to **Configuration → Identities** and click **Create identity**.
3. Create an identity for your domain (e.g., `heartlandtrdng.com`) or specific email address (e.g., `accounts@heartlandtrdng.com`).
4. Add the generated DKIM DNS records to your domain DNS provider (or click the email verification link if using an email identity).
5. If your SES account is currently in **Sandbox mode**, verify both the sender email and destination recipient mailbox. *(Request production access in SES to send emails to unverified recipients).*

---

### 2. AWS Lambda (Email Processor)

1. Open the **AWS Lambda** console and create a new function (e.g., `heartland-contact-handler`) using the **Node.js** runtime (20.x or 18.x).
2. **IAM Permissions:**
   - Attach a policy allowing SES sending permissions (`ses:SendEmail`, `ses:SendRawEmail`) to the function's execution role.
3. **Function Behavior:**
   - Parse the incoming request payload (`fullName`, `email`, `inquiryType`, `subject`, `message`).
   - Use the AWS SDK for SES (`@aws-sdk/client-ses`) to compose and send an email to your inquiries inbox (e.g., `accounts@heartlandtrdng.com`), setting the submitter's email as the `Reply-To` address.
4. **Environment Variables:**
   - In Lambda Configuration, add environment variables for the verified sender email and the target destination inbox.

---

### 3. Amazon API Gateway (Endpoint)

1. Open the **API Gateway** console and create an **HTTP API** (or **REST API**).
2. Create a route:
   - **Method:** `POST`
   - **Path:** `/contact`
3. Add an integration pointing to your Lambda function with **Lambda Proxy Integration** enabled.
4. *(Optional)* Configure an API Key requirement if you want to protect the endpoint.
5. Deploy the API to a stage (e.g., `prod`) and copy the **Invoke URL**.

---

### 4. Connect API Gateway to Next.js

1. Add your API Gateway Invoke URL to `.env.local` (and your production hosting environment settings):
   ```env
   AWS_API_GATEWAY_CONTACT_URL=https://<your-api-id>.execute-api.<region>.amazonaws.com/prod/contact
   AWS_API_GATEWAY_KEY=<your-api-key-if-enabled>
   ```
2. Restart the Next.js development server.
3. Submit a test message on the website contact page to verify email delivery.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server at `http://localhost:3000`. |
| `npm run build` | Compiles and optimizes the project for production. |
| `npm run start` | Starts the production server. |
| `npm run lint` | Runs ESLint to check for code issues. |

---

## 📁 Project Structure

```text
heart-land/
├── app/                          # Next.js App Router pages & routes
│   ├── api/contact/route.ts      # Contact form API route (forwards data to AWS)
│   ├── about/                    # About Us & Company Profile
│   ├── contact/                  # Contact page & inquiry form
│   ├── operations/               # Warehousing & logistics network
│   ├── products/                 # Sri Lankan food product categories & items
│   ├── resources/                # Compliance, QHSE, & quality standards
│   ├── terms/                    # Terms & Conditions
│   ├── layout.tsx                # Main application layout, header, & footer
│   ├── page.tsx                  # Home landing page
│   ├── robots.ts                 # Dynamic robots.txt
│   └── sitemap.ts                # Dynamic sitemap.xml
├── components/                   # Reusable UI components (Navbar, Footer, Cards, etc.)
├── contexts/                     # React state contexts
├── data/                         # Contact details and static content
├── public/                       # Images, icons, and static assets
├── .env.example                  # Environment variable reference template
├── package.json                  # Dependencies and build scripts
└── tailwind.config.js            # Tailwind CSS styling configuration
```

---

## 📄 License & Ownership

Copyright © 2026 Heartland General Trading Co LLC. All rights reserved.
