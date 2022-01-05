import Loader from 'react-loader-spinner';
import { colors } from 'styles/theme';
const LoadingSpinner = () => {
  return <Loader type="Oval" color={colors.red} height={50} width={50} />;
};

export default LoadingSpinner;
