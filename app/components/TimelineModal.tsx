'use client';

import { useEffect } from 'react';
import '../styles/timelineModal.css';

interface TimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function TimelineModal({ isOpen, onClose, title, content }: TimelineModalProps) {
  // Close modal when pressing ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Phân tích content để format đặc biệt
  const paragraphs = content.split('\n\n');
  
  const formatParagraph = (text: string, index: number) => {
    const trimmedText = text.trim();
    
    // Phát hiện Key milestones
    if (trimmedText.startsWith('Key milestones:')) {
      return <h3 className="modal-section-title">{trimmedText}</h3>;
    }
    
    // Phát hiện các section titles khác (Notable composers, Challenges, Characteristics)
    if (
      trimmedText.startsWith('Notable composers') || 
      trimmedText.startsWith('Challenges:') || 
      trimmedText.startsWith('Characteristics:')
    ) {
      return <h3 className="modal-section-title">{trimmedText}</h3>;
    }
    
    // Phát hiện milestone items (bắt đầu bằng năm: 1864:, 1895:, v.v.)
    const milestonePattern = /^(\d{4}(?:–\d{4})?|\d{4}s):\s*(.+)$/;
    const milestoneMatch = trimmedText.match(milestonePattern);
    
    if (milestoneMatch) {
      const [, year, description] = milestoneMatch;
      return (
        <div className="milestone-item">
          <span className="milestone-year">{year}</span>
          <span className="milestone-description">{description}</span>
        </div>
      );
    }
    
    // Phát hiện đề mục (dòng ngắn không có dấu chấm)
    const isHeading = trimmedText.length < 100 && !trimmedText.endsWith('.') && !trimmedText.includes(':');
    
    if (isHeading) {
      return <strong className="modal-subheading">{trimmedText}</strong>;
    }
    
    return trimmedText;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>
        
        <h2 className="modal-title">{title}</h2>
        
        <div className="modal-body">
          {paragraphs.map((paragraph, index) => (
            <div key={index} className="modal-paragraph">
              {formatParagraph(paragraph, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
