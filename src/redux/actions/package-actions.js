import axios from 'axios';
import { config } from '../../config';

const packages_fetched = (packages) => ({
    type: 'PACKAGES_FETCHED',
    packages
});

export const fetchPackages = () => (dispatch) => (
    axios.get(`${config.baseUrl}/packages`)
        .then(packageResponse => dispatch(packages_fetched(packageResponse)))
        .catch(console.log)
);