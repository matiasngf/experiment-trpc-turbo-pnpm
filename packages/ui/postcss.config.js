const defaultConfig = require("./config/postcss.common.config.js");

/**
 * Since Storybook lives inside the ui package itself, it needs its
 * own configuration file in the root "ui/". If you need to modify the
 * exported common configuration, check postcss.common.config.js 👆
 */
module.exports = {
  ...defaultConfig,
};
