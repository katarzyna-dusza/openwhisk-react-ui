import React from 'react';
import List from './components/List.jsx';
import EmptyPage from './components/EmptyPage.jsx';
import CreateButton from './components/CreateButton.jsx';
import Pagination from 'react-js-pagination';

const ITEMS_PER_PAGE = 6;
const MAX_PAGINATION_RANGE = 5;

export default class ResourceList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }

    paginateData() {
        const pageIndex = this.state.activePage - 1;
        const start = pageIndex * ITEMS_PER_PAGE;
        const end = pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE;

        return this.props.data.entryColumns.slice(start, end);
    };

    displayPagination() {
        if (this.props.data.entryColumns.length > ITEMS_PER_PAGE) {
            return (
                <Pagination
                    activePage={this.state.activePage}
                    totalItemsCount={this.props.data.entryColumns.length}
                    itemsCountPerPage={ITEMS_PER_PAGE}
                    pageRangeDisplayed={MAX_PAGINATION_RANGE}
                    onChange={this.handleChange}
                />
            )
        }
    }

    render() {
        if (0 === this.props.data.entryColumns.length) {
            return (
                <EmptyPage title={this.props.title} resource={this.props.resource} />
            )
        }

        return (
            <div className='resource resource--with-nav col-12'>
                <div className='resource__title'>
                    {this.props.title}
                    <CreateButton history={this.props.history} link={this.props.linkTo} />
                </div>
                <div className='resource__content'>
                    <div className='info'>{this.props.info}</div>
                    <List headerColumns={this.props.data.headerColumns} entryColumns={this.paginateData()} />
                    {this.displayPagination()}
                </div>
            </div>
        )
    }
}