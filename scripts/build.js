import { cpSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const dist = resolve(root, "dist");

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(resolve(root, "index.html"), resolve(dist, "index.html"));
cpSync(resolve(root, "src"), resolve(dist, "src"), { recursive: true });
