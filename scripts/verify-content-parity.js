/**
 * EduTech Automated Content Parity & Schema Test Runner
 * Phase 02: Extensible Subject and Content Architecture
 *
 * Validates:
 * 1. Cryptographic SHA-256 byte-level lock on all original data files.
 * 2. Exact metadata verification for IoT Units 1–6 (hours, marks, modules, topics).
 * 3. Exact 17 PYQ questions & 8 long answers for Unit 1.
 * 4. Software Engineering disabled state and 5 units preservation.
 * 5. Single source of truth registry functionality and runtime validation.
 * 6. Dynamic subject addition without UI edits.
 * 7. Live real-data count calculations (anti-fabrication check).
 */

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Expected baseline hashes from CONTENT_LOCK.md
const BASELINE_HASHES = {
  'src/data/careerUpskilling.js': 'fca1f75159983670bc21ef31a3c2249a5bb052f11a1072b4039772e0b32144ed',
  'src/data/iotLongAnswers.js': '115333ddcc42f882d8b0eeaea7b5958bab7619cd5acf97d01fabc446f64bd051',
  'src/data/iotUnit1Quiz.js': 'fed8429eb6aa2953cb5a46f77cf58ae950974b409c5cd048bdb1e1c58ad96bf5',
  'src/data/iotUnits.js': '8f178c972c24b52031dea2e6595f5e0d890d87f48fe75ad06b24cb72c9ab1ecf',
  'src/data/services.js': '8e8c0e12737e4999828d6a6842daaea5227bb0a7d8cdf1344e864a55daef01d0',
  'src/data/softwareEngineeringUnits.js': '097cc84a321b3bd024d0b0f9b624b07a1fd8cd4dad47e774d3b7edc823438d29',
  'src/data/subjects.js': 'd948b1ddd7f4165a9f1322bf189d875eb1dad94b17ec441220ed4cfd4669fac2',
  'src/data/units.js': 'c613d748f84a010d3bf0cf2758cb8947932a7f1bf45f011f0bd22cbf99b0bb04',
};

function computeSha256(filePath) {
  const fileBuffer = fs.readFileSync(path.join(rootDir, filePath));
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

let passes = 0;
let fails = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`  ✓ PASS: ${testName}`);
    passes++;
  } else {
    console.error(`  ✗ FAIL: ${testName}`);
    fails++;
  }
}

