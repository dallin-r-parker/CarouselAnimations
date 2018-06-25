import React, {Component} from "react";
// import BlackBoxAnimated from "./BlackBoxAnimated";
import Carousel from "./Carousel";
import styled from "styled-components";
// import CSSanimation from "./CSSanimations";
import {collection} from "./collection";

class App extends Component {
	constructor() {
		super();

		this.state = {
			xActiveItem: 0,
			yActiveItem: 0,
			collection,
			previousCarouselItems: [],
			visibleCarouselItems: collection.pageOne,
			futureCarouselItems: [],
			totalCarouselItems: collection.length,
			lastVisibleIndex: 3,
			indexForNextFetch: 2
		};

		this.removeCarouselItem = this.removeCarouselItem.bind(this);
	}

	// static getDerivedStateFromProps(props, state) {
	// 	console.log('getDerivedStateFromProps: ', props);
	// 	console.log('getDerivedStateFromProps state: ', state);
	// 	return null
	// }
	//
	// getSnapshotBeforeUpdate(prevProps, prevState) {
	// 	// console.log('getSnapshotBeforeUpdate: prevProps', prevProps);
	// 	// console.log('getSnapshotBeforeUpdate prevState: ', prevState);
	// 	// return null
	// }

	componentDidUpdate(prevProps, prevState, snapshot) {
		// console.log('componentDidUpdate prevProps: ', prevProps);
		// console.warn('componentDidUpdate prevState: ', this.state);
		// console.log('componentDidUpdate snapshot: ', snapshot);
	}

	handleLeftNav() {
		this.setState((prevState) => ({xActiveItem: prevState.xActiveItem - 1}));
	}

	handleRightNav() {
		//when I get to the indexForNextFetch i need to start removing
		this.setState((prevState) => {
			if (this.state.xActiveItem === prevState.indexForNextFetch) {
				return {xActiveItem: prevState.xActiveItem + 1, futureCarouselItems: collection.pageTwo}
			} else {
				return {xActiveItem: prevState.xActiveItem + 1}
			}
		});

	}

	removeCarouselItem(id) {

	}

	addCarouselItem(id) {

	}

	componentDidCatch() {
		//TODO: LOOK INTO ERROR BOUNDARIES
	}

	// handleUpNav() {
	//   const { yActiveItem } = this.state;
	//   this.setState({ yActiveItem: yActiveItem - 1 })
	// }

	// handleDownNav() {
	//   const { yActiveItem } = this.state;
	//   this.setState({ yActiveItem: yActiveItem + 1 })
	// }

	// <BtnNav onClick={this.handleUpNav.bind(this)}>UP</BtnNav>
	// <BtnNav onClick={this.handleDownNav.bind(this)}>DOWN</BtnNav>

	render() {
		// console.count('App renders');
		return (
				<Carousels>
					<CollectionGenre>
						<Carousel
								collection={this.state.visibleCarouselItems}
								totalItems={this.state.totalCarouselItems}
								xActiveItem={this.state.xActiveItem}
								yActiveItem={this.state.yActiveItem}
								genre={'ADVENTURE'}/>
						<BtnWrap>
							<BtnNav onClick={this.handleLeftNav.bind(this)}>LEFT</BtnNav>
							<BtnNav onClick={this.handleRightNav.bind(this)}>RIGHT</BtnNav>
						</BtnWrap>
					</CollectionGenre>
				</Carousels>
		);
	}
}

export default App;

const Carousels = styled.div`
  color: #efefef;
  font-family: Arial;
  background: lightgray;

`;

const BtnWrap = styled.div`
  display: flex;
  margin: 0 auto;
  width: 20%;
`

const BtnNav = styled.button`
  margin-top: 5px;
  width: 130px;
`

const CollectionGenre = styled.h3``;
