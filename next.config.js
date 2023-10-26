module.exports = {
   async rewrites() {
      return {
         fallback: [
            {
               source: '/:path*',
               destination: '/src/app/middleware/:path*', // Adjusted to point to your middleware.tsx file
            },
         ],
      };
   },
};
