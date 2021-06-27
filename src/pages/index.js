import Button from '@material-ui/core/Button';
import Link from 'next/link';
import SimpleModal from '../components/Modal';
import TableComponent from '../components/TableComponent';
import { ValueInsertedProvider } from '../contexts/Values';

const Home = () => {
  return (
    <ValueInsertedProvider>
      <TableComponent />
      <SimpleModal />
    </ValueInsertedProvider>
  )
}

export default Home;