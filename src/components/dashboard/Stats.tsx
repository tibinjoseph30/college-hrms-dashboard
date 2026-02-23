import { statsData } from "../../data/stats";
import StatsCard from "./StatsCard";

const Stats = ()=> {
    return(
        <div className="grid grid-cols-3 gap-4">
            {statsData.map((stat)=> (
                <StatsCard key={stat.id} {...stat}/>
            ))}
        </div>
    )
}

export default Stats;