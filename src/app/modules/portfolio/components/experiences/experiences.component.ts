import { Component, signal } from '@angular/core';

//Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Universidade Castelo Branco',
        p: 'Estagiário (06/2018 – 12/2018)',
      },
      text: 'Construção de páginas HTML; desenvolvimento de prototipação de tela, criação de caso; estudo de engenharia reversa em Banco de dados; criação de consultas em Banco de dados; estudo de modelagem de processos (BPMN), reuniões e entrevistas sobre mudanças na parte de requerimentos dos alunos',
    },
    {
      summary: {
        strong: 'Sinapse Informática',
        p: 'Estagiário (01/2021 – 06/2021)',
      },
      text: 'soluções e manutenções de scripts; programação em linguagem Kotlin; utilização do software Android Studio; criação de interfaces de aplicativos; criação de formas de pagamentos em página da web; participação de reuniões de planejamento de projetos; utilização do Git Hub para atualização de projetos; atender requisições.',
    },
  ]);
}
