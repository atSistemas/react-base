import env from "base/shared/Env";
import common from "./site.common";

const config = (env === "development"
  ? require("./site.dev").default
  : require("./site.prod").default);

export default Object.assign(common, config);
