/**
 * EduTech Code Scholar AI Reels Loader & Dynamic Markdown Parser
 * Phase: Instagram Reels Integration & Learning Video Dashboard
 *
 * Reads and validates Markdown files from content/reels/, extracts YAML frontmatter,
 * normalizes video metadata, and powers the homepage featured video and gallery.
 */

import reelDe1 from '../../content/reels/reel_De1Dg5Myz9n.md?raw';
import reelDbd from '../../content/reels/reel_Dbd0y4HzF2O.md?raw';
import reelDcV from '../../content/reels/reel_DcVVqenSObb.md?raw';
import reelDch from '../../content/reels/reel_DchPS-1zAGD.md?raw';
import reelDcr from '../../content/reels/reel_DcrR81LzSxk.md?raw';
import reelDdU from '../../content/reels/reel_DdUcOXqTTKy.md?raw';
import reelDeL from '../../content/reels/reel_DeLApOByIQs.md?raw';
import reelDeY from '../../content/reels/reel_DeYlCfpyqvz.md?raw';
import { parseFrontmatter } from './markdownParser.js';
import { extractInstagramId, isValidInstagramUrl } from './reelsRegistry.js';

export const OFFICIAL_INSTAGRAM_PROFILE = {
  username: 'code_scholar_ai',
  displayName: 'Code Scholar AI',
  url: 'https://www.instagram.com/code_scholar_ai/',
  handle: '@code_scholar_ai',
  description:
    'Explore AI, programming, automation and real-world technology concepts through short educational videos from Code Scholar AI.',
};

export const REEL_CATEGORIES = [
  'All Topics',
  'Artificial Intelligence',
  'Programming',
  'Web Development',
  'Data Science',
  'Automation',
  'Career Learning',
  'Other Technology Topics',
];

const RAW_REEL_FILES = [
  reelDe1,
  reelDbd,
  reelDcV,
  reelDch,
  reelDcr,
  reelDdU,
  reelDeL,
  reelDeY,
];

// Topic illustration styles for distinctive visual cards
const TOPIC_STYLES = {
  'Artificial Intelligence': {
    badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    gradient: 'from-cyan-950 via-blue-950 to-slate-900',
    accent: '#06b6d4',
    iconName: 'sparkles',
  },
  Programming: {
    badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    gradient: 'from-emerald-950 via-teal-950 to-slate-900',
    accent: '#10b981',
    iconName: 'code',
  },
  'Web Development': {
    badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    gradient: 'from-purple-950 via-indigo-950 to-slate-900',
    accent: '#a855f7',
    iconName: 'globe',
  },
  'Data Science': {
    badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    gradient: 'from-amber-950 via-orange-950 to-slate-900',
    accent: '#f59e0b',
    iconName: 'chart',
  },
  Automation: {
    badgeColor: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
    gradient: 'from-rose-950 via-pink-950 to-slate-900',
    accent: '#f43f5e',
    iconName: 'bot',
  },
  'Career Learning': {
    badgeColor: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    gradient: 'from-blue-950 via-sky-950 to-slate-900',
    accent: '#3b82f6',
    iconName: 'graduation',
  },
  'Other Technology Topics': {
    badgeColor: 'text-violet-400 border-violet-500/30 bg-violet-500/10',
    gradient: 'from-violet-950 via-fuchsia-950 to-slate-900',
    accent: '#8b5cf6',
    iconName: 'cpu',
  },
};

/**
 * Parse raw markdown files into normalized Reel objects
 */
function parseReelFile(raw) {
  const { data, content } = parseFrontmatter(raw);

  const id = String(data.id || '').trim();
  const title = String(data.title || 'Educational Reel').trim();
  const description = String(
    data.description || content || 'Educational micro-lesson from Code Scholar AI.'
  ).trim();
  const category = String(data.category || 'Other Technology Topics').trim();
  const topic = String(data.topic || category).trim();
  const instagramUrl = String(data.instagramUrl || '').trim();
  const thumbnail = data.thumbnail ? String(data.thumbnail).trim() : null;
  const localVideo = data.localVideo ? String(data.localVideo).trim() : null;
  const featured = Boolean(data.featured);
  const published = data.published !== false && data.published !== 'false';
  const subjectId = String(data.subjectId || 'iot');
  const unitId = data.unitId ? String(data.unitId) : null;

  const validUrl = isValidInstagramUrl(instagramUrl);
  const instagramId = extractInstagramId(instagramUrl) || id;
  const embedUrl = `https://www.instagram.com/reel/${instagramId}/embed/`;

  const visualStyle = TOPIC_STYLES[category] || TOPIC_STYLES['Other Technology Topics'];

  return {
    id,
    title,
    description,
    category,
    topic,
    url: instagramUrl,
    instagramUrl,
    thumbnail,
    localVideo,
    featured,
    published,
    subjectId,
    unitId,
    validUrl,
    instagramId,
    embedUrl,
    rawNotes: content,
    visualStyle,
  };
}

/**
 * All parsed markdown reels
 */
export const ALL_MARKDOWN_REELS = RAW_REEL_FILES.map(parseReelFile);

/**
 * Get all published reels
 */
export function getPublishedMarkdownReels({ category = 'All Topics', search = '', topic = '' } = {}) {
  return ALL_MARKDOWN_REELS.filter((reel) => {
    if (!reel.published || !reel.validUrl) return false;

    // Category filter
    if (category && category !== 'All Topics' && reel.category !== category) {
      return false;
    }

    // Topic filter
    if (topic && reel.topic.toLowerCase() !== topic.toLowerCase()) {
      return false;
    }

    // Search query filter (matches title, topic, description, category)
    if (search && search.trim()) {
      const q = search.toLowerCase().trim();
      const matchTitle = reel.title.toLowerCase().includes(q);
      const matchTopic = reel.topic.toLowerCase().includes(q);
      const matchDesc = reel.description.toLowerCase().includes(q);
      const matchCat = reel.category.toLowerCase().includes(q);
      if (!matchTitle && !matchTopic && !matchDesc && !matchCat) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Get the designated featured reel (De1Dg5Myz9n)
 */
export function getFeaturedMarkdownReel() {
  const featured = ALL_MARKDOWN_REELS.find((r) => r.featured && r.published);
  return featured || ALL_MARKDOWN_REELS[0];
}

/**
 * Get all non-featured reels (remaining 7 reels for promotional sections)
 */
export function getNonFeaturedMarkdownReels() {
  return ALL_MARKDOWN_REELS.filter((r) => !r.featured && r.published);
}

/**
 * Get single reel by ID
 */
export function getMarkdownReelById(id) {
  return ALL_MARKDOWN_REELS.find((r) => r.id === String(id)) || null;
}

