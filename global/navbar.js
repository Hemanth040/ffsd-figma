// Navbar Component - Injectable navigation bar
const Navbar = {
  currentPage: '',
  
  // Default navigation items
  items: [
    { name: 'Dashboard', path: '../farmer-dashboard/index.html', icon: 'home' },
    { name: 'Workers', path: '../worker-management-farmer/index.html', icon: 'users' },
    { name: 'Crops', path: '../crop-planning/index.html', icon: 'leaf' },
    { name: 'Guides', path: '../disease-guide/index.html', icon: 'book' },
    { name: 'Wages', path: '../farmer-wages-management/index.html', icon: 'rupee' },
    { name: 'Issues', path: '../farmer-issue-dashboard/index.html', icon: 'alert' }
  ],
  
  // Icons SVG strings
  icons: {
    home: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    users: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    leaf: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    book: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    rupee: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    alert: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    menu: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    close: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
  },
  
  // Generate navbar HTML
  render: function(userName = 'Farmer', userInitial = 'F') {
    const menuItems = this.items.map(item => `
      <a href="${item.path}" class="navbar-link ${this.currentPage === item.name ? 'active' : ''}">
        ${this.icons[item.icon]}
        <span>${item.name}</span>
      </a>
    `).join('');
    
    return `
      <nav class="navbar">
        <div class="navbar-container">
          <div class="navbar-brand">
            <svg width="40" height="40" viewBox="0 0 56 56" fill="none">
              <rect width="56" height="56" rx="10" fill="#DCFCE7"/>
              <path d="M28 12L12 22l16 10 16-10-16-10zM12 34l16 10 16-10M12 28l16 10 16-10" stroke="#008236" stroke-width="2.67" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="brand-text">FarmOps</span>
            <button class="navbar-toggle" id="navbarToggle">
              ${this.icons.menu}
            </button>
          </div>
          <div class="navbar-menu" id="navbarMenu">
            ${menuItems}
          </div>
          <div class="navbar-user">
            <div class="user-avatar" title="${userName}">${userInitial}</div>
          </div>
        </div>
      </nav>
      <script>
        // Mobile menu toggle
        document.getElementById('navbarToggle')?.addEventListener('click', function() {
          document.getElementById('navbarMenu')?.classList.toggle('active');
          this.innerHTML = document.getElementById('navbarMenu')?.classList.contains('active') 
            ? '${this.icons.close}' 
            : '${this.icons.menu}';
        });
      </script>
    `;
  },
  
  // Set current page for active state
  setActivePage: function(pageName) {
    this.currentPage = pageName;
  },
  
  // Inject navbar into a container
  mount: function(containerSelector, userName, userInitial) {
    const container = document.querySelector(containerSelector);
    if (container) {
      container.innerHTML = this.render(userName, userInitial);
    }
  }
};

// Export for use in other scripts
window.Navbar = Navbar;

// Auto-inject if data attribute is present
document.addEventListener('DOMContentLoaded', function() {
  const navbarContainer = document.querySelector('[data-navbar]');
  if (navbarContainer) {
    const userName = navbarContainer.dataset.userName || 'Farmer';
    const userInitial = navbarContainer.dataset.userInitial || 'F';
    const activePage = navbarContainer.dataset.activePage || '';
    
    if (activePage) {
      Navbar.setActivePage(activePage);
    }
    
    Navbar.mount('[data-navbar]', userName, userInitial);
  }
});