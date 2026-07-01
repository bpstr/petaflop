// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { aonoteMarkdown } from './src/integrations/aonote-markdown.ts';
import { site } from './src/site.config.ts';

// Posts were moved from src/content/posts/<slug>.md into dated
// src/content/posts/<YYYY-MM>/<slug>.md folders. These redirects keep the
// previously published flat URLs working.
const movedPostRedirects = {
  '/posts/ibm-petaflop-korlat/': '/posts/2024-04/ibm-petaflop-korlat/',
  '/posts/luma-concepts-kameramozgas/': '/posts/2025-03/luma-concepts-kameramozgas/',
  '/posts/ai-szinkronizalas-elevenlabs-lipsync/': '/posts/2025-12/ai-szinkronizalas-elevenlabs-lipsync/',
  '/posts/openai-sora-leallitas/': '/posts/2026-04/openai-sora-leallitas/',
  '/posts/pika-valos-ideju-videocseveges-ai-agenseknek/': '/posts/2026-04/pika-valos-ideju-videocseveges-ai-agenseknek/',
  '/posts/claude-opus-48/': '/posts/2026-05/claude-opus-48/',
  '/posts/gemini-omni-35-flash/': '/posts/2026-05/gemini-omni-35-flash/',
  '/posts/qwen-37-max-agent/': '/posts/2026-05/qwen-37-max-agent/',
  '/posts/alphabet-85-milliard-ai-toke/': '/posts/2026-06/alphabet-85-milliard-ai-toke/',
  '/posts/anthropic-ipo-bejelentes/': '/posts/2026-06/anthropic-ipo-bejelentes/',
  '/posts/anthropic-tozsdei-bevezetes-s1/': '/posts/2026-06/anthropic-tozsdei-bevezetes-s1/',
  '/posts/apple-wwdc-2026-gemini-siri/': '/posts/2026-06/apple-wwdc-2026-gemini-siri/',
  '/posts/claude-fable-5-mythos-5/': '/posts/2026-06/claude-fable-5-mythos-5/',
  '/posts/claude-sonnet-5-olcsobb-agensek/': '/posts/2026-06/claude-sonnet-5-olcsobb-agensek/',
  '/posts/feher-haz-ai-biztonsagi-rendelet/': '/posts/2026-06/feher-haz-ai-biztonsagi-rendelet/',
  '/posts/gemini-35-pro-deep-think/': '/posts/2026-06/gemini-35-pro-deep-think/',
  '/posts/getty-openai-chatgpt-kepmegallapodas/': '/posts/2026-06/getty-openai-chatgpt-kepmegallapodas/',
  '/posts/glm-52-nyilt-sulyu-kodmodell/': '/posts/2026-06/glm-52-nyilt-sulyu-kodmodell/',
  '/posts/google-ai-kutatok-tavozasa/': '/posts/2026-06/google-ai-kutatok-tavozasa/',
  '/posts/grok-imagine-video-1-5/': '/posts/2026-06/grok-imagine-video-1-5/',
  '/posts/kina-295-milliard-ai-infrastruktura/': '/posts/2026-06/kina-295-milliard-ai-infrastruktura/',
  '/posts/luma-ray3-2-iranyithato-ai-video/': '/posts/2026-06/luma-ray3-2-iranyithato-ai-video/',
  '/posts/micron-anthropic-memoria-megallapodas/': '/posts/2026-06/micron-anthropic-memoria-megallapodas/',
  '/posts/microsoft-mai-modellek-build-2026/': '/posts/2026-06/microsoft-mai-modellek-build-2026/',
  '/posts/microsoft-majorana-2-kvantumchip/': '/posts/2026-06/microsoft-majorana-2-kvantumchip/',
  '/posts/minimax-m3-nyilt-sulyu-modell/': '/posts/2026-06/minimax-m3-nyilt-sulyu-modell/',
  '/posts/mistral-parizs-adatkozpont-gb300/': '/posts/2026-06/mistral-parizs-adatkozpont-gb300/',
  '/posts/openai-chatgpt-dreaming-v3-memoria/': '/posts/2026-06/openai-chatgpt-dreaming-v3-memoria/',
  '/posts/openai-codex-maxxing-hosszu-feladatok/': '/posts/2026-06/openai-codex-maxxing-hosszu-feladatok/',
  '/posts/openai-daybreak-gpt55-cyber/': '/posts/2026-06/openai-daybreak-gpt55-cyber/',
  '/posts/openai-gpt-56-sol-terra-luna/': '/posts/2026-06/openai-gpt-56-sol-terra-luna/',
  '/posts/openai-people-first-ai-alap/': '/posts/2026-06/openai-people-first-ai-alap/',
  '/posts/samsung-chatgpt-codex-bevezetes/': '/posts/2026-06/samsung-chatgpt-codex-bevezetes/',
  '/posts/spacex-cursor-felvasarlas/': '/posts/2026-06/spacex-cursor-felvasarlas/',
  '/posts/anthropic-fable-mythos-exportkorlatozas-feloldva/': '/posts/2026-07/anthropic-fable-mythos-exportkorlatozas-feloldva/',
};

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: site.baseUrl,
  base: site.repoSubpath || undefined,
  trailingSlash: 'always',
  redirects: movedPostRedirects,
  integrations: [
    aonoteMarkdown(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
  },
  devToolbar: {
    enabled: false,
  },
});
