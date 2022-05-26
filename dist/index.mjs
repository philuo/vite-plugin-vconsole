// src/index.ts
function viteVConsole(opt) {
  let viteConfig;
  let isDev = false;
  const {entry, enabled = true, localEnabled = false, config = {}} = opt;
  let entryPath = Array.isArray(entry) ? entry : [entry];
  if (process.platform === "win32")
    entryPath = entryPath.map((item) => item.replace(/\\/g, "/"));
  return {
    name: "vite:vconsole",
    enforce: "pre",
    configResolved(resolvedConfig) {
      viteConfig = resolvedConfig;
      isDev = viteConfig.command === "serve";
    },
    transform(_source, id) {
      if (entryPath.includes(id) && localEnabled && isDev) {
        return `/* eslint-disable */;import VConsole from 'vconsole';new VConsole(${JSON.stringify(config)});/* eslint-enable */${_source}`;
      }
      if (entryPath.includes(id) && enabled && !isDev) {
        return `/* eslint-disable */;import VConsole from 'vconsole';new VConsole(${JSON.stringify(config)});/* eslint-enable */${_source}`;
      }
      return _source;
    }
  };
}
export {
  viteVConsole
};
