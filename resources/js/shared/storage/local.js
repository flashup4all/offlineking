const local = {

    constructor() { },

    store_user(user)
    {
        return window.localStorage.setItem('ofsuk', JSON.stringify(user));
    },
    store_token(token)
    {
        return window.localStorage.setItem('ofstk', token);
    },

    get_token()
    {
        return window.localStorage.getItem('ofstk');
    },
    get_user()
    {
        return JSON.parse(window.localStorage.getItem('ofsuk'));
    }
  }
  export default local;