export function withBasePath(path: string) {
  const basePath = "/remix-spa/client";
  return `${basePath}${path}`;
}
