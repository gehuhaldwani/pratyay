import type { SiteConfig } from "@/types/site-config";

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const configPath = resolve("./src/data/config.json");
const configData: SiteConfig = JSON.parse(readFileSync(configPath, "utf-8"));

export default configData;
