const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  const env = {
    API_PROD_URL: (() => {
      if (isDev) return "https://e-comerce-weld.vercel.app/api";
      if (isProd) {
        // Note: The code below needs to be uncommented, and you should use your domin where your API is hosted.
        return 'https://e-comerce-weld.vercel.app/api'
      }
      if (isStaging) return "https://e-comerce-weld.vercel.app/api/";
      return "RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })(),
    API_BASE_URL: "https://e-comerce-weld.vercel.app/api",
  };
  const redirects = () => {
    return [
      {
        source: "/",
        destination: "/en/home",
        permanent: true,
      },
    ];
  };
  const images = {
    domains: ["react.pixelstrap.net", "asharinfotech.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "react.pixelstrap.net",
      },
    ],
  };

  return {
    env,
    redirects,
    images,
  };
};
