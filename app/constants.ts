export const time = {
  SECOND: 1000,
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
} as const;

function contactEmail(email = "marco@tremtec.com") {
  const mailUrl = new URL(`mailto:${email}`);

  mailUrl.searchParams.set("subject", "Hey, Marco! Let's grab a coffee ☕️");
  mailUrl.searchParams.set(
    "body",
    "Hey, Marco! I'm reaching out to you because...",
  );

  return mailUrl.toString().replace(/\+/g, "%20");
}

export const configs = {
  repo: "https://github.com/marco-souza/honox-cloudflare-template",
  username: "marco-souza",
  contact_me: contactEmail(),

  site: {
    title: "Welcome to hono!",
  },

  links: {
    stackoverflow: "https://stackoverflow.com/users/7988674/marco-antônio/",
    linkedin: "https://www.linkedin.com/in/masouzajunior",
    github: "https://github.com/marco-souza",
    podcodar: "https://podcodar.com/",
    mongodb: "https://mongodb.com/",
    paradigm: "https://paradigm.co/",
    tremtec: "https://tremtec.com/",
  },

  github: {
    resume:
      "https://raw.githubusercontent.com/marco-souza/resume/main/RESUME.md",
  },

  navigation: {
    dashboard: "/dashboard",
    settings: "/user/settings",
    onboarding: "/user/onboarding",
    music: "/music",
    downloadMusic: "/music/download",
  },
};
