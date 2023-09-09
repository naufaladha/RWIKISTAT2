import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html);
}

export function useHtmlContent(path: string) {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);

  useEffect(() => {
    console.log(`Fetching HTML content from: ${path}`);
    fetch(path)
      .then((response) => {
        console.log(`Received response for: ${path}`, response);
        return response.text();
      })
      .then((data) => {
        console.log(`Got HTML content for: ${path}`, data);
        setHtmlContent(sanitizeHtml(data));
      })
      .catch((error) => {
        console.error(`Error fetching HTML content from: ${path}`, error);
      });
  }, [path]);

  return htmlContent;
}
