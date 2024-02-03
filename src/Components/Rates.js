import React from 'react';

const Rates = ({ currency, rate }) => {
  return (
    
    <div class="grid items-center">
      <h3 className='text-xl w-full bg-cyan-50 my-[5px] px-[5px] rounded-[5px] font-bold text-gray-600'>{`USD to ${currency}`}</h3>
      <div className='grid grid-cols-3 justify-center items-center'>
      <div className='flex flex-row gap-[24px] items-center'> <div className='text-[24px] font-bold text-gray-500'>1</div> <div className='font-normal'>USD</div> </div>
      <div>=</div>
      <div className='grid grid-flow-col items-center justify-center gap-[24px] justify-self-end'> <div className='text-[24px] font-bold text-gray-500'>{`${rate}`} </div> <div>{`${currency}`}</div> </div>
      </div>
    </div>
  );
}

export default Rates;