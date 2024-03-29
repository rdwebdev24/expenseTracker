import React, { useEffect, useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export const Sidebar = ({searchTransaction,filterTransaction}) => {
    const navigate = useNavigate();
    const [showAnalytics,setShowAnalytics] = useState(false)
    const closeSidebar = () => {document.querySelector('#sidebar').style.transform = 'translateX(-100%)'}
    const [showSingleSearch,setShowSingleSearch] = useState({});

    const openSingleSeachResult = (item) => {   
        document.querySelector('.singleSearchRes').style.display = 'flex'
        setShowSingleSearch(item);
    }   

  return (
    <div id='sidebar'>

        <div style={{borderLeft:`3px solid ${Number(showSingleSearch.Amount)<0?"#dc3545":"green"}`}} className="singleSearchRes">
            <div onClick={()=>{ document.querySelector('.singleSearchRes').style.display = 'none'}} className="closeSingleSearch"><AiOutlineClose/></div>
            <p>{showSingleSearch?.date}</p>
            <div style={{display:"flex",gap:"1rem"}}>
                <span>{showSingleSearch?.Name}</span>
                <span>{showSingleSearch?.Amount}</span>
            </div>
            <p>{showSingleSearch?.Desc}</p>
        </div>

        <div className="search-box">
            <input onChange={(e)=>searchTransaction(e)} placeholder='seach transaction' autoComplete="off" type="search" id="seachinp" />
            <div className="search-icon"><BsSearch/></div>
            <div className="search-list">
                {filterTransaction.map((item,index)=>{
                    return (
                        <div onClick={()=>openSingleSeachResult(item)} style={{borderLeft:`3px solid ${Number(item.Amount)<0?"#dc3545":"green"}`}} key={index} className="search-list-item">
                            <span>{item.Name}</span>
                            <span>{item.Amount}</span>
                        </div>
                    )
                })}
            </div>
        </div>
        
        <div className="sidebar-opt">
            <div onClick={()=>navigate('/Analytics')} className="opt">Show Analytics</div>
            <div className="opt">Export data</div>
        </div>
       

        <div onClick={closeSidebar} className="close-search"><AiOutlineClose/></div>
    </div>
  )
}

