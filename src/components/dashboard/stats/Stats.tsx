import { statsData } from "../../../data/stats";
import StatsCard from "./StatsCard";

const Stats = ()=> {
    return(
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
            {statsData.map((stat)=> (
                <StatsCard key={stat.id} {...stat}/>
            ))}
        </div>
    )
}

export default Stats;