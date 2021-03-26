const config = {
  siteTitle: "Xalli Radio Comunitaria 97.9 FM", // Site title.
  siteTitleShort: "Xalli Radio", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Xalli Radio Comunitaria", // Alternative site title for SEO.
  siteLogo: "/logos/logo-357.png", // Logo used for SEO and manifest.
  siteUrl: "http://radioxalli.live", // Domain of your website without pathPrefix.
  pathPrefix: "http://radioxalli.live/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: true, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Noticias y eventos de la Comunidad de Xalli, Puebla.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Xalli Radio XHPXA 97.9 FM RSS feed", // Title of the RSS feed
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Radio Xalli", // Username to display in the author segment.
  userEmail: "MaterialUser@example.com", // Email used for RSS feed's author segment
  userTwitter: "97Xalli", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Xalli, Puebla", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Radio Xalli es una radio en la región centro del estado de Puebla que busca promover el desarrollo individual y colectivo de sus radioescuchas mediante la producción, programación y transmisión de programas radiofónicos que le permitan cumplir cabalmente con su propósito de servir a la comunidad, entendiendo a ésta como un grupo de personas con problemáticas comunes y afinidades culturales.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Facebook",
      url: "https://www.facebook.com/xalli979",
      iconClassName: "fa fa-facebook",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/97Xalli",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "Email",
      url: "mailto:opjuanar@gmail.com",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "Copyright © 2021. Radio Xalli 97.9 FM", // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
