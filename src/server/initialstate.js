import messages from '../client/messages';

const initialLocale = 'en';

export default {
  // Each key represents one app feature/store.
  auth: {
    data: null,
    form: null
  },
  i18n: {
    formats: {},
    locales: initialLocale,
    messages: messages[initialLocale]
  },
  mindmap: {
    head: 'game'
  },
  pendingActions: {},
  users: {
    // User can be authenticated on server, and then viewer must be defined.
    viewer: null
  }
};
