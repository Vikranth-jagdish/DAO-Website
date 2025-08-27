import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  textAutoHide?: boolean;
  disableAnimations?: boolean;
  image?: string;
}

export interface BentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
  cardData?: BentoCardProps[];
}

const DEFAULT_PARTICLE_COUNT = 8;
const DEFAULT_SPOTLIGHT_RADIUS = 250;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;

const createParticleElement = (
  x: number,
  y: number,
  color: string = DEFAULT_GLOW_COLOR
): HTMLDivElement => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 
      0 0 8px rgba(${color}, 0.8),
      0 0 16px rgba(${color}, 0.4),
      0 0 24px rgba(${color}, 0.2);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (
  card: HTMLElement,
  mouseX: number,
  mouseY: number,
  glow: number,
  radius: number
) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${relativeX}%`);
  card.style.setProperty("--glow-y", `${relativeY}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
};

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}> = ({
  children,
  className = "",
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(
        Math.random() * width,
        Math.random() * height,
        glowColor
      )
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        },
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
        );

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 80,
          y: (Math.random() - 0.5) * 80,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });

        gsap.to(clone, {
          opacity: 0.4,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 2,
          rotateY: 2,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.03;
        const magnetY = (y - centerY) * 0.03;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousemove", handleMouseMove);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mousemove", handleMouseMove);
      clearAllParticles();
    };
  }, [
    animateParticles,
    clearAllParticles,
    disableAnimations,
    enableTilt,
    enableMagnetism,
    clickEffect,
    glowColor,
  ]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{ ...style, position: "relative", overflow: "hidden" }}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight: React.FC<{
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}> = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const isInsideSection = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement("div");
    spotlight.className = "global-spotlight";
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.2) 0%,
        rgba(${glowColor}, 0.12) 15%,
        rgba(${glowColor}, 0.06) 25%,
        rgba(${glowColor}, 0.03) 40%,
        rgba(${glowColor}, 0.01) 60%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest(".bento-section");
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll(".card");

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        cards.forEach((card) => {
          (card as HTMLElement).style.setProperty("--glow-intensity", "0");
        });
        return;
      }

      const { proximity, fadeDistance } =
        calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) -
          Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity =
            (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(
          cardElement,
          e.clientX,
          e.clientY,
          glowIntensity,
          spotlightRadius
        );
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.9
          : minDistance <= fadeDistance
          ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.9
          : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current?.querySelectorAll(".card").forEach((card) => {
        (card as HTMLElement).style.setProperty("--glow-intensity", "0");
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

const BentoCardGrid: React.FC<{
  children: React.ReactNode;
  gridRef?: React.RefObject<HTMLDivElement | null>;
}> = ({ children, gridRef }) => (
  <div
    className="bento-section w-full max-w-7xl mx-auto select-none relative px-4 sm:px-6 lg:px-8"
    ref={gridRef}
  >
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const MagicBento: React.FC<BentoProps> = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = true,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = false,
  enableMagnetism = true,
  cardData = [],
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  return (
    <>
      <style>
        {`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${glowColor};
            --border-color: hsl(var(--border));
            --background-dark: hsl(var(--card));
            --white: hsl(var(--foreground));
            --purple-primary: hsl(var(--primary));
            --purple-glow: hsl(var(--primary) / 0.2);
            --purple-border: hsl(var(--primary) / 0.8);
          }
          
          .sponsors-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            width: 100%;
          }
          
          @media (max-width: 640px) {
            .sponsors-grid {
              grid-template-columns: 1fr;
              gap: 1rem;
            }
          }
          
          @media (min-width: 641px) and (max-width: 1024px) {
            .sponsors-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (min-width: 1025px) {
            .sponsors-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          
          @media (min-width: 1280px) {
            .sponsors-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
          
          .sponsor-card {
            aspect-ratio: 1;
            min-height: 280px;
            max-height: 320px;
            border-radius: 20px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .sponsor-card:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 
              0 0 0 1px hsl(var(--primary) / 0.5),
              0 20px 40px rgba(0, 0, 0, 0.15),
              0 0 60px hsl(var(--primary) / 0.2);
          }
          
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 3px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                hsl(var(--primary) / calc(var(--glow-intensity) * 0.9)) 0%,
                hsl(var(--primary) / calc(var(--glow-intensity) * 0.6)) 20%,
                hsl(var(--primary) / calc(var(--glow-intensity) * 0.3)) 40%,
                transparent 70%);
            border-radius: 20px;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: subtract;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            transition: all 0.4s ease;
            z-index: 1;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
            padding: 2px;
          }
          
          .card--border-glow:hover {
            box-shadow: 
              0 0 0 1px hsl(var(--primary) / 0.4),
              0 0 20px hsl(var(--primary) / 0.4),
              0 0 40px hsl(var(--primary) / 0.3),
              0 0 80px hsl(var(--primary) / 0.1),
              0 8px 32px rgba(0, 0, 0, 0.3);
            border-color: hsl(var(--primary) / 0.6);
            transform: translateY(-2px);
          }
          
          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: radial-gradient(circle, 
              rgba(${glowColor}, 0.4) 0%, 
              rgba(${glowColor}, 0.1) 50%, 
              transparent 100%);
            border-radius: 50%;
            z-index: -1;
          }
          
          .text-clamp-1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .text-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .sponsor-image-container {
            position: relative;
            width: 100%;
            height: 60%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
          }
          
          .sponsor-image {
            filter: brightness(0.85) saturate(0.8) contrast(1.1);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .sponsor-card:hover .sponsor-image {
            filter: brightness(1.1) saturate(1.2) contrast(1.2);
            transform: scale(1.08);
          }
          
          .sponsor-card::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 20px;
            background: linear-gradient(135deg, 
              hsl(var(--primary) / 0.1) 0%, 
              transparent 50%, 
              hsl(var(--primary) / 0.05) 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
            pointer-events: none;
            z-index: 1;
          }
          
          .sponsor-card:hover::before {
            opacity: 1;
          }
        `}
      </style>

      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        <div className="sponsors-grid">
          {cardData.map((card, index) => {
            const baseClassName = `card sponsor-card flex flex-col justify-between relative w-full p-6 rounded-xl border border-solid font-light overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl ${
              enableBorderGlow ? "card--border-glow" : ""
            }`;

            const cardStyle = {
              backgroundColor: "hsl(var(--card))",
              borderColor: "hsl(var(--border) / 0.5)",
              color: "hsl(var(--foreground))",
              borderRadius: "20px",
              "--glow-x": "50%",
              "--glow-y": "50%",
              "--glow-intensity": "0",
              "--glow-radius": "200px",
            } as React.CSSProperties;

            if (enableStars) {
              return (
                <ParticleCard
                  key={index}
                  className={baseClassName}
                  style={cardStyle}
                  disableAnimations={shouldDisableAnimations}
                  particleCount={particleCount}
                  glowColor={glowColor}
                  enableTilt={enableTilt}
                  clickEffect={clickEffect}
                  enableMagnetism={enableMagnetism}
                >
                  <div className="sponsor-image-container">
                    {card.image && (
                      <Image
                        src={card.image}
                        alt={`${card.title} logo`}
                        fill
                        className="sponsor-image object-contain"
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    )}
                  </div>
                  <div className="card__content flex flex-col items-center text-center">
                    <h3
                      className={`card__title font-semibold text-lg m-0 ${
                        textAutoHide ? "text-clamp-1" : ""
                      }`}
                    >
                      {card.title}
                    </h3>
                    {card.description && (
                      <p
                        className={`card__description text-sm text-muted-foreground mt-2 ${
                          textAutoHide ? "text-clamp-2" : ""
                        }`}
                      >
                        {card.description}
                      </p>
                    )}
                  </div>
                </ParticleCard>
              );
            }

            return (
              <div key={index} className={baseClassName} style={cardStyle}>
                <div className="sponsor-image-container">
                  {card.image && (
                    <Image
                      src={card.image}
                      alt={`${card.title} logo`}
                      fill
                      className="sponsor-image object-contain"
                      quality={100}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  )}
                </div>
                <div className="card__content flex flex-col items-center text-center">
                  <h3
                    className={`card__title font-semibold text-lg m-0 ${
                      textAutoHide ? "text-clamp-1" : ""
                    }`}
                  >
                    {card.title}
                  </h3>
                  {card.description && (
                    <p
                      className={`card__description text-sm text-muted-foreground mt-2 ${
                        textAutoHide ? "text-clamp-2" : ""
                      }`}
                    >
                      {card.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </BentoCardGrid>
    </>
  );
};

export default MagicBento;
