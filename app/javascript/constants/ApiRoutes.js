export const BOARDS_INDEX_URL = '/api/boards';
export const CREATE_BOARD_URL = '/api/boards';
export const CREATE_LIST_URL = '/api/lists';
export const CREATE_CARD_URL = '/api/cards';

export function boardUrl(id) {
  return '/api/boards/' + id;
}

export function listUrl(id) {
  return '/api/lists/' + id;
}
