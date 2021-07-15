import React from "react";

const Navigation = () => {

    const yearsArray =[
        2019,
        2020,
        2021,
    ];

    const monthsArray =[
        'styczeń',
        'luty',
        'marzec',
        'kwiecień',
        'maj',
        'czerwiec',
        'lipiec',
        'sierpień',
        'wrzesień',
        'październik',
        'listopad',
        'grudzień',
    ];

    const monthGenerator = () => monthsArray.map(month => <li key={month}><a href="#">{month}</a></li>); 

    return (
        <ol className="nav__years">
            {yearsArray.map(year => 
            <li key={year}><a href="">{year}</a>
                <ul className="nav__years__months">
                    {monthGenerator()}
                </ul>            
            </li>)}
        </ol>
    )
}

export default Navigation;