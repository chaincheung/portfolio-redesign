import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const PageWrapper = ({ children }) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Scroll to top immediately before any content renders
    // This happens synchronously before browser paint
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return <>{children}</>;
};


