# Farm Operations Platform

A multi-page agricultural management website built from Figma designs. Manage farmers, supervisors, workers, crops, and farm operations efficiently.

## 🏗️ Project Structure

```
frontend/
├── index.html              # Landing page (role selection)
├── common/                 # Shared assets
│   ├── global.css        # Global styles & CSS variables
│   └── navbar.js         # Reusable navigation component
├── farmer-login/          # Farmer login page
├── farmer-dashboard/      # Farmer dashboard
├── farmer-issue-dashboard/
├── farmer-wages-management/
├── supervisor-login/      # Supervisor login
├── supervisor-dashboard/  # Supervisor dashboard
├── worker-login/          # Worker login
├── worker-dashboard/      # Worker dashboard
├── worker-attendance/
├── worker-management-farmer/
├── worker-wages/
├── crop-planning/
├── disease-guide/
├── disease-leaf-rust/
├── fertilizers/
├── pesticides/
├── weeds-guide/
├── tasks-allotment/
├── warnings-alerts/
├── chat-with-farmer/
├── chat-with-supervisor/
└── register/
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
# Create a folder for your project
mkdir my-farm-project
cd my-farm-project

# Clone the repository
git clone https://github.com/Hemanth040/ffsd-figma.git .

# Or if you want to clone into a specific folder
git clone https://github.com/Hemanth040/ffsd-figma.git farm-platform
cd farm-platform
```

### 2. Open in Browser

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python (recommended)
python -m http.server 8000

# Then open http://localhost:8000

# Using PHP
php -S localhost:8000

# Using Node.js
npx serve
```

## 🔐 Login Pages

| Role | URL | Description |
|------|-----|-------------|
| Farmer | `/farmer-login/index.html` | Manage farm & workers |
| Supervisor | `/supervisor-login/index.html` | Oversee operations |
| Worker | `/worker-login/index.html` | View tasks & attendance |

**Test Login**: Enter any email/password to access dashboards

## 📁 Creating New Pages

Each page follows this structure:

```bash
# 1. Create folder
mkdir new-page

# 2. Create files
touch new-page/index.html
touch new-page/styles.css
touch new-page/script.js
```

### Template for index.html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="../common/global.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation Bar -->
    <div data-navbar data-user-name="User" data-user-initial="U" data-active-page="PageName"></div>
    <script src="../common/navbar.js"></script>
    
    <!-- Your Content Here -->
    
    <script src="script.js"></script>
</body>
</html>
```

## 🎨 Navigation Links

When linking between pages, use relative paths:

```html
<!-- From farmer-dashboard to crop-planning -->
<a href="../crop-planning/index.html">Manage Crops</a>

<!-- From crop-planning to farmer-dashboard -->
<a href="../farmer-dashboard/index.html">Back to Dashboard</a>
```

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Styling with CSS variables
- **JavaScript** - Interactivity and navigation
- **No frameworks** - Pure vanilla JS/CSS

## 📝 Adding CSS Styles

1. Use `common/global.css` for shared styles
2. Use page-specific `styles.css` for individual page styles

```css
/* In styles.css */
:root {
    --primary-color: #15803D;
    --secondary-color: #4B5563;
}

.card {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 14px;
}
```

## 🐛 Troubleshooting

### Links not working?
- Check that folder names match exactly (case-sensitive)
- Use `../` to go up one folder level

### Styles not loading?
- Verify CSS path: `../common/global.css` for nested pages
- Check browser console for errors

### Navigation not appearing?
- Ensure `data-navbar` attribute is present
- Check that `navbar.js` is properly linked

## 📄 License

This project is for educational purposes.

## 👤 Author

Created from Figma designs for Farm Operations Platform

---

**To update the repository:**
```bash
git add .
git commit -m "Your changes"
git push origin main
```