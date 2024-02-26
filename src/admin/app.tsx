import Icon from "./extensions/icon.png";
import Logo from "./extensions/logo.svg";

export default {
  config: {
    auth: {
      logo: Logo,
    },
    head: {
      favicon: Icon,
    },
    locales: [],
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to Won Games",
        "Auth.form.welcome.subtitle": "Login to your acount",
        "app.components.LeftMenu.navbrand.title": "Won Games Dashboard",
      },
    },
    menu: {
      logo: Icon,
    },
  },
  bootstrap() {},
};
