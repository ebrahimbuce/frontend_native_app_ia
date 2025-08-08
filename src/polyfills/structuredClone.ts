import structuredClone from 'realistic-structured-clone';

if (typeof globalThis.structuredClone !== 'function') {
  globalThis.structuredClone = structuredClone;
}
