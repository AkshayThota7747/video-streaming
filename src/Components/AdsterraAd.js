import React, { useEffect, useRef } from "react";

const AdsterraAd = () => {
  const banner = useRef(null);

  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const atOptions = {
        key: "cbe3d855ee406b21281ac3e15f5c6ec5",
        format: "iframe",
        height: 90,
        width: 728,
        params: {},
      };

      const conf = document.createElement("script");
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.topcreativeformat.com/cbe3d855ee406b21281ac3e15f5c6ec5/invoke.js";
      script.async = true;

      banner.current.append(conf);
      banner.current.append(script);
    }
  }, []);

  return <div ref={banner}></div>;
};

export default AdsterraAd;
