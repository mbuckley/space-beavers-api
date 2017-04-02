import beavers from "./beavers.fixture";

export function handler(event: any, context: any, callback: any) {
  console.log("event", event);
  console.log("context 2", context);
  console.log("beavers", beavers);

  callback(null, { statusCode: 200, headers: {}, body: "success beavers!" });
}
