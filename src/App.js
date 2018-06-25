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
			firstFetch: true
		};

		this.removeCarouselItem = this.removeCarouselItem.bind(this);
	}

	static getDerivedStateFromProps(props, state) {
		// console.log('getDerivedStateFromProps: ', props);
		// console.warn('getDerivedStateFromProps state: ', state);
		return null
	}
	//
	getSnapshotBeforeUpdate(prevProps, prevState) {
		// console.log('getSnapshotBeforeUpdate: prevProps', prevProps);
		// console.log('getSnapshotBeforeUpdate prevState: ', prevState);
		return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		//TODO: this is where I should trigger off the animation for the shift of the collection
		// console.log('componentDidUpdate prevProps: ', prevProps);
		console.warn('componentDidUpdate prevState: ', prevState);
		// console.log('componentDidUpdate snapshot: ', snapshot);
	}

	handleLeftNav() {
		this.setState((prevState) => ({xActiveItem: prevState.xActiveItem - 1}));
	}

	handleRightNav() {
		//when I get to the indexForNextFetch i need to start removing
		//TODO: ANOTHER CONDITION TO FETCH IS WHEN FUTURE CAROUSEL ITEM.LENGTH IS LESS 3 ITEMS

		if(this.state.futureCarouselItems.length <= 0) {
			this.setState(prevState => ({xActiveItem: prevState.xActiveItem++, futureCarouselItems: [...collection.pageTwo]}));
		}
			this.setState((prevState) => {
				if (this.state.xActiveItem === prevState.lastVisibleIndex) {
					const newVisibleItems = [...prevState.visibleCarouselItems];
					let removedVisibleItem = newVisibleItems.splice(0, 1);

					const newFutureCarouselItems = [...prevState.futureCarouselItems];
					let removedFutureCarouselItems = newFutureCarouselItems.splice(0, 1);
					newVisibleItems.concat(removedFutureCarouselItems);
					// console.log('newVisItems: ', newVisibleItems);
					//TODO: WHEN removing and adding it skips two items in the array because the indexes are off.
					return {
						visibleCarouselItems: [...newVisibleItems, ...removedFutureCarouselItems],
						futureCarouselItems: [...newFutureCarouselItems],
						previousCarouselItems: [...prevState.previousCarouselItems, ...removedVisibleItem],
						xActiveItem: prevState.xActiveItem--,
					}
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
		console.count('App renders');
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
