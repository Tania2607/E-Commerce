import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist, moveToCartFromWishlist } from '../features/cartWishlist/cartWishlistSlice.js';
import '../pages/Shared.css';
import Navbar from '../components/Navbar.jsx';

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector(state => state.cartWishlist);

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleMoveToCart = (item) => {
    dispatch(moveToCartFromWishlist(item));
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="page-header">
        <h1 className="page-title">My Wishlist</h1>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="empty-state">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAACaCAMAAAD8SyGRAAABzlBMVEX////f//7m5ub/qgH//v/g/v7f//3///3k///9////rADg//3f/v97e3vk5OT9rQD09PRoZ2pqamrd3NyGlZXv7u73/v61zc+rnXjr25+VlZXHysnr/v1+i4u7vsD/7q3x/v39sQD+/PT/576BfnZ0dGqAhHulpaX+9OX+5LX9zHL90YDilgD93aXypBT96sSytrj9wVH/+LReYFn///H/8c2flHTrx6z+4cPOzs7D3eFyfH5eXl7W8fCqvL1TUlKdsK6SoqLG5+izv8RjdGeOgGGbdjqwfSy3gSCTdUFrl2uW0IyU35N0omunqKyGcU/HiRA/RD2KwYd9t3XKjyk9O0CddCixi3Sgf295fFJub1FPV1//uDT9yGJZUkuifldiXkqPhXD+15PGuov9u0DZypb98Ni+sogyQU2ackznqkK7iS7bmR6/gRRFPT/2w5tiS0h8aWDj0b/F2evf8P/j0sXLo4ZZO2Rfb5pQY4IbAyOLc3Z7fZyjjH630Oju2cWXsMmooJV8m7yam69wiJNecYi7k27K6v9ujLiSkZxLPjKGp9JRV4SnlJV8VWnUroNlgp9BXXOJaFTKopKPqdWr0vnBlnRzLQCHW2XvuJr+z24lAAAVZUlEQVR4nO1di0MT15o/Q848TmYgPMygOMAQQILIwwsEA6Kl91btY9HuWuvdym1RSHu3tl2rt7vdqrXU1rrt3nb72tv/dr/vOzNhkswkGaHGyPzEhEkmh8wv3/t854SxBAkSJEiQIEGCBAkSJEiQIEGCBAkSJEiQIMHTha7rrX4L7Q/O4UfnrX4b7Qkh70AMbdtxDMNwHFdwXXB8SrT2vbUZhNB1YTuGqSmKpsGNoimuAPCEx5gQrqFYlqUopqKqCvyqKqarC5ZIZAwIxh2gEH40VVFNzdQ0U7UUSzNYIpFNgqNbEY6K2lwFYNRSRUJkUwCedOaawBr8C4OZ+O/mwLltgFKHs4hwEpFsCsIFWQSQh6nUbCmRitPqt/jMgzNB4qigfazh0Yel2YnnrgsIbXQXfLMUyDoweBKV1wNE4I4S4WIqoLlJEFQXoNZqQyZV1HyRBEGREKDWPlUNpdJOVDsKunBRaU3IrdVGNlJTjSSYjAJ3NBn2qIbaSL81VRNJfZJNdIZiZWVF3q70h8SQ1XbSTYicmOiuj47O/oY8Kk5SMj/d8IyuQaMuj6DalpI4m96GZ2QHjYZuG7ObA44gkdm+MjoCjzaSSCxp2Do74J47SOTRgTKGdh+tIFKVmXeNkXQPfCTZlGqXNVhRDayT1zLpcHHgJLIyn4tBpKYpxuqZ5RqDiamPcSCzbV3XOfcEqJfxBujwiQS6zvRM9L4YwqRisgOSbvPyFDQXtuu6juO4Nh6eDY/HA+iVRAJbxlon1wfOGCGJjnpAJJKjwAgQL9t1VIXmpdHgOTbrzXbVR0cRiMQpWMN4YYDN9a6sKiG5t3YweCQILlxD83wuTR6ARrq92Y4G6BukdNtSl3v4wOCqoWqKVuO5gcgD4mxAIB2DCNRInuAGf1F7miFSoTmbno6BNWd11TBCUkbtgBTJuY6TWIqKohRgAWhtSiJXX1x+cfWFieLKH1f+9KeVM6uhRIYAMnDBdAF3+5GK01D7MM5e3oKgSSy1dvqlIZHZrrn5l86dv3D+5dPZs72vvPraa6/+09nVECJrLxGCA4GdVzrbBx5pGKG3VOy5P/kSkjI3Uu2u9YuXZtLpdCZzYm7i9X9+DfEvK7V+O7QiKfDC0cvtR20IxpD9by2ETUaxlsWGRGaPvnQJWEylUpfTL3e98QrS+OornSGTD2FEcpHLT05Pz+b3QyPhw8gDcnse6An/PN644HFDWnd2iewbCqIPGZQ8zl1JIYupVPry+YH1N6++/Oc//+tb/SCPYV67AsicPn1NvvjkqGCemqOZA7GCY462E3y9TloLKQLJrYiUOZEbgbE2fl++okCu1NVCLryCyK6jQXR1ZIudnUPZjuz6hbTkEci4dPEvV9+Go/SV/lCvXX39usidTGV8TAkgDOQSMiqynIKap3U8kJxjXqTTUYT06nruWiaTOv67cxYBwZ26Ey4hqp3tmHhnKNvbl5274NOITGZmZugwfWUZIqjqccyaPyw2kEd4ARKZmkbyBEkkk5ShQ8d0CGUQJZJRO3WkZ4YPBohMt4pIDvJYtypbS2T2aO/h7S/Y3FDfuQCPyCCqOT50cZUqQBXjVhOpi0lkcOT64uwG3KdHcsiaEDmALqjHDX+lB4Sn6Dl6JMLFw/ktk0j4xLnbYFK6wkYexZ/Oze13DxeKncXNmUoifT7TM5h8VyQ3WP3Z/bvYM6RLgRzF7ujj4PNTk+jBF4+DnctsXUfuFkeuXdvIb6RSI1M6ZrCTWyi+Ixul8IgUrMDJ9Ehq+mmRV/XnRV21hv+GRyQaR7wZmL+xXSjc2P7L0NClUB6RygvLqlk1lhMgkpjIg/xktki48mAXMhsgj9PILUYB1/JCjMLBtWvwTDp1ErR5KgW/YJiVLoVfii6m0pnUqafAWi0Ec6xIN6NgK7Nmk2p76p3t6yxsH948fKTQ2Zd9KYJGxDFDUypHrujtQ7dcQtN4nOxdbgTo2ZLUZa5tocncYmx21xWBuC4AhSOzixtpfFHoxejiOrxi8WnwVgu7TjsezRo4LJjZ9M0XbhQK2++efquYPXohSiBBJM+vVof3FRPbWLJDItOSkxwJp8htgcwdF2IxA5I1KmndWEDJTZ8UiyifCzxXyufCC5vgjaZBssPF9XeGYEZtmUZCw+KFpjg6CzibbM/2u5vvbo8PdBQ7e+fDLaQk8sQZIxCUY/3D9lQb+RQO2EOPSIh6fInMp1Bv4akN0O4phkSmFgRDpzQiBKh8JjWyNTWdEziPpss8HQup/sgCZbgVAbmAjKbalAXFET2ER6QsPA69UfhD4XBvMYu6/nZqZiaSSNDtCnlUy8UfuHyIW+EoD+YPJA1tW55kj3jIgLyJ63B/ks2iCwKeFpFBIWYzaElhaHRQnEbCRTyCeUTikKnUtVbk2oK7dewjGEgHrx5Vu28OMdT5+oeF+XUpoRD7LJ09Ee623z+RvohFuMBYu9GPDmm9gknKSbR+6ILRtqUhkCwhkXmQyCkgbINUGwgkflPwaH4aXkF2M8d1GWjKO1wrJTF6arYlRQu6pjo8kn8lGynnsovgvLs8TT96+eZb711O+xJYwWj6SvpKsP6jWmgjvE/PwBAT6UMXnR6ZzOWvg2gigzlU9kmgZYQCdCLyOhPHMdxEznILIj+KseIs28iMjFzLsSm4GymxPNxlppkOeft0S5wNEFltIjWvCAQW0qWsV0QULSD4OX/e4+1ydSA0c+6vlQGQRb4GbJuQw1N+spWWmQ0lOFMg/VP42/QkZI5pUPFZUuWTWzKDvA5CC2QLlMo83oLrASLhzBKZBmBePwljXW8VkSHTVHStqq1T5GyG1yOzczfTvhz+28TrVdYyPfPhcmX+jqPRcHJ8TE/ASnoBDtjADZ1SE4oa0SZOMlLpNLoYYAnISqPcbo3A8xtAJxyhRKbIOkgimX6SRLgVcLWavEYeay5VY4QwIspo2SEgEiUSHOyF996pNpOZC2uByoVqebUf7vdKCyqC5o6DQAIzqcx1IfPDDZljjkCaQ147fRyPM7NwOIu1HeA1tQH+CGVvJAcinJZEApDIVkkkCIhVW4cErXZkxQou3IqqkA9dTqffn4HrgvubNZFQ+v3eflXbbYr2EsSyTRZUhBAsPzo9NTU9C9TIcEaUJvGY6hLSySxOT01CwIOpNp57fbKE/nlxdHQUXlWCu9Ecz+FdiemzdNcCGrnuamUh9MwleFvHhpBCcHjvpmVFFXaL54G8czdPXLlZ5WkkkedWV8CrmP6H5DAsMrrY3+cRickxQ+qE8Ipm6H1lXQ+LkELGkfIYnue0Wg/PlqcKOpuaQqS0yxe3pAsBiOS2JovjPpkaSiM8gWVU29SiZxG7XkYCL10OYRGxafQ4qmb65sLGeqJtltMokshISMfkhT3eew0+S6XK3RpQINRvDfANcNvZ9a6a4VBzBXULMFs2iUcQmR2bkRYyhEV4bM05DRLp0WYpWFTUAxM5TcgNhD8wTttMhuuyucKRHSrcC3PR07hS6SOJBLcdKovE5AfLaq+hlgXdwZTODpiRxkRyUTo+NXW81dOrzUEns4MSCEpOHz3n0uZw4WiWbBOImvzCsm5kHe2iurriSLuLpQ9ItHVuWH6FRAtO4EToOKekvL16ClCTdS4LALp8wFX9LsdIIrMD4QliStYs+te8sgVyx3HVYrBvskwQ0VXnnbUTpET4Fhvco47NAr7ljJ6O7Xu5jkAaZ/op26YPxMEcKWAhNfynaV6rltFeYhcBiioopKDLwXZHqZK+fYsmMrv+QTiTmQv9Rv+Hh6SJpBIafEB2MFJVaL2Y3ENEJj3tC+INfQvH4p5OrfKyp8+iK/R7gOo0CGSPhSp3+sQhx+j56N/9lYoaRONcGMEKsv8U9q3Zre0y2St0munkgrY7UlWTqPND8mCuU6/TousdSmmq5hJPHIMBl996QVYkUSB1GUtVwMvoQR7bWyBRCiGERDNlyevCK9NMz0E0R2TH2MUTmWq9vnnMgE/EcAwvrVEVDKec6jW0FppQy8Rp1zbzKRWAgFEYmmZJ0+/rW3BuoDkihzcvBEJyCM/T598yZF+lNzAk7mg2apYrkoTiwjrevjRSx4Lfp6KG9Sk3qdpAZGH94iWsdXk0fvDO9jgYCmU39lYVnJbZnT0PZKNYgKfsqtWEPCnQuEO8HbKw6AmIPNqxPn7uEqaLJy6dG+8fHx6v/Fw0FfdHMy3Ns5gk7li7wApTmwXc1eC02Lp+p0qzRG6/8cbm+Py4xNnN8QISWTEyBJEcZ30t1e9LB6ts2LJLqm7t4tkH8NjM/glNEXnr6mbhyB8IRzbhJoxIhlMa0h7jGhLcERHfRlvLI14CBMdWgxXWuzw2IPLwrY/efGN+/vQ8/j87P785PF71CbngT9BHgynRTMNwbVk0biZ6RKH9+DZjH9/xjnFlRP4204s2+1tfEUbI4U3RLuIJepbhkxjZsdLEhOxIoNZKf76WZTmegPjbxMR9aaGpJ7NDeGc0Dw6GybAa7p7QLJGFnquf9EIArhqGsbriGONhEilMB3fmtH19bl4WdbbwH2LxP4MPlT61S//1SP+saw4SpvxdGOnenSEk8vP78j+WMr9zSw9CCpRf2Kd25Li37gQ/yYUv41DovzdZFm8WjYgszg0OeSu/1JVVtYZI1ZGBooxySBrjeGmdffTtj9b3D3vvXHWWHiw9/NJmn91Z+uLb0g/5Lz9fedzRs/aVc2/13p17A3/861e32dKD2buDrv6jBS/9+tHiN7NfPS599bh7bPPBqa8K3+T/+8vPd76+DyPonwH1nzwcG+i8f+ruvZ2P31sfu5O/G29NuS7MJtW6KSKPZrO4zgYnuIy1/hAiNe41iLL4jfJUCb/y7cJ3bHTnHhL5Czz4/f3/Wbi79KC0s/TQBon85DYQ2dVzhy2BNC49+H7HZrm/u/A3icgdNvsN+/6Huf8FUbxlb4JELv5QAqn8cfCx+9OjyZ9LX87+zK72PYZX4utjgKOFlJfYJJHdkTxmKfyhBUuGpTjO8hqpduXIqsN9HYtLpOwe//6Xxe/Y7M4995Qk8lTvDnuz5w7QkR/rAyKXUSL1L+5LIlnp7wZ7+xFjQSJ/0TkQ+aM7hqr92bFHTP/MZeynR9uSyHtAZH7ssRMnguCC1WuvqOVROdsbjfnhQp/cikFVlh+urK04NXEkTe1KO/6ETvrrX9iva7ceffLwpW+XfkZ6/+8+W/rOLu18vP4Y1PFXIBJECogk1f5p7bHLFv7xwr0HSz8Uvhn9hsFPfmX9IRLpvA2qzZY+hbz0x7WJ20Tk3dlPv9hZ+McD8etOrFkf8JZas5GPZLLeeu0xn0gwkOO//fbJ2dUaIqk3EEJyzoRXj48HmrVl3TbTu7lAI0HlFp2aobs5tZnjkvrubjhBPojpuw7HrBtn96g+CA/qaGHgnpMJwBNwPHhD2z934yHIZ6wylNDtOK4GCKomsjgx5F8iElkEG7myCuj97aOPrp6pUW1ZDTFozTKX2h03Bkc2cBaJOPWWNXBaQuLvHE/TimUDQlPywqv1Y1mB+afQL+u2NwMpmz9Kt+nX3FzM6SHuNpcalnnoqXz9wEBxoFNen87Hhm9sljF+69b4ZqFWtZFX7N7VTJP4LF9SkzRSYOgHnnJBue7PxnLpj7zZXRmgMtmuL5jfr8boUV3qg2QPC9m6v4LcX4ESi0hetwMtnMigxHchiQNFeYVibHj4yC62t48cGa5xNv44lqVZ5OUoKG/fSkUZjbaWqWagksjiHN5M4K+gbJDZdA4MdJ4+NEiAu9qAPCiYeEtsGk7b7wPE4wSRtUT2DcCNtJKgcWAju9DZ4JcKSIR47SCP3g2W4412r43vjUjWOdEx1OvlqLzstTW5k7sSkiIGULGzgEr1yNZwsB/g8VQbvXaFOeNzAxPd3u9iN/wxaXrVVGsD8siBLcVo441OBY9svw+/XqPOJnPiGKl28RDkNRZCbZ5IhWZlbXDBbbqxEo/ntRXjTGdfJEAih/qKPS8qHpFKPCKJyXZVb92JFZBrqtF/KBLjw4XBQ2urZVejhuTa9Zk0niTbeRbA9UarOKuIpP18ogCqfaa/AvORXjucSs1tT8XGbopG+7hWXmnUJCNVho8Nbx+uxI16XjtkDFDudmVShG24VZfJyOfMYxWZDSGOahOVTntObEPGX3/HgJBLjXxKPTZ8eMXLajzEspGEdm1GE/VXxMYCEFlYrrSadQPyMLTz7rsxs+1omEikGljiFdNr00sUuz2Z5EJ36y52j0+kakqgh49PZLtuY4wFOlWJVZOM5IBUO7BSLmZA7qFt3Xbc2m4jIoMtzXWqP1FjqO2p2Qhd3ycrKZ2NWuNsYg1iti+RTNjN9/40IvKFPWU2Cq6ua2MmcUq2yW60BkQeCcls4g3Szj3kAvsj45XTIokMyWyaF0kVtx/hbVwoF7gCfT8k8sj8YCVOH4lFpGra7f0F0rj0NWQD+/hEBqZrEM4hILLpgeFM9wk6gp4l4OLXves2EmkEW7JMA4ls+vUWfj1dq6nYM3RbrfM9pc0RgUQGjk2FiLSaVm63fedsysCWD8Pam3qTRAb3AFGJSLWp0ErF7qrngEiEcLxL2hORQW6kajckUqW9CtxWX/9+QMiGGqeJq46Gcexd2inSP0bVvtEb+j0sFaAvkcblIc/R9zfQVzor3lb4MRnV1OXBFytepSqrg/318k9V/hkL1Jq3cSAeAtoQP3qr4vow8VuAqrohDbVORcRfDKY6ft/dcwOBC2S1J7KT9G0EFYmmXJ9cL/eUGxM4th67SfJZB8dF73bkNpL1mTS9dZvlB2rW1oYwqdBOLs+ZPErgRiu4lavl94rFtpbNsC5V3nBsztu8DS0auJul7XgCo9afgo2FXVk1cYW2icL4nISOYZC92PitQPKqzf2WSBxNwyWIcue6584+7kK2yKPfMeT+fXsvsuEGILs2wnBt2qxJ7kbS6sv9/UEqXv5KOXlXsbFAvaZm+QmUD8B7Ux1IJRJ5y7+y5ylCeOsthIuCSRFiPCU3FX/PJNVXZ9umr7fje1iw1I4gA0Z7fOH2K2awHIE32JRLJO1CKd/jCZZXi9RoYY1Na5qpb0+u6Gz15T1VePVBjkuqBG4/hxP/1N2nYDNpqCRaFJ1D+KRBruOtJ+blwdq/4rgnlIM9gXzifn6GYZjUKq7siiJ1WBgGbfaH/MnYZr++DO05g9wLEXfCQCFF2ESZD3/DGd7mG1T8/ijbNtzNX6+A97h3hq/E3Nu1MEEEQlpCK/g64NYwQYIECRIkSJAgQYIECRIkSJAgQYIECRI8I/h//7VxD5rcK1sAAAAASUVORK5CYII=" alt="Empty Wishlist" />
          <h2>Your Wishlist is Empty</h2>
          <p>Add some items to your wishlist to save them for later.</p>
        </div>
      ) : (
        <div className="product-list">
          {wishlistItems.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-info">
                <div>
                  <h3>{item.title}</h3>
                  <p className="price">{item.price}</p>
                </div>
                <div className="product-actions">
                  <button 
                    className="btn btn-secondary"
                    onClick={() => handleMoveToCart(item)}
                  >
                    Move to Cart
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
