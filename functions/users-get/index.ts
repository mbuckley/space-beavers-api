export function handler(event: any, context: any, callback: any) {
  console.log("event", event);
  console.log("context", context);

  callback(null, { statusCode: 200, headers: {}, body: "success beavers!" });
}
