import fs from "node:fs/promises";
import path from "node:path";

const inputPath = process.argv[2] || "data.json";

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new Error("recordedAt must be a valid ISO date");
  }
  return date.toISOString();
}

try {
  const absolutePath = path.resolve(inputPath);
  const record = JSON.parse(await fs.readFile(absolutePath, "utf8"));
  const recordedAt = formatDate(record.recordedAt);
  console.log(JSON.stringify({
    file: path.relative(process.cwd(), absolutePath),
    label: record.label || "unlabelled sample",
    recordedAt,
    source: record.source || "unspecified"
  }, null, 2));
} catch (error) {
  console.error("Unable to read timestamp data:", error.message);
  process.exitCode = 1;
}
