import { useEffect } from "react";

function setMeta(selector, attr, value) {
  if (!value) return;
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/**
 * Keeps the document title and social meta in sync with the active route.
 * Avoids pulling in a helmet-style dependency for what is a handful of tags.
 */
export function useSeo({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
  }, [title, description]);
}