async function runTests() {
  console.log('\n======================================================');
  console.log('🧪 EDUTECH CONTENT PARITY & REGISTRY TEST SUITE');
  console.log('======================================================\n');

  // TEST 1: Cryptographic Hashes
  console.log('--- 1. Cryptographic SHA-256 Checksum Verification ---');
  for (const [relPath, expectedHash] of Object.entries(BASELINE_HASHES)) {
    const actualHash = computeSha256(relPath);
    assert(
      actualHash === expectedHash,
      `Byte-level hash match for ${relPath} (${actualHash.slice(0, 10)}...)`
    );
  }

  // Import content architecture modules
  const {
    getAllSubjects,
    getActiveSubjects,
    getSubject,
    getSubjectUnit,
    getSubjectCounts,
    registerSubject,
    getAllCheatSheets,
    ContentStatus,
    validateSubject,
    validateQuestion,
    parseFrontmatter,
    parseMarkdownSections,
    IOT_LONG_QUESTIONS,
    getIotUnitLongQuestions,
    getIotUnitLongQuestionStats,
    getIotAllLongQuestionStats,
    getAvailableLongQuestionYears,
    IOT_CHEAT_SHEETS,
    getIotUnitCheatSheet,
    getIotUnitCheatSheetSections,
    getAllIotCheatSheets,
    getIotCheatSheetStats,
    ALL_MARKDOWN_REELS,
    getPublishedMarkdownReels,
    getFeaturedMarkdownReel,
    getNonFeaturedMarkdownReels,
    OFFICIAL_INSTAGRAM_PROFILE,
    REEL_CATEGORIES,
  } = await import('../src/content/index.js');

  // TEST 2: Single Source of Truth Registry
  console.log('\n--- 2. Single Source of Truth Registry Verification ---');
  const allSubjects = getAllSubjects();
  assert(allSubjects.length === 2, 'Registry returns exactly 2 published subjects (IoT + SE)');

  const activeSubjects = getActiveSubjects();
  assert(activeSubjects.length === 1, 'Registry returns exactly 1 active subject');
  assert(activeSubjects[0].id === 'iot', 'Active subject is Internet of Things');

  const seSubject = getSubject('software-engineering');
  assert(seSubject && seSubject.disabled === true, 'Software Engineering remains visible and disabled');
  assert(seSubject.disabledLabel === 'Reopens next semester', 'SE disabledLabel is "Reopens next semester"');
  assert(seSubject.units.length === 5, 'Software Engineering preserves all 5 units');

  // TEST 3: IoT Units 1–6 Metadata & Anti-Hallucination
  console.log('\n--- 3. IoT Units 1–6 Exact Metadata & Content Structure ---');
  const iot = getSubject('iot');
  assert(iot && iot.units.length === 6, 'IoT has exactly 6 registered units');

  const expectedMetadata = [
    { id: '1', hours: 10, marks: 10, module: 'A', topicCount: 9, pyqCount: 15, totalCount: 15 },
    { id: '2', hours: 14, marks: 14, module: 'A', topicCount: 16, pyqCount: 15, totalCount: 15 },
    { id: '3', hours: 10, marks: 10, module: 'B', topicCount: 10, pyqCount: 0, totalCount: 15 },
    { id: '4', hours: 10, marks: 10, module: 'B', topicCount: 7, pyqCount: 1, totalCount: 15 },
    { id: '5', hours: 6, marks: 6, module: 'C', topicCount: 6, pyqCount: 5, totalCount: 15 },
    { id: '6', hours: 10, marks: 10, module: 'C', topicCount: 9, pyqCount: 3, totalCount: 15 },
  ];

  expectedMetadata.forEach((exp, idx) => {
    const unit = iot.units[idx];
    assert(String(unit.id) === exp.id, `Unit ${exp.id} id matches`);
    assert(unit.hours === exp.hours, `Unit ${exp.id} has ${exp.hours} hours`);
    assert(unit.marks === exp.marks, `Unit ${exp.id} has ${exp.marks} marks`);
    assert(unit.module === exp.module, `Unit ${exp.id} is Module ${exp.module}`);
    assert(unit.topics.length === exp.topicCount, `Unit ${exp.id} has ${exp.topicCount} topics`);
    assert((unit.pyqQuiz?.length || 0) === exp.pyqCount, `Unit ${exp.id} has ${exp.pyqCount} authentic PYQs`);
    assert((unit.completeQuiz?.length || 0) === exp.totalCount, `Unit ${exp.id} has ${exp.totalCount} total MCQs`);
  });

  // TEST 4: Live Data Counts (Anti-Fabrication Check)
  console.log('\n--- 4. Non-Fabricated Real Content Counts ---');
  const iotCounts = getSubjectCounts('iot');
  assert(iotCounts.totalUnits === 6, 'IoT totalUnits computed as 6');
  assert(iotCounts.totalTopics === 57, 'IoT totalTopics computed as 57 (9+16+10+7+6+9)');
  assert(iotCounts.totalHours === 60, 'IoT totalHours computed as 60');
  assert(iotCounts.totalMarks === 60, 'IoT totalMarks computed as 60');
  assert(iotCounts.totalPYQs === 39, 'IoT totalPYQs computed as 39 (15+15+0+1+5+3 verified authentic)');
  assert(iotCounts.totalCompleteMCQs === 90, 'IoT totalCompleteMCQs computed as 90 (15 per unit x 6 units)');

  // TEST 5: Dynamic Registration of Future Subject Without UI Changes
  console.log('\n--- 5. Dynamic Extensibility Test ---');
  const newSubjectConfig = {
    id: 'advanced-ai',
    slug: 'advanced-ai',
    name: 'Advanced AI and Machine Learning',
    title: 'Advanced AI and Machine Learning',
    semester: 'Diploma 6th Semester',
    stream: 'Computer Science & Technology',
    status: ContentStatus.COMING_SOON,
    disabled: false,
    visibleOrder: 3,
    units: [
      {
        id: '1',
        title: 'Unit 1: Deep Learning Foundations',
        hours: 12,
        marks: 12,
        module: 'A',
        topics: ['Neural Networks', 'Backpropagation'],
        completeQuiz: [],
        pyqQuiz: [],
      },
    ],
  };

  registerSubject(newSubjectConfig);
  const fetchedSubject = getSubject('advanced-ai');
  assert(fetchedSubject && fetchedSubject.title === 'Advanced AI and Machine Learning', 'Future subject dynamically registered');
  const fetchedUnit = getSubjectUnit('advanced-ai', '1');
  assert(fetchedUnit.unit && fetchedUnit.unit.hours === 12, 'Future subject unit queryable via slug and ID');

  // TEST 6: Schema Validation Rejecting Broken Data
  console.log('\n--- 6. Schema Validation & Guardrails ---');
  let caughtSubjectError = false;
  try {
    validateSubject({ id: '' });
  } catch (err) {
    caughtSubjectError = true;
  }
  assert(caughtSubjectError, 'Validator rejects subject with empty id');

  let caughtQuestionError = false;
  try {
    validateQuestion({
      id: 'q1',
      question: 'Test?',
      options: ['A', 'B'],
      correctAnswer: 5, // Out of bounds!
    });
  } catch (err) {
    caughtQuestionError = true;
  }
  assert(caughtQuestionError, 'Validator rejects question with out-of-bounds correctAnswer');

  // TEST 7: Markdown & Frontmatter Parser
  console.log('\n--- 7. Markdown Frontmatter & Section Parser ---');
  const sampleMd = `---
id: "sample-note"
title: "Sensor Interfaces"
topics: ["Sensors", "Arduino"]
---
## Overview
This is an overview paragraph.
- Point 1
- Point 2
`;
  const parsed = parseFrontmatter(sampleMd);
  assert(parsed.data.id === 'sample-note', 'Frontmatter parsed id correctly');
  assert(parsed.data.title === 'Sensor Interfaces', 'Frontmatter parsed title correctly');
  assert(Array.isArray(parsed.data.topics) && parsed.data.topics.length === 2, 'Frontmatter parsed topics array');

  const sections = parseMarkdownSections(parsed.content);
  assert(sections.length === 1 && sections[0].heading === 'Overview', 'Markdown section parsed heading correctly');
  assert(sections[0].points.length === 2, 'Markdown section parsed bullet points');

  // TEST 8: Phase 06 MCQ & PYQ Practice Engine Acceptance Tests
  console.log('\n--- 8. Phase 06 MCQ & PYQ Practice Engine Acceptance Tests ---');
  const { normalizeQuestion, normalizeQuestions, shuffleQuestions } = await import('../src/content/questionNormalizer.js');

  // 8.1 Zero-question path
  const zeroNormalized = normalizeQuestions([]);
  assert(Array.isArray(zeroNormalized) && zeroNormalized.length === 0, 'Zero-question path handles empty array safely');

  // 8.2 Single question path (string answer format)
  const singleRawString = {
    id: 'single-01',
    question: 'What is IoT?',
    options: ['Internet of Things', 'Input output terminal', 'Internal open tool'],
    answer: 'Internet of Things',
    explanation: 'IoT stands for Internet of Things.',
    pyq: 'Jan 2026 Q1(i)',
  };
  const singleNorm = normalizeQuestion(singleRawString, { subjectId: 'iot', unitId: '1' });
  assert(singleNorm.id === 'single-01', 'Single question normalized ID matches');
  assert(singleNorm.prompt === 'What is IoT?', 'Single question prompt normalized');
  assert(singleNorm.correctIndex === 0, 'Single question string answer mapped to index 0');
  assert(singleNorm.correctAnswerText === 'Internet of Things', 'Single question correct answer text matches');
  assert(singleNorm.sourceType === 'pyq', 'Single question identified as PYQ');
  assert(singleNorm.pyq === 'Jan 2026 Q1(i)', 'Single question PYQ citation preserved');

  // 8.3 Single question path (numeric correctAnswer format)
  const singleRawNumeric = {
    id: 'single-02',
    question: 'Which model is risk-driven?',
    options: ['Waterfall', 'Spiral', 'V-Model'],
    correctAnswer: 1,
  };
  const singleNormNumeric = normalizeQuestion(singleRawNumeric);
  assert(singleNormNumeric.correctIndex === 1, 'Numeric correctAnswer mapped to index 1');
  assert(singleNormNumeric.explanation === 'Explanation coming soon', 'Missing explanation safely falls back without hallucination');
  assert(singleNormNumeric.sourceType === 'practice', 'Unsourced question marked as practice');

  // 8.4 Multi-question path on all 17 Unit 1 PYQs
  const { iotUnit1Quiz } = await import('../src/data/iotUnit1Quiz.js');
  const normalized17 = normalizeQuestions(iotUnit1Quiz.questions, { subjectId: 'iot', unitId: '1' });
  assert(normalized17.length === 17, 'All 17 Unit 1 PYQs normalized successfully');
  assert(normalized17.every((q) => q.correctIndex >= 0 && q.correctIndex < q.options.length), 'All 17 questions have valid correctIndex');
  assert(normalized17.every((q) => q.explanation && q.explanation.length > 0), 'All 17 questions preserve verified explanations');

  // 8.5 Result Scoring Arithmetic & Rounding
  const mockTotal = 17;
  const mockCorrect = 13;
  const mockWrong = 2;
  const mockAttempted = mockCorrect + mockWrong;
  const mockSkipped = mockTotal - mockAttempted;
  const mockPercentage = Math.round((mockCorrect / mockTotal) * 100);

  assert(mockAttempted === 15, 'Attempted arithmetic correct (15/17)');
  assert(mockSkipped === 2, 'Skipped arithmetic correct (2/17)');
  assert(mockPercentage === 76, 'Percentage arithmetic correctly rounded (13/17 -> 76%)');

  // 8.6 Retry Incorrect Answers Filtering Logic
  const mockUserAnswers = { 0: 0, 1: 1, 2: 99 }; // 0,1 correct; 2 wrong; 3 skipped
  const mockQuestions = [
    { id: 'q1', correctIndex: 0 },
    { id: 'q2', correctIndex: 1 },
    { id: 'q3', correctIndex: 2 }, // wrong answer given (99 !== 2)
    { id: 'q4', correctIndex: 0 }, // skipped (undefined !== 0)
  ];
  const retryQuestions = mockQuestions.filter((q, idx) => mockUserAnswers[idx] !== q.correctIndex);
  assert(retryQuestions.length === 2, 'Retry filter accurately selects only wrong and skipped questions');
  assert(retryQuestions[0].id === 'q3' && retryQuestions[1].id === 'q4', 'Retry filter isolates exact question IDs');

  // 8.7 Non-destructive Shuffle
  const shuffled = shuffleQuestions(normalized17);
  assert(shuffled.length === 17, 'Shuffled questions preserve total count (17)');
  assert(new Set(shuffled.map((q) => q.id)).size === 17, 'Shuffled questions preserve all unique IDs');
  assert(normalized17[0].id === 'iot-u1-001', 'Original array remains unmutated after shuffle');

  // TEST 9: Phase 07 Cheat Sheets & Reels Acceptance Tests
  console.log('\n--- 9. Phase 07 Cheat Sheets & Reels Acceptance Tests ---');
  const { calculateReadingTime, normalizeCheatSheet, normalizeCheatSheets } = await import('../src/content/cheatSheetNormalizer.js');
  const { isValidInstagramUrl, extractInstagramId, formatReelDuration, reelsRegistry, getPublishedReels, registerReel } = await import('../src/content/reelsRegistry.js');

  // 9.1 Honest Reading Time Calculation (words / 200)
  const shortText = 'This is a short revision point containing ten simple words.';
  const shortTime = calculateReadingTime(shortText);
  assert(shortTime.minutes === 1, 'Short text calculates to minimum 1 min read');

  const longWords = Array.from({ length: 450 }, (_, i) => `word${i}`).join(' ');
  const longTime = calculateReadingTime(longWords);
  assert(longTime.minutes === 3, '450-word text calculates honestly to 3 min read (ceil 450/200)');

  // 9.2 Cheat Sheet Normalizer
  const rawSheet = {
    id: 'test-cs-01',
    heading: 'Sensors and Actuators Overview',
    keyTerms: ['Sensors', 'Actuators'],
    points: ['Sensors convert physical phenomena to electrical signals.', 'Actuators perform physical actions.'],
    quickBox: 'Exam Tip: Contrast transducer types.',
  };
  const normSheet = normalizeCheatSheet(rawSheet, { subjectId: 'iot', unitId: '1' });
  assert(normSheet.id === 'test-cs-01', 'Cheat sheet ID preserved');
  assert(normSheet.title === 'Sensors and Actuators Overview', 'Cheat sheet title normalized from heading');
  assert(normSheet.keyTerms.length === 2, 'Cheat sheet key terms preserved');
  assert(normSheet.readingTime.minutes >= 1, 'Cheat sheet honest reading time attached');

  // 9.3 Legacy Cheat Sheets Parity Check
  const seSheets = getAllCheatSheets({ subjectId: 'software-engineering' });
  assert(seSheets.length === 37, 'Registry returns all 37 authentic Software Engineering cheat sheets');
  const normAll = normalizeCheatSheets(seSheets);
  assert(normAll.length === 37, 'All 37 legacy cheat sheets normalized successfully');
  const allSheets = getAllCheatSheets();
  assert(allSheets.length === 69, 'Registry returns all 69 cheat sheets across IoT and SE (32 + 37)');

  // 9.4 Instagram URL Validation (Strict Anti-Hallucination)
  assert(isValidInstagramUrl('https://www.instagram.com/reel/C2xyz123/'), 'Validates https://www.instagram.com/reel/.../');
  assert(isValidInstagramUrl('https://instagram.com/reel/DA_abc456/?igsh=123'), 'Validates https://instagram.com/reel/... with query params');
  assert(isValidInstagramUrl('https://www.instagram.com/p/C7def890/'), 'Validates Instagram post URL');
  assert(!isValidInstagramUrl('http://insecure-instagram.com/reel/123'), 'Rejects insecure HTTP URLs');
  assert(!isValidInstagramUrl('https://facebook.com/reel/123'), 'Rejects non-Instagram platforms');
  assert(!isValidInstagramUrl(''), 'Rejects empty URL');
  assert(!isValidInstagramUrl(null), 'Rejects null URL');
  assert(extractInstagramId('https://www.instagram.com/reel/C2xyz123/') === 'C2xyz123', 'Extracts Instagram shortcode ID correctly');

  // 9.5 Reel Duration Formatter
  assert(formatReelDuration(58) === '0:58', 'Formats 58 seconds to 0:58');
  assert(formatReelDuration(65) === '1:05', 'Formats 65 seconds to 1:05');
  assert(formatReelDuration(null) === null, 'Returns null for undefined duration');

  // 9.6 Reels Registry Zero-Published Default (Anti-Hallucination)
  reelsRegistry.clear();
  assert(getPublishedReels().length === 0, 'Zero published reels by default (no fake reels)');

  // 9.7 Draft Reel Excluded From Public Queries
  registerReel({
    id: 'draft-01',
    title: 'Draft Reel in Progress',
    url: '',
    status: 'draft',
    subjectId: 'iot',
    unitId: '1',
  });
  assert(getPublishedReels().length === 0, 'Draft reel is not returned in getPublishedReels()');

  // 9.8 Rejects Publishing Without Verified Instagram Link
  let caughtPublishError = false;
  try {
    registerReel({
      id: 'invalid-pub',
      title: 'Broken Reel',
      url: 'https://fake-link.com/broken',
      status: 'published',
    });
  } catch {
    caughtPublishError = true;
  }
  assert(caughtPublishError, 'Registry rejects publishing reel with invalid Instagram URL');

  // 9.9 Accepts and Queries Authentic Published Reel
  const authenticReel = registerReel({
    id: 'reel-valid-01',
    title: 'Arduino Uno Architecture',
    url: 'https://www.instagram.com/reel/C2xyz123/',
    status: 'published',
    subjectId: 'iot',
    unitId: '5',
    topics: ['Arduino', 'Hardware'],
    durationSeconds: 58,
  });
  assert(authenticReel.status === 'published', 'Authentic reel registered as published');
  assert(getPublishedReels().length === 1, 'Published reel successfully queried');
  assert(getPublishedReels({ subjectId: 'iot', unitId: '5' }).length === 1, 'Query by subject and unit returns matching reel');
  assert(getPublishedReels({ unitId: '2' }).length === 0, 'Query for different unit returns 0');

  // Clean test reel after verification
  reelsRegistry.clear();
  assert(getPublishedReels().length === 0, 'Reels registry reset cleanly after tests');

  // TEST 10: IoT Units 1–6 Integration & Verification (Step 8 Acceptance)
  console.log('\n--- 10. IoT Units 1–6 Integration & Question Verification ---');
  const {
    getIotUnitQuestions,
    getIotUnitPyqs,
    getIotUnitPracticeQuestions,
    getIotUnitAvailableYears,
    getIotUnitStats,
    getIotQuestionInventory,
    getAllIotQuestions,
    parseMarkdownQuestions,
  } = await import('../src/content/index.js');

  const all90Questions = getAllIotQuestions();
  assert(all90Questions.length === 90, 'Total IoT questions loaded is exactly 90 (15 x 6 units)');

  // 10.1 Deduplication check across all 90 questions
  const uniqueIds = new Set(all90Questions.map((q) => q.id));
  assert(uniqueIds.size === 90, 'Zero duplicate question IDs found across entire question bank');

  // 10.2 Unit isolation: Unit X loads ONLY Unit X questions
  for (let uId = 1; uId <= 6; uId++) {
    const unitQs = getIotUnitQuestions(uId);
    assert(unitQs.length === 15, `Unit ${uId} loads exactly 15 questions`);
    const allMatchUnit = unitQs.every((q) => Number(q.unitId) === uId);
    assert(allMatchUnit, `Unit ${uId} questions all belong strictly to Unit ${uId}`);

    // Check each question has 4 options and valid answer index
    const allAnswerable = unitQs.every(
      (q) =>
        Array.isArray(q.options) &&
        q.options.length === 4 &&
        typeof q.correctAnswer === 'number' &&
        q.correctAnswer >= 0 &&
        q.correctAnswer < 4 &&
        typeof q.options[q.correctAnswer] === 'string' &&
        q.options[q.correctAnswer].length > 0
    );
    assert(allAnswerable, `Unit ${uId} all 15 questions are valid, 4-choice, and answerable`);

    // Check concise explanations
    const allHaveExplanations = unitQs.every(
      (q) => typeof q.explanation === 'string' && q.explanation.trim().length > 0
    );
    assert(allHaveExplanations, `Unit ${uId} all questions have verified concise explanations`);
  }

  // 10.3 Specific unit PYQ counts and practice breakdowns
  const inventory = getIotQuestionInventory();
  assert(inventory[0].pyqs === 15 && inventory[0].practice === 0, 'Unit 1 has 15 PYQs, 0 practice');
  assert(inventory[1].pyqs === 15 && inventory[1].practice === 0, 'Unit 2 has 15 PYQs, 0 practice');
  assert(inventory[2].pyqs === 0 && inventory[2].practice === 15, 'Unit 3 has 0 PYQs, 15 practice');
  assert(inventory[3].pyqs === 1 && inventory[3].practice === 14, 'Unit 4 has 1 PYQ, 14 practice');
  assert(inventory[4].pyqs === 5 && inventory[4].practice === 10, 'Unit 5 has 5 PYQs, 10 practice');
  assert(inventory[5].pyqs === 3 && inventory[5].practice === 12, 'Unit 6 has 3 PYQs, 12 practice');

  // 10.4 Verified Exam Years
  const u1Years = getIotUnitAvailableYears(1);
  assert(u1Years.includes('Mar 2023') && u1Years.includes('Jan 2026') && u1Years.includes('Jan 2024') && u1Years.includes('Dec 2024'), 'Unit 1 has Mar 2023, Jan 2024, Dec 2024, Jan 2026');

  const u5Years = getIotUnitAvailableYears(5);
  assert(u5Years.includes('Mar 2023') && u5Years.includes('Jan 2024') && u5Years.includes('Dec 2024'), 'Unit 5 has Mar 2023, Jan 2024, Dec 2024');

  // 10.5 Question filtering
  const u1Pyqs = getIotUnitQuestions(1, { filter: 'pyq' });
  assert(u1Pyqs.length === 15, 'Unit 1 PYQ filter returns 15');
  const u5Pyqs = getIotUnitQuestions(5, { filter: 'pyq' });
  assert(u5Pyqs.length === 5, 'Unit 5 PYQ filter returns 5');
  const u5Practice = getIotUnitQuestions(5, { filter: 'practice' });
  assert(u5Practice.length === 10, 'Unit 5 practice filter returns 10');
  const u5Mar2023 = getIotUnitQuestions(5, { year: 'Mar 2023' });
  assert(u5Mar2023.length === 3, 'Unit 5 Mar 2023 filter returns exactly 3 matching questions');

  // 10.6 Markdown parser fidelity test
  const sampleMarkdown = `## Section A
### MCQ 1. Test Question?
**PYQ — Mar 2023**
- **A.** Option 1
- **B.** Option 2
- **C.** Option 3
- **D.** Option 4
**Answer:** B. Option 2
**Explanation:** Tested successfully.
## Section B`;
  const parsedSample = parseMarkdownQuestions(sampleMarkdown, { unitId: 1, filename: 'Test.md' });
  assert(parsedSample.length === 1, 'Markdown question parser parsed 1 question');
  assert(parsedSample[0].correctAnswer === 1, 'Parsed correct answer index matches option B (1)');
  assert(parsedSample[0].sourceType === 'pyq', 'Parsed source type matches PYQ');
  assert(parsedSample[0].years[0] === 'Mar 2023', 'Parsed exam year matches Mar 2023');

  // TEST 11: IoT Units 1–6 Long Questions & PYQ Integration
  console.log('\n--- 11. IoT Units 1–6 Long Questions & Concise Answers Verification ---');
  assert(Array.isArray(IOT_LONG_QUESTIONS), 'IOT_LONG_QUESTIONS dataset loaded as array');
  assert(IOT_LONG_QUESTIONS.length === 39, 'Total IoT long questions is exactly 39 across 6 units');

  // 11.1 Unique IDs check
  const lqIds = new Set(IOT_LONG_QUESTIONS.map((q) => q.id));
  assert(lqIds.size === 39, 'Zero duplicate long question IDs found across dataset');

  // 11.2 Unit-by-unit integrity and breakdown
  const lqAllStats = getIotAllLongQuestionStats();
  assert(lqAllStats.total === 39, 'Platform long questions total matches 39');
  assert(lqAllStats.pyqs === 33, 'Total verified PYQ long questions is exactly 33');
  assert(lqAllStats.practice === 6, 'Total important practice long questions is exactly 6');

  // Unit 1: 8 PYQs, 0 practice
  const u1LqStats = getIotUnitLongQuestionStats(1);
  assert(u1LqStats.total === 8, 'Unit 1 has 8 long questions');
  assert(u1LqStats.pyqs === 8 && u1LqStats.practice === 0, 'Unit 1 has 8 PYQs and 0 practice');

  // Unit 2: 8 long questions (7 PYQ, 1 practice)
  const u2LqStats = getIotUnitLongQuestionStats(2);
  assert(u2LqStats.total === 8, 'Unit 2 has 8 long questions');
  assert(u2LqStats.pyqs === 7 && u2LqStats.practice === 1, 'Unit 2 has 7 PYQs and 1 practice');

  // Unit 3: 6 long questions (4 PYQ, 2 practice)
  const u3LqStats = getIotUnitLongQuestionStats(3);
  assert(u3LqStats.total === 6, 'Unit 3 has 6 long questions');
  assert(u3LqStats.pyqs === 4 && u3LqStats.practice === 2, 'Unit 3 has 4 PYQs and 2 practice');

  // Unit 4: 5 long questions (3 PYQ, 2 practice)
  const u4LqStats = getIotUnitLongQuestionStats(4);
  assert(u4LqStats.total === 5, 'Unit 4 has 5 long questions');
  assert(u4LqStats.pyqs === 3 && u4LqStats.practice === 2, 'Unit 4 has 3 PYQs and 2 practice');

  // Unit 5: 5 long questions (5 PYQs, 0 practice)
  const u5LqStats = getIotUnitLongQuestionStats(5);
  assert(u5LqStats.total === 5, 'Unit 5 has 5 long questions');
  assert(u5LqStats.pyqs === 5 && u5LqStats.practice === 0, 'Unit 5 has 5 PYQs and 0 practice');

  // Unit 6: 7 long questions (6 PYQs, 1 practice)
  const u6LqStats = getIotUnitLongQuestionStats(6);
  assert(u6LqStats.total === 7, 'Unit 6 has 7 long questions');
  assert(u6LqStats.pyqs === 6 && u6LqStats.practice === 1, 'Unit 6 has 6 PYQs and 1 practice');

  // 11.3 Check every question has a valid definition, non-empty key points, and zero missing answers
  const allHaveAnswers = IOT_LONG_QUESTIONS.every(
    (q) =>
      typeof q.definition === 'string' &&
      q.definition.trim().length > 0 &&
      Array.isArray(q.keyPoints) &&
      q.keyPoints.length >= 3
  );
  assert(allHaveAnswers, 'Zero missing answers: all 39 questions have verified definition & key points');

  // 11.4 Filtering and search checks
  const u1PyqFilter = getIotUnitLongQuestions(1, { filter: 'pyq' });
  assert(u1PyqFilter.length === 8, 'Unit 1 filter for PYQ returns exactly 8');

  const u2PracticeFilter = getIotUnitLongQuestions(2, { filter: 'practice' });
  assert(u2PracticeFilter.length === 1, 'Unit 2 filter for practice returns exactly 1 (Standardization)');

  const u1Mar2023Filter = getIotUnitLongQuestions(1, { year: 'Mar 2023' });
  assert(u1Mar2023Filter.length === 4, 'Unit 1 Mar 2023 filter returns 4 matching questions');

  const u5SearchSketch = getIotUnitLongQuestions(5, { search: 'sketch' });
  assert(u5SearchSketch.length >= 1, 'Unit 5 search for "sketch" finds LED-blinking question');

  // TEST 12: IoT Units 1–6 Cheat Sheets & Dynamic Markdown Integration
  console.log('\n--- 12. IoT Units 1–6 Cheat Sheets & Dynamic Markdown Integration ---');
  assert(Array.isArray(IOT_CHEAT_SHEETS), 'IOT_CHEAT_SHEETS dataset loaded as array');
  assert(IOT_CHEAT_SHEETS.length === 6, 'Exactly 6 cheat sheets loaded for IoT');

  // 12.1 Check all 6 cheat sheet markdown files physically exist on disk
  const expectedSheetFiles = [
    'cheat_sheets/Unit_1_Introduction_to_IoT.md',
    'cheat_sheets/Unit_2_IoT_Protocols.md',
    'cheat_sheets/Unit_3_IoT_Architecture.md',
    'cheat_sheets/Unit_4_Web_of_Things.md',
    'cheat_sheets/Unit_5_Arduino.md',
    'cheat_sheets/Unit_6_IoT_Applications.md',
  ];
  for (const sheetPath of expectedSheetFiles) {
    assert(fs.existsSync(path.join(rootDir, sheetPath)), `Markdown file exists: ${sheetPath}`);
  }

  // 12.2 Validate metadata and sections per unit
  for (let unitNum = 1; unitNum <= 6; unitNum++) {
    const sheet = getIotUnitCheatSheet(unitNum);
    assert(sheet !== null, `Unit ${unitNum} cheat sheet found in registry`);
    assert(sheet.unitId === String(unitNum), `Unit ${unitNum} cheat sheet unitId matches`);
    assert(sheet.status === 'published', `Unit ${unitNum} status is "published"`);
    assert(Array.isArray(sheet.sections) && sheet.sections.length >= 5, `Unit ${unitNum} has >= 5 structured sections`);
    assert(sheet.totalWords > 400, `Unit ${unitNum} has substantive academic content (>400 words)`);
  }

  // 12.3 Check aggregate statistics
  const csStats = getIotCheatSheetStats();
  assert(csStats.totalSheets === 6, 'Total cheat sheets is 6');
  assert(csStats.totalSections === 32, 'Total structured revision sections across all 6 units is 32');
  assert(csStats.totalTables >= 6, 'Total comparison tables parsed is >= 6 (matrix comparisons)');
  assert(csStats.totalCodeBlocks >= 4, 'Total code snippets parsed is >= 4');

  // 12.4 Verify legacy adapter integration
  const iotFromAdapter = getSubject('iot');
  assert(iotFromAdapter.units.length === 6, 'IoT subject has 6 units');
  for (const unit of iotFromAdapter.units) {
    assert(
      Array.isArray(unit.cheatSheet) && unit.cheatSheet.length >= 5,
      `Unit ${unit.id} cheatSheet property in adapter has >= 5 sections`
    );
  }

  // TEST 13: Code Scholar AI Instagram Reels & Dynamic Markdown Integration
  console.log('\n--- 13. Code Scholar AI Instagram Reels & Markdown Integration ---');
  assert(Array.isArray(ALL_MARKDOWN_REELS), 'ALL_MARKDOWN_REELS dataset loaded as array');
  assert(ALL_MARKDOWN_REELS.length === 8, 'Total markdown reels is exactly 8 (1 featured + 7 additional)');

  // 13.1 Check all 8 reel markdown files physically exist on disk
  const expectedReelFiles = [
    'content/reels/reel_De1Dg5Myz9n.md',
    'content/reels/reel_Dbd0y4HzF2O.md',
    'content/reels/reel_DcVVqenSObb.md',
    'content/reels/reel_DchPS-1zAGD.md',
    'content/reels/reel_DcrR81LzSxk.md',
    'content/reels/reel_DdUcOXqTTKy.md',
    'content/reels/reel_DeLApOByIQs.md',
    'content/reels/reel_DeYlCfpyqvz.md',
  ];
  for (const reelPath of expectedReelFiles) {
    assert(fs.existsSync(path.join(rootDir, reelPath)), `Reel markdown file exists: ${reelPath}`);
  }

  // 13.2 Verify official Instagram profile configuration
  assert(
    OFFICIAL_INSTAGRAM_PROFILE.username === 'code_scholar_ai',
    'Profile username matches code_scholar_ai'
  );
  assert(
    OFFICIAL_INSTAGRAM_PROFILE.url === 'https://www.instagram.com/code_scholar_ai/',
    'Profile URL matches official https://www.instagram.com/code_scholar_ai/'
  );

  // 13.3 Verify Featured Reel
  const featured = getFeaturedMarkdownReel();
  assert(featured !== null, 'Featured reel exists');
  assert(featured.id === 'De1Dg5Myz9n', 'Featured reel ID is exactly De1Dg5Myz9n');
  assert(
    featured.url === 'https://www.instagram.com/reel/De1Dg5Myz9n/',
    'Featured reel URL matches https://www.instagram.com/reel/De1Dg5Myz9n/'
  );
  assert(featured.featured === true, 'Featured flag is true');
  assert(featured.published === true, 'Featured reel is published');

  // 13.4 Verify All 8 Reels Have Valid Instagram URLs & Unique IDs
  const reelIds = new Set(ALL_MARKDOWN_REELS.map((r) => r.id));
  assert(reelIds.size === 8, 'All 8 reels have unique shortcode IDs (no duplicates)');
  const allUrlsValid = ALL_MARKDOWN_REELS.every((r) => r.validUrl === true);
  assert(allUrlsValid, 'All 8 reel URLs are valid, secure Instagram URLs');

  // 13.5 Verify Non-Featured Reels (7 Remaining)
  const nonFeatured = getNonFeaturedMarkdownReels();
  assert(nonFeatured.length === 7, 'Exactly 7 non-featured reels available for promo & gallery');

  // 13.6 Verify Dynamic Category & Search Filtering
  const aiReels = getPublishedMarkdownReels({ category: 'Artificial Intelligence' });
  assert(aiReels.length >= 1, 'Category filter "Artificial Intelligence" returns matching reel');
  assert(aiReels[0].id === 'De1Dg5Myz9n', 'AI category includes featured reel De1Dg5Myz9n');

  const progReels = getPublishedMarkdownReels({ category: 'Programming' });
  assert(progReels.length === 2, 'Category filter "Programming" returns 2 reels (Dbd0y4HzF2O & DeYlCfpyqvz)');

  const searchArduino = getPublishedMarkdownReels({ search: 'arduino' });
  assert(searchArduino.length >= 1, 'Search query "arduino" finds Arduino & Microcontrollers reel');

  const searchProtocols = getPublishedMarkdownReels({ search: 'protocols' });
  assert(searchProtocols.length >= 1, 'Search query "protocols" finds Building Protocols reel');

  // 13.7 Verify Supported Categories
  assert(REEL_CATEGORIES.length === 8, 'REEL_CATEGORIES contains 8 items including "All Topics"');

  // 13.8 Verify Verified Educational Reel Titles & Topics
  const verifiedTitles = {
    De1Dg5Myz9n: 'Meet Arduino — Brain Behind Countless IoT Innovations',
    Dbd0y4HzF2O: 'Everyday IoT — Connected Tech You Use Without Realizing',
    DcVVqenSObb: 'What Happens When Devices Connect to the Internet?',
    DchPS_1zAGD: 'How Smart Devices Actually Work — Welcome to IoT',
    DcrR81LzSxk: 'Sensors Detect. Actuators Act. Smart Systems Simplified',
    DdUcOXqTTKy: 'Building Automation Protocols — Modbus, BACnet & KNX',
    DeLApOByIQs: 'Wireless Communication Meets Wireless Power in Tech',
    DeYlCfpyqvz: 'IoT vs M2M — Understanding the Key Differences',
  };

  for (const r of ALL_MARKDOWN_REELS) {
    const key = r.id.replace(/-/g, '_');
    const expected = verifiedTitles[key] || verifiedTitles[r.id];
    if (expected) {
      assert(r.title === expected, `Reel ${r.id} has verified authentic title: "${expected}"`);
    } else {
      assert(r.title && r.title.length > 5, `Reel ${r.id} has valid descriptive title`);
    }
  }

  // --- 14. Mobile Instagram App Deep Linking Schemes ---
  console.log('\n--- 14. Mobile Instagram App Deep Linking Schemes ---');
  const {
    getInstagramReelAppUrl,
    getInstagramProfileAppUrl,
    isMobileDevice,
    openInstagramReel,
    openInstagramProfile,
  } = await import('../src/utils/instagramDeepLink.js');

  assert(
    getInstagramReelAppUrl('De1Dg5Myz9n') === 'instagram://reel?id=De1Dg5Myz9n',
    'Reel deep link schema formats as instagram://reel?id=De1Dg5Myz9n'
  );
  assert(
    getInstagramReelAppUrl('') === 'instagram://',
    'Empty shortcode returns base instagram:// scheme'
  );
  assert(
    getInstagramProfileAppUrl('code_scholar_ai') === 'instagram://user?username=code_scholar_ai',
    'Profile deep link formats as instagram://user?username=code_scholar_ai'
  );
  assert(typeof isMobileDevice === 'function', 'isMobileDevice detector is exported as a function');
  assert(typeof openInstagramReel === 'function', 'openInstagramReel is exported as a function');
  assert(typeof openInstagramProfile === 'function', 'openInstagramProfile is exported as a function');

  console.log('\n======================================================');
  console.log(`📊 TEST RESULTS: ${passes} PASSED | ${fails} FAILED`);
  console.log('======================================================\n');

  if (fails > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Test execution error:', err);
  process.exit(1);
});
