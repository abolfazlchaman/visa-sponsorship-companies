'use client';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { useEffect, useState } from 'react';

import austriaData from '../../data/austria.json';
import englandData from '../../data/england.json';
import finlandData from '../../data/finland.json';
import franceData from '../../data/france.json';
import germanyData from '../../data/germany.json';
import irelandData from '../../data/ireland.json';
import italyData from '../../data/italy.json';
import netherlandsData from '../../data/netherlands.json';
import newzealandData from '../../data/new-zealand.json';
import norwayData from '../../data/norway.json';
import spainData from '../../data/spain.json';
import swedenData from '../../data/sweden.json';
import Card from '../Card/Card';

import logo from './../../../public/favicon.ico';

import passportIMG from '../../images/icons8-passport-100.png';
import passportWithVisaIMG from '../../images/icons8-passport-with-visa-100.png';
import visaStampIMG from '../../images/icons8-visa-stamp-100.png';
import ALL_COUNTRIES from '@/data';

function Main() {
  const [allCountriesData, setAllCountriesData] = useState(ALL_COUNTRIES);

  //sort alphabetically
  const AtoZ = allCountriesData.sort((a, b) =>
    a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0,
  );
  const ZtoA = allCountriesData.sort((a, b) =>
    a.name !== b.name ? (a.name > b.name ? -1 : 1) : 0,
  );

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

  //   const [region, setRegion] = useState('');
  useEffect(() => {
    setSelectedCountryData('');
    switch (country) {
      case '':
        setSelectedCountryData(allCountriesData);
        break;
      case 'Austria':
        setSelectedCountryData(austriaData);
        break;
      case 'United Kingdom':
        setSelectedCountryData(englandData);
        break;
      case 'Finland':
        setSelectedCountryData(finlandData);
        break;
      case 'France':
        setSelectedCountryData(franceData);
        break;
      case 'Germany':
        setSelectedCountryData(germanyData);
        break;
      case 'Ireland':
        setSelectedCountryData(irelandData);
        break;
      case 'Italy':
        setSelectedCountryData(italyData);
        break;
      case 'Netherlands':
        setSelectedCountryData(netherlandsData);
        break;
      case 'New Zealand':
        setSelectedCountryData(newzealandData);
        break;
      case 'Norway':
        setSelectedCountryData(norwayData);
        break;
      case 'Spain':
        setSelectedCountryData(spainData);
        break;
      case 'Sweden':
        setSelectedCountryData(swedenData);
        break;
      default:
        break;
    }
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
            whitelist={['AT', 'GB', 'FI', 'FR', 'DE', 'IE', 'IT', 'NL', 'NZ', 'NO', 'ES', 'SE']}
            name="country"
            className="w-[80vw] md:w-[80vw] lg:w-[25vw] font-mono bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={country}
            onChange={(val) => setCountry(val)}
          />

          {/* TODO when the data gets bigger and more accurate add the region filter too */}
          {/* <RegionDropdown
            whitelist={{
              GB: ['STN', 'LND'],
              AT: ['9'],
              FI: ['18'],
              FR: ['75C'],
              DE: ['BY', 'RP', 'NI', 'HE'],
              GR: ['BY', 'RP', 'NI', 'HE'],
            }}
            showDefaultOption={true}
            defaultOptionLabel="see all regions"
            disableWhenEmpty={true}
            name="country"
            className="w-80 font-mono bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            country={country}
            value={region}
            onChange={(val) => setRegion(val)}
          /> */}
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
            selectedCountryData?.length > 0 &&
            selectedCountryData?.map((company) =>
              industry !== 'all' ? (
                company.industry.toLowerCase() === industry.toLowerCase() && (
                  <Card props={company} />
                )
              ) : employeeCountFilter[0] !== 'all' ? (
                (company['number-of-employees'].includes('-')
                  ? parseInt(company['number-of-employees'].split('-')[0]) >= employeeCountFilter[0]
                  : parseInt(company['number-of-employees']) >= employeeCountFilter[0]) &&
                (company['number-of-employees'].includes('-')
                  ? parseInt(company['number-of-employees'].split('-')[1]) <= employeeCountFilter[1]
                  : parseInt(company['number-of-employees']) <= employeeCountFilter[1]) && (
                  <Card props={company} />
                )
              ) : industry !== 'all' && employeeCountFilter[0] !== 'all' ? (
                company.industry.toLowerCase() === industry.toLowerCase() &&
                (company['number-of-employees'].includes('-')
                  ? parseInt(company['number-of-employees'].split('-')[0]) >= employeeCountFilter[0]
                  : parseInt(company['number-of-employees']) >= employeeCountFilter[0]) &&
                (company['number-of-employees'].includes('-')
                  ? parseInt(company['number-of-employees'].split('-')[1]) <= employeeCountFilter[1]
                  : parseInt(company['number-of-employees']) <= employeeCountFilter[1]) && (
                  <Card props={company} />
                )
              ) : country === '' && industry !== 'all' && employeeCountFilter[0] === 'all' ? (
                company.industry.toLowerCase() === industry.toLowerCase() && (
                  <Card props={company} />
                )
              ) : country === '' && industry === 'all' && employeeCountFilter[0] !== 'all' ? (
                (company['number-of-employees'].includes('-')
                  ? parseInt(company['number-of-employees'].split('-')[0]) >= employeeCountFilter[0]
                  : parseInt(company['number-of-employees']) >= employeeCountFilter[0]) &&
                (company['number-of-employees'].includes('-')
                  ? parseInt(company['number-of-employees'].split('-')[1]) <= employeeCountFilter[1]
                  : parseInt(company['number-of-employees']) <= employeeCountFilter[1]) && (
                  <Card props={company} />
                )
              ) : country !== '' && industry !== 'all' && employeeCountFilter[0] !== 'all' ? (
                company?.country?.toLowerCase() === country?.toLowerCase() &&
                company?.industry?.toLowerCase() === industry?.toLowerCase() &&
                (company['number-of-employees'].includes('-')
                  ? parseInt(company['number-of-employees'].split('-')[0]) >= employeeCountFilter[0]
                  : parseInt(company['number-of-employees']) >= employeeCountFilter[0]) &&
                (company['number-of-employees'].includes('-')
                  ? parseInt(company['number-of-employees'].split('-')[1]) <= employeeCountFilter[1]
                  : parseInt(company['number-of-employees']) <= employeeCountFilter[1]) && (
                  <Card props={company} />
                )
              ) : country === '' && industry !== 'all' && employeeCountFilter[0] !== 'all' ? (
                company?.industry?.toLowerCase() === industry?.toLowerCase() &&
                (company['number-of-employees'].includes('-')
                  ? parseInt(company['number-of-employees'].split('-')[0]) >= employeeCountFilter[0]
                  : parseInt(company['number-of-employees']) >= employeeCountFilter[0]) &&
                (company['number-of-employees'].includes('-')
                  ? parseInt(company['number-of-employees'].split('-')[1]) <= employeeCountFilter[1]
                  : parseInt(company['number-of-employees']) <= employeeCountFilter[1]) && (
                  <Card props={company} />
                )
              ) : country !== '' && industry === 'all' && employeeCountFilter[0] === 'all' ? (
                company?.country?.toLowerCase() === country?.toLowerCase() && (
                  <Card props={company} />
                )
              ) : country === '' && industry === 'all' && employeeCountFilter[0] === 'all' ? (
                <Card props={company} />
              ) : (
                <Card props={company} />
              ),
            )}
          {showNothingFound && <h1>LOL NIGA</h1>}
        </div>
      </div>
    </section>
  );
}

export default Main;
