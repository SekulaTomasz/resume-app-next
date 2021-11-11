import { useEffect, useState } from "react";
import { gsap } from "gsap";

const sequence = {
  first: "seqFirst",
  second: "seqSecond",
  third: "seqThird",
  fourth: "seqFourth",
  lauchRocketToTheMoon: "toTheMoon",
};

const useAnimatedLoader = (wrapper, timeScale = 1) => {
  
  const [isLoaded, setAsLoaded] = useState(false);
  const [forceRefresh, setRefresh] = useState(false);
  const [animationEnded, setAnimationState] = useState(false);

  const [timeline, setTimeline] = useState(gsap.timeline());

  useEffect(() => {
    if(!wrapper.current) return;
    if (forceRefresh) {
      timeline.clear();
      setRefresh(false);
      return;
    }

    const tl = sceneBuilder();
        
    setTimeline(tl);
    return () => {
      timeline.kill();
    };
  }, [, forceRefresh, wrapper]);

  useEffect(() => {
    if (!isLoaded) return;
    setAsLoaded(false);
    const [, secondScene, thirdScene] = timeline.getChildren(true, false, true);
    secondScene.eventCallback("onRepeat", () => {
      secondScene.repeat(0);
      if(thirdScene.paused()){
        thirdScene.paused(false);
        timeline.seek("finishAnimation")
      } 
    });
  }, [isLoaded]);

  const sceneBuilder = () => {
    const [ rocketSvg ] = wrapper.current.children;
    const rocket = rocketSvg.getElementById("rocket_without_dust");
    const dust = rocketSvg.getElementById("clouds");
    const flamesGroup = rocketSvg.getElementById("rocket-flame");
    const flamesLarge = rocketSvg.getElementById("flame-biggest");
    const flamesNormal = rocketSvg.getElementById("flame-normal");
    const flamesSmall = rocketSvg.getElementById("flame-smallest");
    
    gsap.set([rocket], { autoAlpha: 0, y: 0 });
    gsap.set([flamesLarge, dust], { autoAlpha: 0 });
    gsap.set([flamesGroup], { transformOrigin: "100% 0%" });
    gsap.set([rocketSvg], {autoAlpha: 1})

    //timeline display objects
    const firstSceneBuilder = () => {
      const timelineFirst = gsap.timeline({
        defaults: { ease: "power3.inOut" },
      });

      timelineFirst
        .to([rocket], { autoAlpha: 1, duration: 2 })
        .fromTo(
          [flamesGroup],
          { scaleY: 0 },
          { autoAlpha: 1, scaleY: 1, duration: 0.7 }
        )
        .to([flamesLarge], { delay: 0.5, autoAlpha: 1 }, "-=0.5")
      return timelineFirst;
    };

    //timeline response for loading bounce
    const secondSceneBuilder = () => {
      const timelineSecond = gsap.timeline({
        repeat: -1,
      });

      timelineSecond
        .to(
          [rocket],
          { y: "-=10", ease: "back.inOut(5)", duration: 1.2 },
          sequence.first
        )
        .to(
          [flamesNormal],
          { delay: 0.5, autoAlpha: 0, duration: 0.4 },
          sequence.first
        )
        .to(
          [rocket],
          { y: "+=10", ease: "back.in(2.5)", duration: 0.8 },
          sequence.second
        )
        .to(
          [flamesNormal],
          { delay: 0.5, autoAlpha: 1, duration: 0.4 },
          sequence.second
        )
        .to(
          [flamesSmall],
          { delay: 0.5, autoAlpha: 0, duration: 0.4 },
          sequence.second
        )
        .to(
          [rocket],
          { y: "-=10", ease: "back.inOut(5)", duration: 1.2, delay: -0.2 },
          sequence.third
        )
        .to(
          [flamesNormal],
          { delay: 0.5, autoAlpha: 0, duration: 0.4 },
          sequence.third
        )
        .to(
          [flamesLarge],
          { delay: 0.5, autoAlpha: 1, duration: 0.4 },
          sequence.third
        )
        .to(
          [flamesSmall],
          { delay: 0.5, autoAlpha: 1, duration: 0.4 },
          sequence.third
        )
        .to(
          [rocket],
          { y: "+=10", ease: "back.in(2.5)", duration: 0.8 },
          sequence.fourth
        )
        .to(
          [flamesNormal],
          { delay: 0.5, autoAlpha: 1, duration: 0.4 },
          sequence.fourth
        )
        .to(
          [flamesLarge],
          { delay: 0.5, autoAlpha: 0, duration: 0.4 },
          sequence.fourth
        )
        .to(
          [flamesSmall],
          { delay: 0.5, autoAlpha: 1, duration: 0.4 },
          sequence.fourth
        )
        .to([rocket], { y: 0, ease: "back.in(2)", duration: 1 }, "-=0.5");

      return timelineSecond;
    };

    //timeline response for launch rocket
    const thirdSceneBuilder = () => {
      const timelineThird = gsap.timeline({paused: true});

      timelineThird       
        .to(
          [flamesLarge],
          { autoAlpha: 1, duration: 0.4 },
          sequence.lauchRocketToTheMoon
        )
        .to(
          [dust],
          { autoAlpha: 1, duration: 1.0 },
          sequence.lauchRocketToTheMoon
        )
        .to(
          [rocket],
          { y: "-=1000", duration: 2.0, time: 20, ease: 'Power2.easeOut'},
          sequence.lauchRocketToTheMoon
        )
        .to(
          [dust],
          { autoAlpha: 0, duration: 0.8, delay: 0.6 },
          sequence.lauchRocketToTheMoon
        );
      return timelineThird;
    };

    const fullSceneBuilder = () => {
      timeline
        .call(() => setAnimationState(false))
        .timeScale(timeScale)
        .add(firstSceneBuilder())
        .add(secondSceneBuilder())
        .addLabel("finishAnimation")
        .add(thirdSceneBuilder())
        .call(() => setAnimationState(true))
      return timeline;
    };

    const result = fullSceneBuilder();
    return result;
  };

  return { animationEnded, setAsLoaded, setRefresh };
};

export default useAnimatedLoader;