// export const method = async (req,res) =>{}

import axios from "axios";
import * as cheerio from "cheerio";

export const playerName = async (req, res) => {
  try {
    const playerName = req.params.player_name;
    const source = await axios.get(
      `https://www.google.com/search?q=${playerName}%20cricbuzz`
    );
    const $ = cheerio.load(source.data);

    const link = $('.kCrYT a[href*="/"]').attr("href");
    const cricbuzzPage = await axios.get(link.slice(7));
    const $cric = cheerio.load(cricbuzzPage.data);

    const profile = $cric("#playerProfile");
    const pc = profile.find(".cb-col.cb-col-100.cb-bg-white");

    // name country and image
    const name = pc.find("h1.cb-font-40").text();
    const country = pc.find("h3.cb-font-18.text-gray").text();
    const image = pc.find("img").attr("src");

    // personal information and rankings
    const personal = $cric(".cb-col.cb-col-60.cb-lst-itm-sm");
    const role = personal.eq(2).text().trim();
    const icc = $cric(".cb-col.cb-col-25.cb-plyr-rank.text-right");
    let tb = icc.eq(3).text().trim();

    const ob = icc.eq(4).text().trim();
    const twb = icc.eq(5).text().trim();
    const tbw = icc.eq(6).text().trim();
    const obw = icc.eq(7).text().trim();
    const twbw = icc.eq(8).text().trim();

    // summary of the stats
    const summary = $cric(".cb-plyr-tbl");
    const batting = summary.eq(0);
    const bowling = summary.eq(1);

    const cat = $cric(".cb-col-8");

    const batstat = batting.find(".text-right");
    // test
    const testmatches = batstat.eq(13).text();
    const testruns = batstat.eq(16).text();
    const tesths = batstat.eq(17).text();
    const testavg = batstat.eq(18).text();
    const testsr = batstat.eq(20).text();
    const test100 = batstat.eq(21).text();
    const test50 = batstat.eq(23).text();

    // odi
    const odimatches = batstat.eq(26).text();
    const odiruns = batstat.eq(29).text();
    const odihs = batstat.eq(30).text();
    const odiavg = batstat.eq(31).text();
    const odisr = batstat.eq(33).text();
    const odi100 = batstat.eq(34).text();
    const odi50 = batstat.eq(36).text();

    // t20
    const tmatches = batstat.eq(39).text();
    const truns = batstat.eq(42).text();
    const ths = batstat.eq(43).text();
    const tavg = batstat.eq(44).text();
    const tsr = batstat.eq(46).text();
    const t100 = batstat.eq(47).text();
    const t50 = batstat.eq(49).text();

    //ipl
    const iplmatches = batstat.eq(52).text();
    const iplruns = batstat.eq(55).text();
    const iplhs = batstat.eq(56).text();
    const iplavg = batstat.eq(57).text();
    const iplsr = batstat.eq(59).text();
    const ipl100 = batstat.eq(60).text();
    const ipl50 = batstat.eq(62).text();

    const bowstat = bowling.find(".text-right");

    const testballs = bowstat.eq(12).text();
    const testbruns = bowstat.eq(15).text();
    const testwickets = bowstat.eq(16).text();
    const testbbi = bowstat.eq(17).text();
    const testbbm = bowstat.eq(18).text();
    const testecon = bowstat.eq(19).text();
    const test5w = bowstat.eq(22).text();

    const odiballs = bowstat.eq(24).text();
    const odibruns = bowstat.eq(27).text();
    const odiwickets = bowstat.eq(28).text();
    const odibbi = bowstat.eq(29).text();
    const odibbm = bowstat.eq(30).text();
    const odiecon = bowstat.eq(31).text();
    const odi5w = bowstat.eq(34).text();

    const tballs = bowstat.eq(36).text();
    const tbruns = bowstat.eq(39).text();
    const twickets = bowstat.eq(40).text();
    const tbbi = bowstat.eq(41).text();
    const tbbm = bowstat.eq(42).text();
    const tecon = bowstat.eq(43).text();
    const t5w = bowstat.eq(46).text();

    const iplballs = bowstat.eq(48).text();
    const iplbruns = bowstat.eq(51).text();
    const iplwickets = bowstat.eq(52).text();
    const iplbbi = bowstat.eq(53).text();
    const iplbbm = bowstat.eq(54).text();
    const iplecon = bowstat.eq(55).text();
    const ipl5w = bowstat.eq(58).text();

    const iccRanking = [
      {
        "batting Rankings": {
          Test: tb,
          Odi: ob,
          T20i: twb,
        },
        "bowling rankings": {
          Test: tbw,
          Odi: obw,
          T20i: twbw,
        },
      },
    ];
    if (name === "Virat Kohli") {
      iccRanking[0] = "king👑 is always at number 1 position";
      iccRanking[1] = {
        "batting Rankings": {
          Test: tb,
          Odi: ob,
          T20i: twb,
        },
        "bowling rankings": {
          Test: tbw,
          Odi: obw,
          T20i: twbw,
        },
      };
    }

    const data1 = [
      {
        "Player Name": name,
        Country: country,
        Role: role,
        "Batting Career Summary 1": {
          Mode1: cat.eq(0).text(),
          Matches: testmatches,
          Runs: testruns,
          HS: tesths,
          Avg: testavg,
          SR: testsr,
          "100s": test100,
          "50s": test50,
        },
      },
    ];
    const data2 = [
      {
        "Batting Career Summary2": {
          Mode2: cat.eq(1).text(),
          Matches: odimatches,
          Runs: odiruns,
          HS: odihs,
          Avg: odiavg,
          SR: odisr,
          "100s": odi100,
          "50s": odi50,
        },
      },
    ];
    const data3 = [
      {
        "Batting Career Summary3": {
          Mode3: cat.eq(2).text(),
          Matches: tmatches,
          Runs: truns,
          HS: ths,
          Avg: tavg,
          SR: tsr,
          "100s": t100,
          "50s": t50,
        },
      },
    ];
    const data4 = [
      {
        "Batting Career Summary4": {
          Mode4: cat.eq(3).text(),
          Matches: iplmatches,
          Runs: iplruns,
          HS: iplhs,
          Avg: iplavg,
          SR: iplsr,
          "100s": ipl100,
          "50s": ipl50,
        },
      },
    ];
    const data5 = [
      {
        "Bowling Career Summary1": {
          Mode5: cat.eq(4).text(),
          Matches: testballs,
          Runs: testbruns,
          Wickets: testwickets,
          BBI: testbbi,
          BBM: testbbm,
          Econ: testecon,
          "5W": test5w,
        },
      },
    ];
    const data6 = [
      {
        "Bowling Career Summary2": {
          Mode6: cat.eq(5).text(),
          Matches: odiballs,
          Runs: odibruns,
          Wickets: odiwickets,
          BBI: odibbi,
          BBM: odibbm,
          Econ: odiecon,
          "5W": odi5w,
        },
      },
    ];
    const data7 = [
      {
        "Bowling Career Summary3": {
          Mode7: cat.eq(6).text(),
          Matches: tballs,
          Runs: tbruns,
          Wickets: twickets,
          BBI: tbbi,
          BBM: tbbm,
          Econ: tecon,
          "5W": t5w,
        },
      },
    ];
    const data8 = [
      {
        "Bowling Career Summary4": {
          Mode8: cat.eq(7).text(),
          Matches: iplballs,
          Runs: iplbruns,
          Wickets: iplwickets,
          BBI: iplbbi,
          BBM: iplbbm,
          Econ: iplecon,
          "5W": ipl5w,
        },
      },
    ];

    res.json({
      iccRanking,
      data1,
      data2,
      data3,
      data4,
      data5,
      data6,
      data7,
      data8,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching player data" });
  }
};

export const schedule = async (req, res) => {
  try {
    const link =
      "https://www.cricbuzz.com/cricket-schedule/upcoming-series/international";
    const response = await axios.get(link);
    const $ = cheerio.load(response.data);
    const page = $("div.cb-col-100.cb-col");
    const first = page.eq(1).find("div.cb-col-100.cb-col");
    const matches = first.map((i, el) => $(el).text()).get();

    res.json(matches);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

export const live = async (req, res) => {
  try {
    const link = "https://www.cricbuzz.com/cricket-match/live-scores";
    const response = await axios.get(link);
    const $ = cheerio.load(response.data);

    const page = $("div.cb-col.cb-col-100.cb-bg-white");
    const matches = page.find("div.cb-scr-wll-chvrn.cb-lv-scrs-col");

    const live_matches = matches.map((i, el) => $(el).text()).get();

    res.json(live_matches);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
