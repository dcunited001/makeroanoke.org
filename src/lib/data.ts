import { REMOTE_ASSETS_BASE_URL } from '../consts.ts';

export function url(path = '') {
  // NOTE: requires always including trailing slash
  return `${import.meta.env.SITE}${import.meta.env.BASE_URL}${path}`;
}

export function asset(path: string) {
  // NOTE: this includes an extra trailing slash
  return `${REMOTE_ASSETS_BASE_URL}/${path}`;
}
