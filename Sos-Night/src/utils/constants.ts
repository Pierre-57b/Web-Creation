export const SITE_CONFIG = {
  name: 'SOS Night',
  domain: 'sos-night.com',
  phone: '06 41 86 89 42',
  snapchat: 'SOS.NIGHT57',
  openingHours: {
    open: '20h30',
    close: '04h00',
    closedDay: 'jeudi'
  },
  delivery: {
    fee: 2,
    freeAbove: 15,
    area: 'Fameck et ses alentours'
  },
  payment: {
    methods: ['PayPal', 'Espèces']
  },
  social: {
    snapchat: 'https://snapchat.com/add/SOS.NIGHT57'
  }
} as const;