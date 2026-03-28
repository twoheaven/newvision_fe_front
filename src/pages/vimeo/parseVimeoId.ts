export const parseVimeoId = (vimeoUrl: string): string | null => {
  const url = vimeoUrl.trim();
  if (!url) return null;

  // 예시:
  // - https://vimeo.com/123456789
  // - https://player.vimeo.com/video/123456789
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  if (!match) return null;

  const id = match[1];
  return id ? id : null;
};
