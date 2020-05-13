// import { string } from 'prop-types';
import { useRef, useEffect, useState } from 'react';
import styles from './index.module.scss';

//TODO: add srcset
const INIT_BLUR_RADIUS = 40;

const Img = ({srcName, alt, sizes, lqip, trace, height, width, blurRadius, abortAnimThreshold = 150}) => {
    if(typeof srcName !== 'string') throw new Error("provide the name of the image in srcName");

    let src, webp, srcset, placeholder, lqipColors, meta;
    const img_props = {alt, height, width};

    const [loaded, setLoaded] = useState('');
    const [loading, setLoading] = useState(false);
    const [initDate, setInitDate] = useState();
    const [blurRadiusState, setBlurRadiusState] = useState();

    const pictureRef = useRef();
    
    useEffect(()=>{
        if(blurRadius) setBlurRadiusState(blurRadius);
        setInitDate(Date.now());
    },[]);
    useEffect(()=>{
        if(pictureRef.current && !loading){
            if(window && window.IntersectionObserver){
                const intersectionHandler = (entries) => {
                    if(entries && entries.length === 1 && entries[0].isIntersecting){
                        // console.log("intersection",entries,entries[0],observer);
                        setLoading(true);
                        observer.unobserve(pictureRef.current);
                        observer.disconnect(pictureRef.current);
                    }
                };
                const observer = new IntersectionObserver(intersectionHandler, {
                    rootMargin: '60%',
                    threshold: 0
                });
                observer.observe(pictureRef.current);
                return ()=>{
                    if(observer){
                        observer.unobserve(pictureRef.current);
                        observer.disconnect(pictureRef.current);
                    }
                };
            } else { //Fallback always loading
                setLoading(true);
            }
        }
    },[pictureRef.current, loading]);
    useEffect(()=>{
        if(!blurRadius && pictureRef.current && !blurRadiusState){ // only set it once so we have no flicker
            const blurRadiusTmp = Math.ceil(Math.min(pictureRef.current.offsetWidth,pictureRef.current.offsetHeight) * 0.023);
            //fake animation of blur filter with javascript since svg SMIL animations are blocked/deffered by browser in the beginning of the page load
            const blurAnimStepSize = (INIT_BLUR_RADIUS-blurRadiusTmp)/4;
            setTimeout( () => {
                setBlurRadiusState(INIT_BLUR_RADIUS - (blurAnimStepSize*1));
                setTimeout( () => {
                    setBlurRadiusState(INIT_BLUR_RADIUS - (blurAnimStepSize*2));
                    setTimeout( () => {
                        setBlurRadiusState(INIT_BLUR_RADIUS - (blurAnimStepSize*3));
                        setTimeout( () => {
                            setBlurRadiusState(INIT_BLUR_RADIUS - (blurAnimStepSize*4));
                        },45);
                    },45);
                },45);
            },45);
            // setBlurRadiusState(blurRadiusTmp);
        }
    },[pictureRef.current, blurRadius, blurRadiusState]);

    meta = require('./unoptimizedImages/'+srcName+'.jpg?sizeof');
    src = require('./unoptimizedImages/'+srcName+'.jpg');
    webp = require('./unoptimizedImages/'+srcName+'.jpg?webp');
    // srcset = require('./unoptimizedImages/'+srcName+'.jpg?resize&sizes=100,200,300');
    // lqipColors = require('./unoptimizedImages/'+srcName+'.jpg?lqip-colors');

    if(lqip && !trace) {
        lqip = require('./unoptimizedImages/'+srcName+'.jpg?lqip');
        //if we not hat the picture ref blur more, as soon as we have it blur to percentage
        const blur = blurRadiusState ? blurRadiusState : INIT_BLUR_RADIUS;
        placeholder = (
        <svg key={blur+pictureRef} id="placeholder" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
                <filter id={"blur"+blur} x="0%" y="0%" width="100%" height="100%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={blur} />
                    <feComponentTransfer>
                        <feFuncA type="table" tableValues="1 1"/>   
                    </feComponentTransfer>
                </filter> 
            </defs>
            <image preserveAspectRatio="none" filter={"url(#blur"+blur+")"} xlinkHref={lqip} x="0" y="0" width="100%" height="100%"/>
        </svg>);
    } else if(trace){
        trace = require('./unoptimizedImages/'+srcName+'.jpg?trace').trace;
        placeholder = (<img id="placeholder" src={trace} {...img_props}/>);
    }

    const onload = () => {
        if(Date.now() - initDate < abortAnimThreshold){
            setLoaded('loadNoAnim');
            console.log("no anim");
        } else {
            setLoaded('loadWithAnim');
            console.log("with anim");
        }
    };

    const webp_source =  <source type="image/webp" srcSet={webp}/>
    const jpg_source =  <source type="image/jpeg" srcSet={src}/>
    // since this img tag controls all the sources, only this one will need an event listener
    const img_fallback =  <img className={styles.finalImg} onLoad={onload} src={src} alt={alt} />

    let style;
    if(height && width){
        style = {
            width,
            paddingTop: height,
        }
    } else if(String(width).indexOf('%')>0){ //width: 80%, no height
        style = {
            width,
            paddingTop: Number(width.replace('%','')) * (meta.height/meta.width) + '%',
        }
    } else if(width && Number(String(width).replace('px',''))){ //width: 123px or 123, no height
        style = {
            width,
            paddingTop: Number(width.replace('px',''))/(meta.width/meta.height),
        }
    } else if(String(height).indexOf('%')>0){ //height: 80%, no width
        style = {
            width: Number(height.replace('%','')) * (meta.width/meta.height) + '%',
            paddingTop: height
        }
    } else if(height && Number(String(height).replace('px',''))){ //height: 123px or 123, no width
        style = {
            width:  Number(height.replace('px','')) * (meta.width/meta.height),
            paddingTop: height,
        }
    } else { //if nothing was specified at all. Use width/height from metadata
        style = {
            width: meta.width,
            height: meta.height,
        }
    }

    return (
        <picture ref={pictureRef} className={styles.Img + (loaded ? ' '+styles[loaded] : '')} style={style} >

            { placeholder }

            { loading &&
                <>
                    { webp_source }
                    { jpg_source }
                    { img_fallback }
                 </>
            }

            <noscript>
                {/* no javascript fallback */}
                <img src={src} {...img_props}/>
                <style dangerouslySetInnerHTML={{__html:"#placeholder{display:none}"}}></style>
            </noscript>
        </picture>
    );
}

export default Img;
