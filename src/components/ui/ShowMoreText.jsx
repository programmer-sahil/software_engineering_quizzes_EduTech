import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * ShowMoreText Component
 * Implements progressive disclosure on text blocks.
 *
 * @param {Object} props
 * @param {string} props.text - Full text content
 * @param {number} [props.maxLength=160] - Character threshold before truncation
 * @param {string} [props.className=''] - Additional typography classes
 */
function ShowMoreText({ text = '', maxLength = 160, className = '' }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text || text.length <= maxLength) {
    return <p className={className}>{text}</p>;
  }

  const displayText = isExpanded ? text : `${text.slice(0, maxLength).trim()}...`;

  return (
    <div className="space-y-1">
      <p className={className}>
        {displayText}{' '}
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="inline-flex items-center gap-0.5 text-xs font-semibold text-brand-primary hover:underline outline-none focus-visible:ring-1 focus-visible:ring-brand-primary rounded"
        >
          <span>{isExpanded ? 'Show less' : 'Show more'}</span>
          <ChevronDown
            size={12}
            className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
      </p>
    </div>
  );
}

export default ShowMoreText;

