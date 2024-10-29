import WatchTwoToneIcon from "@mui/icons-material/WatchTwoTone";
import AlarmTwoToneIcon from "@mui/icons-material/AlarmTwoTone";
import style from './ClockMode.module.css'
import React from "react";

type Props = {
    clockStyle: boolean
    setClockStyle: (on: boolean) => void
}

export const ClockMode = ({clockStyle, setClockStyle}: Props) => {

    return(
        <div className={style.clock}>
            <div className={style.clockMode}
                 onClick={ () => setClockStyle(!clockStyle)
                 }>
                {clockStyle
                    ? <WatchTwoToneIcon fontSize={'large'} />
                    : <AlarmTwoToneIcon fontSize={'large'} />

                }
            </div>

            <div className={style.mePlease}>CLICK ME PLEASE</div>
        </div>

    )
}