import { type NextApiRequest, type NextApiResponse } from "next";
const getRandomData = (max = 10000) => {
  return Math.trunc(Math.random() * max);
};

export type PeriodKey = "year" | "half_year" | "month";

export type PeriodData = {
  earnings: {
    year_sum: number;
    six_month_sum: number;
    last_month_sum: number;
  };
  graph: Record<PeriodKey, Record<string, number | null>>;
};
export type ApiData = {
  nickname: string;
  finance: {
    periods: PeriodData[];
    total: {
      sum: number;
      donators_count: number;
      regular_donators_count: number;
    };
  };
  gift_settings: {
    small_gift: number | null;
    medium_gift: number | null;
    big_gift: number | null;
  };
  gift_stats: {
    small_gift_count: number;
    small_gift_sum: number;
    small_medium_count: number;
    small_medium_sum: number;
    small_big_count: number;
    small_big_sum: number;
  };
};
export default function handler(request: NextApiRequest, response: NextApiResponse) {
  response.status(200).json({
    nickname: "",
    finance: {
      total: {
        sum: 0,
        donators_count: 0,
        regular_donators_count: 0,
      },
      periods: [
        {
          earnings: {
            year_sum: 0,
            six_month_sum: 0,
            last_month_sum: 0,
          },
          graph: {
            year: {
              January: getRandomData(),
              February: getRandomData(),
              March: getRandomData(),
              April: getRandomData(),
              May: getRandomData(),
              June: getRandomData(),
              July: getRandomData(),
              August: getRandomData(),
              September: getRandomData(),
              October: getRandomData(),
              November: getRandomData(),
              December: getRandomData(),
            },
            half_year: {
              January: getRandomData(),
              February: getRandomData(),
              March: getRandomData(),
              April: getRandomData(),
              May: getRandomData(),
              June: getRandomData(),
            },
            month: {
              "1": getRandomData(),
              "2": getRandomData(),
              "3": getRandomData(),
              "4": getRandomData(),
              "5": getRandomData(),
              "6": getRandomData(),
              "7": getRandomData(),
              "8": getRandomData(),
              "9": getRandomData(),
              "10": getRandomData(),
              "11": getRandomData(),
              "12": getRandomData(),
              "13": getRandomData(),
              "14": getRandomData(),
              "15": getRandomData(),
              "16": getRandomData(),
              "17": getRandomData(),
              "18": getRandomData(),
              "19": getRandomData(),
              "20": getRandomData(),
              "21": getRandomData(),
              "22": getRandomData(),
              "23": getRandomData(),
              "24": getRandomData(),
              "25": getRandomData(),
              "26": getRandomData(),
              "27": getRandomData(),
              "28": getRandomData(),
              "29": getRandomData(),
              "30": getRandomData(),
              "31": getRandomData(),
            },
          },
        },
      ],
    },
    gift_settings: {
      small_gift: null,
      medium_gift: null,
      big_gift: null,
    },
    gift_stats: {
      small_gift_count: 0,
      small_gift_sum: 0,
      small_medium_count: 0,
      small_medium_sum: 0,
      small_big_count: 0,
      small_big_sum: 0,
    },
  });
}
