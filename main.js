import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import i18next from 'i18next';


const getCurretnUrlLanguage = () => {
  const url = new URL(window.location.href);
  const lang = url.searchParams.get('lang');
  return lang;
}

i18next.init({
  lng: getCurretnUrlLanguage(),
  fallbackLng: 'en',
  resources: {
    en: {
      translation: await import(`./locales/en.json`)
    },
    es: {
      translation: await import(`./locales/es.json`)
    },
    fr: {
      translation: await import(`./locales/fr.json`)
    }
  }
});

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>${i18next.t('example_copy')}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
