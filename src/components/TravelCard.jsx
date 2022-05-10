


function TravelCard(props){
   
    return(
       
        <section className='flex  px-[300px] pt-[100px] pb-[20px] items-center'>
        <div className='mr-[30px]'>
          <img src={props.imageUrl} alt="place" className="w-72 h-80 object-cover rounded" />
        </div>
        <div >
            <div className='flex mb-[30px]'>
              <img className='mr-[10px]' src='travel-journel/images/pin.svg' alt='pin'/>
              <p className='mr-[15px]'>{props.location}</p>
              <a href={props.googleMapsUrl}>View on Google Map</a>
            </div>
            <h1 className='text-[85px] font-bold leading-8 mb-[90px] '>{props.title}</h1>
            <p className='text-[30.24px] font-bold leading-3 mb-[30px] ' >{props.startDate} - {props.endDate}</p>
            <p className=' text-[18.24px] max-w-[800px]'>{props.description}</p>

        </div>
      </section>
    )
}

export default TravelCard