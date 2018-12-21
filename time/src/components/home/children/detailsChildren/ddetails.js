import React,{Component} from "react";

export default class DDetails extends Component{
	render(){
		let {thisList} = this.props
		return(
			<div id="movie_details">
				<div>
					<img src={thisList.img}/>
				</div>
				<div>
					<header>
						<h2>{thisList.titleCn}</h2>
						<p>{thisList.titleEn}</p>
						<span>{thisList.ratingFinal}</span>
					</header>
					<section>
						<p>{thisList.length}分钟</p>
						<p>{thisList.type}</p>
						<p>{thisList.rYear} 年 {thisList.rMonth} 月 {thisList.rDay} 日 中国上映</p>
					</section>
					<footer>
						<div>
							我想看
						</div>
						<div>
							我要评分
						</div>
					</footer>
				</div>
			</div>
		)
	}
}
