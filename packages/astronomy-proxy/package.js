Package.describe({
	name: 'jagi:astronomy',
	version: '2.7.2',
	summary: "Model layer for Meteor",
  git: "https://github.com/hubroedu/meteor-astronomy.git"
});

Package.onUse(function (api) {
  api.use(
    [
      "ecmascript",
      "es5-shim",
      "ddp",
      "mongo",
      "check",
      "minimongo",
      "ejson",
    	"hubroedu:astronomy@2.7.2_3",
    ],
    ["client", "server"]
  );

  api.mainModule("lib/main.js", ["client", "server"], { lazy: false });
});
