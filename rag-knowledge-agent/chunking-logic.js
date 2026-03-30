/**
 * RAG Knowledge Agent — Text Chunking Utility
 * Use this in n8n's Code Node (Step 3 of Ingestion Pipeline)
 *
 * Strategy: Sliding window with word-level chunking
 * Chunk Size: 500 words | Overlap: 50 words
 */

const text = $input.item.json.data || '';
const fileName = $input.item.json.name || 'unknown';

const CHUNK_SIZE = 500;   // words per chunk
const OVERLAP = 50;       // overlapping words between chunks

const words = text.split(/\s+/).filter(w => w.length > 0);
const chunks = [];
let i = 0;

while (i < words.length) {
  const chunkWords = words.slice(i, i + CHUNK_SIZE);
  const chunkText = chunkWords.join(' ');

  // Skip very short trailing chunks
  if (chunkWords.length < 20 && chunks.length > 0) break;

  chunks.push({
    text: chunkText,
    chunk_id: `${fileName}-chunk-${chunks.length}`,
    source: fileName,
    chunk_index: chunks.length,
    word_count: chunkWords.length
  });

  i += CHUNK_SIZE - OVERLAP;
}

console.log(`✅ Chunked "${fileName}" into ${chunks.length} segments`);
return chunks.map(c => ({ json: c }));
