"use client"
import Image from "next/image";
const list = () => {
    const planList = [
        {
            "day": "Day1",
            "plans": [
                {
                    "name": "嵐山竹林",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
                {
                    "name": "嵐山竹林",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
                {
                    "name": "嵐山竹林",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
                {
                    "name": "嵐山竹林",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
                {
                    "name": "嵐山竹林",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
                {
                    "name": "嵐山竹林",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                },
                {
                    "name": "嵐山竹林",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
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
                }
            ]
        },
        {
            "day": "Day3",
            "plans": [
                {
                    "name": "嵐山竹林",
                    "link": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2683",
                    "description": "嵐山には多くの食べ歩きができる",
                    "image": "/images/arashiyama.jpg",
                }
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
                                            <a href={plan.link}>リンク</a>
                                            <p>{plan.description}</p>
                                        </div>
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