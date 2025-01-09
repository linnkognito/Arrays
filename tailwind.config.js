module.exports = {
  corePlugins: {
    preflight: false, // Disables Tailwind's reset styles
    outline: false,
  },
  content: ['./src/**/*.{js,jsx,ts,tsx,html,css}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        offwhite: '#ffffe4',
        teal: '#44838f',
        midnight: '#2a555e',
        'op-teal': 'rgba(104, 208, 189, 0.5)',
        'xtra-op-teal': 'rgba(104, 208, 189, 0.3)',
        cyan: '#68d0bd',
        pool: '#66d9ef',
        orange: '#ed5d40',
        'op-orange': 'rgba(237, 93, 64, 0.7)',
        'xtra-op-orange': 'rgba(237, 93, 64, 0.5)',
        rust: '#891c29',
        steel: '#2d2d2d',
      },

      borderRadius: {
        DEFAULT: '1em',
      },
      borderWidth: {
        3: '3px',
      },
      boxShadow: {
        primary: '6px 6px 0 #68d0bd',
        button: '2px 2px 0 #891c29',
        'button-hover': '3px 4px 0 #891c29',
        'button-nav': '2px 2px 0 #66d9ef',
        'button-nav-hover': '3px 4px 0 #66d9ef',
      },
      width: {
        700: '700px',
      },
    },
  },
  plugins: [],
};
