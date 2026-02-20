import Navbar from './Navbar';
import Footer from './Footer';
import Contact from '../contact/Contact';

const Layout = ({ children }) => {
    return (
        <div className='min-h-screen bg-base-100'>
            <Navbar />
            <main className='max-w-7xl mx-auto px-4 py-6 mb-16'>
                {children}
            </main>
            <Contact />
            <Footer />
        </div>
    )
}

export default Layout;