import { useState, useEffect, useCallback, useRef } from 'react';
import { ShieldAlert, Lock, ShieldCheck } from 'lucide-react';

/**
 * EduTech Content Protection System
 * Enforces strict anti-copy, anti-cut, anti-right-click, and anti-screenshot policies.
 * 
 * Features:
 * 1. Global clipboard blocking (copy/cut/drag prevention)
 * 2. Text-selection lock on all educational content
 * 3. PrintScreen & OS screenshot shortcut interception with clipboard purging
 * 4. Anti-snipping window blur protection shield
 * 5. Forensic repeating background watermark
 * 6. Responsive warning toast notifications
 */
function ContentProtection() {
  const [warningMessage, setWarningMessage] = useState(null);
  const [isWindowBlurred, setIsWindowBlurred] = useState(false);
  const toastTimeoutRef = useRef(null);

  const showWarning = useCallback((msg) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setWarningMessage(msg);
    toastTimeoutRef.current = setTimeout(() => {
      setWarningMessage(null);
    }, 2400);
  }, []);

  // Clipboard purge helper
  const purgeClipboard = useCallback(async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText('');
      }
    } catch {
      // Ignore if permission denied
    }
  }, []);

  useEffect(() => {
    // 1. Block Context Menu (Right Click)
    const handleContextMenu = (e) => {
      // Allow right-click on input elements if student is editing input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }
      e.preventDefault();
      showWarning('Right-click is disabled to protect educational content.');
    };

    // 2. Block Copy & Cut
    const handleCopy = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }
      e.preventDefault();
      if (e.clipboardData) {
        e.clipboardData.setData('text/plain', '');
      }
      purgeClipboard();
      showWarning('Copying is restricted on EduTech Learning Hub.');
    };

    const handleCut = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }
      e.preventDefault();
      purgeClipboard();
      showWarning('Content is protected. Cut operation is disabled.');
    };

    // 3. Block Dragging
    const handleDragStart = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }
      e.preventDefault();
    };

    // 4. Intercept Keyboard Shortcuts (Screenshots, DevTools, Printing, Save)
    const handleKeyDown = (e) => {
      const key = e.key ? e.key.toLowerCase() : '';
      const isCtrlOrMeta = e.ctrlKey || e.metaKey;

      // PrintScreen Key
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        e.preventDefault();
        purgeClipboard();
        setIsWindowBlurred(true);
        setTimeout(() => setIsWindowBlurred(false), 1500);
        showWarning('Screenshots are restricted to protect course material.');
        return;
      }

      // Mac screenshot shortcuts: Cmd + Shift + 3, Cmd + Shift + 4, Cmd + Shift + 5
      if (e.metaKey && e.shiftKey && ['3', '4', '5'].includes(e.key)) {
        e.preventDefault();
        purgeClipboard();
        setIsWindowBlurred(true);
        setTimeout(() => setIsWindowBlurred(false), 1500);
        showWarning('Screenshots are restricted on EduTech.');
        return;
      }

      // Windows Snipping Tool: Win + Shift + S or Ctrl + Shift + S
      if (e.shiftKey && key === 's' && isCtrlOrMeta) {
        e.preventDefault();
        purgeClipboard();
        setIsWindowBlurred(true);
        setTimeout(() => setIsWindowBlurred(false), 1500);
        showWarning('Screen snipping is disabled on EduTech.');
        return;
      }

      // Block Ctrl+C / Cmd+C when outside text input
      if (isCtrlOrMeta && key === 'c') {
        const isInput = e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA';
        if (!isInput) {
          e.preventDefault();
          purgeClipboard();
          showWarning('Copying is disabled to protect course material.');
          return;
        }
      }

      // Block Ctrl+P / Cmd+P (Print)
      if (isCtrlOrMeta && key === 'p') {
        e.preventDefault();
        showWarning('Printing course sheets is disabled.');
        return;
      }

      // Block Ctrl+S / Cmd+S (Save Page)
      if (isCtrlOrMeta && key === 's') {
        e.preventDefault();
        showWarning('Saving offline copies is disabled.');
        return;
      }

      // Block Ctrl+U / Cmd+U (View Source)
      if (isCtrlOrMeta && key === 'u') {
        e.preventDefault();
        showWarning('Source inspection is restricted.');
        return;
      }

      // Block Developer Tools: F12, Ctrl+Shift+I, Cmd+Option+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (
        e.key === 'F12' ||
        (isCtrlOrMeta && e.shiftKey && ['i', 'j', 'c'].includes(key)) ||
        (e.metaKey && e.altKey && ['i', 'j'].includes(key))
      ) {
        e.preventDefault();
        showWarning('Developer inspection tools are disabled.');
        return;
      }
    };

    // Purge clipboard on keyup for PrintScreen
    const handleKeyUp = (e) => {
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        purgeClipboard();
      }
    };

    // 5. Anti-Snipping Blur Detection
    // When external screenshot apps or tools capture screen, browser loses focus
    const handleWindowBlur = () => {
      // Only blur if document actually lost active focus
      if (!document.hasFocus()) {
        setIsWindowBlurred(true);
      }
    };

    const handleWindowFocus = () => {
      setIsWindowBlurred(false);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsWindowBlurred(true);
      } else {
        setIsWindowBlurred(false);
      }
    };

    // Register event listeners
    window.addEventListener('contextmenu', handleContextMenu, { capture: true });
    window.addEventListener('copy', handleCopy, { capture: true });
    window.addEventListener('cut', handleCut, { capture: true });
    window.addEventListener('dragstart', handleDragStart, { capture: true });
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    window.addEventListener('keyup', handleKeyUp, { capture: true });
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      window.removeEventListener('copy', handleCopy, { capture: true });
      window.removeEventListener('cut', handleCut, { capture: true });
      window.removeEventListener('dragstart', handleDragStart, { capture: true });
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      window.removeEventListener('keyup', handleKeyUp, { capture: true });
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, [showWarning, purgeClipboard]);

  return (
    <>
      {/* 1. Subtle Forensic Watermark Overlay (Deters external phone cameras and captures) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 select-none overflow-hidden opacity-[0.03] dark:opacity-[0.025]"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 flex flex-wrap content-around justify-around gap-20 p-8 rotate-[-25deg] scale-125"
          style={{ userSelect: 'none', pointerEvents: 'none' }}
        >
          {Array.from({ length: 48 }).map((_, i) => (
            <span
              key={i}
              className="text-[13px] font-black uppercase tracking-[0.25em] text-brand-heading whitespace-nowrap"
            >
              EDUTECH • DIPLOMA LEARNING HUB • CONFIDENTIAL &amp; PROTECTED
            </span>
          ))}
        </div>
      </div>

      {/* 2. Window Blur Protection Shield (Obscures content when snipping tools take focus) */}
      {isWindowBlurred && (
        <div
          onClick={() => setIsWindowBlurred(false)}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-brand-canvas/95 backdrop-blur-2xl p-6 text-center select-none cursor-pointer transition-opacity duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Protected View"
        >
          <div className="grid h-16 w-16 place-items-center rounded-2xl border border-brand-primary/40 bg-brand-primary/10 text-brand-primary shadow-glow mb-4">
            <Lock size={32} />
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-heading">
            Content Protected
          </h3>
          <p className="mt-2 max-w-md text-sm text-brand-body leading-relaxed">
            EduTech course material is protected against unauthorized capture. Click anywhere or return to this window to resume study.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-4 py-2 text-xs font-semibold text-brand-primary shadow-sm">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>Click to Resume Learning</span>
          </div>
        </div>
      )}

      {/* 3. Floating Security Alert Toast */}
      {warningMessage && (
        <div
          className="fixed top-5 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-2.5 rounded-full border border-brand-coral/40 bg-brand-surface/95 px-5 py-2.5 shadow-2xl backdrop-blur-md text-xs font-bold text-brand-heading animate-in fade-in slide-in-from-top-4 duration-200"
          role="alert"
          aria-live="assertive"
        >
          <div className="grid h-6 w-6 place-items-center rounded-full bg-brand-coral/20 text-brand-coral shrink-0">
            <ShieldAlert size={15} />
          </div>
          <span>{warningMessage}</span>
        </div>
      )}
    </>
  );
}

export default ContentProtection;
