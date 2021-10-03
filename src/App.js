import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageMasonry from './components/masonry';
import Pagination from './components/pagination';
import Header from './components/header';


class App extends Component {
  state = {
    images: [],
    isLoading: false,
    currentPage: 1,
    search: '',
    imagesPerPage: 50,
    baseUrl: 'https://api.unsplash.com/photos?client_id=XC7xqCqltdJSHSoICF8TmfhLgitecscq706E5CwMjEk',
    searchUrl: 'https://api.unsplash.com/search/photos?client_id=XC7xqCqltdJSHSoICF8TmfhLgitecscq706E5CwMjEk'
  }
  handlePaginate = (p) => {
    this.setState({ currentPage: p, isLoading: false })
    let url = '';
    if (this.state.search !== '') {
      url = this.state.searchUrl + '&page=' + p + '&per_page=' + 30 + '&query=' + this.state.search;
      fetch(url).then(response => response.json())
        .then(data => this.setState({ images: data.results, isLoading: true }))
    } else {
      url = this.state.baseUrl + '&page=' + p + '&per_page=' + 30;
      fetch(url).then(response => response.json())
        .then(data => this.setState({ images: data, isLoading: true }))
    }
    console.log(url)
  }
  componentDidMount() {
    const url = this.state.baseUrl + '&page=' + this.state.currentPage + '&per_page=' + this.state.imagesPerPage
    fetch(url).then(response => response.json())
      .then(data => this.setState({ images: data, isLoading: true }))
    console.log(this.state.images)
  }


  handleChange = (e) => {
    this.setState({ imagesPerPage: e.target.value, isLoading: false })
    let url = '';
    if (this.state.search !== '') {
      url = this.state.searchUrl + '&page=' + this.state.currentPage + '&per_page=' + e.target.value + '&query=' + this.state.search
      fetch(url).then(response => response.json())
        .then(data => this.setState({ images: data.results, isLoading: true }))
    } else {
      url = this.state.baseUrl + '&page=' + this.state.currentPage + '&per_page=' + e.target.value
      fetch(url).then(response => response.json())
        .then(data => this.setState({ images: data, isLoading: true }))
    }
    console.log(url)


  }

  handleSearch = () => {
    const url = this.state.searchUrl + '&page=' + this.state.currentPage + '&per_page=' + this.state.imagesPerPage + '&query=' + this.state.search
    fetch(url).then(response => response.json())
      .then(data => this.setState({ images: data.results, isLoading: true }))
    console.log(url)
  }
  onChangeSearch = (e) => {
    this.setState({ search: e.target.value })
    console.log(e.target.value)
  }
  render() {
    console.log(this.state.images)
    return <React.Fragment>
      <Header onchangeItem={this.handleChange} onChangeSearch={this.onChangeSearch} handleSearch={this.handleSearch} />
      {this.state.isLoading ?
        this.state.images.length !== 0 ? <ImageMasonry images={this.state.images} /> : <p className="noImageAvailable">Sorry! No image available accoring to your search query.</p>
        : <p>Loading...</p>}
      <Pagination handlePaginate={this.handlePaginate} currentPage={this.state.currentPage} />
    </React.Fragment >
  }
}
export default App;
