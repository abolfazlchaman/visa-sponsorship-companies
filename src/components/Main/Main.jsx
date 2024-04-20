'use client';
import { CountryDropdown } from 'react-country-region-selector';
import { useEffect, useState } from 'react';

import { ALL_COUNTRIES, countryDataAliases } from '@/data';

import Card from '../Card/Card';

import logo from './../../../public/favicon.ico';
// import passportIMG from '@/images/icons8-passport-100.png';
import passportWithVisaIMG from '@/images/icons8-passport-with-visa-100.png';
import visaStampIMG from '@/images/icons8-visa-stamp-100.png';

export default function Main() {
  const [allCountriesData, setAllCountriesData] = useState(ALL_COUNTRIES);

  const allIndustriesData = [];
  allCountriesData
    .map(({ industry }) => {
      if (allIndustriesData?.find((item) => item.toLowerCase() === industry.toLowerCase())) {
        return null;
      } else {
        allIndustriesData.push(industry);
      }
    })
    ?.sort((a, b) => a > b);

  const [country, setCountry] = useState('');
  const [selectedCountryData, setSelectedCountryData] = useState('');
  const [industry, setIndustry] = useState('all');
  const [employeeCountFilter, setEmployeeCountFilter] = useState(['all']);

  const [showNothingFound, setShowNothingFound] = useState(false);
  useEffect(() => {
    setShowNothingFound(false);
  }, [country, selectedCountryData, industry, employeeCountFilter]);

  useEffect(() => {
    setSelectedCountryData('');
    setSelectedCountryData(countryDataAliases[country] || allCountriesData);
  }, [country]);

  return (
    <section
      id="main"
      className="flex flex-col w-full h-fit">
      <form className="z-10 py-5 h-fit space-y-3 lg:space-y-0 flex flex-col lg:flex-row justify-center align-center sticky top-0 bg-black border-b border-t border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-3xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
        <div className="justify-self-center self-center flex flex-row w-full justify-center">
          <CountryDropdown
            showDefaultOption={true}
            defaultOptionLabel="Show companies from all countries"
            whitelist={[
              'AT',
              'BE',
              'DK',
              'FI',
              'DE',
              'FR',
              'GB',
              'IE',
              'IT',
              'NL',
              'NZ',
              'NO',
              'ES',
              'SE',
              'TR',
            ]}
            name="country"
            className="w-[80vw] md:w-[80vw] lg:w-[25vw] font-mono bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={country}
            onChange={(val) => setCountry(val)}
          />
        </div>
        {allIndustriesData?.length > 0 && (
          <div className="justify-self-center self-center flex flex-row w-full justify-center">
            <select
              className="w-[80vw] md:w-[80vw] lg:w-[25vw] w-px80 font-mono bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultChecked="all"
              onChange={(e) => setEmployeeCountFilter(e.target.value.split(','))}>
              <option
                value="all"
                label="show all sizes">
                show all sizes
              </option>
              {[
                { label: '(<99) Very small businesses', range: { smallest: 0, biggest: 99 } },
                { label: '(100-1499) Small businesses', range: { smallest: 100, biggest: 1499 } },
                {
                  label: '(1500-1999) Mid-market enterprises',
                  range: { smallest: 1500, biggest: 1999 },
                },
                {
                  label: '(2000-19999) Large enterprises',
                  range: { smallest: 2000, biggest: 19999 },
                },
                {
                  label: '(>20000) Very Large enterprises',
                  range: { smallest: 20000, biggest: Number.MAX_SAFE_INTEGER },
                },
              ]?.map((countOption) => (
                <option
                  key={countOption.label}
                  value={[countOption.range.smallest, countOption.range.biggest]}>
                  {countOption.label}
                </option>
              ))}
            </select>
          </div>
        )}
        {allIndustriesData?.length > 0 && (
          <div className="sjustify-self-center self-center flex flex-row w-full justify-center">
            <select
              className="w-[80vw] md:w-[80vw] lg:w-[25vw] font-mono bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultChecked="all"
              onChange={(e) => setIndustry(e.target.value)}>
              <option
                value="all"
                label="show all industries">
                show all industries
              </option>
              {allIndustriesData?.map((industry, index) => (
                <option
                  className="flex flex-col flex-wrap max-w-[7vw]"
                  key={industry + index}
                  value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>
        )}
      </form>
      <div className="z-1 mt-5 top-0 w-full h-fit p-3 items-center justify-center font-mono text-sm flex">
        <div className="z-1 flex flex-wrap p-2  h-fit container justify-center align-center ">
          <div className="flex flex-col container">
            <h2 className="w-[100%] text-center my-3 py-2 text-[3rem] flex flex-row justify-center items-center">
              Visa bird
              <img
                src={logo.src}
                width="50rem"
                alt=""
                srcSet=""
              />
            </h2>
            <p className="z-1 flex flex-col lg:flex-row items-center align-cetner justify-center text-lg font-medium min-w-full border rounded-lg border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl">
              <br />
              <img
                className="w-14 h-14"
                src={passportWithVisaIMG.src}
                alt=""
              />
              Updated list of all&nbsp;
              <strong className="flex flex-nowrap w-fit font-500 text-2xl font-large text-center text-gray-950">
                companies around the world offering visa sponsorship
              </strong>
              &nbsp;perks!
              <img
                className="w-14 h-14 pb-1.5"
                src={visaStampIMG.src}
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
      <div className="flex container min-w-[100%] p-[18px] align-center justify-center">
        <div className="flex flex-row flex-wrap pt-8 pb-8 h-fit w-100 align-around justify-around">
          {selectedCountryData &&
            selectedCountryData.length > 0 &&
            selectedCountryData.map((company) => {
              //EMPS => Employees
              //EMP => Employee

              const countOfEMPS = company['number-of-employees'];
              const EMPCountHasDash = countOfEMPS.includes('-');
              const EMPCounts = EMPCountHasDash && countOfEMPS.split('-');
              const EMPCount = (!EMPCountHasDash && parseInt(company['number-of-employees'])) || 0;
              const lowestEmployeeCount = parseInt(EMPCounts[0]) || null;
              const highestEmployeeCount = parseInt(EMPCounts[1]) || null;
              const companyIndustry = company?.industry?.toLowerCase();
              const selectedIndustry = industry?.toLowerCase();
              const isSameIndustry = companyIndustry === selectedIndustry;
              const companyCountry = company?.country?.toLowerCase();
              const selectedCountry = country?.toLowerCase();
              const isSameCountry = companyCountry === selectedCountry;
              const isCountryEmptyString = country === '';
              const isIndustryAll = industry === 'all';
              const generateACart = <Card props={company} />;
              const EMPCountFilterLowest = employeeCountFilter[0];
              const EMPCountFilterHighest = employeeCountFilter[1];
              const isEMPCountFilterAll = EMPCountFilterLowest === 'all';

              return !isIndustryAll
                ? isSameIndustry && generateACart
                : !isEMPCountFilterAll
                ? (EMPCountHasDash
                    ? lowestEmployeeCount >= EMPCountFilterLowest
                    : EMPCount >= EMPCountFilterLowest) &&
                  (EMPCountHasDash
                    ? highestEmployeeCount <= EMPCountFilterHighest
                    : EMPCount <= EMPCountFilterHighest) &&
                  generateACart
                : isCountryEmptyString && !isIndustryAll && isEMPCountFilterAll
                ? isSameIndustry && generateACart
                : isCountryEmptyString && isIndustryAll && !isEMPCountFilterAll
                ? (EMPCountHasDash
                    ? lowestEmployeeCount >= EMPCountFilterLowest
                    : EMPCount >= EMPCountFilterLowest) &&
                  (EMPCountHasDash
                    ? highestEmployeeCount <= EMPCountFilterHighest
                    : EMPCount <= EMPCountFilterHighest) &&
                  generateACart
                : !isCountryEmptyString && !isIndustryAll && !isEMPCountFilterAll
                ? isSameCountry &&
                  isSameIndustry &&
                  (EMPCountHasDash
                    ? lowestEmployeeCount >= EMPCountFilterLowest
                    : EMPCount >= EMPCountFilterLowest) &&
                  (EMPCountHasDash
                    ? highestEmployeeCount <= EMPCountFilterHighest
                    : EMPCount <= EMPCountFilterHighest) &&
                  generateACart
                : isCountryEmptyString && !isIndustryAll && !isEMPCountFilterAll
                ? isSameIndustry &&
                  (EMPCountHasDash
                    ? lowestEmployeeCount >= EMPCountFilterLowest
                    : EMPCount >= EMPCountFilterLowest) &&
                  (EMPCountHasDash
                    ? highestEmployeeCount <= EMPCountFilterHighest
                    : EMPCount <= EMPCountFilterHighest) &&
                  generateACart
                : !isCountryEmptyString && isIndustryAll && isEMPCountFilterAll
                ? isSameCountry && generateACart
                : isCountryEmptyString && isIndustryAll && isEMPCountFilterAll
                ? generateACart
                : generateACart;
            })}
          {showNothingFound && <h1>No companies found !</h1>}
        </div>
      </div>
    </section>
  );
}