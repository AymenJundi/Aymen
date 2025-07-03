// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Add your custom color palette here
      colors: {
        // Base Backgrounds
        'dashboard-bg-light': '#FFFFFF',          // Pure white for sidebar, topbar
        'dashboard-bg-off-white': '#F8F9FA',      // A very subtle off-white for main content background
        
        // Primary Blue (for hero backgrounds, main buttons, strong accents)
        'dashboard-blue-primary': '#3082F0',      // A vibrant, clear blue
        'dashboard-blue-dark': '#1B4FD9',         // A slightly deeper blue for gradients or darker accents

        // Text Colors
        'dashboard-text-dark': '#333333',         // Dark grey for primary text on light backgrounds
        'dashboard-text-secondary': '#888888',    // Lighter grey for secondary text, labels, subtle details
        'dashboard-text-light': '#FFFFFF',        // White for text on blue backgrounds

        // Accent Colors (for highlights, active states, icons)
        'dashboard-accent-blue': '#00BFFF',       // Your existing vibrant blue (Deep Sky Blue) still fits well!
        'dashboard-accent-green': '#28a745',      // Example green for success/positive (optional)
        'dashboard-accent-red': '#dc3545',        // Example red for alerts/negative (optional)
      },
      
      // Your existing animations and keyframes
      animation: {
        'spin-slow': 'spin 20s linear infinite, scale 5s infinite alternate',
      },
      keyframes: {
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}