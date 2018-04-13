import env from "base/shared/Env";

const isBrowser = typeof window !== "undefined";

const modeConfig = env === "development" ? require("./apollo.dev").default : require("./apollo.prod").default;
const environmentConfig = isBrowser ? require("./apollo.browser").default : require("./apollo.server").default;

export default Object.assign(modeConfig, environmentConfig);
