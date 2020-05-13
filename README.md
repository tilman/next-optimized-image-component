This React Image Loader Component is Designed for use with Next.js. It uses `next-optimized-images` to optimize and transform the images.
![React Image Loader Demo](demo.gif)
If you want to see it live: https://optimized-images-tilman1.triebwork.now.sh/


This Project is still WIP, but the following features are already working and functional:
* lqip image placeholder, blurred with SVG filter for best compatibility
* blur radius adapts automatically based on the image size. Because we can't determine displaed image size in SSR, it is animated to this radius from a default radius of 40px
* If the IntersectionObserver API is avaialabe, it only starts loading the image if it is near the viewport
* use all height/width combinations for the `Img` component and the component will take care about placing the lqip exactly over the image
* use webp as picture source by default with fallback for older browsers
* also supports a no javascript fallback

To use it, simply place your images in `components/Img/unoptimizedImages` and provide the Image name without file extension in `srcName` of the `Img` component.


TODO:
* support lqip-colors
* possibility to specify src sets