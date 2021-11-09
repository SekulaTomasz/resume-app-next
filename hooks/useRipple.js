import { useState, useEffect } from "react";
import gsap from "gsap";

const timeline = gsap.timeline({
  defaults: { ease: "power3.inOut" },
});

let animationInProgess = false;

const calculatePosition = (element) => {
  const root = document.documentElement;
  const body = document.body;
  const rect = element.getBoundingClientRect();

  const scrollTop = window.pageYOffset || root.scrollTop || body.scrollTop || 0;
  const scrollLeft =
    window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

  const clientTop = root.clientTop || body.clientTop || 0;
  const clientLeft = root.clientLeft || body.clientLeft || 0;

  return {
    top: Math.round(rect.top + scrollTop - clientTop),
    left: Math.round(rect.left + scrollLeft - clientLeft),
    height: rect.height,
    width: rect.width,
  };
};

const useRipple = (wrapper, autoClose = false, closeTimeout = 1000) => {
  const [toggleRipple, setToggleRipple] = useState(false);
  const [isOpen, setState] = useState(false);
  const [sourcePosition, setSourcePosition] = useState(null);
  const [shouldContentDisplay, setContentState] = useState(false);

  const toggleRippleHandler = (state) => state ?  setToggleRipple(state) : setToggleRipple((prev) => !prev);

  const setDefaultValues = () => {
    if (!wrapper.current) return;
    const [source] = wrapper.current.children;
    const mail = source.querySelector("#email_sent");
    const tick = mail.querySelector("#tick");
    
    gsap.set([mail, tick, source], { opacity: 0 });
    gsap.set([mail], { scale: 0.7 });
    setSourcePosition(calculatePosition(source));
  }

  useEffect(() => {
      setDefaultValues();
    return () => setDefaultValues();
  }, []);

  useEffect(() => {

    if(autoClose && isOpen) setTimeout(toggleRippleHandler, closeTimeout);
    if(!isOpen) setDefaultValues();
    return () => clearTimeout(toggleRippleHandler)
  },[isOpen])

  useEffect(() => {
    if (!sourcePosition || animationInProgess) return;
    animationInProgess = true;
    if (isOpen) hideRipple();
    else showRipple();
  }, [toggleRipple]);

  const showRipple = () => {
    const [source, target] = wrapper.current.children;
    const mail = source.querySelector("#email_sent");
    const tick = mail.querySelector("#tick");
    const from = calculatePosition(source);
    const to = calculatePosition(target);

    timeline.to([source], { opacity: 1 });
    timeline
      .fromTo(
        [source],
        from,
        {
          ...to,
          width: "100%",
          height: "100%",
          duration: 1.2,
        },
        "-=0.2"
      )
      .to([source], {
        opacity: 1,
        onComplete: () => {
          setContentState((prev) => !prev);
        }
      })
      .to([mail], { opacity: 1, scale: 0.8 })
      .to([tick], {
        opacity: 1,
        scale: 1.2,
      })
      .to([tick], {
        scale: 1,
        onComplete: () => {
          setState((prev) => !prev);
          animationInProgess = false;
        },
      });
  };

  const hideRipple = () => {
    const [source, target] = wrapper.current.children;
    const mail = source.querySelector("#email_sent");
    const from = calculatePosition(target);
    const to = { ...sourcePosition };

    timeline
      .to([mail], { opacity: 0, scale: 0.6 })
      .to(
        [source],
        { opacity: 1, onComplete: () => setContentState((prev) => !prev) },
        "<25%"
      )
      .fromTo(
        [source],
        from,
        {
          width: "0px",
          duration: 1.2,
        },
        "-=0.2"
      )
      .to([source], { opacity: 0 })
      .to([source], {
        ...to,
        top: "unset",
        left: "unset",
        duration: 0.1,
        onComplete: () => {
          setState((prev) => !prev);
          animationInProgess = false;
        },
      });
  };

  return { toggleRippleHandler, isOpen, shouldContentDisplay };
};

export default useRipple;
