
import { Vortex } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => (
  <div className={css.Loader}>
  <Vortex
  visible={true}
  height="250"
  width="250"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>
  </div>
);