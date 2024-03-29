import React from 'react'
import Main from '../components/Main'
import requests from '../Requests'
import Row from '../components/Row'

export default function Home() {
  return (
    <div>
        <Main/>
        <Row rowID='1'title='Upcoming' fetchURL={requests.requestUpcoming}/>
        <Row rowID='2'title='Popular' fetchURL={requests.requestPopular}/>
        <Row rowID='3'title='Trending' fetchURL={requests.requestTrending}/>
        <Row rowID='4'title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row rowID='5'title='Top Horror' fetchURL={requests.requestHorror}/>
      
      
    </div>
  )
}
