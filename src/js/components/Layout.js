import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "Welcome",
	};
	}
	render(){
		//changes the value of title within state after 1 second
		setTimeout(() => {
			this.setState({
				title: "Welcome Will",
			});
		}, 4000);

		return(
				<div>
					<Header title={this.state.title}/>
					<Header title={"Other Title"}/>

					<Footer />
				</div>
			  );
	}
}
