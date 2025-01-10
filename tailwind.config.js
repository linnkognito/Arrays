module.exports = {
  corePlugins: {
    preflight: false, // Disables reset styles
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
    },
  },
  plugins: [],
};
