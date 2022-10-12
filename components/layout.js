import { Header } from './header';
import { Footer } from './footer';

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
