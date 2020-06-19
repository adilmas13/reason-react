[@bs.val] [@bs.scope ("process", "env")]
external environment: string = "NODE_ENV";

let isProduction = () => environment === "production";