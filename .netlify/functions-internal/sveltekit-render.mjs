import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","animals/.DS_Store","animals/000.png","cards/.DS_Store","cards/bar.jpeg","cards/car.jpeg","cards/construction.jpeg","cards/deli.jpeg","cards/diner.jpeg","cards/friend.jpeg","cards/park.jpeg","cards/school.jpeg","cards/slice.jpeg","cards/unlucky.jpeg","cars/.DS_Store","cars/camry.png","cars/rav4 copy.jpeg","cars/rav4.png","cars/tacoma.png","cat.gif","favicon.png","fonts/.DS_Store","fonts/bianzhidai_stitches.eot","fonts/bianzhidai_stitches.otf","fonts/bianzhidai_stitches.svg","fonts/bianzhidai_stitches.woff","fonts/bianzhidai_stitches.woff2","fonts/hershey_italic.ttf","fruit/.DS_Store","fruit/orange.png","goodluckspa.png","logos/.DS_Store","logos/hover.gif","logos/loading.gif","logos/loading_noloop.gif","logos/loop.gif","parks/.DS_Store","parks/central.jpg","parks/fortgreene.jpg","parks/maria.jpg","parks/prospect.jpg","parks/seward.jpg","parks/tompkins.jpg","parks/washington.jpg","slices/.DS_Store","slices/artichoke.png","slices/joes.png","slices/scarrs.png","slices/twobros.png","slices/upside.png","slices/williamsburg.png","streets/.DS_Store","streets/1.jpg","streets/14.jpg","streets/2.jpg","streets/3.jpg","streets/5.jpg","streets/6.jpg","streets/7.jpg","streets/a.jpg","streets/b.jpg","streets/c.jpg","streets/orchard.jpg","streets/spring.jpg","streets/w4.jpg","train_lines/.DS_Store","train_lines/1.jpg","train_lines/2.jpg","train_lines/3.jpg","train_lines/4.jpg","train_lines/5.jpg","train_lines/6.jpg","train_lines/7.jpg","train_lines/A.jpg","train_lines/B.jpg","train_lines/C.jpg","train_lines/D.jpg","train_lines/E.jpg","train_lines/F.jpg","train_lines/G.jpg","train_lines/J.jpg","train_lines/L.jpg","train_lines/M.jpg","train_lines/N.jpg","train_lines/Q.jpg","train_lines/R.jpg","train_lines/S.jpg","train_lines/Z.jpg"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".gif":"image/gif",".otf":"font/otf",".svg":"image/svg+xml",".woff":"font/woff",".woff2":"font/woff2",".ttf":"font/ttf",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.CncP3C0n.js","app":"_app/immutable/entry/app.C6ryeaX9.js","imports":["_app/immutable/entry/start.CncP3C0n.js","_app/immutable/chunks/entry.CwxSm2tX.js","_app/immutable/chunks/runtime.BHdTUpF_.js","_app/immutable/entry/app.C6ryeaX9.js","_app/immutable/chunks/runtime.BHdTUpF_.js","_app/immutable/chunks/store.CwTk-nbV.js","_app/immutable/chunks/disclose-version.Db5IQ26e.js","_app/immutable/chunks/index-client.CQU0bmVi.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
