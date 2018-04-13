import env from "base/shared/Env";

const isBrowser = typeof window !== "undefined";

const modeConfig = env === "development" ? require("./site.dev").default : require("./site.prod").default;
const environmentConfig = isBrowser ? require("./site.browser").default : require("./site.server").default;

export default Object.assign(modeConfig, environmentConfig);
