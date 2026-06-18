<?php

// === DB CONFIG ===
$host = "localhost";
$dbname = "petaflop";
$user = "root";
$password = "toor";

try {
  $pdo = new PDO(
    "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
    $user,
    $password,
    [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]
  );
} catch (PDOException $e) {
  die("Database connection failed: " . $e->getMessage());
}

// === OUTPUT DIRECTORY ===
$outputDir = __DIR__ . "/../../src/content/posts";

if (!is_dir($outputDir)) {
  mkdir($outputDir, 0777, true);
}

// === QUERY ===
$sql = "SELECT title, date, summary, tags, hidden, draft, cover, content, slug FROM posts";
$stmt = $pdo->query($sql);

// === SAFE FILENAME ===
function safeFileName($str) {
  $str = strtolower($str);
  $str = preg_replace('/[^a-z0-9-_]/', '-', $str);
  $str = preg_replace('/-+/', '-', $str);
  return trim($str, '-');
}

// === TAG HANDLING ===
function parseTags($tags) {
  if (!$tags) return "[]";

  $decoded = json_decode($tags, true);

  if (!is_array($decoded)) return "[]";

  $escaped = array_map(function ($tag) {
    return "\"" . addslashes($tag) . "\"";
  }, $decoded);

  return "[" . implode(", ", $escaped) . "]";
}

// === GENERATE FILES ===
while ($row = $stmt->fetch()) {

  $slug = !empty($row['slug']) ? $row['slug'] : $row['title'];
  $filename = safeFileName($slug) . ".md";
  $filepath = $outputDir . "/" . $filename;

  $tags = parseTags($row['tags']);

  $date = date("Y-m-d", strtotime($row['date']));

  $content =
    "---\n" .
    "title: \"{$row['title']}\"\n" .
    "date: {$date}\n" .
    "summary: \"" . ($row['summary'] ?? "") . "\"\n" .
    "tags: {$tags}\n" .
    "hidden: " . ($row['hidden'] ? "true" : "false") . "\n" .
    "draft: " . ($row['draft'] ? "true" : "false") . "\n" .
    "cover: \"" . ($row['cover'] ?? "") . "\"\n" .
    "---\n\n" .
    ($row['content'] ?? "") . "\n";

  if (!file_exists($filepath)) {
    file_put_contents($filepath, $content);
  }

  echo "Created: $filename\n";
}

echo "Done.\n";
