import Vue from 'vue';

const { getComputedStyle } = window;

Vue.config.productionTip = false;

// Prevents console log message to install Vue DevTools
Vue.config.devtools = false;

// Monkeypatch JSDOM missing transition styles + vue-test-utils not properly stubbing transitions
// in globally included libs (VeeValidate in our case)
// https://github.com/vuejs/vue-test-utils/issues/839#issuecomment-410474714
window.getComputedStyle = function getComputedStyleStub (el) {
  return {
    ...getComputedStyle(el),
    transitionDelay: '',
    transitionDuration: '',
    animationDelay: '',
    animationDuration: ''
  };
};

global.beforeEach(() => {
  window.process = {
    env: {
      NODE_ENV: 'development'
    },
    versions: {
      chromium: '77.0.3865.75',
      nw: '0.41.1',
      'nw-flavor': 'sdk',
      node: '12.9.1'
    }
  };
  window.nw = {
    Shell: {
      openExternal: jest.fn()
    },
    Window: {
      get: function () {
        return {
          showDevTools: jest.fn(),
          closeDevTools: jest.fn()
        };
      }
    }
  };
});

global.afterEach(() => {
  window.nw.Window.get().showDevTools.mockClear();
});


// Jest's setTimeout defaults to 5 seconds.
// Bump the timeout to 60 seconds.
jest.setTimeout(60 * 1000);