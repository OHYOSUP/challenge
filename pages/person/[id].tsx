import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IFinanceAssets {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice: number;
}

interface Iblillions {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  financialAssets: IFinanceAssets[];
  thumbnail: string;
  squareImage: string;
  bio: string;
  about: string;
  netWorth: number;
}

function Id() {
  const {
    query: { id, title },
  } = useRouter();

  console.log(id, title);

  const [billionsInfo, setBillionsInfo] = useState<Iblillions>();

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://billions-api.nomadcoders.workers.dev/person/${id}`)
      ).json();
      setBillionsInfo(infoData);
    })();
  }, []);

  return (
    <>
      <div className="bg-[#2f3640] flex flex-col items-center text-white">
        <div className="max-w-5xl mt-20 ">
          <div className="mb-10 p-10 bg-[#353b48]">
            <div>
              <img src={billionsInfo?.squareImage} />
            </div>
            <div className="flex flex-col mt-10 gap-3">
              <span className="font-extrabold text-3xl">
                {billionsInfo?.name}
              </span>
              <span>
                Networth: {billionsInfo?.netWorth.toString().slice(0, 3)}{" "}
                Billion
              </span>
              <span>Country: {billionsInfo?.country}</span>
              <span>Industry: {billionsInfo?.industries}</span>
              <span>{billionsInfo?.bio}</span>
            </div>
          </div>

          <div className="bg-[#353b48] p-10">
            <div className="text-3xl font-extrabold p-4">
              <span>Finamcial Assets</span>
            </div>

            <div className="grid grid-cols-4 gap-4 p-4">
              {billionsInfo?.financialAssets.map((item) => (
                <div className="flex flex-col border border-white rounded-md p-2">
                  <span>Ticker: {item.ticker}</span>
                  <span>Shares: {item.sharePrice}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Id;
