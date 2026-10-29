/**
 * EduTech Content System - Lightweight Frontmatter & Markdown Parser
 * Phase 02: Extensible Subject and Content Architecture
 *
 * Zero external dependencies: fast, safe, and portable.
 */

/**
 * Parse YAML-style frontmatter from a Markdown document
 * Format:
 * ---
 * id: "example-id"
 * title: "Example Title"
 * topics: ["A", "B"]
 * status: "published"
 * ---
 * Markdown body...
 */
export function parseFrontmatter(rawContent) {
  if (typeof rawContent !== 'string') {
    return { data: {}, content: '' };
  }

  const trimmed = rawContent.trim();
  if (!trimmed.startsWith('---')) {
    return { data: {}, content: trimmed };
  }

  const match = trimmed.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: trimmed };
  }

  const yamlBlock = match[1];
  const markdownBody = match[2];
  const data = {};

  const lines = yamlBlock.split(/\r?\n/);
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith('#')) continue;

    const colonIdx = trimmedLine.indexOf(':');
    if (colonIdx === -1) continue;

    const key = trimmedLine.slice(0, colonIdx).trim();
    let value = trimmedLine.slice(colonIdx + 1).trim();

    // Parse string literals
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    } else if (value.startsWith('[') && value.endsWith(']')) {
      // Parse array
      try {
        const inner = value.slice(1, -1).trim();
        value = inner
          ? inner.split(',').map((item) => {
              const s = item.trim();
              if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
                return s.slice(1, -1);
              }
              return s;
            })
          : [];
      } catch {
        value = [];
      }
    } else if (value === 'true') {
      value = true;
    } else if (value === 'false') {
      value = false;
    } else if (value === 'null') {
      value = null;
    } else if (!isNaN(Number(value)) && value !== '') {
      value = Number(value);
    }

    data[key] = value;
  }

  return { data, content: markdownBody.trim() };
}

/**
 * Parse structured sections from a Markdown body for cheat sheets and reading notes
 */
export function parseMarkdownSections(markdownText) {
  if (!markdownText) return [];

  const lines = markdownText.split(/\r?\n/);
  const sections = [];
  let currentSection = null;

  for (const line of lines) {
    const headingMatch = line.match(/^##\s+(.+)$/);
    if (headingMatch) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        heading: headingMatch[1].trim(),
        points: [],
        paragraphs: [],
        rawContent: '',
      };
      continue;
    }

    if (!currentSection) {
      currentSection = {
        heading: 'Overview',
        points: [],
        paragraphs: [],
        rawContent: '',
      };
    }

    const trimmed = line.trim();
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('• ')) {
      currentSection.points.push(trimmed.slice(2).trim());
    } else if (trimmed) {
      currentSection.paragraphs.push(trimmed);
    }
    currentSection.rawContent += line + '\n';
  }

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}

