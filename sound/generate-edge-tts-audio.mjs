import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const dataPath = path.join(rootDir, "js", "data.js");
const soundDir = path.join(rootDir, "sound");
const force = process.argv.includes("--force");

const voices = {
  expression: "zh-CN-XiaoxiaoNeural",
  A: "zh-CN-YunxiNeural",
  B: "zh-CN-XiaoxiaoNeural"
};

function loadSites() {
  const source = fs.readFileSync(dataPath, "utf8");
  return vm.runInNewContext(`${source}\nSITES;`, {}, { filename: dataPath });
}

function speakerKey(speaker) {
  return (speaker || "A").toUpperCase() === "B" ? "b" : "a";
}

function runEdgeTts({ text, voice, output }) {
  if (!force && fs.existsSync(output)) {
    console.log(`skip ${path.relative(rootDir, output)}`);
    return;
  }

  fs.mkdirSync(path.dirname(output), { recursive: true });
  console.log(`make ${path.relative(rootDir, output)} (${voice})`);

  const result = spawnSync(
    process.env.PYTHON || "python",
    ["-m", "edge_tts", "--voice", voice, "--text", text, "--write-media", output],
    { stdio: "inherit" }
  );

  if (result.status !== 0) {
    throw new Error(`edge-tts failed: ${path.relative(rootDir, output)}`);
  }
}

function main() {
  const sites = loadSites();

  for (const site of sites) {
    const siteDir = path.join(soundDir, site.id);

    for (const [index, expression] of (site.expressions || []).entries()) {
      if (!expression.zh) continue;
      runEdgeTts({
        text: expression.zh,
        voice: voices.expression,
        output: path.join(siteDir, `expr-${index + 1}.mp3`)
      });
    }

    for (const [sectionIndex, section] of (site.dialogue || []).entries()) {
      for (const [lineIndex, line] of (section.lines || []).entries()) {
        if (!line.zh) continue;
        const speaker = (line.speaker || "A").toUpperCase();
        runEdgeTts({
          text: line.zh,
          voice: voices[speaker] || voices.A,
          output: path.join(siteDir, `dialogue-${sectionIndex + 1}-${lineIndex + 1}-${speakerKey(speaker)}.mp3`)
        });
      }
    }
  }
}

main();
