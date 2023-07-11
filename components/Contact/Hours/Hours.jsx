const Hours = () => {
  return (
    <ul className="text-slate-600 list-none w-full sm:w-1/3 flex flex-col gap-1">
      <p className="text-xl text-slate-950 mb-5">BUSINESS HOURS</p>
      <li className="flex w-full justify-between">
        <span>Mon:</span> CLOSED
      </li>
      <li className="flex w-full justify-between">
        <span>Tue:</span> 2:00 - 9:00 PM
      </li>
      <li className="flex w-full justify-between">
        <span>Wed:</span> 2:00 - 9:00 PM
      </li>
      <li className="flex w-full justify-between">
        <span>Thu:</span> 2:00 - 9:00 PM
      </li>
      <li className="flex w-full justify-between">
        <span>Fri:</span> 2:00 - 9:00 PM
      </li>
      <li className="flex w-full justify-between">
        <span>Sat:</span> 2:00 - 9:00 PM
      </li>
      <li className="flex w-full justify-between">
        <span>Sun:</span> CLOSED
      </li>
    </ul>
  );
};

export default Hours;
