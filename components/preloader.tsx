'use client'

import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 4000);
    const removeTimer = setTimeout(() => setVisible(false), 4500);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader-overlay${fade ? " preloader-fade-out" : ""}`}>
      <img
        src="/images/handshake.png"
        alt="ProLiink Connect Logo"
        className={`preloader-logo animate-preloader-logo`}
        width={320}
        height={320}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default Preloader; 