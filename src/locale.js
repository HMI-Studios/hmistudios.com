const localeMap = {
  en: {
    hmigroup: 'The HMI Group',
    home: 'Home',
    members: 'Members',
    projects: 'Projects',
    login: 'Login',
    coders: 'Coders',
    learnmore: 'Learn More',
    visitsite: 'Visit Site',
    githubrepo: 'GitHub Repo',
    error: 'Error',
    projectcarderror: 'There was an error loading the details of this project. If this error persists, please let a site administrator know.',
  },
  sv: {
    hmigroup: 'HMI-Gruppen',
    home: 'Hem',
    members: 'Medlemmar',
    projects: 'Projekt',
    login: 'Logga In',
    coders: 'Programmerare',
    learnmore: 'Läs Mer',
    visitsite: 'Besök Webbplats',
    githubrepo: 'GitHub-Repo',
  },
};

function locale(lang, key) {
  if (localeMap[lang] && localeMap[lang][key]) {
    return localeMap[lang][key];
  } else {
    return `locale.${lang}.${key}`;
  }
}

export default locale;