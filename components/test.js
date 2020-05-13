import img from './ImgNeu/unoptimizedImages/james-eades-fsmIXtNvmog-unsplash.jpg?sizeof';

export default function() {
    console.log("exif",img)
    return (
        <figure>
        <figcaption>{JSON.stringify(img)}</figcaption>
        </figure>
    );
}