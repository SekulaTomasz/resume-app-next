import { useEffect, useState } from "react";
import gsap from "gsap";

const useAnimatedMainSvg = (wrapper) => {

    const [timeline] = useState(gsap.timeline({
        defaults: { ease: "power3.inOut"},
    }).timeScale(0.3));
    const [hiddenPolygon, setPolygon] = useState(null);

    const getRandomPolygon = () => {
        const [ trianglesSvg ] = wrapper.current.children;
        const polygons = trianglesSvg.querySelectorAll('.polygon');
        const index = Math.floor(Math.random() * ((polygons.length-1) - 0));
        if(polygons[index] === hiddenPolygon) return getRandomPolygon();
        return polygons[index];
    }

    const onTimelineEnded = (polygon) => setPolygon(polygon);

    useEffect(() => {
        const [ trianglesSvg ] = wrapper.current.children;
        const polygons = trianglesSvg.querySelectorAll('.polygon');
        gsap.set([polygons], { opacity: 1 });

        const polygon = getRandomPolygon();  
        timeline.to([polygon], {
            opacity:0,
            duration: .4,
            onComplete: () => onTimelineEnded(polygon)
        });
        return () => {
            timeline.kill();
        } 
    },[]);

    useEffect(() => {
        if(!hiddenPolygon) return;
        const polygon = getRandomPolygon();
        timeline.to([polygon], {
            opacity:0,
            duration: .4
        }).to([hiddenPolygon], {
            opacity:1,
            duration: .4,
            onComplete: () => onTimelineEnded(polygon)
        })
    },[hiddenPolygon]);

}

export default useAnimatedMainSvg;