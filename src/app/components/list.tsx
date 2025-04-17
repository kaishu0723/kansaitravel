"use client"
import Image from "next/image";
const list = () => {
    const planList = [
        {
            "day": "Day1",
            "plans": [
                {
                    "name": "通天閣",
                    "link": "https://www.tsutenkaku.co.jp/",
                    "description": "滑り台がある（有料）",
                    "image": "/images/tsutenkaku.jpg",
                },
                {
                    "name": "串カツだるま",
                    "link": "https://www.kushikatu-daruma.com/location/tsutenkaku",
                    "description": "有名な串カツ屋らしい",
                    "image": "/images/daruma.jpg",
                },
                {
                    "name": "海遊館",
                    "link": "https://www.kaiyukan.com/",
                    "description": "正直二回行こうとは思わない水族館",
                    "image": "/images/kaiyukan.jpg",
                },
                {
                    "name": "あべのハルカス",
                    "link": "https://www.abenoharukas-300.jp/index.html",
                    "description": "なにがあるかは知らん",
                    "image": "/images/abeno.jpg",
                },
                {
                    "name": "山賊鶴橋",
                    "link": "https://sanzoku1217.owst.jp/",
                    "description": "韓国式焼肉、鶴橋は韓流のイメージ",
                    "image": "/images/sanzoku.jpg",
                },
            ]
        },
        {
            "day": "Day2",
            "plans": [
                {
                    "name": "嵐山竹林",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
                {
                    "name": "瑠璃光院",
                    "link": "https://rurikoin.komyoji.com/",
                    "description": "おそらく写真詐欺だろうけど行きたい",
                    "image": "/images/rurikouin.jpg",
                },
                {
                    "name": "八坂通",
                    "link": "https://www.mapple.net/spot/26014238/",
                    "description": "食べ歩きができる",
                    "image": "/images/yasaka.jpg",
                },
                {
                    "name": "道頓堀",
                    "link": "https://osaka-info.jp/spot/dotonbori/",
                    "description": "飛び込む予定があれば飛んでください",
                    "image": "/images/doutonbori.jpg",
                },
                {
                    "name": "卓上サワーおすすめ屋難波",
                    "link": "https://osusumeya.co.jp/store/nanba/",
                    "description": "卓上にレモンサワーがあるらしい",
                    "image": "/images/osusume.jpg",
                },
                {
                    "name": "梅田スカイビル",
                    "link": "https://www.skybldg.co.jp/",
                    "description": "空中庭園は男と行くところではないが、他国のビールが飲める",
                    "image": "/images/skybill.jpg",
                },
            ]
        },
        {
            "day": "Day3",
            "plans": [
                {
                    "name": "奈良公園",
                    "link": "https://narashikanko.or.jp/spot/detail_10089.html",
                    "description": "鹿しかおらん",
                    "image": "/images/nara.jpg",
                },
                {
                    "name": "東大寺",
                    "link": "https://www.todaiji.or.jp/",
                    "description": "とりあえず穴埋めで入れてるだけ",
                    "image": "/images/toudai.jpg",
                },
                {
                    "name": "奈良グルメ",
                    "link": "https://www.nta.co.jp/media/tripa/articles/TPTtI",
                    "description": "奈良の有名なグルメってなにがありますか？",
                    "image": "/images/narag.png",
                },
                {
                    "name": "メリケンパーク",
                    "link": "https://www.feel-kobe.jp/area-guide/meriken-harbor/",
                    "description": "まじでなんもないけど、Atoaが近いのと周辺の街並みがキレイ",
                    "image": "/images/meriken.jpg",
                },
                {
                    "name": "Atoa",
                    "link": "https://atoa-kobe.jp/",
                    "description": "水族館×アート",
                    "image": "/images/atoa.jpg",
                },
                {
                    "name": "神戸グルメ",
                    "link": "https://tabelog.com/hyogo/A2801/",
                    "description": "神戸牛が食べたい",
                    "image": "/images/kobeg.jpg",
                },
            ]
        },
    ]
    return (
        <div>
            {
                planList.map((day, dayId) => (
                    <section key={dayId} className="m-10">
                        <h2 className="text-4xl my-4">{day.day} →</h2>
                        <ul className="flex gap-4 overflow-x-scroll">
                            {
                                day.plans.map((plan, planId) => (

                                    <li key={planId} className="min-w-[280px] h-[280px] my-4 relative shadow-md rounded-md overflow-hidden">
                                        <a href={plan.link}>
                                            <div className="w-[100%] h-2/3 relative">
                                                <Image
                                                    src={plan.image}
                                                    alt={plan.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="w-[100%] h-1/3 p-4 relative text-gray-400">
                                                <h3 className="text-black text-[18px]">{plan.name}</h3>
                                                <p>{plan.description}</p>
                                            </div>
                                        </a>
                                    </li>

                                ))
                            }
                        </ul>

                    </section>
                ))
            }
        </div>
    );
}

export default list;