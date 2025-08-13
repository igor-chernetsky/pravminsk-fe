import React from 'react';
import HighslideImage from './HighslideImage';

interface MarkdownComponentsProps {
  children?: React.ReactNode;
  href?: string;
  src?: string;
  alt?: string;
  className?: string;
}

export const markdownComponents = {
  a: ({ children, href, className, ...props }: MarkdownComponentsProps) => {
    // Check if this is a highslide link with an image
    // Multiple ways to detect highslide links
    const isHighslide = 
      className?.includes('highslide') ||
      className?.includes('img-node') ||
      className?.includes('lightbox') ||
      href?.includes('javascript:') ||
      (href && href.startsWith('#'));
    
    if (isHighslide && children) {
      // Check if there's exactly one child and it's an image
      const childrenArray = React.Children.toArray(children);
      if (childrenArray.length === 1) {
        const child = childrenArray[0];
        if (React.isValidElement(child)) {
          const imgProps: any = child.props;
          return (
            <HighslideImage
              src={imgProps.src || href || ''}
              alt={imgProps.alt || ''}
              className={className}
              href={href}
            />
          );
        }
      }
    }
    
    // Regular link
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  },
  
  img: ({ src, alt, className, ...props }: MarkdownComponentsProps) => {
    // If the image is inside a highslide link, it will be handled by the 'a' component
    // Otherwise, render as a regular image
    return (
      <img src={src} alt={alt} className={className} {...props} />
    );
  }
}; 