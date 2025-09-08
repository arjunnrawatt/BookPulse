export async function fetchWithFallback(input: string, init?: RequestInit) {
  const candidates: string[] = [input];
  if (input.startsWith("/api/")) {
    // Netlify function base (if deployed as function)
    candidates.push(`/.netlify/functions/api${input.substring(4)}`);
    // Alternate path pattern
    candidates.push(`/.netlify/functions/api${input}`);
  }

  let lastErr: any = null;
  for (const url of candidates) {
    try {
      const res = await fetch(url, init);
      if (!res.ok) {
        lastErr = new Error(`Request failed ${res.status} ${res.statusText} for ${url}`);
        continue;
      }
      return res;
    } catch (err) {
      lastErr = err;
      // try next
    }
  }
  throw lastErr ?? new Error("fetch failed");
}
