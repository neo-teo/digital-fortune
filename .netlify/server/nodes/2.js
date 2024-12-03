import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.lMjP8Lm5.js","_app/immutable/chunks/disclose-version.Db5IQ26e.js","_app/immutable/chunks/runtime.BHdTUpF_.js","_app/immutable/chunks/index-client.CQU0bmVi.js","_app/immutable/chunks/store.CwTk-nbV.js","_app/immutable/chunks/snippet.C9Z2vuV5.js"];
export const stylesheets = ["_app/immutable/assets/2.CeQU1jeY.css"];
export const fonts = [];
