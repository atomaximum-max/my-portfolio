import { useEffect, useState } from "react";
import "./MoscowClock.scss";

export const MoscowClock = () => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            const timeFormatted = new Intl.DateTimeFormat("ru-RU", {
                timeZone: "Europe/Moscow",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            }).format(now);
            setTime(timeFormatted);

            const dateFormatted = new Intl.DateTimeFormat("ru-RU", {
                timeZone: "Europe/Moscow",
                day: "2-digit",
                month: "short",
                weekday: "short",
            }).format(now).replace(/\./g, "");
            setDate(dateFormatted);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="moscow-clock">
            <span className="moscow-clock__dot" />
            <span className="moscow-clock__time">{time}</span>
            <span className="moscow-clock__separator">|</span>
            <span className="moscow-clock__date">{date}</span>
            <span className="moscow-clock__separator">|</span>
            <span className="moscow-clock__location">Москва, Россия</span>
        </div>
    );
};