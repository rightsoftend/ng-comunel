interface MobApp {
  name: string;
  url: string;
}

interface SMS {
  phone: string;
  description: string;
}

interface ChatBot {
  name: string;
  url: string;
}

interface MetersDataReceiverService {
  url: string;
  sms: SMS;
}

interface Company {
  id: number;
  fullName: string;
  shortName: string;
  edrpou: string;
  postAddress: string;
  lawAddress: string;
  iban: string;
  bank: string;
  phones: string[];
  parlor: string;
  transmissionOfMetersData: MetersDataReceiverService;
  socialNetworks: string[];
  chatBots: ChatBot[];
  mobApps: MobApp[],
}

export const testCompaniesList: Company[] = [
  {
    id: 1,
    fullName: 'ТОВ «ГАЗОПОСТАЧАЛЬНА КОМПАНІЯ «НАФТОГАЗ УКРАЇНИ»',
    shortName: 'НАФТОГАЗ',
    edrpou: '40121452',
    postAddress: 'вул. Соборна, 1а, м. Кропивницький, Україна, 25009',
    lawAddress: 'ул. Шолуденка, 1, м. Київ, Україна, 04116',
    iban: 'UA893004650000000260323012042',
    bank: 'АТ «Ощадбанк» м. Києва',
    phones: ['+380663002888', '+380983002888', '+380933002888'],
    parlor: 'https://cutt.ly/L1eOeHx',
    transmissionOfMetersData:{
      url: 'https://s7478310.sendpul.se/sl/MzE2NzU4NTQ=/a3738d05480b3062ef47743d0e9e1ec043419s4',
      sms: {
        phone: '4647',
        description: '',
      },
    },
    socialNetworks: [
      'https://cutt.ly/41wZ7Fd', 
      'https://cutt.ly/B1wGQCz',
      'https://cutt.ly/x1wHNc1',
    ],
    chatBots: [
      {
        name: 'GASUA',
        url: 'https://cutt.ly/B1wGQCz',
      },
      {
        name: 'GASUA_Bot',
        url: 'https://cutt.ly/x1wHNc1',
      },
    ],
    mobApps: [
      {
        name: '',
        url: '',
      },
    ],
  },
  {
    id: 2,
    fullName: 'ТОВ "ЕНЕРА СУМИ"',
    shortName: 'ЕНЕРА',
    edrpou: '41884537',
    postAddress: '',
    lawAddress: '',
    iban: 'UA243204780000026035924900349',
    bank: 'АБ "Укргазбанк"',
    phones: ['+380542779900', '+380800300247', '+380542659659'],
    parlor: 'https://sm.e-svitlo.com.ua',
    transmissionOfMetersData: {
      url: '',
      sms: {
        phone: '',
        description: '',
      },
    },
    socialNetworks: [''],
    chatBots: [
      {
        name: '',
        url: '',
      },
    ],
    mobApps: [
      {
        name: '',
        url: '',
      },
    ],
  },
  {
    id: 3,
    fullName: '',
    shortName: '',
    edrpou: '',
    postAddress: '',
    lawAddress: '',
    iban: '',
    bank: '',
    phones: [''],
    parlor: '',
    transmissionOfMetersData: {
      url: '',
      sms: {
        phone: '093 177 01 27',
        description: 'Набрати текст згідно шаблону: 1*NNNNNNNNN*XXXXXX * - роздільник; 1- код послуги: передача показів лічильника; NNNNNNNNN - номер особового рахунку; XXXXXX - покази лічильника на момент відправки СМС',
      },
    },
    socialNetworks: [''],
    chatBots: [
      {
        name: '',
        url: '',
      },
    ],
    mobApps: [
      {
        name: 'E-Svitlo',
        url: 'https://play.google.com/store/apps/details?id=com.soe.superbill&showAllReviews=true',
      },
      {
        name: 'Мій рахунок (Android)',
        url: 'https://play.google.com/store/apps/details?id=ua.soe.billing.android',
      },
      {
        name: 'Мій рахунок (iPhone)',
        url: 'https://apps.apple.com/ua/app/%D0%BC%D1%96%D0%B9-%D1%80%D0%B0%D1%85%D1%83%D0%BD%D0%BE%D0%BA/id1436142052',
      },
    ],
  },
];

