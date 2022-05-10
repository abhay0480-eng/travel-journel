
import './App.css';

import Header from './components/Header'
import TravelCard from './components/TravelCard'
import data from './data'



function App() {
  const carddata = data.map(item=>{
    return(
      <TravelCard
      {...item}
    />
    )
    
  })
  return (
    <section>
     <Header/>
     
   {carddata}
      
    </section>
  );
}

export default App;
