
import './App.css';
import data from './data.js'
import Header from './components/Header'
import TravelCard from './components/TravelCard'




function App() {
  const carddata = data.map(item=>{
    return(
      <TravelCard
      key={item.id}
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
