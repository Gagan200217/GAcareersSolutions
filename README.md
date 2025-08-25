# GACareerSolutions - Connecting Talent with Opportunities

A modern, responsive web application for connecting job seekers with career opportunities in Karnataka, featuring both government and private sector job listings with daily updates and WhatsApp integration.

## 🚀 Features

- **Modern Responsive Design**: Beautiful, mobile-first design with smooth animations
- **Job Categories**: Separate sections for Government and Private sector jobs
- **Daily Job Updates**: Fresh job listings updated regularly
- **WhatsApp Integration**: Direct communication with career consultants
- **Instagram Integration**: Follow for latest updates and career tips
- **Advanced Search & Filtering**: Find jobs by title, company, location, and type
- **Detailed Job Cards**: Comprehensive job information with requirements and deadlines
- **Professional UI**: Clean, modern interface with excellent user experience

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: Hot Module Replacement (HMR)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js)
- **VS Code** (recommended editor)
- **Git** (for version control)

## 🔧 Installation & Setup

### Step 1: Clone the Repository
```bash
git clone <your-repository-url>
cd gacareersolutions
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🎯 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
gacareersolutions/
├── public/
│   └── assets/
│       └── logo.png          # Company logo
├── src/
│   ├── assets/
│   │   └── X.png            # Logo image
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles with Tailwind
│   └── vite-env.d.ts        # Vite type definitions
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🎨 VS Code Setup & Extensions

### Recommended VS Code Extensions:

1. **ES7+ React/Redux/React-Native snippets**
   - Extension ID: `dsznajder.es7-react-js-snippets`
   - Provides useful React snippets

2. **Tailwind CSS IntelliSense**
   - Extension ID: `bradlc.vscode-tailwindcss`
   - Auto-completion for Tailwind classes

3. **TypeScript Importer**
   - Extension ID: `pmneo.tsimporter`
   - Auto import for TypeScript

4. **Prettier - Code formatter**
   - Extension ID: `esbenp.prettier-vscode`
   - Code formatting

5. **Auto Rename Tag**
   - Extension ID: `formulahendry.auto-rename-tag`
   - Automatically rename paired HTML/JSX tags

### VS Code Settings (Optional)

Create `.vscode/settings.json` in your project root:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "tailwindCSS.experimental.classRegex": [
    "className\\s*=\\s*[\"']([^\"']*)[\"']"
  ]
}
```

## 🚀 Running the Project in VS Code

### Method 1: Using VS Code Terminal
1. Open VS Code
2. Open the project folder (`File > Open Folder`)
3. Open terminal (`Terminal > New Terminal` or `Ctrl+` `)
4. Run: `npm install` (first time only)
5. Run: `npm run dev`
6. Click on the localhost link or open `http://localhost:5173`

### Method 2: Using VS Code Tasks
1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
2. Type "Tasks: Run Task"
3. Select "npm: dev"

### Method 3: Using Run and Debug
1. Go to Run and Debug panel (`Ctrl+Shift+D`)
2. Click "create a launch.json file"
3. Select "Node.js"
4. Use the terminal to run `npm run dev`

## 📱 Features Overview

### Home Page
- Hero section with call-to-action
- Job categories (Government & Private)
- Statistics section
- Professional design with gradients

### Job Updates Page
- Search functionality
- Filter by job type (All/Government/Private)
- Detailed job cards with:
  - Company information
  - Salary range
  - Experience requirements
  - Application deadlines
  - Direct WhatsApp application

### About Page
- Company mission and vision
- Service descriptions
- Why choose us section

### Contact Page
- Contact information
- Contact form
- WhatsApp integration
- Location details

## 🔗 Social Media Integration

- **WhatsApp**: Direct communication for job applications
- **Instagram**: Follow for updates at [@gacareersolutions](https://www.instagram.com/gacareersolutions?utm_source=qr&igsh=ZjY3anpidWhteXp6)

## 📞 Contact Information

- **Phone**: +91 9481562119
- **WhatsApp**: Available for instant support
- **Instagram**: @gacareersolutions
- **Location**: Bengaluru, Karnataka

## 🎨 Customization

### Changing Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#059669',
        // Add your custom colors
      }
    }
  }
}
```

### Adding New Job Categories
Update the job type interface in `App.tsx`:

```typescript
type: 'government' | 'private' | 'your-new-category';
```

### Modifying WhatsApp Number
Update the phone number in the `handleWhatsAppClick` function:

```typescript
const phoneNumber = "your-whatsapp-number";
```

## 🐛 Troubleshooting

### Common Issues:

1. **Port already in use**
   ```bash
   # Kill process on port 5173
   npx kill-port 5173
   # Or use different port
   npm run dev -- --port 3000
   ```

2. **Module not found errors**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript errors**
   ```bash
   # Check TypeScript configuration
   npx tsc --noEmit
   ```

## 📈 Performance Tips

- Images are optimized and properly sized
- Lazy loading implemented for better performance
- Responsive design ensures fast mobile loading
- Minimal bundle size with tree-shaking

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The build files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 📄 License

This project is proprietary software for GACareerSolutions.

## 🤝 Contributing

For internal development only. Please follow the established coding standards and create pull requests for any changes.

---

**Made with ❤️ for job seekers in Karnataka**

For support, contact us via WhatsApp or follow us on Instagram @gacareersolutions