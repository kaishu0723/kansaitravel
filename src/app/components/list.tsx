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
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "有名な串カツ屋らしい",
                    "image": "/images/daruma.jpg",
                },
                {
                    "name": "海遊館",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/kaiyukan.jpg",
                },
                {
                    "name": "あべのハルカス",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/abeno.jpg",
                },
                {
                    "name": "山賊鶴橋",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
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
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
                {
                    "name": "八坂通",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
                {
                    "name": "道頓堀",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
                {
                    "name": "卓上サワーおすすめ屋難波",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
                {
                    "name": "梅田スカイビル",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
            ]
        },
        {
            "day": "Day3",
            "plans": [
                {
                    "name": "奈良公園",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
                {
                    "name": "東大寺",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
                {
                    "name": "奈良グルメ",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
                {
                    "name": "明石海峡大橋",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
                {
                    "name": "メリケンパーク",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
                {
                    "name": "Atoa",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
                {
                    "name": "神戸グルメ",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
            ]
        },
    ]
    return (
        <div>
            {
                planList.map((day, dayId) => (
                    <section key={dayId} className="m-10">
                        <h2 className="text-4xl my-4">{day.day}</h2>
                        <ul className="flex gap-4 overflow-x-scroll">
                            {
                                day.plans.map((plan, planId) => (

                                    <li key={planId} className="min-w-[320px] h-[320px] my-4 relative shadow-md rounded-md overflow-hidden">
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