import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
    return (
        <div>
            <div className='content'>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
};
