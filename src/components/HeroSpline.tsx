import { lazy, Suspense, useEffect, useRef, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const getSplineZoom = () => {
  const width = window.innerWidth;

  if (width < 480) return 0.15;
  if (width < 768) return 0.15;
  if (width < 1024) return 0.2;
  return 0.25;
};

export default function HeroSpline() {
  const splineRef = useRef<any>(null);
  const [rerenderKey, setRerenderKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setRerenderKey((prev) => prev + 1);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!splineRef.current) return;

    const zoom = getSplineZoom();
    requestAnimationFrame(() => {
      splineRef.current.setZoom(zoom);
    });
  }, [rerenderKey]);

  return (
    <Suspense fallback={null}>
      <div className="hero__img">
        <Spline
          key={rerenderKey}
          className="hero__spline"
          scene="https://prod.spline.design/Cj8FMriGEZCTOr2n/scene.splinecode"
          onLoad={(app) => {
            splineRef.current = app;
            app.setZoom(getSplineZoom());
          }}
        />
      </div>
    </Suspense>
  );
}