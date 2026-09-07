/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Date of the newest commit that touched `src/data/` — set by the deploy
   * workflow. Drives the global "Last updated". Undefined in local dev.
   */
  readonly VITE_CONTENT_UPDATED?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
