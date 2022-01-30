import Questions from '@components/questions';
import { escuela_de_javascript } from '../public/answers';

export default function Home(): JSX.Element {
  // const DATA = escuela_de_javascript.escuela_de_javascript_1;
  const DATA = escuela_de_javascript.escuela_de_javascript_2;

  return (
    <>
      <div className={'container'}>
        <h1>{DATA.examDataName}</h1>

        <section className={'status'}>
          <span>Numero de preguntas: {DATA.questionNumber}</span>
          <span>Numero de preguntas correctas: {DATA.correctAnswersToAprove}</span>
          <span>Numero de preguntas incorrectas: {DATA.questionNumber - DATA.correctAnswersToAprove}</span>
          <span>Aprobado: {DATA.approved ? 'Si' : 'No'}</span>
        </section>

        <Questions DATA={{ QUESTIONS: DATA.questions }} />
      </div>

      <style jsx>
        {`
          .container {
            display: grid;
            padding: 1rem;
            gap: 1rem;
          }

          h1 {
            margin: 0px;
            text-align: center;
          }

          .status {
            display: grid;
            border: solid 1px black;
            border-radius: 1rem;
            padding: 1rem;
          }

          .questions {
            display: grid;
          }
        `}
      </style>
    </>
  );
}
