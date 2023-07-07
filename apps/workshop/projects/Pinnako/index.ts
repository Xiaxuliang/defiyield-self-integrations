import type { ProjectDefinitionInterface } from '@defiyield/sandbox';
import { ExampleFarm } from './modules/ExampleFarm';

const project: ProjectDefinitionInterface = {
  name: 'Pinnako',
  categories: ['DEX'],
  links: {
    logo: 'https://app.pinnako.io/static/media/logo.fd676d43.svg',
    url: 'https://app.pinnako.io/',
    discord: 'https://discord.com/invite/pinnakodex',
    telegram: 'https://t.me/pinnakodex',
    twitter: 'https://twitter.com/PinnakoDex',
    github: 'GitHub - pinnakoex/pinnakoes_contract: pinnakoes_contract',
  },
  modules: [ExampleFarm],
};

export default project;