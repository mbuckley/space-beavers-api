export function handler(event: any, context: any, callback: any) {
  console.log("event", event);
  console.log("context2", context);
  // ignore context

  // const beavers = [
  //   {
  //     name: "Mike Buckley",
  //     nickname: "buckles",
  //     skills: [{
  //       name: "",
  //       description: "",
  //     }],
  //   },
  //   {
  //     name: "Kit Brown-Watts",
  //     nickname: "kittens",
  //     skills: [{
  //       name: "",
  //       description: "",
  //     }],
  //   },
  //   {
  //     name: "Chris Saunders",
  //     nickname: "kernel",
  //     skills: [{
  //       name: "",
  //       description: "",
  //     }],
  //   },
  // ];

  callback(null, { statusCode: 200, headers: {}, body: "success beavers!" });
}
