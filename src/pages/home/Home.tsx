import ChartBox from '../../components/chatBox/ChartBox';
import TopBox from '../../components/topBox/TopBox';
import { barChartBoxRevenue, barChartBoxVisit, bigChartData, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser, pieChartData } from '../../data';
import './Home.scss';
import BarChartBox from '../../components/barCharBox/BarChartBox';
import PieChartBox from '../../components/pieChartBox/PieChartBox';
import BigChartBox from '../../components/bigChartBox/BigChartBox';


const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <TopBox />
            </div>
            <div className="box box2">
                <ChartBox {...chartBoxUser}/>
            </div>
            <div className="box box3">
                <ChartBox {...chartBoxProduct}/>
            </div>
            <div className="box box4">
                <PieChartBox {...pieChartData}/>
            </div>
            <div className="box box5">
                <ChartBox {...chartBoxConversion}/>
            </div>
            <div className="box box6">
                <ChartBox {...chartBoxRevenue}/>
            </div>
            <div className="box box7">
                <BigChartBox {...bigChartData} />
            </div>
            <div className="box box8">
                <BarChartBox {...barChartBoxVisit} />
            </div>
            <div className="box box9">
                <BarChartBox {...barChartBoxRevenue} />
            </div>
        </div>
    );
}

export default Home;