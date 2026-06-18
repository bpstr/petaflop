<?php

// === DB CONFIG ===
$host = "localhost";
$dbname = "petaflop";
$user = "root";
$password = "toor";

try {
  // === CONNECT (MySQL PDO) ===
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
$outputDir = __DIR__ . "/../../src/content/tools";

if (!is_dir($outputDir)) {
  mkdir($outputDir, 0777, true);
}

// === QUERY ===
$sql = "SELECT name, url, description, category, provider, featured, path FROM toolkit";
$stmt = $pdo->query($sql);

// === SAFE FILENAME ===
function safeFileName($str) {
  $str = strtolower($str);
  $str = preg_replace('/[^a-z0-9-_]/', '-', $str);
  $str = preg_replace('/-+/', '-', $str);
  return trim($str, '-');
}

// === GENERATE FILES ===
while ($row = $stmt->fetch()) {

  $slug = !empty($row['path']) ? $row['path'] : $row['name'];
  $filename = safeFileName($slug) . ".md";
  $filepath = $outputDir . "/" . $filename;

  $content = "---\n";
  $content .= "name: {$row['name']}\n";
  $content .= "url: {$row['url']}\n";
  $content .= "description: {$row['description']}\n";
  $content .= "category: {$row['category']}\n";
  $content .= "provider: {$row['provider']}\n";
  $content .= "featured: " . ($row['featured'] ? "true" : "false") . "\n";
  $content .= "---\n";

  file_put_contents($filepath, $content);

  echo "Created: $filename\n";
}

echo "Done.\n";
