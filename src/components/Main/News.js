import React from "react"
import Logo from "../../assets/icon.png";
import Avatar from "../../assets/avatar-1.png";


export default class News extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {authorName, section, createdDate, title, abstract, howLong, visualImg} = this.props.content;
        return(
        <div className="news">  
            <div className="news-content">
                <div className="news-info-top">
                    <img alt="Avatar" src={Avatar}/>
                    <p className="news-info-top-author-name"> {authorName}</p>
                    <p className="news-info-gray-text">&nbsp; in</p>
                    <p className="news-info-top-section-name"> &nbsp; {section}</p>
                    <p className="news-info-gray-text">&nbsp; ·</p>
                    <p className="news-info-date">&nbsp; {createdDate}</p>
                </div>

                <button className="news-title">{title}</button>
                <p className="news-abstract">{abstract}</p>

                <div className="news-info-buttom">
                    <div className="news-info-buttom-content">
                        <p className="news-info-time">{howLong}</p>
                        <p className="news-info-gray-text">&nbsp; ·</p>
                        <p className="news-info-for-you">&nbsp; Selected for you</p>
                    </div>

                    <div className="news-icons">
                        <img alt="icon" src={Logo}/>
                        <img alt="icon" src={Logo}/>
                        <img alt="icon" src={Logo}/>
                    </div>
                </div>
            </div>
            <img className="visual-photo" alt="visual photo" src={visualImg}/>
        </div>
    )}
}