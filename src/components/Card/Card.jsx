import LinkedInIcon from '../Icons/LinkedInIcon';
import { prefix } from '@/utils/prefix';

export default function Card({ props }) {
  const { name, industry, city, country, linkedin } = props;
  const yearFounded = props['year-of-make'];
  const numberOfEmployees = props['number-of-employees'];

  return (
    <div className="flex flex-row m-4 min-w-[90vw] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:min-w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <div className="flex flex-col container justify-between text-[16px]">
        <div className="flex flex-row container justify-between text-[16px]">
          <strong>
            <h1 className="text-black dark:text-white m-2 min-h-[3rem] max-w-[60vw] md:max-w-[20vw] flex flex-col flex-wrap justify-center pl-2">
              {name || ''}
            </h1>
          </strong>
          <a
            className="cursor-pointer w-fit h-fit"
            href={linkedin}
            target="_blank"
            referrerPolicy="no-referrer">
            <LinkedInIcon />
          </a>
        </div>
        <hr />
        <h2 className="m-2 max-w-[60vw] md:max-w-[20vw] flex flex-col flex-wrap">
          {industry || ''}
        </h2>
        <h3 className="m-2 max-w-[60vw] md:max-w-[20vw] flex flex-col flex-wrap">
          {(city && `${city}`) + (country && `, ${country}`) || ''}
        </h3>
        <h1 className="m-2 max-w-[60vw] md:max-w-[20vw] flex flex-col flex-wrap">
          Founded: {yearFounded.length === 1 ? 'N/A' : yearFounded}
        </h1>
        <h1 className="m-2 max-w-[60vw] md:max-w-[20vw] flex flex-col flex-wrap">
          Employees: {numberOfEmployees || ''}
        </h1>
      </div>
    </div>
  );
}
