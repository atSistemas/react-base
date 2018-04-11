import env from "base/shared/Env";

export default (env === "development"
  ? require("./apollo.dev").default
  : require("./apollo.prod").default);
