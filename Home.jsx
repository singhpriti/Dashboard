import Chart from "../../Component/Chart/Chart";
import Feature from "../../Component/Feature/Feature";
import "./Home.css";
// import Chart from "../../Components/Chart/Chart";


// import WidgetSm from "../../Components/WidgetSm/WidgetSm";
// import WidgetLg from "../../Components/WidgetLg/WidgetLg";
import WidgetSm from "../../Component/WidgetSm/WidgetSm";
import WidgetLg from "../../Component/WidgetLg/widgetLg";






export default function Home() {
    return (
        <div className="home">
            <Feature />
            <Chart />
            {/* <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> */}
            {<div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>}

        </div>
    );
}