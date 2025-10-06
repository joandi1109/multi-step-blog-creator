# 📝 Multi-Step Blog Creator (Next.js + Material UI)

A simple and clean **multi-step blog post creation wizard** built with **Next.js 15**, **React**, and **Material UI**.  
Users can create a blog post step-by-step, review it, and see their posts appear instantly on the homepage — all stored locally (no backend required).

---

## 🚀 Features

### 🧩 Multi-Step Blog Form
- Step 1: Blog Metadata → Title & Author  
- Step 2: Blog Summary → Short intro & Category selection  
- Step 3: Blog Content → Full blog content  
- Step 4: Review & Submit → Preview before publishing  

Each step includes validation and can be navigated using **Next** and **Back** buttons.

---

### 🗂️ Blog Management
- Posts are stored locally using `Context` + `localStorage`
- New posts appear automatically on the homepage after submission
- SweetAlert2 feedback after successful post creation
- Click a blog card to view the full post on its own page

---

## 🧠 Tech Stack
- **Next.js 15 (App Router)**
- **React 18**
- **Material UI (MUI v5)**
- **SweetAlert2**
- **Context API + LocalStorage**
- **Tailwind Base Layer** (for global styling reset)

---

## 🧭 How It Works
1. Go to **Create New Post**
2. Fill each step of the form  
3. Review your post before submitting  
4. Click **Submit** → SweetAlert success message appears  
5. Post appears on homepage instantly 🎉  

---

## 🧑‍💻 Run Locally
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/multi-step-blog-creator.git

# Navigate into project folder
cd multi-step-blog-creator

# Install dependencies
npm install

# Run development server
npm run dev
