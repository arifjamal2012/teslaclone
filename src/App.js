import './App.css';
import Header from './components/Header';
import Item from './components/Item';

import Accessories from './assets-20210116T153129Z-001/assets/Desktop-Accessories.jpg';
import Model3 from './assets-20210116T153129Z-001/assets/Desktop-Model3.jpeg';
import ModelS from './assets-20210116T153129Z-001/assets/Desktop-ModelS.jpeg';
import ModelX from './assets-20210116T153129Z-001/assets/Desktop-ModelX.jpeg';
import ModelY from './assets-20210116T153129Z-001/assets/Desktop-ModelY.jpeg';
import SolarPanel from './assets-20210116T153129Z-001/assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets-20210116T153129Z-001/assets/Desktop-SolarRoof.jpeg';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='app__itemsContainer'>
				<Item
					title='Lowest Cost Solar Panels in America'
					desc='Money-back guarantee'
					descLink=''
					backgroundImg={SolarPanel}
					leftBtnTxt='Order Now'
					leftBtnLink=''
					rightBtnTxt='Learn More'
					rightBtnLink=''
					twoButtons='true'
					first
				/>
				<Item
					title='Model S'
					desc='Monel'
					descLink=''
					backgroundImg={ModelS}
					leftBtnTxt='Order Now'
					leftBtnLink=''
					rightBtnTxt='Learn More'
					rightBtnLink=''
					twoButtons='true'
				/>
				<Item
					title='Model 3'
					desc='Money-back guarantee'
					descLink=''
					backgroundImg={Model3}
					leftBtnTxt='Order Now'
					leftBtnLink=''
					rightBtnTxt='Learn More'
					rightBtnLink=''
					twoButtons='true'
				/>
				<Item
					title='Model X'
					desc='Money-back guarantee'
					descLink=''
					backgroundImg={ModelX}
					leftBtnTxt='Order Now'
					leftBtnLink=''
					rightBtnTxt='Learn More'
					rightBtnLink=''
					twoButtons='true'
				/>
				<Item
					title='Model Y'
					desc='Money-back guarantee'
					descLink=''
					backgroundImg={ModelY}
					leftBtnTxt='Order Now'
					leftBtnLink=''
					rightBtnTxt='Learn More'
					rightBtnLink=''
					twoButtons='true'
				/>
				<Item
					title='Solar'
					desc='Money-back guarantee'
					descLink=''
					backgroundImg={SolarRoof}
					leftBtnTxt='Order Now'
					leftBtnLink=''
					rightBtnTxt='Learn More'
					rightBtnLink=''
					twoButtons='true'
				/>
				<Item
					title='Accessories'
					desc='Money-back guarantee'
					descLink=''
					backgroundImg={Accessories}
					leftBtnTxt='Shop Now'
					leftBtnLink=''
					rightBtnTxt='Learn More'
					rightBtnLink=''
				/>
			</div>
		</div>
	);
}

export default App;
