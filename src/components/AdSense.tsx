"use client";
import React, { useEffect } from "react";

const AdSenseAd = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error(e);
            }
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-7080022112422770"
            data-ad-slot="YOUR_AD_SLOT"
            data-ad-format="auto"
        ></ins>
    );
};

export default AdSenseAd;
