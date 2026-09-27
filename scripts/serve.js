import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";

const root = resolve(process.cwd());
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8"
};

createServer(async (req, res) => {
  const path = req.url === "/" ? "/index.html" : req.url;
  const file = join(root, path || "/index.html");
  try {
    const content = await readFile(file);
    res.writeHead(200, { "content-type": mime[extname(file)] || "text/plain" });
    res.end(content);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}).listen(3000, () => {
  process.stdout.write("Dashboard available at http://localhost:3000\n");
});
