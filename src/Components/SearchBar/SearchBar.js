
import React from 'react';
import '../SearchBar/SearchBar.css';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search(term) {
        return this.props.onSearch(term);
    }

    handleTermChange(event) {
        this.search(event.target.value);
    }

    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
                <a>SEARCH</a>
            </div>
        )
    }
}

export default SearchBar;
