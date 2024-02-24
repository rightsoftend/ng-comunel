interface Company {
  company: number;
  or: string;
  eic: string;
}

interface Client {
  id: number;
  name: string;
  secondname: string;
  surname: string;
  postAddress: string;
  companies: Company[];
}

export const clientsList: Client[] = [
  {
    id: 1,
    name: 'Мирослав',
    secondname: 'Пінчук',
    surname: 'Васильович',
    postAddress: '14001',
    companies: [
      {
        company: 1,
        or: '238727',
        eic: '6378FSD674312BH7889',
      },
      {
        company: 2,
        or: '238237',
        eic: '6378FSD674312BH7889',
      }
    ]
  },
  {
    id: 2,
    name: 'Маргарита',
    secondname: 'Козіна',
    surname: 'Леонідівна',
    postAddress: '41124',
    companies: [
      {
        company: 1,
        or: '2275337',
        eic: '6378FSD674312BH7889',
      },
      {
        company: 2,
        or: '1037537',
        eic: 'FH783DHJ349ESD9',
      }
    ]
  },  
];