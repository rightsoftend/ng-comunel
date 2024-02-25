// Declare TestCompany interface
interface ChatBot {
  name: string;
  url: string;
}

interface MetersDataReceiverService {
  url: string;
  sms: string;
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
}

// Export constant testCompaniesList as array of TestCompany  
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
      sms: '4647',
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
      sms: '',
    },
    socialNetworks: [''],
    chatBots: [
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
      sms: '',
    },
    socialNetworks: [''],
    chatBots: [
      {
        name: '',
        url: '',
      },
    ],
  },
];