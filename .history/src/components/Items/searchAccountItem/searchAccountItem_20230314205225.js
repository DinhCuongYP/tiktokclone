import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './SearchAccountItem.module.scss';
const cx = classNames.bind(styles);

function SearchAccountItem({ data }) {
    return (
        <Link>
            <Image src={data.avatar} alt={data.full_name} />
        </Link>
    );
}

export default SearchAccountItem;
