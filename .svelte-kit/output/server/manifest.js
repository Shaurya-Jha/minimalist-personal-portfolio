export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "minimalist-personal-portfolio/_app",
	assets: new Set([".nojekyll","favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DS8WCpwA.js",app:"_app/immutable/entry/app.DPm2W1-J.js",imports:["_app/immutable/entry/start.DS8WCpwA.js","_app/immutable/chunks/DBZ-6je_.js","_app/immutable/chunks/BaUDuu97.js","_app/immutable/entry/app.DPm2W1-J.js","_app/immutable/chunks/BaUDuu97.js","_app/immutable/chunks/Dj6f-nJM.js","_app/immutable/chunks/DEDqjojZ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/minimalist-personal-portfolio/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
