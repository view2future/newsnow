import { cpSync, existsSync } from "node:fs"
import { join } from "node:path"

const outputRoot = "dist/output"
const publicDir = join(outputRoot, "public")
const pagesArtifacts = ["_headers", "_redirects", "_routes.json"]

for (const name of pagesArtifacts) {
  const source = join(outputRoot, name)
  const target = join(publicDir, name)

  if (!existsSync(source))
    continue

  cpSync(source, target)
  console.info(`[info] Synced ${name} to ${publicDir}`)
}
