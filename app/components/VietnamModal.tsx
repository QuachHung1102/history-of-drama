'use client';

import { useEffect } from 'react';
import '../styles/vietnamModal.css';

interface VietnamModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  yearRange: string;
  content: string;
}

export default function VietnamModal({ isOpen, onClose, title, yearRange, content }: VietnamModalProps) {
  // Close modal when pressing ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Phân tích content
  const paragraphs = content.split('\n\n');
  
  const formatParagraph = (text: string) => {
    // Kiểm tra xem có phải là Key milestones section không
    if (text.trim().startsWith('Key milestones:')) {
      return null; // Bỏ qua dòng này, sẽ xử lý riêng
    }
    
    // Kiểm tra milestone với năm (YYYY: hoặc YYYY–YYYY:)
    const milestoneMatch = text.match(/^(\d{4}(?:–\d{4})?|Late \d+\w+ Century):\s*(.+)$/);
    if (milestoneMatch) {
      return (
        <div className="vietnam-milestone">
          <div className="milestone-year">{milestoneMatch[1]}</div>
          <div className="milestone-content">{milestoneMatch[2]}</div>
        </div>
      );
    }
    
    // Kiểm tra xem có phải section title không (dòng ngắn không có dấu chấm cuối)
    const isSectionTitle = text.length < 100 && !text.trim().endsWith('.') && !text.includes(':');
    
    if (isSectionTitle) {
      return <h3 className="vietnam-section-title">{text}</h3>;
    }
    
    // Kiểm tra composer/work line (có dấu ":")
    if (text.includes(':') && text.split(':')[0].length < 50) {
      const [name, work] = text.split(':');
      return (
        <div className="vietnam-work-item">
          <strong>{name}:</strong> {work}
        </div>
      );
    }
    
    return <p className="vietnam-paragraph">{text}</p>;
  };

  return (
    <div className="vietnam-modal-overlay" onClick={onClose}>
      <div className="vietnam-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="vietnam-modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>
        
        <div className="vietnam-modal-header">
          <h2 className="vietnam-modal-title">{title}</h2>
          <div className="vietnam-modal-year-range">{yearRange}</div>
        </div>
        
        <div className="vietnam-modal-body">
          {paragraphs.map((paragraph, index) => (
            <div key={index}>
              {formatParagraph(paragraph)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
