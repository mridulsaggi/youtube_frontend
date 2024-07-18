import React, { useEffect, useState } from 'react'
import "../feed/feed.css"
import "./searchpage.css"
import "../loaders/loader.css"
import Videopage from '../videopage/videopage'
import { Fetchapi } from '../../utils/fetchapi'
import { useParams } from 'react-router-dom'
const Searchpage = () => {
    const [selectedcategory, setselectedcategory] = useState("New")
    const [loading, setloading] = useState(true)
    const [videos, setvideo] = useState([])
    const {searchTerm}=useParams();
    useEffect(() => {
        setloading(true);
        Fetchapi(`search?part=snippet&q=${searchTerm}`).then(data => setvideo(data.items))
        setloading(false)
        
    }, [searchTerm]);
    if(loading) return (
        <span class="loader"></span>
    )
    return (
        <div className='feedpage'>
            <div className="below">
            <div className="name spname"><p className='sp'>Search result for</p>{searchTerm}<span>video</span>
            </div>
            <Videopage videos={videos}/>
            </div>
        </div>
    )
}

export default Searchpage;
