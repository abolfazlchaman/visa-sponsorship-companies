import Main from '@/components/Main/Main';

import { prefix } from '@/utils/prefix';

import passportIMG from '../images/icons8-passport-100.png';
import passportWithVisaIMG from '../images/icons8-passport-with-visa-100.png';
import visaStampIMG from '../images/icons8-visa-stamp-100.png';

export default function Home() {
  // englandData.map(({ name }) => console.log(name));
  return (
    <main className="flex min-h-screen h-fit flex-col items-center justify-around bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900">
      <Main />

      <footer className="bottom-0 container flex flex-col z-10 text-md font-medium w-full items-center justify-center font-mono">
        <div className="flex-item px-4 text-center mb-3 flex-row w-full items-center justify-center">
          Made with 🤍 by&nbsp;
          <a href="https://github.com/abolfazlchaman/visasponsors">
            <strong className="text-lg font-bold text-black">Abolfazl Chaman</strong>
          </a>
          .&nbsp;Data provided by dear&nbsp;
          <a href="https://github.com/SiaExplains/visa-sponsorship-companies">
            <strong className="text-lg font-bold text-black">Siavash Ghanbari</strong>
          </a>
          &nbsp;&&nbsp;
          <a href="https://github.com/SiaExplains/visa-sponsorship-companies#contributors">
            <strong className="text-lg font-bold text-black">contributors</strong>
          </a>
        </div>
        <div className="flex-item px-4 text-center mb-3 flex-row w-full items-center justify-center">
          Please feel free to contribute to the&nbsp;
          <a href="https://github.com/SiaExplains/visa-sponsorship-companies">
            <strong className="text-lg font-bold text-black">Data</strong>
          </a>
          &nbsp;or&nbsp;
          <a href="https://github.com/abolfazlchaman/visasponsors">
            <strong className="text-lg font-bold text-black">Website</strong>
          </a>
        </div>
        <div className="flex-item px-4 mb-3 text-center flex-row w-full items-center justify-center">
          Some icons by&nbsp;<a href="https://icons8.com">Icons8</a>
        </div>
      </footer>
    </main>
  );
}
