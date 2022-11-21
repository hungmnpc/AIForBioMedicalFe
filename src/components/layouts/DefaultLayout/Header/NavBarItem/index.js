import classNames from "classnames/bind";
import style from './NavBarItem.module.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function NavBarItem({data}) {

    console.log(data)

    return ( <div className={cx('wrapper')}>
        <Link to={data.to} className={cx('container')}>
            <span>{data.title}</span>
            {
                data.sub && (<FontAwesomeIcon icon={faCaretDown} />)
            }
        </Link>
        {
            data.sub && (<div className={cx('sub')}>
                {
                    data.sub.map((subItem, index) => (
                        <SubItem data={subItem} key={index} />
                    ))
                }
            </div>)
        }
    </div> );


}

function SubItem({data}) {
    return (
        <div className={cx('sub-item')}>
            <Link to={data.to}><span>{data.title}</span></Link> 
        </div>
    )
}

export default NavBarItem;