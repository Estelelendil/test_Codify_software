import { type NextApiRequest, type NextApiResponse } from "next";
const getRandomData = (max = 6000) => {
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
              January: null,
              February: null,
              March: null,
              April: null,
              May: null,
              June: null,
            },
            month: {
              "1": null,
              "2": null,
              "3": null,
              "4": null,
              "5": null,
              "6": null,
              "7": null,
              "8": null,
              "9": null,
              "10": null,
              "11": null,
              "12": null,
              "13": null,
              "14": null,
              "15": null,
              "16": null,
              "17": null,
              "18": null,
              "19": null,
              "20": null,
              "21": null,
              "22": null,
              "23": null,
              "24": null,
              "25": null,
              "26": null,
              "27": null,
              "28": null,
              "29": null,
              "30": null,
              "31": null,
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
