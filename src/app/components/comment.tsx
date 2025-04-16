const comment = () => {
    return (
        <div className="mx-8 my-10 inline-block">
            <h2 className="text-2xl my-2">予算</h2>
                <ul className="list-disc pl-8">
                    <li>
                        ホテル二泊＆往復新幹線（博多-新大阪）：¥40000 ~ 60000<br/>
                        <a href="https://travel.rakuten.co.jp/package/jr/hotel_list/cnt_japan/sub_osaka/?departure=81&placeOfStay=&noOfUnits=1&adults=6&childElementary=0&infantBedMeal=0&infantNone=0&departureDate=2025-05-14&returnDate=2025-05-16&checkInDate=2025-05-14&checkOutDate=2025-05-16">参考：楽天トラベル</a>
                    </li>
                    <li>観光費、土産代：¥30000 ~ 40000</li>
                </ul>
            <h2 className="text-2xl my-2">持ち物</h2>
            <ul className="list-disc pl-8">
                <li>二泊三日の着替え</li>
                <li>洗面用具（歯ブラシ、タオル、綿棒、カミソリは一応ホテルにもあるはず）</li>
                <li>充電器</li>
                <li>貴重品（財布、身分証、学生証、一応クレカ、スマホ）</li>
                <li>新幹線チケット</li>
                <li>折りたたみ傘</li>
            </ul>
        </div>
    );
}

export default comment;