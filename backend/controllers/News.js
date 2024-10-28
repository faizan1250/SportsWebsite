import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import moment from "moment-timezone";

const headers = {
  authority: "inshorts.com",
  accept: "/",
  "accept-language": "en-GB,en;q=0.5",
  "content-type": "application/json",
  referer: "https://inshorts.com/en/read",
  "sec-ch-ua": '"Not/A)Brand";v="99", "Brave";v="115", "Chromium";v="115"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"macOS"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "sec-gpc": "1",
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
};

const params = {
  category: "top_stories",
  max_limit: "10",
  include_card_data: "true",
};

export const getNews = async (category) => {
  let response;
  if (category == "all") {
    response = await axios.get(
      "https://inshorts.com/api/en/news?category=all_news&max_limit=10&include_card_data=true"
    );
  } else {
    response = await axios.get(
      `https://inshorts.com/api/en/search/trending_topics/${category}`,
      { headers, params }
    );
  }

  let news_data;
  try {
    news_data = response.data.data.news_list;
  } catch (e) {
    console.log(response.data);
    news_data = null;
  }

  const newsDictionary = {
    success: true,
    category: category,
    data: [],
  };

  if (!news_data) {
    newsDictionary.success = response.data.error;
    newsDictionary.error = "fuck off";
    return newsDictionary;
  }

  // for (const rank of news_data) {
  // try {
  //   const news = rank.news_obj;
  //   const author = news.author_name;
  //   const title = news.title;
  //   const imageUrl = news.image_url;
  //   const url = news.shortened_url;
  //   const content = news.content;
  //   const timestamp = news.created_at / 1000;
  //   const dt_utc = moment.utc(timestamp * 1000);
  //   const dt_ist = dt_utc.tz("Asia/Kolkata");
  //   const date = dt_ist.format("dddd, DD MMMM, YYYY");
  //   const time = dt_ist.format("hh:mm a").toLowerCase();
  //   const readMoreUrl = news.source_url;

  //   const newsObject = {
  //     id: uuidv4(),
  //     title: title,
  //     imageUrl: imageUrl,
  //     url: url,
  //     content: content,
  //     author: author,
  //     date: date,
  //     time: time,
  //     readMoreUrl: readMoreUrl,
  //   };
  //   newsDictionary.data.push(newsObject);
  // } catch (e) {
  //   console.log(rank);
  // }
  // }
  for (let i = 0; i < news_data.length; i++) {
    try {
      const news = news_data[i].news_obj;
      const author = news.author_name;
      const title = news.title;
      const imageUrl = news.image_url;
      const url = news.shortened_url;
      const content = news.content;
      const timestamp = news.created_at / 1000;
      const dt_utc = moment.utc(timestamp * 1000);
      const dt_ist = dt_utc.tz("Asia/Kolkata");
      const date = dt_ist.format("dddd, DD MMMM, YYYY");
      const time = dt_ist.format("hh:mm a").toLowerCase();
      const readMoreUrl = news.source_url;

      const newsObject = {
        id: uuidv4(),
        title: title,
        imageUrl: imageUrl,
        url: url,
        content: content,
        author: author,
        date: date,
        time: time,
        readMoreUrl: readMoreUrl,
      };
      newsDictionary.data.push(newsObject);
    } catch (e) {
      console.log(e);
    }
  }

  return newsDictionary;
};