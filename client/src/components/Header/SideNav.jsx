
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// eslint-disable-next-line react/prop-types
const SideNav = ({title,firstItem,secondItem,thirdItem}) => {
  return (
    <div className='py-3 border-b-[1px] border-b-gray-300'>
      <h3 className="px-6 mb-1 font-titleFont font-semibold text-lg">
        {title}
      </h3>
      <ul className='text-sm'>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {firstItem}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {secondItem}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {thirdItem}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
