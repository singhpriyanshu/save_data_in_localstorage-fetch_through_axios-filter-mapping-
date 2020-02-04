import React, { Component } from 'react'


export class Fillter extends Component {
    constructor(props){
        super(props)
        this.state={
            
         countries:[{"id":1,"countryName":"Russia","countryCode":"RUS","region":"CIS","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-09-01T06:54:27.000Z","updatedAt":"2019-09-01T06:54:27.000Z"},{"id":2,"countryName":"Belarus","countryCode":"BLR","region":"CIS","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-09-01T06:54:27.000Z","updatedAt":"2019-09-01T06:54:27.000Z"},{"id":3,"countryName":"Brazil","countryCode":"BRA","region":"LATAM","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":0,"createdAt":"2019-09-01T06:54:27.000Z","updatedAt":"2019-09-01T06:54:27.000Z"},{"id":4,"countryName":"Mexico","countryCode":"MEX","region":"LATAM","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":0,"createdAt":"2019-09-01T06:54:27.000Z","updatedAt":"2019-09-01T06:54:27.000Z"},{"id":5,"countryName":"Colombia","countryCode":"COL","region":"LATAM","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":0,"createdAt":"2019-09-01T06:54:27.000Z","updatedAt":"2019-09-01T06:54:27.000Z"},{"id":6,"countryName":"Peru","countryCode":"PER","region":"LATAM","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:53:02.000Z","updatedAt":"2019-10-21T09:53:02.000Z"},{"id":7,"countryName":"Argentina","countryCode":"ARG","region":"LATAM","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:53:08.000Z","updatedAt":"2019-10-21T09:53:08.000Z"},{"id":8,"countryName":"Japan","countryCode":"JPN","region":"APAC","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:53:14.000Z","updatedAt":"2019-10-21T09:53:14.000Z"},{"id":9,"countryName":"Malaysia","countryCode":"MYS","region":"APAC","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:53:20.000Z","updatedAt":"2019-10-21T09:53:20.000Z"},{"id":10,"countryName":"Thailand","countryCode":"THA","region":"APAC","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:53:27.000Z","updatedAt":"2019-10-21T09:53:27.000Z"},{"id":11,"countryName":"Indonesia","countryCode":"IDN","region":"APAC","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:53:33.000Z","updatedAt":"2019-10-21T09:53:33.000Z"},{"id":12,"countryName":"India","countryCode":"IND","region":"APAC","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:53:38.000Z","updatedAt":"2019-10-21T09:53:38.000Z"},{"id":13,"countryName":"Singapore","countryCode":"SGP","region":"APAC","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:53:44.000Z","updatedAt":"2019-10-21T09:53:44.000Z"},{"id":14,"countryName":"Taiwan","countryCode":"TWN","region":"APAC","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:53:50.000Z","updatedAt":"2019-10-21T09:53:50.000Z"},{"id":15,"countryName":"Hong Kong","countryCode":"HKG","region":"APAC","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:53:55.000Z","updatedAt":"2019-10-21T09:53:55.000Z"},{"id":16,"countryName":"Philippines","countryCode":"PHL","region":"APAC","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:54:02.000Z","updatedAt":"2019-10-21T09:54:02.000Z"},{"id":17,"countryName":"Australia","countryCode":"AUS","region":"ANZ","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:54:09.000Z","updatedAt":"2019-10-21T09:54:09.000Z"},{"id":18,"countryName":"New Zealand","countryCode":"NZL","region":"ANZ","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:54:14.000Z","updatedAt":"2019-10-21T09:54:14.000Z"},{"id":19,"countryName":"Uganda","countryCode":"UGA","region":"AFRICA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:54:20.000Z","updatedAt":"2019-10-21T09:54:20.000Z"},{"id":20,"countryName":"Ecuador","countryCode":"ECU","region":"LATAM","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:54:26.000Z","updatedAt":"2019-10-21T09:54:26.000Z"},{"id":21,"countryName":"United Arab Emirates","countryCode":"UAE","region":"MENA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:54:31.000Z","updatedAt":"2019-10-21T09:54:31.000Z"},{"id":22,"countryName":"Saudi Arabia","countryCode":"SUA","region":"MENA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:54:37.000Z","updatedAt":"2019-10-21T09:54:37.000Z"},{"id":23,"countryName":"South Africa","countryCode":"ZAF","region":"AFRICA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:54:42.000Z","updatedAt":"2019-10-21T09:54:42.000Z"},{"id":24,"countryName":"Ukraine","countryCode":"UKR","region":"ROW or EURASIAN","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:54:48.000Z","updatedAt":"2019-10-21T09:54:48.000Z"},{"id":25,"countryName":"Venezuela","countryCode":"VEN","region":"LATAM","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:54:54.000Z","updatedAt":"2019-10-21T09:54:54.000Z"},{"id":26,"countryName":"China","countryCode":"CHN","region":"APAC","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:54:59.000Z","updatedAt":"2019-10-21T09:54:59.000Z"},{"id":27,"countryName":"Korea","countryCode":"KOR","region":"APAC","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:55:05.000Z","updatedAt":"2019-10-21T09:55:05.000Z"},{"id":28,"countryName":"Kenya","countryCode":"KEN","region":"AFRICA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:55:11.000Z","updatedAt":"2019-10-21T09:55:11.000Z"},{"id":29,"countryName":"Israel","countryCode":"ISR","region":"MENA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:55:17.000Z","updatedAt":"2019-10-21T09:55:17.000Z"},{"id":30,"countryName":"Bahrain","countryCode":"BHR","region":"MENA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:55:23.000Z","updatedAt":"2019-10-21T09:55:23.000Z"},{"id":31,"countryName":"Egypt","countryCode":"EGY","region":"MENA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:55:28.000Z","updatedAt":"2019-10-21T09:55:28.000Z"},{"id":32,"countryName":"Nigeria","countryCode":"NGA","region":"AFRICA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:55:34.000Z","updatedAt":"2019-10-21T09:55:34.000Z"},{"id":33,"countryName":"Panama","countryCode":"PAN","region":"LATAM","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:55:39.000Z","updatedAt":"2019-10-21T09:55:39.000Z"},{"id":34,"countryName":"Guatemala","countryCode":"GTM","region":"LATAM","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:55:45.000Z","updatedAt":"2019-10-21T09:55:45.000Z"},{"id":35,"countryName":"Chile","countryCode":"CHL","region":"LATAM","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:55:51.000Z","updatedAt":"2019-10-21T09:55:51.000Z"},{"id":36,"countryName":"Kuwait","countryCode":"KWT","region":"MENA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:55:56.000Z","updatedAt":"2019-10-21T09:55:56.000Z"},{"id":37,"countryName":"Qatar","countryCode":"QAT","region":"MENA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:56:02.000Z","updatedAt":"2019-10-21T09:56:02.000Z"},{"id":38,"countryName":"Oman","countryCode":"OMN","region":"MENA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:56:08.000Z","updatedAt":"2019-10-21T09:56:08.000Z"},{"id":39,"countryName":"Iraq","countryCode":"IRQ","region":"MENA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:56:13.000Z","updatedAt":"2019-10-21T09:56:13.000Z"},{"id":40,"countryName":"Iran","countryCode":"IRN","region":"MENA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:56:19.000Z","updatedAt":"2019-10-21T09:56:19.000Z"},{"id":41,"countryName":"Yemen","countryCode":"YEM","region":"MENA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:56:26.000Z","updatedAt":"2019-10-21T09:56:26.000Z"},{"id":42,"countryName":"Loas","countryCode":"LAO","region":"APAC","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:56:31.000Z","updatedAt":"2019-10-21T09:56:31.000Z"},{"id":43,"countryName":"Myanmar","countryCode":"MMR","region":"APAC","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:56:37.000Z","updatedAt":"2019-10-21T09:56:37.000Z"},{"id":44,"countryName":"Algeria","countryCode":"DZA","region":"MENA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:56:43.000Z","updatedAt":"2019-10-21T09:56:43.000Z"},{"id":45,"countryName":"Tunisia","countryCode":"TUN","region":"MENA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:56:48.000Z","updatedAt":"2019-10-21T09:56:48.000Z"},{"id":46,"countryName":"Morocco","countryCode":"MAR","region":"MENA","status":1,"createdBy":1,"updatedBy":1,"isSubscribed":1,"createdAt":"2019-10-21T09:56:54.000Z","updatedAt":"2019-10-21T09:56:54.000Z"}]

       }
  }

   
  render() {
    const country= this.state.countries.filter(function(hello)
  
    {
      // if (hello.region==='ANZ'&& hello.countryName==='Australia')
      if (hello.region==='APAC')

    {
      return true;
    }});
       
    
    return (

           <div style={{textAlign:"center"}}>

  
              {/* console.log(country)  */}

           {/* { this.state.countries.map((country)=> <li key={country}> */}
          {/* {this.state.countries.map((countries)=> <li key={countries}>
                                    {countries.id} {}
                                    {countries.countryName} </li>)} */}

{country.map((country)=> <li key={country}>{country.id}{country.countryName}</li>)}
            
            </div>
     )
    }
}

export default Fillter
