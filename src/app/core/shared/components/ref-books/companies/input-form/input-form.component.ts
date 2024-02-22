import { Component } from '@angular/core';
import { InputComponent } from '../../../input/input.component';
import { GroupInputsComponent } from '../../../group-inputs/group-inputs.component';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [InputComponent, GroupInputsComponent],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.scss'
})
export class InputFormComponent {
  formControls = {
    fullName: {
      label: 'Повна назва:'
    },
    abrName: {
      label: 'Скорочена назва:'
    },
    codEDRPOU: {
      label: 'Код ЄДРПОУ:'
    },
    postAddres: {
      label: 'Адреса для листування:'
    },
    lawAddress: {
      label: 'Юридична адреса:',
    },
    iban: {
      label: 'IBAN:',
    },
    mfo: {
      label: 'МФО:',
    },
    parlor: {
      label: 'Особистий кабіінет:',
    },
    transmissionOfMetersData: {
      label: 'Передача показів:',
    },
    phones: {
      groupTitle: 'Телефони',
      label: 'Телефон',
    },
    socialNetworks: {
      groupTitle: 'Соціальні мережі',
      label: '',
    },
    chatBots: {
      groupTitle: 'Чат боти:',
      label: '',
    }
  }
}








