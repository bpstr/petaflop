import fs from "fs";
import path from "path";
import pg from "pg";

const Pool = pg.Pool;

// === DB CONFIG ===
const pool = new Pool({
  host: "localhost",
  port: 3306,
  database: "petaflop",
  user: "root",
  password: "toor",
});

// === OUTPUT DIR ===
const outputDir = path.join(process.cwd(), "output_md");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function safeFileName(str = "untitled") {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

async function exportToMarkdown() {
  const client = await pool.connect();

  try {
    const queryText = `
      SELECT name, url, description, category, provider, featured, path
      FROM toolkit
    `;

    const result = await client.query(queryText);

    if (!result.rows || result.rows.length === 0) {
      console.log("No rows found.");
      return;
    }

    for (const row of result.rows) {
      const fileName = `${safeFileName(row.path || row.name)}.md`;
      const filePath = path.join(outputDir, fileName);

      const content =
        `---
name: ${row.name}
url: ${row.url}
description: ${row.description}
category: ${row.category}
provider: ${row.provider}
featured: ${row.featured}
---
`;

      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Created: ${fileName}`);
    }

    console.log("Done.");
  } catch (err) {
    console.error("Error exporting data:", err);
  } finally {
    client.release();
    await pool.end();
  }
}

exportToMarkdown();
